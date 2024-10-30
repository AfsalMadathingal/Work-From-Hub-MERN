import React, { useState } from 'react';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (reason: string) => void;
}



const CancelBookingModal : React.FC<DialogProps> =  ({ isOpen, onClose, onConfirm }) => {

  
  const [reason, setReason] = useState('');


  const handleConfirm = () => {
    onConfirm(reason);
    setReason('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-75 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-orange-500 dark:text-orange-400">Cancel Booking</h2>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300">Reason for Cancellation</label>
          <select
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          >
            <option value="">Select a reason</option>
            <option value="schedule_change">Schedule Change</option>
            <option value="no_longer_needed">No Longer Needed</option>
            <option value="other">Other</option>
          </select>
        </div>
        <p className="text-red-500 mb-4 dark:text-red-400">
          Note: A cancellation charge of 30% of the booking amount will be deducted.
        </p>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-orange-500 dark:bg-orange-400 text-white rounded-md hover:bg-orange-600 dark:hover:bg-orange-500"
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
