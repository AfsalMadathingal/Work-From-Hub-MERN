import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchActivePlan } from "../../services/userServices";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } dark:bg-gray-900 dark:text-white`}
    >
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity"></div>
        <div
          className={`relative bg-white rounded-xl shadow-2xl transition-all duration-300 transform ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          } dark:bg-gray-800`}
        >
          <div className="w-full max-w-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 dark:text-white">
              Cancel Subscription
            </h3>
            <p className="text-gray-600 mb-8 dark:text-gray-200">
              Are you sure you want to cancel your subscription? This action
              cannot be undone.
            </p>
            <div className="space-y-3">
              <button
                className="w-full px-4 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors dark:bg-red-700 dark:hover:bg-red-800"
                onClick={onClose}
              >
                Yes, Cancel Subscription
              </button>
              <button
                className="w-full px-4 py-3 bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={onClose}
              >
                No, Keep My Subscription
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MembershipDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [planPrice, setPlanPrice] = useState("19.99");
  const [renewalDate, setRenewalDate] = useState("June 1, 2024");
  const [isActive, setIsActive] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getActivePlan = async () => {
    try {
      const response = await fetchActivePlan();
      if (response?.status === 200) {
        const plan = response.data.data;
        if (plan.status === "active") {
          setIsActive(true);
        }

        setPlanPrice(plan.price);
        const renewalDate = new Date(plan.createdAt);
        renewalDate.setDate(renewalDate.getDate() + 30);
        setRenewalDate(renewalDate.toLocaleDateString());
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getActivePlan();
  }, []);

  if (!isActive) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 dark:bg-gray-800">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center dark:bg-gray-900">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">No Active Subscription</h2>
              <p className="text-gray-500 mt-1 dark:text-gray-400">Subscribe to access premium features</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 dark:bg-gray-800">
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center dark:bg-gray-800">
            <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Premium Membership</h2>
            <p className="text-gray-500 mt-1 dark:text-gray-400">Active Subscription</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-t border-gray-100 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-300">Price</span>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">₹{planPrice}/month</span>
          </div>
          
          <div className="flex justify-between items-center py-3 border-t border-gray-100 dark:border-gray-700">
            <span className="text-gray-600 dark:text-gray-300">Next Renewal</span>
            <span className="text-gray-900 dark:text-white">{renewalDate}</span>
          </div>
        </div>
        
        <div className="mt-8">
          <button
            onClick={openModal}
            className="w-full px-4 py-3 bg-white text-red-500 font-medium rounded-lg border-2 border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800"
          >
            Cancel Subscription
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default MembershipDetails;
