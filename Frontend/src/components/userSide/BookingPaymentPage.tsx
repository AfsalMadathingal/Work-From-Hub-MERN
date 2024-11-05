import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/slices/userSlice";
import toast from "react-hot-toast";
import {
  getAvailableSeats,
  getSingleWorkspace,
  reserveSeatAPI,
} from "../../services/userServices";
import { IWorkspace } from "../../@types/workspace";
import BookingPaymentForm from "./BookingPaymentForm";
import { RootState } from "../../redux/store/store";
import PaymentSuccessModal from "./PaymentSuccessModal";



const BookingPaymentPage = () => {
  const [couponCode, setCouponCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [workspace, setWorkspace] = useState<IWorkspace>();
  const [amount, setAmount] = useState(0); // You may want to set this based on your logic
  const [paymentModal, setPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { user } = useSelector((state: RootState) => state.user);


  const { id } = useParams();
const timerId = React.useRef<NodeJS.Timeout | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const seatId = searchParams.get("seatId");
  const seat = searchParams.get("seat");
  const date = searchParams.get("date");

  useEffect(() => {
    const startTimer = () => {
      timerId.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timerId.current!);
            navigate(-1); // Go back when timer expires
            toast.error("Seat reservation timed out. Please try again later.");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    };
  
  const fetchAvailableSeats = async ( id : string) => {
      try {
        dispatch(setLoading(true));
        const [workspaceResponse, seatsAvailableResponse] = await Promise.all([
          getSingleWorkspace(id),
          getAvailableSeats(id),
        ]);
  
        if (
          workspaceResponse?.status === 200 &&
          seatsAvailableResponse?.status === 200
        ) {
          // const seatData = seatsAvailableResponse.data.data;
  
  //         const availableSeatsArray = seatData
  //           .filter((seat :{ availability: {[key: string]: boolean}}) => !seat.availability[selectedDate])
  //           .map((seat : ISeat) => `${seat.tableNumber}-${seat.seatNumber}`);
  
  // ;
  
  //         const groupedTables = seatData.reduce((tables, seat) => {
  //           let table = tables.find((t) => t.tableNumber === seat.tableNumber);
  //           if (!table) {
  //             table = { tableNumber: seat.tableNumber, seats: [] };
  //             tables.push(table);
  //           }
  //           table.seats.push(seat);
  //           table.seats.sort((a, b) => a.seatNumber - b.seatNumber);
  //           return tables;
  //         }, []);
  
  
          setWorkspace(workspaceResponse.data.data);
          setAmount(workspaceResponse.data.data.pricePerSeat); // Assuming amount is based on workspace price
        }
      } catch (error) {
        console.error(error);
        toast.error("An error occurred. Please try again.");
      } finally {
        dispatch(setLoading(false));
      }
    };
  
    const reserveSeat = async () => {
      try {
        const response = await reserveSeatAPI(
          seatId as string,
          id as string,
          date as string
        );
  
        if (response?.status === 403) {
          navigate("/user/bookings");
        }
  
        if (response?.status === 404) {
          toast.error("The seat is already reserved.");
          navigate("/workspace");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to reserve seat. Please try again.");
      }
    };
    fetchAvailableSeats(id as string);
    reserveSeat();
    startTimer();
    return () => {
      if (timerId.current !== null) {
        clearInterval(timerId.current);
      }
    };
  }, [date, dispatch, id, navigate, seatId]);

  const closePaymentModal = () => {
    setPaymentModal(false);
  };



  const handleSuccess = () => {
    setPaymentSuccess(true);
    clearInterval(timerId.current!);
  };

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};;

  return (
    <>
      {paymentSuccess && (
        <PaymentSuccessModal
          visible={true}
          onClose={closePaymentModal}
          bookingDetails={{
            seatId: seatId as string,
            workspaceId: workspace?._id as string,
            date: date ?? '',
            amount,
          }}
        />
      )}

     {paymentModal && user && user.email && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity backdrop:blur">
        <BookingPaymentForm
          onSuccess={handleSuccess}
          onFinish={closePaymentModal}
          bookingDetails={{
            amount,
            customerEmail: user.email,
            userId: user._id!,
            seatId : seatId!,
            workspaceId: id!,
            date : date!,
          }}
        />
       </div>
     )}

      <div className="max-w-2xl mx-auto p-4 dark:bg-gray-800 shadow-lg rounded-lg">
        <div className="bg-gray-200 flex items-center mb-6 dark:bg-gray-700 rounded-lg p-5">
          <ArrowLeft
            onClick={() => navigate(-1)}
            className="w-6 h-6 mr-2 cursor-pointer text-orange-500"
          />
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
            {workspace ? workspace.buildingName : "Loading..."}
            <span className="text-gray-500 dark:text-gray-300">
              {" "}
              - {workspace ? workspace.state : "Loading..."}
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <p className="text-red-500">Time left: {formatTime(timeLeft)}</p>
          <p className="text-gray-500 dark:text-gray-400">
            Don't refresh this page or it will expire
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Booking Details
            </h2>
            <div className=" dark:bg-gray-700 p-4 rounded-lg mb-4">
              <p>
                <strong>Selected Seat:</strong> {seat}
              </p>
              <p>
                <strong>Date:</strong> {date}
              </p>
              <p>
                <strong>Timing:</strong> 2:00 PM - 4:00 PM
              </p>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Booking Summary
            </h2>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex justify-between mb-2">
                <span>{seat}</span>
                <span>RS : {workspace?.pricePerSeat}</span>
              </div>
              <div className="border-t border-gray-300 my-2"></div>
              <div className="flex justify-between font-semibold">
                <span>Subtotal</span>
                <span>RS : {workspace?.pricePerSeat}</span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">
                Coupon & Voucher
              </h3>
              <div className="flex">
                <input
                  type="text"
                  className="flex-grow border rounded-l-lg px-3 py-2 dark:bg-gray-600 dark:text-white"
                  placeholder="Enter code here"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className="bg-orange-500 text-white px-4 py-2 rounded-r-lg">
                  Apply
                </button>
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 dark:bg-yellow-200 p-4 rounded-lg">
              <div className="flex justify-between font-semibold text-gray-800 dark:text-gray-900">
                <span>Amount Payable</span>
                <span>RS {workspace?.pricePerSeat}</span>
              </div>
            </div>

            <button
              className="w-full bg-orange-500 text-white py-3 rounded-lg mt-4 font-semibold"
              onClick={() => setPaymentModal(true)}
            >
              ₹ Proceed
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPaymentPage;
