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
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <BusinessUserLayout component={<BBookingHistory />} />
      </div>
    </div>
  );
};

export default BUserBookingHistory;
