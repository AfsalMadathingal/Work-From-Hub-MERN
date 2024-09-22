
import React from 'react';
import SearchBar from './SearchBar';
import QuickFilters from './QuickFilters';
import Listings from './Listings';


const AllListings: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50 backdrop:blur-sm p-4 rounded-lg shadow-sm">
      <SearchBar onSearch={() => {}} />
      <div className="container mx-auto mt-10 flex flex-col sm:flex-row">
        {/* Sidebar */}
        <div className="w-full sm:w-1/4 m-2 ">
          <QuickFilters />
        </div>

        {/* Listings */}
        <div className="w-full sm:w-3/4 pl-6 sm:pl-10">
          <Listings />
        </div>
      </div>
    </div>
  );
};

export default AllListings;

