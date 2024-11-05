import React, { useState } from "react";
import "video-react/dist/video-react.css";
import Slider from "react-slick";
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
  FaDollarSign,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { approveWorkspace, rejectWorkspace } from "../../services/adminService";
import Dialog from "./Dialog";
import { notify } from "../../utils/NotificationService";
import { IWorkspace } from "../../@types/workspace";



const WorkspaceDetail: React.FC<Partial<IWorkspace>> = ({ workspace }) => {
  const [confirmDialog, setConfirmDialog] = useState<boolean>(false);
  const [onDialogConfirm, setOnDialogConfirm] = useState<() => void>(() => {});
  const [onDialogCancel, setOnDialogCancel] = useState<() => void>(() => {});
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const [dialogMessage, setDialogMessage] = useState<string>("");
  const navigate = useNavigate();

  if (!workspace) {
    return <div>Loading...</div>;
  }

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
    approved,
    createdAt,
    ownerId,
  } = workspace;



  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/${location}`, "_blank");
  };

  const handleDialog = (action: "approve" | "reject") => {

    if(action === "reject"){


        notify.prompt({
          title: "Enter Reason",
          label: "Reason",
          placeholder: "Type your reason here",
        }).then((reason) => {


          if (reason) {
            handleReject(reason);
          }


        });

        
        return
    }



    const config = {
      approve: {
        title: "Approve Workspace",
        message: "Are you sure you want to approve this workspace?",
        onConfirm: handleApprove,
      },
      reject: {
        title: "Reject Workspace",
        message: "Are you sure you want to reject this workspace?",
        onConfirm: handleReject,
      },
    };

    const { title, message, onConfirm } = config[action];
    setDialogTitle(title);
    setDialogMessage(message);
    setOnDialogConfirm(() => onConfirm);
    setOnDialogCancel(() => () => setConfirmDialog(false));
    setConfirmDialog(true);
  };

  const handleApprove = async () => {
    try {
      const response = await approveWorkspace(workspace._id);
      setConfirmDialog(false);
      if (response?.status === 200) {
        navigate(-1);
        toast.success("Workspace approved successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      
      toast.error("Something went wrong");
    }
  };

  const handleReject = async (reason:string) => {
    try {
      const response = await rejectWorkspace(workspace._id,reason);
      setConfirmDialog(false);
      if (response?.status === 200) {
        navigate(-1);
        toast.success("Workspace rejected successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
      <div className="max-w-7xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{buildingName}</h1>
              <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span>Submitted on</span>
                  <span className="font-medium">
                    {new Date(createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="hidden sm:block text-gray-300">|</div>
                <div className="flex items-center gap-2">
                  <span>by</span>
                  <span className="font-medium">{ownerId?.fullName}</span>
                  <span className="text-gray-400">({ownerId?.email})</span>
                </div>
              </div>
            </div>

            {approved ? (

              <div className="flex gap-4">
                <button
                onClick={() => alert("hold")}
                className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition duration-200"
              >
                Hold
              </button>
              </div>
            ) : (
              <div className="flex gap-4">
              <button
                onClick={() => handleDialog("reject")}
                className="px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition duration-200"
              >
                Reject
              </button>
              <button
                onClick={() => handleDialog("approve")}
                disabled={approved || rejected}
                className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Approve
              </button>
            </div>
            )} 

           
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Details Section */}
            <div className="space-y-6">
              {/* Location Card */}
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{street}</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {district}, {state}, {pinCode}
                    </p>
                    <button
                      onClick={openInGoogleMaps}
                      className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      View on Google Maps
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone className="text-green-500" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Contact:</span> {contactNo}
                  </p>
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaPowerOff className="text-yellow-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Power Backup</p>
                    <p className="font-medium">{powerBackup ? "Available" : "Not Available"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaSnowflake className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Air Conditioning</p>
                    <p className="font-medium">{ac ? "Available" : "Not Available"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaToilet className="text-red-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Bathroom</p>
                    <p className="font-medium">{bathroom ? "Available" : "Not Available"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <FaChair className="text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tables Available</p>
                    <p className="font-medium">{tablesAvailable}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Images and Video Section */}
            <div className="space-y-4">
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg">
                <Slider {...sliderSettings}>
                  {photos.map((photo : string, index : number) => (
                    <div key={index} className="flex justify-center">
                      <img src={photo} alt={`Workspace Image ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
                    </div>
                  ))}
                </Slider>
              </div>

              {video && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <Player playsInline poster="/assets/poster.png" src={video} />
                </div>
              )}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center gap-2">
              <FaDollarSign className="text-green-600" />
              <span className="font-medium text-lg text-gray-900 dark:text-white">
                Price per seat: ₹{pricePerSeat}
              </span>
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              {approved ? (
                <span className="font-medium text-green-600">Approved</span>
              ) : (
                <span className="font-medium text-red-600">Pending Approval</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkspaceDetail;
