import React from "react";
import { IWorkspace } from "../../@types/workspace";
import { Link } from "react-router-dom";

interface ListingCardProps {
  listing: IWorkspace;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
<>
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg flex flex-col mb-6 md:flex-row md:items-center md:justify-between">
    <img
      src={listing?.photos[0] as string}
      alt={listing.buildingName}
      className="w-full h-48 rounded-t-lg md:rounded-l-lg md:w-1/3 object-cover"
    />
    <div className="p-4 w-full md:w-2/3">
      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{listing.buildingName}</h3>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
          <p className="text-sm text-gray-700 dark:text-gray-300">Total Seats: {listing.seatsPerTable * listing.tablesAvailable}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">Open Hours: {listing.openHours}</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">Price: {listing.pricePerSeat} / Seat</p>
          <p className="text-sm text-gray-700 dark:text-gray-300">Location: {listing.state}</p>
        </div>
        <div className="flex flex-col md:w-1/2 md:items-end">
          <div className="text-yellow-400 mb-2">
            {"★".repeat(5)} {"☆".repeat(5 - 4)}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link to={`/workspace/${listing._id}/book`} className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 w-full">
              Book Now
            </Link>
            <Link to={`/workspace/${listing._id}/view`} className="w-full">
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100 w-full dark:border-orange-600 dark:text-orange-600 dark:hover:bg-orange-700">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default ListingCard;
