import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';
import AdminBookingHistory from '../../components/admin/BookingHistory';
import BookingDetails from '../../components/admin/BookingDetails';



const BookingDetailsPage = () => {
    const [booking, setBooking] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Booking Details"));
  }, []);


  useEffect(() => {
    // Replace with your API call to fetch booking data
    const fetchBooking = async () => {
      const response = await fetch('/api/bookings/670685ae79d5e170ebf104c0'); // Replace with actual endpoint
      const data = await response.json();
      setBooking(data);
    };

    fetchBooking();
  }, []);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<BookingDetails />} />
      </div>
    </div>
  );
};

export default BookingDetailsPage;
