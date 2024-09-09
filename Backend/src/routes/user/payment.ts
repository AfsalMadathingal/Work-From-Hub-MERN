import stripeConfig from "../../config/stripe";
import paymentController from "../../controllers/paymentController";
import { Router } from "express";
import stripe from "stripe";
const paymentRouter = Router();

// Route to create a checkout session
paymentRouter.post('/create-checkout-session', paymentController.createCheckoutSession);

// Route to create a subscription
paymentRouter.post('/create-subscription', async (req, res) => {
  const { paymentMethodId, priceId, customerEmail } = req.body;

  try {
    // Create a customer
    const customer = await stripeConfig.customers.create({
      email: customerEmail,
      payment_method: paymentMethodId,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    console.log('====================================');
    console.log(customer);
    console.log('====================================');

    // Create a subscription
    const subscription = await stripeConfig.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        expand: ['latest_invoice.payment_intent'],
        payment_behavior: 'default_incomplete', // Ensures the subscription is incomplete until payment succeeds
        payment_settings: {
          save_default_payment_method: 'on_subscription', // Save the payment method for future payments
          payment_method_options: {
            card: {
              request_three_d_secure: 'any', // Forces 3D Secure if available, useful for testing manual confirmation
            },
          },
        },
      });
      

    // Extract payment intent from the latest invoice
    const latestInvoice = subscription.latest_invoice as stripe.Invoice;
    const paymentIntent = latestInvoice.payment_intent as stripe.PaymentIntent;

    // Check if the payment intent is already confirmed
    if (paymentIntent.status === 'succeeded') {
      
      res.json({
        message: 'Payment already succeeded.',
        clientSecret: paymentIntent.client_secret,
      });

    } else {
      // If not confirmed, ensure it's confirmed properly
      const confirmedPaymentIntent = await stripeConfig.paymentIntents.confirm(paymentIntent.id);
      res.json({
        clientSecret: confirmedPaymentIntent.client_secret,
      });
    }
  } catch (error) {
    // Handle errors gracefully
    if (error.type === 'StripeInvalidRequestError' && error.code === 'payment_intent_unexpected_state') {
      // This block catches the specific error related to already succeeded payments
      res.status(400).json({ error: 'This PaymentIntent has already succeeded and cannot be confirmed again.' });
    } else {
      // Generic error handler
      res.status(500).json({ error: (error as Error).message });
    }
  }
});

export default paymentRouter;
