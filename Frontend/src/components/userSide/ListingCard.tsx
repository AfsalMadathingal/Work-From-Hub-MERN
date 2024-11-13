import React from "react";
import { IWorkspace } from "../../@types/workspace";
import { Link } from "react-router-dom";
import { MapPin, Clock, Users, CreditCard, Star } from 'lucide-react';

interface ListingCardProps {
  listing: IWorkspace;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-4 h-4 ${
              index < rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 md:h-full md:w-1/3 md:absolute md:left-0 md:top-0">
        {listing.photos && (
          <img
            src={listing.photos[0] as string}
            alt={listing.buildingName}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative md:ml-[33.333333%] p-6">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {listing.buildingName}
            </h3>
            <div className="flex items-center gap-2 mb-1">
              {renderStars(listing.rating)}
              <span className="text-sm text-gray-600 dark:text-gray-400">
                ({Number(listing.rating).toFixed(1)})
              </span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Users className="w-4 h-4" />
                <span className="text-sm">
                  {listing.seatsPerTable * listing.tablesAvailable} Total Seats
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">
                  Open: {listing.openHours}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">
                  ₹{listing.pricePerSeat} / Seat
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">
                  {listing.state}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <Link 
              to={`/workspace/${listing._id}/book`}
              className="flex-1"
            >
              <button className="w-full px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 
                hover:from-orange-600 hover:to-orange-700 
                text-white font-medium rounded-lg
                transform transition-all duration-300 
                hover:shadow-md active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                dark:focus:ring-offset-gray-800"
              >
                Book Now
              </button>
            </Link>
            <Link 
              to={`/workspace/${listing._id}/view`}
              className="flex-1"
            >
              <button className="w-full px-4 py-2.5 border-2 border-orange-500 
                text-orange-500 font-medium rounded-lg
                hover:bg-orange-50 dark:hover:bg-orange-900/20
                transform transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                dark:border-orange-400 dark:text-orange-400
                dark:focus:ring-offset-gray-800"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;