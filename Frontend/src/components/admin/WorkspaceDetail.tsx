import React, { useEffect } from "react";
import "video-react/dist/video-react.css";
import Slider from "react-slick"; // Import React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Player } from "video-react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaPowerOff,
  FaSnowflake,
  FaToilet,
  FaChair,
  FaTable,
  FaMarsStroke,
  FaDollarSign,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import {
  approveWorkspace,
  getOwnerById,
  rejectWorkspace,
} from "../../services/adminService";
import Dialog from "./Dialog";

interface WorkspaceDetailProps {
  workspace: {
    _id: string;
    buildingName: string;
    state: string;
    district: string;
    location: string; // "latitude,longitude"
    pinCode: string;
    street: string;
    contactNo: string;
    powerBackup: boolean;
    ac: boolean;
    bathroom: boolean;
    photos: string[]; // Array of photo URLs
    video: string; // Video URL
    tablesAvailable: number;
    seatsPerTable: number;
    ownerId: string;
    approved: boolean;
    createdAt: string;
    updatedAt: string;
    rejected: boolean;
    pricePerSeat: number;
    __v: number;
  };
}

const WorkspaceDetail: React.FC<WorkspaceDetailProps> = ({ workspace }) => {
  const domLocation = useLocation();
  const [ownerName, setOwnerName] = React.useState<string>("");
  const [confirmDialog, setConfirmDialog] = React.useState<boolean>(false);

  const {
    pricePerSeat,
    rejected,
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
    video,
    tablesAvailable,
    seatsPerTable,
    approved,
    createdAt,
    ownerId,
  } = domLocation.state.workspace as WorkspaceDetailProps["workspace"];

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/${location}`, "_blank");
  };

  const getOwner = async (ownerId: string) => {
    try {
      const response = await getOwnerById(ownerId);

      console.log(response);

      setOwnerName(response.data.data.email);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDialog = () => {
    setConfirmDialog(true);
  };
  

  const handleApprove = async () => {
    try {
      const response = await approveWorkspace(workspace._id);

      if (response.status === 200) {
        toast.success("Workspace approved successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleReject = async () => {
    try {
      const response = await rejectWorkspace(workspace._id);

      console.log(response);

      if (response.status === 200) {
        toast.success("Workspace rejected successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getOwner(ownerId);
  }, [workspace]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrows for navigation
  };

  return (
    <>
    {/* {confirmDialog && (
     
    )} */}
     <Dialog title="Approve Workspace" message="Are you sure you want to approve this workspace?" isOpen={confirmDialog} onConfirm={handleApprove} onCancel={() => setConfirmDialog(false)}/>
<div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg">
  {/* Top Section: Title and Submission Info */}
  <div className="flex flex-col md:flex-row items-start justify-between mb-6">
    {/* Workspace Basic Details */}
    <div className="md:w-1/2 mb-6 md:mb-0">
      <h2 className="text-2xl font-semibold">{buildingName}</h2>
      <div className="flex items-center space-x-2 text-sm mt-2">
        <span>Submitted:</span>
        <span className="font-semibold">
          {new Date(createdAt).toLocaleString()}
        </span>
        <span>by:</span>
        <span className="font-semibold">{ownerName}</span>
      </div>
    </div>

    {/* Approval Section */}
    <div className="flex justify-start md:justify-end md:w-1/2 space-x-4">
      {approved ? (
        <>
          <p className="text-green-500">Approved</p>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={handleReject}
          >
            Reject
          </button>
        </>
      ) : (
        <button
          className="px-4 py-2 bg-green-400 text-black rounded-sm hover:bg-green-500 duration-300 transition-all ease-in-out"
          disabled={rejected}
          onClick={handleDialog}
        >
          Approve
        </button>
      )}
    </div>
  </div>

  {/* Main Content: Images/Video on Right, Details on Left */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Details on the Left */}
    <div className="space-y-4">
      {/* Location */}
      <div className="flex items-center">
        <FaMapMarkerAlt className="text-blue-500 mr-2" />
        <div>
          <p>
            <strong>Address:</strong> {street}, {district}, {state}, {pinCode}
          </p>
          <p
            className="text-blue-600 cursor-pointer"
            onClick={openInGoogleMaps}
          >
            View on Google Maps
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="flex items-center">
        <FaPhone className="text-green-500 mr-2" />
        <p>
          <strong>Contact:</strong> {contactNo}
        </p>
      </div>

      {/* Amenities */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <FaPowerOff className="text-yellow-500 mr-2" />
          <p>
            <strong>Power Backup:</strong> {powerBackup ? "Yes" : "No"}
          </p>
        </div>
        <div className="flex items-center">
          <FaSnowflake className="text-blue-500 mr-2" />
          <p>
            <strong>AC:</strong> {ac ? "Available" : "Not Available"}
          </p>
        </div>
        <div className="flex items-center">
          <FaToilet className="text-purple-500 mr-2" />
          <p>
            <strong>Bathroom:</strong> {bathroom ? "Available" : "Not Available"}
          </p>
        </div>
        <div className="flex items-center">
          <FaTable className="text-indigo-500 mr-2" />
          <p>
            <strong>Tables Available:</strong> {tablesAvailable}
          </p>
        </div>
        <div className="flex items-center">
          <FaChair className="text-red-500 mr-2" />
          <p>
            <strong>Seats Per Table:</strong> {seatsPerTable}
          </p>
        </div>
        <div className="flex items-center">
          <FaDollarSign className="text-red-500 mr-2" />
          <p>
            <strong>Price Per Table:</strong> ₹ {pricePerSeat}
          </p>
        </div>
      </div>
    </div>

    {/* Image/Video Carousel on the Right */}
    <div className="space-y-4">
      {photos.length > 0 && (
        <div className="w-full">
          <Slider {...sliderSettings}>
            {photos.map((photoUrl, index) => (
              <div key={index}>
                <img
                  src={photoUrl}
                  alt={`Workspace Photo ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            ))}
            {video && (
              <div>
                <Player>
                  <source src={video} />
                </Player>
              </div>
            )}
          </Slider>
        </div>
      )}
    </div>
  </div>

  {/* Approval Status */}
  <div className="mt-6">
    <div className="flex justify-start md:justify-end items-center">
      <span
        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${
          approved ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {approved ? "Approved" : "Pending"}
      </span>
    </div>
  </div>
</div>
    </>

  );
};

export default WorkspaceDetail;
