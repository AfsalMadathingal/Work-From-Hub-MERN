"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
const stripe_1 = require("stripe");
class StripeService {
    stripe;
    constructor() {
        this.stripe = new stripe_1.Stripe(process.env.STRIPE_SECRET_KEY, {});
    }
    constructWebhookEvent(req) {
        const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;
        const signature = req.headers['stripe-signature'];
        return this.stripe.webhooks.constructEvent(req.rawBody, signature, endpointSecret);
    }
    handleEvent(event) {
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
                // Save the subscription status to the database
                this.saveSubscriptionStatus(subscription);
                break;
            default:
                console.log(`Unhandled event type ${event.type}.`);
        }
    }
    // Save subscription status to the database
    async saveSubscriptionStatus(subscription) {
        try {
            // Replace this with your actual database save logic
            // Example: Save subscription ID, status, customer ID, etc.
            const subscriptionData = {
                id: subscription.id,
                status: subscription.status,
                customer: subscription.customer,
                // Add any other relevant details here
            };
            // Example using a pseudo database save function
            console.log('====================================');
            console.log(subscription);
            console.log('====================================');
            // await pseudoDatabase.save('subscriptions', subscriptionData);
            console.log(`Subscription ${subscription.id} status saved as ${subscription.status}.`);
        }
        catch (error) {
            console.error(`Failed to save subscription ${subscription.id} status:`, error);
        }
    }
}
exports.StripeService = StripeService;
//# sourceMappingURL=stripeService.js.map