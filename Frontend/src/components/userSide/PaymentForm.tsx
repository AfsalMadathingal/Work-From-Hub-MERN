// PaymentForm.tsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { userAxiosInstance } from '../../services/instance/userInstance';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

const PaymentForm: React.FC = ({ activePlan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [email, setEmail] = useState('');
  const {user} = useSelector((state: RootState) => state.user);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    const { paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)!,
    });

    const response = await userAxiosInstance.post('/api/user/payment/create-subscription', {
      paymentMethodId: paymentMethod?.id,
      priceId: 'plan_Qo0MT9VBKdrqcB', 
      customerEmail: email,
    });

    const { clientSecret } = response.data;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: paymentMethod?.id,
    });

    if (result.error) {
      setError(result.error.message as string);
    } else {
      if (result.paymentIntent.status === 'succeeded') {

        console.log(result);
        
        setSucceeded(true);
      }
    }

    setProcessing(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Subscription Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {processing ? 'Processing...' : 'Subscribe'}
        </button>
        {error && <div className="text-red-500">{error}</div>}
        {succeeded && <div className="text-green-500">Subscription succeeded!</div>}
      </form>
    </div>
  );
};

export default PaymentForm;
