import React, { useEffect, useState } from 'react';
import ListingCard from './ListingCard';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { setLoading } from '../../redux/slices/userSlice';
import { getWorkspace } from '../../services/userServices';
import { IWorkspace } from '../../@types/workspace';
import ListingCardSkeloton from './ListingCardSkeloton';
import NotFound from './NotFound';

const Listings = ({ filters }) => {
  const [listings, setListings] = React.useState<IWorkspace[]>([]);
  const { loading } = useSelector((state: RootState) => state.user);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);
  const [listPerLoad] = React.useState(2); // you might not need to set this via state unless you're changing it
  const dispatch = useDispatch();

  const fetchListings = async (filters, page = 1) => {
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
        setTotalPages(total); // Assuming the total pages is coming from the response
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
      console.log('====================================');
      console.log(currentPage,totalPages);
      console.log('====================================');
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchListings(filters, nextPage);
    } else {
      toast.info("No more listings to load");
    }
  };

  useEffect(() => {
    // Reset the page to 1 when filters change and fetch the listings again
    setCurrentPage(1);
    fetchListings(filters, 1);
  }, [filters]);


  return (
    <>
      {loading && <ListingCardSkeloton />}
      <div className="space-y-6">
        {listings.length === 0 && !loading && (
          <NotFound />
        )}
        {listings?.map((listing, index) => (
          <ListingCard key={index} listing={listing} />
        ))}
        {loading && <ListingCardSkeloton />}
        {currentPage < totalPages && (
          <button 
            onClick={handleLoadMore}
            className="bg-orange-500 text-white px-4 py-3 rounded-lg w-full hover:bg-orange-600"
          >
            View More
          </button>
        )}
      </div>
    </>
  );
};

export default Listings;
