import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { userAxiosInstance } from "../../services/instance/userInstance";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import toast from "react-hot-toast";
import { setModal } from "../../redux/slices/userSlice";
import ReactLoading from "react-loading";
import { createPaymentIntentForBooking, updateBookingStatus, updatePaymentStatus } from "../../services/userServices";
import { PRIMARY_COLOR } from "../../constant/colors";
import { FaCheck } from "react-icons/fa";

interface BookingPaymentFormProps {
  bookingDetails: {
    amount: number; // The amount for the booking
    customerEmail: string; // Customer's email for payment
    seatId: string; // The seat ID for the booking
    workspaceId: string; // The workspace ID for the booking
    date: string;
  };
  onFinish: () => void;
  onSuccess: () => void;
}

const BookingPaymentForm: React.FC<BookingPaymentFormProps> = ({ bookingDetails , onSuccess , onFinish}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const user = useSelector((state: RootState) => state.user.user as IUsers);
  const dispatch = useDispatch();
  const [isPaymentStarted, setIsPaymentStarted] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    toast.info("Processing your booking, please do not close this tab or refresh the page.");
    setProcessing(true);
    try {
      if (!stripe || !elements) {
        return;
      }

      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)!,
      });

      const response = await createPaymentIntentForBooking(bookingDetails.seatId, bookingDetails.workspaceId, bookingDetails.date);

      const stripeResponse = response.data.data.paymentIntent;

      const { client_secret } = stripeResponse;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: paymentMethod?.id,
      });

      if (result.error) {
        setError("Payment failed, please try again");
        toast.error("Payment failed, please try again");
        setProcessing(false);
        setPaymentSuccess(false);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setIsPaymentStarted(true);
         const response = await updateBookingStatus(result, user, bookingDetails, stripeResponse);
         ;
         ;
         ;
          setSucceeded(true);
          toast.success("Booking Payment Successful");
          setIsPaymentStarted(false);
          setPaymentSuccess(true);
          onSuccess();
          onFinish();

        }else{
          toast.error("Payment Failed, Please Try Again");
        }
      }

      setProcessing(false);
    } catch (error) {
      ;
      setProcessing(false);
      toast.error("Payment Failed, Please Try Again");
   
    }
  };

  return (
    <>
      {isPaymentStarted ? (
        <div className="text-center flex flex-col justify-center items-center max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md sm:px-6 md:px-8">
            {paymentSuccess ? 
            <FaCheck className="h-12 w-12 text-green-500 mb-4" /> : 
          <ReactLoading
            type="spinningBubbles"
            color={PRIMARY_COLOR}
            height={100}
            width={100}
          />
          }
          <p className="mt-4 text-lg font-semibold">
           {paymentSuccess ? "Payment Successful"
            
           : "Processing your booking, please do not close this tab or refresh the page."}

          </p>
          {paymentSuccess &&
            
         <button onClick={onFinish} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Close </button>}
          
        </div>
      ) : (
        <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md sm:px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
            Complete Your Booking
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={bookingDetails.customerEmail}
                onChange={(e) => (bookingDetails.customerEmail = e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
                className="py-2"
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Amount:</span>
              <span className="text-lg text-blue-500">${bookingDetails.amount.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              disabled={!stripe || processing}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
            >
              {processing ? "Processing..." : "Pay Now"}
            </button>
            {error && <div className="text-red-500 items-center justify-center flex">{error}</div>}
            {succeeded && (
              <div className="text-green-500">Booking payment succeeded!</div>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default BookingPaymentForm;
