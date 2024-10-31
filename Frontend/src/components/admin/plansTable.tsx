import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { setModal } from "../../redux/slices/adminSlice";
import {
  changePlanStatus,
  createPlan,
  getPlans,
  searchPlans,
} from "../../services/adminService";
import { RootState } from "../../redux/store/store";
import toast from "react-hot-toast";
import { resetAdmin } from "../../redux/slices/adminSlice";
import { logout } from "../../services/adminAuth";
import { FaPause, FaPlay, FaSearch } from "react-icons/fa";
import SearchComponent from "./Search";
import { planValidate } from "../../utils/userValidator";
import { IPlan } from "../../@types/plan";

interface Error {
  price?: string;
  discount?: string;
}

const PlansTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [itemsPerPage] = useState(5);
  const [plans, setPlans] = useState<IPlan[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const { accessToken, modal } = useSelector((state: RootState) => state.admin);
  const [error, setError] = useState<Error>({});
  const dispatch = useDispatch();

  // Keeping all the existing handler functions unchanged
  const handlePlanStatus = async (id: string, action: string) => {
    await changePlanStatus(id, action);
    fetchPlanData(accessToken, currentPage, itemsPerPage);
  };

  const handleDeletePlan = async (id: string) => {
    await changePlanStatus(id, "delete");
  };

  const handleCreatePlan = async () => {
    try {
      const error = planValidate(price, discount);
      if (error) {
        return;
      }

      const response = await createPlan(accessToken, {
        price,
        discount,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        fetchPlanData(accessToken, currentPage, itemsPerPage);
        dispatch(setModal(false));
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  const fetchPlanData = async (
    accessToken: string,
    page: number,
    itemsPerPage: number
  ) => {
    const response = await getPlans(accessToken, page, itemsPerPage);

    if (response.status === 200) {
      setPlans(response.data.data.allPlans);
      setTotalPages(response.data.data.totalPages);
    } else if (response.status === 401) {
      await logout();
      toast.error("session expired");
      dispatch(resetAdmin());
    } else {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    setError({});
    fetchPlanData(accessToken, currentPage, itemsPerPage);
  }, [currentPage]);

  const openModal = () => {
    dispatch(setModal(true));
  };

  const closeModal = () => {
    dispatch(setModal(false));
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const searchPlan = async () => {
    if (searchQuery === "") {
      toast.error("Please enter a valid id");
      return;
    }

    const response = await searchPlans(1, itemsPerPage, searchQuery);

    if (response.status === 200) {
      if (response.data.data.length === 0) {
        toast.error("No plans found");
        return;
      }

      if (response?.data?.data?.allPlans) {
        setPlans(response?.data?.data?.allPlans);
        setTotalPages(response?.data?.data?.totalPages);
        return;
      }

      setPlans(response.data.data);
    } else if (response.status === 401) {
      await logout();
      toast.error("session expired");
      dispatch(resetAdmin());
    } else {
      toast.error("something went wrong");
    }
  };

  return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50">
          <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 p-6 text-left shadow-xl transition-all sm:w-96">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-400 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 border-b border-orange-500 dark:border-orange-400 pb-2">
                  Create a plan
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Enter the price and discount amount
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Price
                  </label>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    onChange={(e) => setPrice(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:border-orange-400"
                    placeholder="Enter price"
                  />
                  {error?.price && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error.price}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                    Discount
                  </label>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    onChange={(e) => setDiscount(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 dark:focus:border-orange-400"
                    placeholder="Enter discount"
                  />
                  {error?.discount && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error.discount}</p>
                  )}
                </div>

                <button
                  onClick={handleCreatePlan}
                  className="w-full rounded-md bg-orange-500 dark:bg-orange-400 px-4 py-2 text-sm font-semibold text-white dark:text-gray-200 shadow-sm hover:bg-orange-600 dark:hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 focus:ring-offset-2"
                >
                  Save Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
          {/* Header */}
          <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Plans Management</h2>
              <div className="flex space-x-3">
                <div className="flex">
                  <SearchComponent onSearch={handleSearch} />
                  <button
                    onClick={searchPlan}
                    className="ml-2 inline-flex items-center rounded-md bg-orange-500 dark:bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 dark:hover:bg-orange-500"
                  >
                    <FaSearch className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={openModal}
                  className="inline-flex items-center rounded-md bg-orange-500 dark:bg-orange-400 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 dark:hover:bg-orange-500"
                >
                  <span className="mr-2">+</span>
                  Create Plan
                </button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto dark:bg-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="hidden px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300 md:table-cell">
                    S.No
                  </th>
                  <th className="hidden px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300 md:table-cell">
                    Plan ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                    Discount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                {plans.map((plan, index) => (
                  <tr key={plan.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300 md:table-cell">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300 md:table-cell">
                      {plan.stripeId}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                      ₹{plan.price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex items-center">
                        {plan.status === "active" ? (
                          <FaPause
                            onClick={() => handlePlanStatus(plan?.stripeId, "pause")}
                            className="mr-2 h-4 w-4 cursor-pointer text-red-500 dark:text-red-400"
                          />
                        ) : (
                          <FaPlay
                            onClick={() => handlePlanStatus(plan?.stripeId, "active")}
                            className="mr-2 h-4 w-4 cursor-pointer text-green-500 dark:text-green-400"
                          />
                        )}
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                            plan.status === "active"
                              ? "bg-green-100 text-green-800 dark:bg-green-600 dark:text-green-200"
                              : "bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-200"
                          }`}
                        >
                          {plan.status}
                        </span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                      ₹{plan.discount}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                      <Dropdown>
                        <DropdownTrigger>
                          <button className="text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Actions">
                          <DropdownItem key="edit">Edit Plan</DropdownItem>
                          <DropdownItem
                            key="delete"
                            className="text-red-600 dark:text-red-400"
                            color="danger"
                            onClick={() => handleDeletePlan(plan?.stripeId)}
                          >
                            Remove Plan
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-1 border-t border-gray-200 dark:border-gray-700 px-4 py-3 sm:px-6">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium ${
                  currentPage === number
                    ? "bg-orange-500 text-white dark:bg-orange-400 dark:text-white"
                    : "bg-white dark:bg-gray-700 text-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                }`}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansTable;