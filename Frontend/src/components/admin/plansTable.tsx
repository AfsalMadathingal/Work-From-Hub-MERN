import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { setError, setModal } from "../../redux/slices/adminSlice";
import {
  changePlanStatus,
  createPlan,
  getPlans,
  searchPlans,
} from "../../services/adminService";
import { RootState } from "../../redux/store/store";
import { toast } from "react-toastify";
import { resetAdmin } from "../../redux/slices/adminSlice";
import { logout } from "../../services/adminAuth";
import { FaPause, FaPlay, FaSearch } from "react-icons/fa";
import SearchComponent from "./Search";
import { planValidate } from "../../utils/userValidator";


const PlansTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [itemsPerPage] = useState(5);
  const [plans, setPlans] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const { accessToken, modal ,error } = useSelector((state: RootState) => state.admin);
  const dispatch = useDispatch();

  const handlePlanStatus = async (id: string, action: string) => {
    const response = await changePlanStatus(id, action);

    console.log(response);
  };

  const handleDeletePlan = async (id: string) => {
    const response = await changePlanStatus(id, "delete");
  };

  const handleCreatePlan = async () => {
    try {


      const error = planValidate(price,discount);

      if(error){
        dispatch(setError(error));
        return
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
    dispatch(setError({}));
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

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const searchPlan = async()=>{

    if(searchQuery === ""){
      toast.error("Please enter a valid id");
      return
    }

    const response = await searchPlans( 1, itemsPerPage, searchQuery);


    

    if (response.status === 200) {
      if(response.data.data.length === 0){
        toast.error("No plans found");
        return
      }

      if(response?.data?.data?.allPlans){
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
    
  }

  return (
    <div>
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div
            className="fixed inset-0 bg-gray-500 opacity-75"
            onClick={closeModal}
          ></div>

          <div
            className="relative bg-white rounded-lg p-6 text-left overflow-hidden shadow-xl transform transition-all max-w-md w-full sm:w-96"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 pt-4 pr-4">
              <button
                type="button"
                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                onClick={closeModal}
              >
                <span className="sr-only">Close</span>
                <i className="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
            <div className="text-center">
              <h3
                className="text-lg leading-6 font-medium text-gray-900 border-b-2 border-orange-500 pb-2 mb-4"
                id="modal-headline"
              >
                Create a plan
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Enter the price and discount amount
              </p>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <input
                    onChange={(e) => setPrice(e.target.value)}
                    type="text"
                    pattern="[0-9]*"
                    name="price"
                    id="price"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Price"
                  />
                  {error?.price && <p className="text-red-500">{error.price}</p>}
                </div>
                <div>
                  <label
                    htmlFor="discount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Discount
                  </label>
                  <input
                    onChange={(e) => setDiscount(e.target.value)}
                    type="text"
                    pattern="[0-9]*"
                    name="discount"
                    id="discount"
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Discount"
                  />
                  {error?.discount && <p className="text-red-500">{error.discount}</p>}
                </div>
                <button
                  type="button"
                  className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  onClick={handleCreatePlan}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-white border shadow-xl rounded-md p-4">
        <div className="flex justify-end m-1">
          <div className="me-2 flex">
            <SearchComponent onSearch={handleSearch} />
            <button onClick={searchPlan} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"><FaSearch/></button>
          </div>
          
          <div>
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"
              onClick={openModal}
            >
              <i className="fa fa-plus mr-2" aria-hidden="true"></i>
              Create Plan
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b text-left hidden md:table-cell">
                  S.No
                </th>
                <th className="py-2 px-4 border-b text-left hidden md:table-cell">
                  Plan ID
                </th>
                <th className="py-2 px-4 border-b text-left">Price</th>
                <th className="py-2 px-4 border-b text-left">Status</th>
                <th className="py-2 px-4 border-b text-left">Discount</th>
                <th className="py-2 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {plans.map((plan, index) => (
                <tr key={plan.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {(currentPage - 1) * itemsPerPage + index + 1}
                  </td>
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {plan.stripeId}
                  </td>
                  <td className="py-2 px-4 border-b">&#x20B9;{plan.price}</td>
                  <td className="py-2 px-4 border-b flex">
                    {plan.status === "active" ? (
                      <FaPause
                        onClick={() =>
                          handlePlanStatus(plan?.stripeId, "pause")
                        }
                        className="text-red-500 m-1 cursor-pointer"
                      />
                    ) : (
                      <FaPlay
                        onClick={() =>
                          handlePlanStatus(plan?.stripeId, "active")
                        }
                        className="text-green-500 m-1 cursor-pointer"
                      />
                    )}
                    <button
                      className={`${
                        plan.status === "active" ? "bg-green-300" : "bg-red-200"
                      } rounded-full w-20`}
                    >
                      {plan.status}
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    &#x20B9;{plan?.discount}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <Dropdown>
                      <DropdownTrigger>
                        <i
                          className="fa fa-bars mr-2 hover:cursor-pointer"
                          aria-hidden="true"
                        ></i>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="edit">Edit Plan</DropdownItem>
                        <DropdownItem
                          onClick={() => handleDeletePlan(plan?.stripeId)}
                          key="delete"
                          className="text-danger"
                          color="danger"
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
        <div className="flex justify-center mt-4">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === number
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansTable;
