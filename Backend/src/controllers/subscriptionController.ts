import { Request, Response } from 'express';
import { SubscriptionService } from '../services/implementations/subscriptionService';

export class SubscriptionController {
  private subscriptionService: SubscriptionService;

  constructor() {
    this.subscriptionService = new SubscriptionService();
  }

  async createCheckoutSession(req: Request, res: Response) {
    try {
      const session = await this.subscriptionService.createCheckoutSession(req.body.lookup_key);
      res.redirect(303, session.url);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createPortalSession(req: Request, res: Response) {
    try {
      const { session_id } = req.body;
      const portalSession = await this.subscriptionService.createPortalSession(session_id);
      res.redirect(303, portalSession.url);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
