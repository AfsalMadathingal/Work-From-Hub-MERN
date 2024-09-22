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
  FaDollarSign,
} from "react-icons/fa";

import { useLocation } from "react-router-dom";


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

const BWorkspaceDetail: React.FC<WorkspaceDetailProps> = ({ workspace }) => {
  const domLocation = useLocation();
  const [ownerName, setOwnerName] = React.useState<string>("");

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




  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrows for navigation
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{buildingName}</h2>
        <div
         className="flex items-center space-x-2 text-sm">
          <span>Submitted:</span>
          <span className="font-semibold">
            {new Date(createdAt).toLocaleString()}
          </span>
        </div>
      </div>
     

      {/* Image Slider */}
      {photos.length > 0 && (
        <div className="mb-6">
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
          </Slider>
        </div>
      )}

      {/* Video Player */}
      {video && (
        <div  className="mb-6 w-1/2 mx-auto">
          <Player  >
            <source  src={video} />
          </Player>
        </div>
      )}

      {/* Workspace Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        {/* Contact */}
        <div className="flex items-center">
          <FaPhone className="text-green-500 mr-2" />
          <p>
            <strong>Contact:</strong> {contactNo}
          </p>
        </div>

        {/* Amenities */}
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
            <strong>Bathroom:</strong>{" "}
            {bathroom ? "Available" : "Not Available"}
          </p>
        </div>

        {/* Seating Details */}
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
            <strong>Price Per seat:</strong> ₹ {pricePerSeat}/seat
          </p>
        </div>

        {/* Status */}
        <div className="flex items-center">
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
  );
};

export default BWorkspaceDetail;
