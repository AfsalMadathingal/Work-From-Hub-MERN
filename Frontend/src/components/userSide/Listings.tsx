// components/Listings.tsx
import React, { useEffect } from 'react';
import ListingCard from './ListingCard';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { setLoading } from '../../redux/slices/userSlice';
import { getWorkspace } from '../../services/userServices';
import { IWorkspace } from '../../@types/workspace';



const Listings = () => {

    const [listings, setListings] = React.useState<IWorkspace[]>([]);
    const {loading } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const fetchListings = async () => {
      try {
        const response = await getWorkspace();

    
        if (response.status === 200) {
          setListings(response.data.data.approvedWorkspaces);
        } else {
          toast.error("Failed to fetch listings");
        }
      } catch (error ) {
        toast.error("An error occurred while fetching listings");
      } finally {
        dispatch(setLoading(false));
      }
    };


    useEffect(() => {
      fetchListings();
    }, []);

  return (
    <div className="space-y-6">
      {listings.map((listing, index) => (
        <ListingCard key={index} listing={listing} />
      ))}
      <button className="bg-orange-500 text-white px-4 py-3 rounded-lg w-full hover:bg-orange-600">
        View More
      </button>
    </div>
  );
};

export default Listings;

