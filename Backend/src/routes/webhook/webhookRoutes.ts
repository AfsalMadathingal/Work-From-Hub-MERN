import { Router } from 'express';
import { WebhookController } from '../../controllers/webhookController';
import { stripeMiddleware } from '../../middleware/stripeMiddleware';

const webhookRoute = Router();
const webhookController = new WebhookController();

webhookRoute.post('/', stripeMiddleware, webhookController.handleWebhook);

export default webhookRoute;
