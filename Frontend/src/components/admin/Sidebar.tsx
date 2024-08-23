import React from 'react';
import { FaUsers, FaBook, FaLaptop, FaAddressCard, FaHeadset } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-white h-full w-64 flex flex-col">
      <div className="flex items-center flex-row justify-center h-16 shadow-md">
        <img className='h-20' src="/logo.png" alt="" />
      </div>
      <nav className="mt-10">
        <a href="#" className="flex items-center p-4 text-gray-800 hover:bg-orange-500 hover:text-white">
          <FaUsers className="mr-3" /> Users
        </a>
        <a href="#" className="flex items-center p-4 text-gray-800 hover:bg-orange-500 hover:text-white">
          <FaBook className="mr-3" /> Bookings
        </a>
        <a href="#" className="flex items-center p-4 text-gray-800 hover:bg-orange-500 hover:text-white">
          <FaLaptop className="mr-3" /> Workspace
        </a>
        <a href="#" className="flex items-center p-4 text-gray-800 hover:bg-orange-500 hover:text-white">
          <FaAddressCard className="mr-3" /> Membership
        </a>
        <a href="#" className="flex items-center p-4 text-gray-800 hover:bg-orange-500 hover:text-white">
          <FaHeadset className="mr-3" /> Support
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
