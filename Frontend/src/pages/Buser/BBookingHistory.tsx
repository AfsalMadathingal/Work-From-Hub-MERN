import React, { useEffect } from 'react';
import BusinessUserLayout from '../../components/businessUser/BusinessUserLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/businessUserSlice';
import BBookingHistory from '../../components/businessUser/BBookingHistory';




const BUserBookingHistory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Bookings"));
  }, []);


  return (
    <div className="flex h-screen dark:bg-gray-900">
      <div className="flex-1 flex flex-col dark:bg-gray-900 h-screen">
        <BusinessUserLayout component={<BBookingHistory />} />
      </div>
    </div>
  );
};

export default BUserBookingHistory;
