import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        {/* Error Code */}
        <h1 className="text-9xl font-bold text-orange-500 dark:text-orange-400">
          404
        </h1>
        {/* Error Message */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Page Not Found
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
          The page you are looking for does not exist.
        </p>
        {/* Home Button */}
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-orange-500 rounded-md shadow hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
