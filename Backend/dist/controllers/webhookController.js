"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stripeService_1 = require("../services/implementations/stripeService");
const PaymentService_1 = __importDefault(require("../services/implementations/PaymentService"));
class WebhookController {
    stripeService;
    paymentService;
    constructor() {
        this.stripeService = new stripeService_1.StripeService();
        this.paymentService = new PaymentService_1.default();
    }
    handleWebhook = async (req, res) => {
        try {
            const event = await this.paymentService.constructEvent(req.rawBody, req.sig);
            if (event.type == "payment_intent.succeeded") {
                console.log(event.data);
            }
            // this.stripeService.handleEvent(event);
            res.sendStatus(200);
        }
        catch (error) {
            console.error(`⚠️  Webhook signature verification failed.`, error.message);
            res.status(400).send(`Webhook Error: ${error.message}`);
        }
    };
}
exports.default = new WebhookController();
//# sourceMappingURL=webhookController.js.map