import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'; // Importing a hamburger icon
import { MdClose } from 'react-icons/md'; // Importing a close icon

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white/70 backdrop-blur-sm py-4 shadow-md px-4 md:px-12 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img className='h-14' src="/logo.png" alt="Company Logo" />
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-orange-500">Work Spaces</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">About Us</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">Login/Register</a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Book a Seat</button>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">Call Us</button>
        </div>
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 rounded-md">
          <nav className="flex flex-col space-y-4 px-4 py-2">
            <a href="#" className="text-gray-700 hover:text-orange-500">Work Spaces</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">About Us</a>
            <a href="#" className="text-gray-700 hover:text-orange-500">Login/Register</a>
            <div className="flex flex-col space-y-2">
              <button className="bg-orange-500 text-white px-4 py-2 rounded">Book a Seat</button>
              <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">Call Us</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
