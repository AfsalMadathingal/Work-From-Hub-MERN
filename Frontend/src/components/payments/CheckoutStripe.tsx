import React from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { userAxiosInstance } from '../../services/instance/userInstance';

interface CheckoutButtonProps {
  priceId: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ priceId }) => {
  const stripe = useStripe();

  const handleCheckout = async () => {
    const response = await userAxiosInstance.post('/api/user/payment/create-checkout-session', { priceId });
    const { id } = response.data;

    if (stripe) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: id,
      });

      if (error) {
        console.error(error);
      }
    }
  };

  return (
    <button onClick={handleCheckout}>Checkout</button>
  );
};

export default CheckoutButton;
