import React from 'react'

const  Header = ()=> {
    return (
      <header className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">Work From HUB</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-orange-500">Become a Member</a>
            <a href="#">View all Workspace</a>
            <a href="#">Call us for Help</a>
            <button className="bg-white border border-gray-300 rounded-full px-4 py-2">Profile</button>
          </nav>
          {/* Add a mobile menu button for small screens */}
        </div>
      </header>
    );
  }
export default Header
