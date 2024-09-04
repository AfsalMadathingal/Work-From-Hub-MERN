import React, { useState } from 'react'
import { FaAddressCard, FaBook, FaSignOutAlt, FaUser, FaWallet } from 'react-icons/fa';
import { EditIcon, EyeIcon, PencilIcon } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

const ProfileSidebar = () => {

    const { user } = useSelector((state: RootState) => state.user);

    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };

  return (
    <>
     <aside className={`bg-white shadow-md mt-5 ms-56 rounded-lg p-4 transition-transform ${isSidebarOpen ? 'transform-none' : '-translate-x-full lg:translate-x-0'} lg:w-60 lg:block`}>
          <div className="flex  flex-col justify-center items-center ">
            <img src={user?.profilePic} className="w-26 h-26 rounded-full object-cover" alt="" />
            <div className="flex flex-col mt-4">
              <button className="text-gray-600 hover:text-orange-500 flex items-center">
                <EditIcon className="mr-2" />
                Edit Profile Pic
              </button>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center">
            <p className="text-lg font-semibold">{user?.fullName}</p>
            <p className="text-gray-600 text-small">{user?.email}</p>
          </div>
          <div className="mt-6 space-y-2">
            <button className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
              <FaUser className="mr-2" />
              Profile
            </button>
            <button className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
              <FaBook className="mr-2" />
              Bookings
            </button>
            <button className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
              <FaAddressCard className="mr-2" />
              Membership
            </button>
            <button className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
              <FaWallet className="mr-2" />
              Wallet
            </button>
            <button className="w-full border border-gray-300 text-gray-600 hover:text-orange-500 py-2 px-4 rounded-lg flex items-center">
              <FaSignOutAlt className="mr-2" />
              Logout
            </button>
          </div>
        </aside>

        {/* Toggle button for smaller screens */}
        <button onClick={toggleSidebar} className="lg:hidden p-2 text-orange-500 focus:outline-none fixed top-4 left-4 z-20">
          ☰
        </button>
    </>
  )
}

export default ProfileSidebar
