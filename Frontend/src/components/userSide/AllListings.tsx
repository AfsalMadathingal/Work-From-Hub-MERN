import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import QuickFilters, { FilterState } from './QuickFilters';
import Listings from './Listings';
import toast from 'react-hot-toast';





const AllListings: React.FC = () => {
const [filters, setFilters] = useState<Partial<FilterState>>({});

  // Function to update filters
  const handleFilterChange = (newFilters: Partial<FilterState>) => {
console.log('======================newFilters==============');
console.log(newFilters);
console.log('====================================');
  
if(newFilters.search){

  delete newFilters.all
}
    
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));

    // Update the URL parameters without refreshing the page
 const param = Object.keys(newFilters)
   .map((key) => `${key}=${newFilters[key as keyof FilterState]}`)
   .join('&');

    window.history.pushState({}, '', `?${param}`);



  };

  // Set initial filters based on URL query params
  useEffect(() => {
    
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);


    // Convert URLSearchParams to an object and set as initial filters
    // Convert URLSearchParams to an object and set as initial filters
    const initialFilters: { [key: string]: string } = {};
    params.forEach((value, key) => {
      initialFilters[key] = value;
    });
    // Set filters if query params exist
    if (Object.keys(initialFilters).length > 0) {
      setFilters(initialFilters);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Section with Glass Effect */}
        <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-4 mb-8">
          <SearchBar
          onSearch={(searchQuery) => handleFilterChange({ ...filters, search: searchQuery } as Partial<FilterState>)}
            defaultValue={filters.search || ''}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Panel */}
          <div className="w-full lg:w-1/4">
            <div className="sticky top-8">
              <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-4">
                <QuickFilters onFilterChange={handleFilterChange} />
              </div>
            </div>
          </div>

          {/* Listings Area */}
          <div className="w-full lg:w-3/4">
            <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg p-4">
              <Listings filters={filters} />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-orange-200 dark:bg-gray-600 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-orange-300 dark:bg-gray-500 rounded-full blur-3xl opacity-20"></div>
      </div>
    </div>
  );
};

export default AllListings;