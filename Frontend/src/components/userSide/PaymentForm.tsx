import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { userAxiosInstance } from "../../services/instance/userInstance";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import toast from "react-hot-toast";
import { setModal } from "../../redux/slices/userSlice";
import ReactLoading from "react-loading";
import { updatePaymentStatus } from "../../services/userServices";
import { PRIMARY_COLOR } from "../../constant/colors";
import { IUsers } from "../../@types/user";

interface PaymentFormProps {
  activePlan: {
    stripeId: string;
  };
}

const PaymentForm: React.FC<PaymentFormProps> = ({ activePlan }) => {

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [email, setEmail] = useState("");
  const user = useSelector((state: RootState) => state.user.user as IUsers);
  const [isPaymentStarted, setIsPaymentStarted] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);
    try {
      if (!stripe || !elements) {
        return;
      }
  
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)!,
      });
  
      const response = await userAxiosInstance.post(
        "/api/user/payment/create-subscription",
        {
          paymentMethodId: paymentMethod?.id,
          priceId: activePlan?.stripeId,
          customerEmail: email,
        }
      );
  
      const stripeResponse = response.data.data;

      ;
  
      const { clientSecret } = response.data.data;
  
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod?.id,
      });
  
      if (result.error) {
        setError(result.error.message as string);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setIsPaymentStarted(true);
          await updatePaymentStatus(result,user,stripeResponse)
          setSucceeded(true);
          toast.success("Subscription Successful");
          dispatch(setModal(false));
        }
      }
  
      setProcessing(false);
    } catch (error) {
      console.log(error);
      setProcessing(false);
      toast.error("Payment Failed Try again");
    }

    
  };

  return (
    <>
      {isPaymentStarted ? (
        <div className="text-center flex flex-col justify-center items-center max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md sm:px-6 md:px-8">
          <ReactLoading
            type="spinningBubbles"
            color={PRIMARY_COLOR}
            height={100}
            width={100}
          />
          <p className="mt-4 text-lg font-semibold">
            Creating payment, please do not close this tab or refresh the page.
          </p>
        </div>
      ) : (
        <div className="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md sm:px-6 md:px-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Enter Your Details Carefully 
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <button
              type="submit"
              disabled={!stripe || processing}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150"
            >
              {processing ? "Processing..." : "Subscribe"}
            </button>
            {error && <div className="text-red-500">{error}</div>}
            {succeeded && (
              <div className="text-green-500">Subscription succeeded!</div>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default PaymentForm;
