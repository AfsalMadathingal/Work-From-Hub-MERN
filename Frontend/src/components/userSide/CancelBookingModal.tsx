import React, { useState } from 'react';

const CancelBookingModal = ({ isOpen, onClose, onConfirm }) => {
  const [reason, setReason] = useState('');

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleConfirm = () => {
    onConfirm(reason);
    setReason('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-orange-500">Cancel Booking</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Reason for Cancellation</label>
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={reason}
            onChange={handleReasonChange}
          >
            <option value="">Select a reason</option>
            <option value="schedule_change">Schedule Change</option>
            <option value="no_longer_needed">No Longer Needed</option>
            <option value="other">Other</option>
          </select>
        </div>
        <p className="text-red-500 mb-4">
          Note: A cancellation charge of 30% of the booking amount will be deducted.
        </p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelBookingModal;
