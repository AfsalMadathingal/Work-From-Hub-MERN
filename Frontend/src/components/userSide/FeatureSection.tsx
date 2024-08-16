import React from "react";

const FeatureSection = function FeaturesSection() {
  return (
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
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
          <i className="fa-solid fa-crown"></i> Became a Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
