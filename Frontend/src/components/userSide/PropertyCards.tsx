import { PlusCircleIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import AnimatedPage from "../Animation";

const PropertyCards = () => {
  return (
    <AnimatedPage>
      <div className="flex items-center justify-center min-h-[80vh] bg-slate-100 dark:bg-slate-800 rounded-lg shadow-sm">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="bg-white dark:bg-slate-700 shadow-md rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700">
            <PlusCircleIcon className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-4" />
            <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">Submit New Property</h2>
            <Link to="/business/workspace-manage/submit">
              <button className="bg-orange-500 dark:bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600 dark:hover:bg-orange-500 transition duration-300">
                Submit
              </button>
            </Link>
          </div>

          <div className="bg-white dark:bg-slate-700 shadow-md rounded-lg p-6 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700">
            <EyeIcon className="h-12 w-12 text-orange-500 dark:text-orange-400 mb-4" />
            <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">
              View Submitted Properties
            </h2>
            <Link to="/business/workspace-manage/submission">
              <button className="bg-orange-500 dark:bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-600 dark:hover:bg-orange-500 transition duration-300">
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
