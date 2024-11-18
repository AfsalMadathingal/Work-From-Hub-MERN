import { useLocation, useParams } from "react-router-dom";
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
import toast from "react-hot-toast";
import { manageHolding } from "../../services/BuserService";
import { useEffect, useState } from "react";
import { getWorkspaceById } from "../../services/adminService";

const WorkspaceDetail = () => {

  const [workspace, setWorkspace] = useState({});


const {workspaceId } = useParams();


  // const { state: { workspace } } = useLocation();


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
    rejected,
    rejectionReason
  } = workspace;


  const fetchWorkspaceData = async () => {
    try {
      const response = await getWorkspaceById(workspaceId as string);

      console.log(response?.data.data);
      
      setWorkspace(response?.data.data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleHold = async (workspaceId:string) => {
    try {
      const response = await manageHolding(workspaceId);

      if (response?.status === 200) {
        toast.success("Requested to hold the workspace");
      } else {
        toast.error("Something went wrong");
      } 
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while holding the workspace");
  };
}


useEffect(() => {

  console.log('====================================');
  console.log(workspaceId);

  console.log('====================================');
  fetchWorkspaceData();
}, []);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {buildingName}
        </h1>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            approved
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100"
          }`}>
            {approved && "Approved"}
            {rejected && "Rejected"}
            {!approved && !rejected && "Pending"}
          </span>
          {rejected && <p className="text-sm text-gray-600 dark:text-gray-300">Reason For Rejection: {rejectionReason}</p>}
        </div>
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
      <div className="flex items-center justify-between mt-6 ">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Listed on {new Date(createdAt).toLocaleDateString()}
        </span>

        {workspace.isOnHold && (
          <button
          onClick={() => handleHold(workspace?._id)}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600">
            Release This Property
          </button>
        )}


        {!workspace.isOnHold && workspace.approved && (
           <button
           onClick={() => handleHold(workspace?._id)}
           className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600">
             Hold This Property
           </button>
      
        )}
          </div>
    </div>
  );
};

export default WorkspaceDetail;