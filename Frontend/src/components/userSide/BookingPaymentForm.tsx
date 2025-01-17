import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";
import { createPaymentIntentForBooking, updateBookingStatus } from "../../services/userServices";
import { PRIMARY_COLOR } from "../../constant/colors";
import { FaCheck, FaCreditCard, FaLock, FaTimes } from "react-icons/fa";
import { IUsers } from "../../@types/user";

interface BookingPaymentFormProps {
  bookingDetails: {
    userId: string;
    amount: number;
    customerEmail: string;
    seatId: string;
    workspaceId: string;
    date: string;
  };
  onFinish: () => void;
  onSuccess: () => void;
}

const BookingPaymentForm: React.FC<BookingPaymentFormProps> = ({
  bookingDetails,
  onSuccess,
  onFinish,
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const user = useSelector((state: RootState) => state.user.user as IUsers);
  const [isPaymentStarted, setIsPaymentStarted] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    toast("Processing your booking, please do not close this tab or refresh the page.");
    setProcessing(true);
    try {
      if (!stripe || !elements) {
        return;
      }

      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)!,
      });

      const response = await createPaymentIntentForBooking(
        bookingDetails.seatId,
        bookingDetails.workspaceId,
        bookingDetails.date
      );

      const stripeResponse = response?.data.data.paymentIntent;
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
          await updateBookingStatus(
            result,
            user,
            { ...bookingDetails, date: new Date(bookingDetails.date) },
            stripeResponse
          );

          setSucceeded(true);
          toast.success("Booking Payment Successful");
          setIsPaymentStarted(false);
          setPaymentSuccess(true);
          onSuccess();
          onFinish();
        } else {
          toast.error("Payment Failed, Please Try Again");
        }
      }

      setProcessing(false);
    } catch (error) {
      console.error(error);
      setProcessing(false);
      toast.error("Payment Failed, Please Try Again");
    }
  };

  if (isPaymentStarted) {
    return (
      <div className="text-center flex flex-col justify-center items-center max-w-lg w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-200">
        {paymentSuccess ? (
          <FaCheck className="h-12 w-12 text-green-500 mb-4" />
        ) : (
          <ReactLoading
            type="spinningBubbles"
            color={PRIMARY_COLOR}
            height={100}
            width={100}
          />
        )}
        <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
          {paymentSuccess
            ? "Payment Successful"
            : "Processing your booking, please do not close this tab or refresh the page."}
        </p>
        {paymentSuccess && (
          <button
            onClick={onFinish}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-lg w-full mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-colors duration-200">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <FaCreditCard className="h-6 w-6 text-blue-500" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Complete Your Booking
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={bookingDetails.customerEmail}
            onChange={(e) => (bookingDetails.customerEmail = e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                     focus:border-transparent transition-colors duration-200"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Card Details
          </label>
          <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-white dark:bg-gray-700 transition-colors duration-200">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#1f2937',
                    '::placeholder': {
                      color: '#6b7280',
                    },
                    backgroundColor: 'transparent',
                  },
                  invalid: {
                    color: '#ef4444',
                    iconColor: '#ef4444',
                  },
                },
              }}
              className="py-2"
            />
          </div>
        </div>

        <div className="flex justify-between items-center px-2 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <span className="text-gray-600 dark:text-gray-300">Total Amount</span>
          <span className="text-lg font-semibold text-blue-500 dark:text-blue-400">
            ₹{bookingDetails.amount.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <FaLock className="h-4 w-4 mr-2" />
          <span>Your payment information is secure</span>
        </div>

        <button
          type="submit"
          disabled={!stripe || processing}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white
                     flex items-center justify-center space-x-2
                     ${
                       processing || !stripe
                         ? 'bg-gray-400 cursor-not-allowed'
                         : 'bg-green-500 hover:bg-green-600'
                     } transition-colors duration-200`}
        >
          {processing ? (
            <>
              <ReactLoading type="spin" height={20} width={20} color="#ffffff" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <FaCreditCard className="h-5 w-5" />
              <span>Pay ₹{bookingDetails.amount.toFixed(2)}</span>
            </>
          )}
        </button>
        <button  onClick={onFinish} className="w-full py-3 px-4 rounded-lg font-medium text-white bg-red-500 hover:bg-red-600 transition-colors duration-200">
          <span>Cancel</span>
        </button>

        {error && (
          <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-600 dark:text-red-400 text-center">{error}</p>
          </div>
        )}
        
        {succeeded && (
          <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-600 dark:text-green-400 text-center">
              Payment succeeded!
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingPaymentForm;