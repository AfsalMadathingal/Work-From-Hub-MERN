import React from "react";
import { useLocation } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPowerOff,
  FaSnowflake,
  FaToilet,
  FaChair,
  FaTable,
  FaDollarSign,
} from "react-icons/fa";

const WorkspaceDetail = () => {
  const { state: { workspace } } = useLocation();
  const {
    buildingName,
    state,
    district,
    location,
    pinCode,
    street,
    contactNo,
    powerBackup,
    ac,
    bathroom,
    photos,
    tablesAvailable,
    seatsPerTable,
    approved,
    createdAt,
    pricePerSeat,
  } = workspace;

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {buildingName}
        </h1>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          approved 
            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
            : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100"
        }`}>
          {approved ? "Approved" : "Pending"}
        </span>
      </div>

      {/* Main Image */}
      {photos?.[0] && (
        <img
          src={photos[0]}
          alt="Workspace"
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Location */}
        <div className="space-y-1 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
            <FaMapMarkerAlt className="text-blue-500" />
            <span className="font-medium">Location</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {street}, {district}, {state}, {pinCode}
          </p>
          <button 
            onClick={() => window.open(`https://www.google.com/maps/search/${location}`, "_blank")}
            className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400"
          >
            View on Maps
          </button>
        </div>

        {/* Contact */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
            <FaPhone className="text-green-500" />
            <span className="font-medium">{contactNo}</span>
          </div>
        </div>

        {/* Amenities & Pricing */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <FaPowerOff className={`${powerBackup ? "text-green-500" : "text-gray-400"}`} />
              <span className="text-sm">Power</span>
            </span>
            <span className="flex items-center gap-2">
              <FaSnowflake className={`${ac ? "text-green-500" : "text-gray-400"}`} />
              <span className="text-sm">AC</span>
            </span>
            <span className="flex items-center gap-2">
              <FaToilet className={`${bathroom ? "text-green-500" : "text-gray-400"}`} />
              <span className="text-sm">Bath</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaDollarSign className="text-green-500" />
            <span className="text-sm font-medium">₹{pricePerSeat}/seat</span>
          </div>
        </div>

        {/* Seating */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FaTable className="text-blue-500" />
              <span className="text-sm">{tablesAvailable} Tables</span>
            </span>
            <span className="flex items-center gap-2">
              <FaChair className="text-blue-500" />
              <span className="text-sm">{seatsPerTable} Seats/Table</span>
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
        Listed on {new Date(createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default WorkspaceDetail;