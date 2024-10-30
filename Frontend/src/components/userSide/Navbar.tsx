import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import ThemeToggle from "../ToggleDark";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 bg-white/70 backdrop-blur-sm py-4 shadow-md px-4 md:px-12 z-50 dark:bg-[#1A202C]">
      <div className="container mx-auto flex justify-between items-center">
        <img className="h-14" src="/logo.png" alt="Company Logo" />
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white"
          >
            Work Spaces
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white"
          >
            Login/Register
          </a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <ThemeToggle />
          <button className="bg-orange-500 text-white px-4 py-2 rounded dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900">
            Book a Seat
          </button>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600">
            Call Us
          </button>
        </div>
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with smooth animation */}
      <div
        className={`md:hidden bg-white shadow-lg mt-2 rounded-md overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } dark:bg-[#2D2D2D]`}
      >
        <nav className="flex flex-col space-y-4 px-4 py-2">
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white"
          >
            Work Spaces
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-white"
          >
            Login/Register
          </a>
          <div className="flex flex-col space-y-2">
            <ThemeToggle />
            <button className="bg-orange-500 text-white px-4 py-2 rounded dark:bg-gray-800 dark:text-white dark:hover:bg-gray-900">
              Book a Seat
            </button>
            <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600">
              Call Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
