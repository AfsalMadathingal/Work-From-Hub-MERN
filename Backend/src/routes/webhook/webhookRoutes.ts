import { Router } from 'express';
import webhookController from '../../controllers/webhookController';
import { stripeMiddleware } from '../../middleware/stripeMiddleware';

const webhookRoute = Router();



webhookRoute.use('/', stripeMiddleware , webhookController.handleWebhook)
// webhookRoute.post('/', stripeMiddleware, webhookController.handleWebhook);

export default webhookRoute;
