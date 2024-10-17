import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import QuickFilters from './QuickFilters';
import Listings from './Listings';

const AllListings: React.FC = () => {
  const [filters, setFilters] = useState({});

  // Function to update filters
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));

    // Update the URL parameters without refreshing the page
    const param = Object.keys(newFilters)
      .map((key) => `${key}=${newFilters[key]}`)
      .join('&');

    window.history.pushState({}, '', `?${param}`);
  };

  // Set initial filters based on URL query params
  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    // Convert URLSearchParams to an object and set as initial filters
    const initialFilters = {};
    params.forEach((value, key) => {
      initialFilters[key] = value;
    });

    // Set filters if query params exist
    if (Object.keys(initialFilters).length > 0) {
      setFilters(initialFilters);
    }
  }, []); // Runs only on component mount

  return (
    <div className="min-h-screen bg-orange-50 backdrop:blur-3xl p-4 rounded-lg shadow-xl">
      <SearchBar
        onSearch={(searchQuery) => handleFilterChange({ search: searchQuery })}
        defaultValue={filters.search || ''} // To keep search input filled with the query
      />
      <div className="container mx-auto mt-10 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/4 m-2 ">
          <QuickFilters onFilterChange={handleFilterChange} />
        </div>
        <div className="w-full sm:w-3/4 pl-6 sm:pl-10">
          <Listings filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default AllListings;
