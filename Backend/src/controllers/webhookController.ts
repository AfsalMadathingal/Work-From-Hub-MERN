import { Request, Response } from 'express';
import { StripeService } from '../services/implementations/stripeService';
import PaymentService from '../services/implementations/PaymentService';
import { IPaymentService } from 'services/interface/IPaymentService';

class WebhookController {
  private stripeService: StripeService;
  private paymentService: IPaymentService;

  constructor() {
    this.stripeService = new StripeService();
    this.paymentService = new PaymentService();

  }

  public handleWebhook = async (req: Request, res: Response) =>{
    try {
     
      const event = await this.paymentService.constructEvent(req.rawBody,req.sig)

      if(event.type =="payment_intent.succeeded" ){
        console.log(event.data);
        
      }
      
        // this.stripeService.handleEvent(event);

        res.sendStatus(200);
      
    } catch (error) {
      console.error(`⚠️  Webhook signature verification failed.`, error.message);
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  }
}

export default new WebhookController();