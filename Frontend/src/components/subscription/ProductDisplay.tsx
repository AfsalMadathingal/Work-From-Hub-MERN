import React from 'react';
import '../../styles/stripe.css'

export const ProductDisplay: React.FC = () => (
  <section>
    <div className="product">
      <div className="description">
        <h3>Starter plan</h3>
        <h5>$20.00 / month</h5>
      </div>
    </div>
    <form action="/api/subscriptions/create-checkout-session" method="POST">
      <input type="hidden" name="lookup_key" value="starter_plan" />
      <button id="checkout-and-portal-button" type="submit">
        Checkout
      </button>
    </form>
  </section>
);

export default ProductDisplay;
