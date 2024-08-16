import React from 'react'

const HeroSection = function HeroSection() {
    return (
<div className="relative bg-gray-100 py-16 px-4">
  <div className="absolute inset-0 z-0">
    <img
      src="/work-space-banner.png"
      alt=""
      className="w-full h-full object-cover scale-100"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>

  <div className="relative z-10 container mx-auto text-center">
    <h1 className="text-4xl font-bold text-white mb-8">Over 1000+ workspaces across 10+ states</h1>
    <div className="max-w-3xl mx-auto">
      <form className="flex">
        <input
          type="text"
          placeholder="Search by city, state or town"
          className="flex-grow p-3 rounded-l-lg"
        />
        <select className="p-3 border-l">
          <option>Duration</option>
          {/* Add duration options */}
        </select>
        <button type="submit" className="bg-orange-500 text-white p-3 rounded-r-lg">
          Search
        </button>
      </form>
    </div>
  </div>
</div>

    );
  }

export default HeroSection
