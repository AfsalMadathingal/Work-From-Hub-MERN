import React from "react";

const WorkspaceSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg mt-6">
      {/* Title and subtitle */}
      <div className="h-10 bg-gray-200 rounded-lg mb-2 w-3/4" />
      <div className="h-6 bg-gray-200 rounded-lg mb-6 w-1/2" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Image carousel placeholder */}
        <div className="h-96 bg-gray-200 rounded-lg" />

        {/* Workspace details */}
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="h-6 bg-gray-200 rounded-lg w-full" />
          ))}
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="h-12 bg-gray-200 rounded-lg w-36" />
            <div className="h-12 bg-gray-200 rounded-lg w-36" />
          </div>
        </div>
      </div>

      {/* Amenities section */}
      <div className="mb-8">
        <div className="h-8 bg-gray-200 rounded-lg mb-4 w-1/4" />
        <div className="flex flex-wrap gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="h-6 bg-gray-200 rounded-lg w-24" />
          ))}
        </div>
        <div className="h-6 bg-gray-200 rounded-lg mt-3 w-28" />
      </div>

      {/* Ratings and reviews */}
      <div>
        <div className="h-8 bg-gray-200 rounded-lg mb-4 w-1/3" />
        <div className="flex items-center mb-6">
          <div className="h-16 w-16 bg-gray-200 rounded-lg mr-4" />
          <div>
            <div className="h-6 bg-gray-200 rounded-lg w-20 mb-2" />
            <div className="h-4 bg-gray-200 rounded-lg w-24" />
          </div>
        </div>

        {/* Review placeholder */}
        <div className="space-y-6">
          <div className="border-b pb-4">
            <div className="h-6 bg-gray-200 rounded-lg w-1/4 mb-2" />
            <div className="h-4 bg-gray-200 rounded-lg w-full mb-2" />
            <div className="h-4 bg-gray-200 rounded-lg w-3/4" />
          </div>
        </div>

        <div className="h-6 bg-gray-200 rounded-lg mt-6 w-28" />
      </div>
    </div>
  );
};

export default WorkspaceSkeleton;