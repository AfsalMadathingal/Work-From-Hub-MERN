import { ISubscription } from '../../entities/SubscriptionEntity';
import { ISubscriptionRepository } from '../../repositories/interface/ISubscriptionRepository';
import { Stripe } from 'stripe';
import { Subscription } from '../../models/subscriptionSchema';

export class SubscriptionRepository implements ISubscriptionRepository{



    async createSubscription(subscription: Partial< ISubscription>): Promise<ISubscription | null> {
        try {
            const result = await Subscription.create(subscription);

            return result;
        } catch (error) {
            return null;
        }
    }



  



}
