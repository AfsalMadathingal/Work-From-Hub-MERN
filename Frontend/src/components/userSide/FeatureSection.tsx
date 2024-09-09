import React, { useEffect } from "react";
import StripePayment from "../subscription/stripe";
import axios from "axios";
import { userAxiosInstance } from "../../services/instance/userInstance";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import CheckoutButton from "../payments/CheckoutStripe";
import PaymentForm from "./PaymentForm";
import { fetchActivePlan } from "../../services/userServices";

const FeatureSection = function FeaturesSection() {

  const [modal , setModal] = React.useState(true)
  const [activePlan , setActivePlan] = React.useState({})
  const {user} = useSelector((state: RootState) => state.user);


  const getActivePlan = async () => {

    try {

   
      
      const response = await fetchActivePlan();


      if(response.statusCose === 200){
        setActivePlan(response.data.data)
      }

      


    } catch (error) {
      
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }

  }

  useEffect(()=>{

    getActivePlan();

  },[])

  return (
    <>
    {modal && 

    <div className="absolute top-0 right-0 left-0 bottom-0 z-50">
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>

      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white p-4 w-1/2 rounded-lg">
        <PaymentForm activePlan={activePlan} />
        </div>
      </div>
    </div>
    
    
    
    
    }
    <div className="m-12">
      <div className="container mx-auto flex flex-col justify-evenly md:flex-row min-h-[250px] bg-gray-800">
        <div className="flex m-5 items-center justify-center p-4 bg-gray-800 text-white text-center">
          <h2 className="text-3xl font-bold">
            Get Unlimited <br /> offers
          </h2>
        </div>
        <div className="w-1  bg-white"></div>
        <div className="flex m-5 items-center justify-center p-4 bg-gray-800 text-white text-center">
          <h2 className="text-3xl font-bold">
            Get Unlimited <br /> Discounts
          </h2>
        </div>
        <div className="w-1  bg-white"></div>
        <div className="flex m-5 items-center justify-center p-4 bg-gray-800 text-white text-center">
          <button
          onClick={()=>setModal(true)}
          className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          <i className="fa-solid fa-crown"></i> Became a Member
          </button>
         
          <CheckoutButton priceId="plan_Qo0MT9VBKdrqcB" />
        </div>
      </div>
    </div>
    </>
  );
};

export default FeatureSection;
