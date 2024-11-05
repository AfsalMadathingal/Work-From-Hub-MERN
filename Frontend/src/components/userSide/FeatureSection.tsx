import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import PaymentForm from "./PaymentForm";
import { fetchActivePlan } from "../../services/userServices";
import CardForPlan from "./CardForPlan";
import toast from "react-hot-toast";
import { setModal } from "../../redux/slices/userSlice";
import { IPlan } from "../../@types/plan";

const FeatureSection = function FeaturesSection() {
  const { modal , user  } = useSelector((state: RootState) => state.user);
  const [isSubscribeClicked, setIsSubscribeClicked] = React.useState(false);
  const dispatch = useDispatch();
  const [activePlan, setActivePlan] = useState<IPlan>({} as IPlan);

  const getActivePlan = async () => {
    try {
      const response = await fetchActivePlan();
      ;

      // Fix the typo: use `statusCode` instead of `statusCose`
      if (response?.status === 200) {
        setActivePlan(response.data.data);
      } else {
        toast.error("Failed to fetch active plan.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while fetching the plan.");
    }
  };

  const handleMembershipClick = async () => {

    if(user?.membership){
      toast.error("You are already a member")
      return
    }
    dispatch(setModal(true));
  };

  useEffect(() => {
    getActivePlan();
  }, []);

  return (
<>
  {modal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>

      {/* Modal Content */}
      <div
        className={`bg-none p-4 flex justify-center rounded-lg relative w-full sm:w-3/4 md:w-1/2 lg:w-2/5`}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            dispatch(setModal(false));
            setIsSubscribeClicked(false);
          }}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content (PaymentForm or CardForPlan) */}
        {isSubscribeClicked ? (
          <PaymentForm activePlan={activePlan} />
        ) : (
          <CardForPlan setIsSubscribeClicked={setIsSubscribeClicked} />
        )}
      </div>
    </div>
  )}
  <div className="m-12">
    <div className="container mx-auto flex flex-col justify-evenly md:flex-row min-h-[250px] bg-gray-800 dark:bg-gray-900">
      <div className="flex m-5 items-center justify-center p-4 text-white text-center">
        <h2 className="text-3xl font-bold">
          Get Unlimited <br /> offers
        </h2>
      </div>
      <div className="w-1 bg-white"></div>
      <div className="flex m-5 items-center justify-center p-4 text-white text-center">
        <h2 className="text-3xl font-bold">
          Get Unlimited <br /> Discounts
        </h2>
      </div>
      <div className="w-1 bg-white"></div>
      <div className="flex m-5 items-center justify-center p-4 text-white text-center">
        <button
          onClick={handleMembershipClick}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg"
        >
          <i className="fa-solid fa-crown"></i> Became a Member
        </button>
      </div>
    </div>
  </div>
</>


  );
};

export default FeatureSection;
