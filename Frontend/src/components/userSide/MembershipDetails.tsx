import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchActivePlan } from "../../services/userServices";

const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity duration-300"></div>
        <div
          className={`relative bg-white rounded-md shadow-xl transition-all duration-300 transform ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="w-96 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Cancel Subscription
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to cancel your subscription? This action
              cannot be undone.
            </p>
            <button
              className="w-full mb-3 px-4 py-2 bg-orange-500 text-white font-medium rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-150 ease-in-out"
              onClick={onClose}
            >
              Yes, Cancel Subscription
            </button>
            <button
              className="w-full px-4 py-2 bg-white text-gray-800 font-medium rounded-md shadow-sm border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-150 ease-in-out"
              onClick={onClose}
            >
              No, Keep My Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MembershipDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planName, setPlanName] = useState("Premium Subscription");
  const [planPrice, setPlanPrice] = useState("19.99");
  const [renewalDate, setRenewalDate] = useState("June 1, 2024");
  const [isActive, setIsActive] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Placeholder data (replace with actual data in your implementation)

  const getActivePlan = async () => {
    try {
      const response = await fetchActivePlan();
      ;

      if (response.status === 200) {
        const plan = response.data.data;

        if (plan.status === "active") {
          setIsActive(true);
        }
        setPlanPrice(plan.price);
        const renewalDate = new Date(plan.createdAt);
        renewalDate.setDate(renewalDate.getDate() + 30);
        setRenewalDate(renewalDate.toLocaleDateString());
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      ;
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    getActivePlan();
  }, []);

  return (
    <>
      {!isActive ? (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
          <div className="md:flex">
            <div className="p-8 w-full">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                You don't have an active subscription
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
          <div className="md:flex">
            <div className="p-8 w-full">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Your Current Plan
              </div>
              <h2 className="block mt-1 text-2xl leading-tight font-bold text-black">
                {planName}
              </h2>
              <p className="mt-2 text-gray-500">{`₹${planPrice}/month`}</p>
              <p className="mt-2 text-sm text-gray-500">{`Renews on ${renewalDate}`}</p>
              <button
                onClick={openModal}
                className="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
              >
                Cancel Subscription
              </button>
            </div>
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      )}
    </>
  );
};

export default MembershipDetails;
