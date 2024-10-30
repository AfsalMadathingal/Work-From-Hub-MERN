import React, { useEffect, useState, useRef } from 'react';
import ListingCard from './ListingCard';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { setLoading } from '../../redux/slices/userSlice';
import { getWorkspace } from '../../services/userServices';
import { IWorkspace } from '../../@types/workspace';
import ListingCardSkeleton from './ListingCardSkeloton';
import NotFound from './NotFound';

const Listings: React.FC<{ filters: any }> = ({ filters }) => {
  const [listings, setListings] = useState<IWorkspace[]>([]);
  const { loading } = useSelector((state: RootState) => state.user);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [listPerLoad] = useState(2); 
  const dispatch = useDispatch();
  const prevFiltersRef = useRef(filters);

  const fetchListings = async (filters: any, page = 1) => {
    try {
      dispatch(setLoading(true));
      const response = await getWorkspace(page, filters, listPerLoad);
      await new Promise((resolve) => setTimeout(resolve, 300)); 

      if (response.status === 200) {
        const newWorkspaces = response.data.data.approvedWorkspaces || response.data.data;
        const total = response.data.data.totalPages;

        setListings((prevListings) => {
          return page === 1 ? newWorkspaces : [...prevListings, ...newWorkspaces];
        });
        setTotalPages(total); 
      } else {
        toast.error("Failed to fetch listings");
      }
    } catch (error) {
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
      toast.info("No more listings to load");
    }
  };

  useEffect(() => {

    if (prevFiltersRef.current !== filters) {
      setCurrentPage(1);
      setListings([]); 
      fetchListings(filters, 1);
    }
    prevFiltersRef.current = filters; 
  }, [filters]);

  return (
<>
  {loading && <ListingCardSkeleton />}
  <div className="space-y-6">
    {listings.length === 0 && !loading && <NotFound />}
    {listings?.map((listing) => (
      <ListingCard key={listing.id} listing={listing} />
    ))}
    {loading && <ListingCardSkeleton />}
    {currentPage < totalPages && !loading && (
      <button 
        onClick={handleLoadMore}
        className="bg-orange-500 text-white px-4 py-3 rounded-lg w-full hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700"
      >
        View More
      </button>
    )}
  </div>
</>

  );
};

export default Listings;
