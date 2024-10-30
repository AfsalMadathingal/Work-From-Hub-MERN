import React, { useState, useEffect } from 'react';
import { IUsers } from '../../@types/user';



const UserProfileDialog : React.FC<{ user: IUsers; setUserDetailsModal: React.Dispatch<React.SetStateAction<boolean>> }> = ({ user: { fullName, isBlocked, email, createdAt, profilePic }, setUserDetailsModal }) => {

  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setShowDialog(true);
    setTimeout(() => setIsVisible(true), 10); // Trigger transition after a slight delay
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowDialog(false);
      setUserDetailsModal(false);
    }, 300); // Duration should match the CSS transition time
  };

  if (!showDialog) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 w-96 transform transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        {/* Image Section */}
        <div className="flex justify-center mb-4">
          <img src={profilePic} alt="User" className="w-20 h-20 rounded-full object-cover" />
        </div>
        {/* Name, Email, Account Status, Date Joined */}
        <div className="text-center">
          <h2 className="text-lg font-semibold">{fullName}</h2>
          <p className="text-gray-600">{email}</p>
          <div className="mt-4">
            <p className="text-sm text-gray-500">
              <strong>Account Status:</strong> {isBlocked ? 'Blocked' : 'Active'}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Date Joined:</strong> {createdAt?.slice(0, 10)}
            </p>
          </div>
        </div>
        {/* Close Button */}
        <div className="flex justify-center mt-6">
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none transition ease-in-out"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDialog;
