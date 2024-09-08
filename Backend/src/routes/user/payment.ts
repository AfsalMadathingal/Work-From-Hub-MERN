import paymentController from "../../controllers/paymentController";
import { Router } from "express";
const paymentRouter = Router();


paymentRouter.post('/create-checkout-session',paymentController.createCheckoutSession)




export default paymentRouter