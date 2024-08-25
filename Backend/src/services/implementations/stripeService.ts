import { Request } from 'express';
import { Stripe } from 'stripe';

export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    });
  }

  constructWebhookEvent(req: Request) {
    const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!;
    const signature = req.headers['stripe-signature']!;
    return this.stripe.webhooks.constructEvent(req.body, signature, endpointSecret);
  }

  handleEvent(event: Stripe.Event) {
    let subscription;
    let status;

    switch (event.type) {
      case 'customer.subscription.trial_will_end':
      case 'customer.subscription.deleted':
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        subscription = event.data.object;
        status = subscription.status;
        console.log(`Subscription status is ${status}.`);
        break;
      default:
        console.log(`Unhandled event type ${event.type}.`);
    }
  }
}
