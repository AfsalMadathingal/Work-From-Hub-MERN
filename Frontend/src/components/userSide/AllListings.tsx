import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import QuickFilters from './QuickFilters';
import Listings from './Listings';

const AllListings: React.FC = () => {
  const [filters, setFilters] = useState({});

  // This function updates the filters when changes happen
  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  // Clear filters on component mount
  useEffect(() => {
    setFilters({});
  }, []);

  return (
    <div className="min-h-screen bg-orange-50 backdrop:blur-3xl p-4 rounded-lg shadow-xl">
      {/* Pass search handler to SearchBar */}
      <SearchBar onSearch={(searchQuery) => handleFilterChange({ search: searchQuery })} />
      <div className="container mx-auto mt-10 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/4 m-2 ">
          {/* Pass the filter change handler to QuickFilters */}
          <QuickFilters onFilterChange={handleFilterChange} />
        </div>
        <div className="w-full sm:w-3/4 pl-6 sm:pl-10">
          {/* Pass the current filters to Listings */}
          <Listings filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default AllListings;
