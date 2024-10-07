import React, { useEffect, useState } from "react";
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
  FaDollarSign,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
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
  const [ownerName, setOwnerName] = useState<string>("");
  const [confirmDialog, setConfirmDialog] = useState<boolean>(false);
  const [onDialogConfirm, setOnDialogConfirm] = useState<() => void>(() => {});
  const [onDialogCancel, setOnDialogCancel] = useState<() => void>(() => {});
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [dialogMessage, setDialogMessage] = useState<string>("");
  const navigate = useNavigate();

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

      setOwnerName(response.data.data.email);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleDialog = (action: "approve" | "reject") => {
    let title = "";
    let message = "";
    let onConfirm: () => Promise<void> = async () => {};
    const onCancel: () => void = () => setConfirmDialog(false); // Change from `let` to `const`
  
    if (action === "approve") {
      title = "Approve Workspace";
      message = "Are you sure you want to approve this workspace?";
      onConfirm = handleApprove;
    } else if (action === "reject") {
      title = "Reject Workspace";
      message = "Are you sure you want to reject this workspace?";
      onConfirm = handleReject;
    }
  
    setDialogTitle(title);
    setDialogMessage(message);
    setOnDialogConfirm(() => onConfirm);
    setOnDialogCancel(() => onCancel); // Function doesn't need reassignment, so it's declared with `const`
    setConfirmDialog(true);
  };
  

  const handleApprove = async () => {
    try {
      const response = await approveWorkspace(workspace._id);
      setConfirmDialog(false);

      if (response.status === 200) {
        navigate(-1);
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
      setConfirmDialog(false);

      if (response.status === 200) {
        navigate(-1);
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
      <Dialog
        title={dialogTitle}
        message={dialogMessage}
        isOpen={confirmDialog}
        onConfirm={onDialogConfirm}
        onCancel={onDialogCancel}
      />
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
            <>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-sm hover:bg-red-600 duration-300 transition-all ease-in-out"
                onClick={() => handleDialog("reject")}
              >
                Reject
              </button>
            </>

            <button
              className="px-4 py-2 bg-green-400 text-black rounded-sm hover:bg-green-500 duration-300 transition-all ease-in-out"
              disabled={approved || rejected}
              onClick={() => handleDialog("approve")}
            >
              Approve
            </button>
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
                  <strong>Address:</strong> {street}, {district}, {state},{" "}
                  {pinCode}
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
                  <strong>Price Per Seat:</strong> ₹ {pricePerSeat}
                </p>
              </div>
            </div>
          </div>

          {/* Carousel for Images and Video on Right */}
          <div>
            <Slider {...sliderSettings}>
              {photos.map((photo, index) => (
                <div key={index}>
                  <img
                    src={photo}
                    alt={`Workspace ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
              {video && (
                <Player playsInline poster="/assets/poster.png" src={video} />
              )}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkspaceDetail;
