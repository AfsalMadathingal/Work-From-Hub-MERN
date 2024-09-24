// components/ListingCard.tsx
import React from "react";
import { IWorkspace } from "../../@types/workspace";
import { Link } from "react-router-dom";

interface ListingCardProps {
  listing: IWorkspace;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <>
     
        <div className="bg-white shadow-md rounded-lg flex flex-col mb-6 sm:flex-row sm:items-center sm:justify-between">
          <img
            src={listing?.photos[0]}
            alt={listing.buildingName}
            className="w-full rounded-t-lg sm:rounded-l-lg sm:w-1/3 object-cover"
          />
          <div className="p-4 sm:w-2/3 sm:py-0">
            <h3 className="font-bold text-lg">{listing.buildingName}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col sm:w-1/2">
                <p>Total Seats: {listing.seatsPerTable * listing.tablesAvailable} </p>
                <p>Open Hours: {}</p>
                <p>Price: {listing.pricePerSeat} / Seat</p>
                <p>Location: {listing.state}</p>
              </div>
              <div className="flex flex-col sm:w-1/2 sm:items-end sm:mt-0 mt-4">
                <div className="text-yellow-400">
                  {"★".repeat(5)} {"☆".repeat(5 - 4)}
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 sm:mt-0 mt-2 sm:w-auto">
                  Book Now
                </button>
                <Link to={`/workspace/${listing._id}/view`}>
                  <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100 sm:mt-2 mt-2 sm:w-auto">

                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default ListingCard;
