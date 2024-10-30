import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { subscribe } from '../../services/userServices';

const stripePromise = loadStripe('pk_test_51PrLlsJ81CC0EUamqlqyxwGyK1OuoeEbrosuqhz7RJW8YULurzjV5QZEcdNufrgA9bChqPa2309wzTPT75cvkREr00aCMvRrIR');

const PaymentForm: React.FC = ({ userId, planId }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = subscribe(userId, planId);

    const { clientSecret } = response.data;

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(PaymentElement)!,
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        ;
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <CardElement/>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const StripePayment: React.FC = ({ userId, planId }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm userId={userId} planId={planId} />
    </Elements>
  );
};

export default StripePayment;
