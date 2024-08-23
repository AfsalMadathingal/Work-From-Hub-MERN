import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white/70 backdrop-blur-sm py-4 shadow-md px-12 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <img className='h-14' src="/logo.png" alt="" />
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
