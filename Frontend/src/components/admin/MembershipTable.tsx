import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { resetAdmin, setModal } from "../../redux/slices/adminSlice";
import { getPlans } from "../../services/adminService";
import { toast } from "react-toastify";
import { logout } from "../../services/adminAuth";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const MembershipTable = () => {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState<any>([]);
  const { modal, accessToken } = useSelector((state: RootState) => state.admin);

  const openModal = () => {
    dispatch(setModal(true));
  };

  const closeModal = () => {
    dispatch(setModal(false));
  };

  const fetchPlanData = async () => {
    const response = await getPlans(accessToken);

    if (response.status === 200) {
      setPlans(response.data.data);
      console.log("====================================");
      console.log(response.data.data);
      console.log("====================================");
    } else {
      await logout();
      toast.error("session expired");
      dispatch(resetAdmin());
    }
  };

  useEffect(() => {
    fetchPlanData();
  }, []);

  return (
    <>
      
      <div className="w-full bg-white border shadow-xl rounded-md h-full p-4">
      <div className="flex justify-end m-1">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={openModal}
        >
          <i className="fa fa-plus mr-2" aria-hidden="true"></i>
          Create Plan
        </button>
      </div>
        <table className="table-auto w-full text-center rounded-lg">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 rounded-s-md">Plan ID</th>
              <th className="p-2">Price</th>
              <th className="p-2">Status</th>
              <th className="p-2">Discount</th>
              <th className="p-2 rounded-e-md">Action</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id}>
                <td className="p-2">{plan.stripeId}</td>
                <td className="p-2">&#x20B9;{plan.price}</td>
                <td className="p-2">
                  <button
                    className={`${
                      plan.status === "active" ? "bg-green-300" : "bg-red-200"
                    } rounded-full w-20`}
                  >
                    {plan.status}
                  </button>
                </td>
                <td className="p-2">&#x20B9;{plan.discount}</td>
                <td className="p-2">
                  <Dropdown>
                    <DropdownTrigger>
                      <i className="fa fa-bars mr-2 hover:cursor-pointer" aria-hidden="true"></i>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                      <DropdownItem key="new">New file</DropdownItem>
                      <DropdownItem key="copy">Copy link</DropdownItem>
                      <DropdownItem key="edit">Edit file</DropdownItem>
                      <DropdownItem
                        key="delete"
                        className="text-danger"
                        color="danger"
                      >
                        Delete file
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modal && (
        <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
          <div
            className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
            onClick={closeModal}
          >
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  onClick={closeModal}
                >
                  <span className="sr-only">Close</span>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </button>
              </div>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Create a plan
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Enter the price and discount amount
                    </p>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Price
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="price"
                        id="price"
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Price"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="discount"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Discount
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="discount"
                        id="discount"
                        className="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Discount"
                      />
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => console.log("Save button clicked")}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MembershipTable;
