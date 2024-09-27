import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/userSlice";
import { toast } from "react-toastify";
import {
  getAvailableSeats,
  getSingleWorkspace,
  reserveSeatAPI,

} from "../../services/userServices";
import { IWorkspace } from "../../@types/workspace";

const BookingPaymentPage = () => {
  const [couponCode, setCouponCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [workspace, setWorkspace] = useState<IWorkspace>();
  const [availableSeats, setAvailableSeats] = useState([]);
  const [tables, setTables] = useState([]);

  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const seatId = searchParams.get("seatId");
  const seat = searchParams.get("seat");
  const date = searchParams.get("date");
  // const id = searchParams.get("id"); // Assuming you need this for API calls

  useEffect(() => {
    reserveSeat();
    fetchAvailableSeats(date, seatId, id);
    startTimer();

    return () => clearInterval(timerId.current);
  }, []);

  const timerId = React.useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerId.current);
          navigate(-1); // Go back when timer expires
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const fetchAvailableSeats = async (selectedDate, seatId, id) => {
    try {
      dispatch(setLoading(true));
      const [workspaceResponse, seatsAvailableResponse] = await Promise.all([
        getSingleWorkspace(id),
        getAvailableSeats(id)
      ]);

      if (workspaceResponse.status === 200 && seatsAvailableResponse.status === 200) {
        const seatData = seatsAvailableResponse.data.data;

        const availableSeatsArray = seatData
          .filter((seat) => !seat.availability[selectedDate])
          .map((seat) => `${seat.tableNumber}-${seat.seatNumber}`);

        setAvailableSeats(availableSeatsArray);

        const groupedTables = seatData.reduce((tables, seat) => {
          let table = tables.find((t) => t.tableNumber === seat.tableNumber);
          if (!table) {
            table = { tableNumber: seat.tableNumber, seats: [] };
            tables.push(table);
          }
          table.seats.push(seat);
          table.seats.sort((a, b) => a.seatNumber - b.seatNumber);
          return tables;
        }, []);

        setTables(groupedTables);
        setWorkspace(workspaceResponse.data.data);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const reserveSeat = async () => {
    try {
      await reserveSeatAPI(seatId as string, id as string, date as string);
      toast.success("Seat reserved successfully!");
      // Handle successful reservation (e.g., navigate to confirmation page)
    } catch (error) {
      toast.error("Failed to reserve seat. Please try again.");
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-6 bg-gray-200 rounded-lg p-5">
        <ArrowLeft
          onClick={() => navigate(-1)}
          className="w-6 h-6 mr-2 cursor-pointer text-orange-500"
        />
        <h1 className="text-lg font-semibold">
          {workspace ? workspace.buildingName: "Loading..."}
          <span className="text-gray-500"> - {workspace ? workspace.state: "Loading..."}</span>
        </h1>
      </div>
      <div className="flex justify-center p-4">
        <p className="text-red-500">Time left: {formatTime(timeLeft)}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p><strong>Selected Seat:</strong> {seat}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Timing:</strong> 2:00 PM - 4:00 PM</p>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span>{seat}</span>
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

          <button 
            className="w-full bg-orange-500 text-white py-3 rounded-lg mt-4 font-semibold"
            onClick={reserveSeat}
          >
            ₹ Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPaymentPage;