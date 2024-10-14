import React, { useState } from 'react';

const BookingDetailsModal = ({ booking , onClose  }) => {


  return (
    <>

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Booking Details</h2>
              <button 
              onClick={onClose}
              className="text-red-500">
                X
              </button>
            </div>
            <div className="space-y-4">
              {/* Displaying booking details */}
              <div>
                <strong>Date: </strong>
                {new Date(booking.date).toDateString()}
              </div>
              <div>
                <strong>Workspace: </strong>
                {booking.workspaceId.buildingName}, {booking.workspaceId.street},{' '}
                {booking.workspaceId.district}, {booking.workspaceId.state}, {booking.workspaceId.pinCode}
              </div>
              <div>
                <strong>Table: </strong>
                {booking.seatId.tableNumber}, <strong>Seat: </strong>
                {booking.seatId.seatNumber}
              </div>
              <div>
                <strong>Price: </strong>₹{booking.amount}
              </div>
              <div>
                <strong>Payment Status: </strong>
                {booking.paymentStatus}
              </div>
              <div>
                <strong>Payment Method: </strong>
                {booking.paymentMethod}
              </div>
            </div>

            {/* Button to close the modal */}
            <div className="mt-4">
              <button
                onClick={onClose}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>

    </>
  );
};

export default BookingDetailsModal;
