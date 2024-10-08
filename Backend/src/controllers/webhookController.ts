import { Request, Response } from 'express';
import { StripeService } from '../services/implementations/stripeService';

export class WebhookController {
  private stripeService: StripeService;

  constructor() {
    this.stripeService = new StripeService();
  }

  async handleWebhook(req: Request, res: Response) {
    try {
        console.log('==========dfgdfgfdg==========================');
        console.log(req.rawBody);
        console.log('====================================');
        res.sendStatus(200);
      const event = this.stripeService.constructWebhookEvent(req);
      this.stripeService.handleEvent(event);
      
    } catch (error) {
      console.error(`⚠️  Webhook signature verification failed.`, error.message);
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  }
}
