import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="bg-white py-4 shadow-md px-12">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">Work From Hub</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-orange-500">Work Spaces</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">About us</a>
          <a href="#" className="text-gray-700 hover:text-orange-500">Login/Register</a>
        </nav>
        <div className="space-x-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Book a seat</button>
          <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">Call Us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;