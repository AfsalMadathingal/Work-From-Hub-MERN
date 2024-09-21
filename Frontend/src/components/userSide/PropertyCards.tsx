import React from "react";
import { PlusCircleIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import AnimatedPage from "../Animation";

const PropertyCards = () => {
  return (
    <AnimatedPage>
      <div className="flex items-center justify-center min-h-[80vh] bg-slate-100 rounded-lg shadow-sm">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200">
            <PlusCircleIcon className="h-12 w-12 text-orange-500 mb-4" />
            <h2 className="text-xl font-bold mb-4">Submit New Property</h2>
            <Link to="/business/workspace-manage/submit">
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
                Submit
              </button>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200">
            <EyeIcon className="h-12 w-12 text-orange-500 mb-4" />
            <h2 className="text-xl font-bold mb-4">
              View Submitted Properties
            </h2>
            <Link to="/business/workspace-manage/submission">
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default PropertyCards;
