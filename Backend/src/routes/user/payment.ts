
import paymentController from "../../controllers/paymentController";
import { Router } from "express";

const paymentRouter = Router();


paymentRouter.post('/create-checkout-session', paymentController.createCheckoutSession);

paymentRouter.post('/create-subscription',paymentController.createSubscription );

paymentRouter.post('/update-status',paymentController.updatePaymentStatus)

  



export default paymentRouter;
