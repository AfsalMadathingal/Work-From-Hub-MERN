import { SubscriptionRepository } from '../../repositories/implementations/subscriptionRepository';

export class SubscriptionService {
  private subscriptionRepository: SubscriptionRepository;

  constructor() {
    this.subscriptionRepository = new SubscriptionRepository();
  }

  async createCheckoutSession(lookupKey: string) {
    return this.subscriptionRepository.createCheckoutSession(lookupKey);
  }

  async createPortalSession(sessionId: string) {
    // Logic to fetch customer ID from session and create a portal session
    return this.subscriptionRepository.createPortalSession(sessionId);
  }
}
