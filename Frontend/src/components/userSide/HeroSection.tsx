import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = function HeroSection() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault(); // prevent form submission
    // trigger navigation manually to the search page with the query
    navigate(`/workspace?search=${query}`, { state: { query } });
  };

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
        <h1 className="text-4xl font-bold text-white mb-8">
          Over 1000+ workspaces across 10+ states
        </h1>
        <div className="max-w-3xl mx-auto">
          <form className="flex" onSubmit={handleFormSubmit}>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search by city, state or town"
              className="flex-grow p-3 rounded-l-lg"
            />
            <button
              type="submit" // changed from Link to button
              className="bg-orange-500 text-white p-3 rounded-r-lg"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
