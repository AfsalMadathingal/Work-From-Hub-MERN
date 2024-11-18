import React, { useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { setLoading } from '../../redux/slices/userSlice';
import { getWorkspace } from '../../services/userServices';
import { IWorkspace } from '../../@types/workspace';
import ListingCard from './ListingCard';
import ListingCardSkeleton from './ListingCardSkeloton';
import NotFound from './NotFound';

interface Filters {
  search?: string;
  location?: string;
  ac?: string;
  restRoom?: string;
  powerBackup?: string;
  wifiAvailable?: string;
  rating?: string;
  price?: string;
}


const Listings: React.FC<{ filters: Filters }> = ({ filters }) => {
  const [listings, setListings] = useState<IWorkspace[]>([]);
  const { loading } = useSelector((state: RootState) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [listPerLoad] = useState(2);
  const dispatch = useDispatch();
  const prevFiltersRef = useRef(filters);

  const fetchListings = async (filters: Filters, page = 1) => {
    try {
      dispatch(setLoading(true));
      const response = await getWorkspace(page, filters, listPerLoad);
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      if (response?.status === 200) {

        const newWorkspaces = response.data.data.Workspaces || response.data.data;
        const total = response.data.data.totalPages;
        
        setListings((prevListings) => {
          return page === 1 ? newWorkspaces : [...prevListings, ...newWorkspaces];
        });
        setTotalPages(total);
      } else {
        toast.error("Failed to fetch listings");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while fetching listings");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchListings(filters, nextPage);
    } else {
      toast("No more listings to load");
    }
  };

  useEffect(() => {

    console.log(filters);
    
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    console.log(params);
    

    const changeInFilter: { [key: string]: string } = {};
    params.forEach((value, key) => {
      changeInFilter[key] = value;
    });
    if (prevFiltersRef.current !== filters) {
      setCurrentPage(1);
      setListings([]);
      fetchListings(changeInFilter, 1);
    }
    prevFiltersRef.current = filters;
    
  }, [filters]);

  return (
    <div className="relative">
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm z-10 rounded-lg">
          <div className="grid gap-4 md:gap-6 animate-pulse">
            <ListingCardSkeleton />
            <ListingCardSkeleton />
            <ListingCardSkeleton />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="space-y-4 md:space-y-6">
        {/* Empty State */}
        {listings.length === 0 && !loading && (
          <div className="flex items-center justify-center p-8">
            <NotFound />
          </div>
        )}

        {/* Listings Grid */}
        <div className="grid gap-4 md:gap-6">
          {listings?.map((listing) => (

            
            <div 
              key={listing.id}
              className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {currentPage < totalPages && !loading && (
          <div className="pt-4 md:pt-6">
            <button 
              onClick={handleLoadMore}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 
                hover:from-orange-600 hover:to-orange-700 
                dark:from-orange-600 dark:to-orange-700 
                dark:hover:from-orange-700 dark:hover:to-orange-800 
                text-white font-medium px-6 py-3 rounded-lg 
                transform transition-all duration-300 
                hover:shadow-md active:scale-[0.98]
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2
                dark:focus:ring-offset-gray-800"
            >
              <span className="flex items-center justify-center gap-2">
                View More
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
          </div>
        )}

        {/* Bottom Loading State */}
        {loading && (
          <div className="pt-4 md:pt-6">
            <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listings;