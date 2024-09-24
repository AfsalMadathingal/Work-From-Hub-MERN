import React, { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { getAvailableSeats, getSingleWorkspace } from '../../services/userServices';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/slices/userSlice';


const BookingPaymentPage = () => {
const [couponCode, setCouponCode] = useState('');
const {id , seatId , date } = useParams();
const dispatch = useDispatch();



const fetchAvailableSeats = async (selectedDate: string) => {
    try {
      dispatch(setLoading(true));
      const workspaceResponse = await getSingleWorkspace(id as string);
      const seatsAvailableResponse = await getAvailableSeats(id as string);

      if (workspaceResponse.status === 200 && seatsAvailableResponse.status === 200) {
        const seatData = seatsAvailableResponse.data.data;

        const availableSeatsArray = seatData
          .filter((seat: any) => !seat.availability[selectedDate])
          .map((seat: any) => `${seat.tableNumber}-${seat.seatNumber}`);

        setAvailableSeats(availableSeatsArray);

        const groupedTables = seatData.reduce((tables: any[], seat: any) => {
          let table = tables.find((t) => t.tableNumber === seat.tableNumber)
          if (!table) {
            table = { tableNumber: seat.tableNumber, seats: [] };
            tables.push(table);
          }
          table.seats.push(seat);
          table.seats.sort((a, b) => a.seatNumber - b.seatNumber);
          return tables;
        }, [])

        setTables(groupedTables);
        setWorkspace(workspaceResponse.data.data);
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      toast.error("An error occurred. Please try again.");
    }
  };


useEffect(() => {
  console.log(id, seatId);
}, []);


  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-6">
        <ArrowLeft 
        onClick={() => window.history.back()}
        className="w-6 h-6 mr-2 cursor-pointer" />
        <h1 className="text-lg font-semibold">Kinfra Industrial Park Building No 12</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p><strong>Selected Seat:</strong> { `Table ${seatId?.split('-')[0]} - Seat ` }{seatId?.split('-')[1]}</p>
            <p><strong>Date:</strong> {date} </p>
            <p><strong>Timing:</strong> 2:00 PM - 4:00 PM</p>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span> { `Table ${seatId?.split('-')[0]} - Seat ` }{seatId?.split('-')[1]}</span>
              <span>RS : 110</span>
            </div>
            <div className="border-t border-gray-300 my-2"></div>
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>RS : 110</span>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Coupon & Voucher</h3>
            <div className="flex">
              <input
                type="text"
                className="flex-grow border rounded-l-lg px-3 py-2"
                placeholder="Enter code here"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg">
                Apply
              </button>
            </div>
          </div>

          <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
            <div className="flex justify-between font-semibold">
              <span>Amount Payable</span>
              <span>RS 110</span>
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-lg mt-4 font-semibold">
            ₹ Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPaymentPage;