import React from 'react';
import { FaCamera, FaLock } from 'react-icons/fa';

const ProfileManagement = () => {
  const userData = {
    email: "afsalmdtl@gmail.com",
    fullName: "afsal madathingal",
    profilePic: "https://www.svgrepo.com/show/192247/man-user.svg",
    role: "businessUser"
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-orange-500 mb-6">Profile Management</h1>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={userData.profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-orange-500"
              />
              <button className="absolute bottom-0 right-0 rounded-full p-2 bg-orange-500 hover:bg-orange-600 text-white">
                <FaCamera size={16} />
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{userData.fullName}</h3>
              <p className="text-sm text-gray-300">{userData.role}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm text-gray-300">Email</label>
              <input
                type="email"
                value={userData.email}
                disabled
                className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
              />
            </div>

            <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              <FaLock size={16} />
              <span>Change Password</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagement;