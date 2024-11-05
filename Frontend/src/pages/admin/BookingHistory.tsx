import { useEffect } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/slices/adminSlice';
import AdminBookingHistory from '../../components/admin/BookingHistory';



const BookingHistory = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle("Booking History"));
  }, [dispatch]);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <AdminLayout component={<AdminBookingHistory />} />
      </div>
    </div>
  );
};

export default BookingHistory;
