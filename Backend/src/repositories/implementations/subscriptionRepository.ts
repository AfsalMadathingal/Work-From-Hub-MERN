import { Stripe } from 'stripe';

export class SubscriptionRepository {

  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    });
  }

  async createCheckoutSession(lookupKey: string): Promise<Stripe.Checkout.Session> {
    const prices = await this.stripe.prices.list({
      lookup_keys: [lookupKey],
      expand: ['data.product'],
    });

    const session = await this.stripe.checkout.sessions.create({
      billing_address_collection: 'auto',
      line_items: [
        {
          price: prices.data[0].id,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.YOUR_DOMAIN}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.YOUR_DOMAIN}?canceled=true`,
    });

    return session;
  }

  async createPortalSession(customerId: string): Promise<Stripe.BillingPortal.Session> {
    const portalSession = await this.stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: process.env.YOUR_DOMAIN!,
    });

    return portalSession;
  }
}
