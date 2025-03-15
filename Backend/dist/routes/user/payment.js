"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const paymentController_1 = __importDefault(require("../../controllers/paymentController"));
const express_1 = require("express");
const paymentRouter = (0, express_1.Router)();
paymentRouter.post('/create-checkout-session', paymentController_1.default.createCheckoutSession);
paymentRouter.post('/create-subscription', paymentController_1.default.createSubscription);
paymentRouter.post('/update-status', paymentController_1.default.updatePaymentStatus);
paymentRouter.post('/create-payment-intent', paymentController_1.default.createPaymentIntent);
exports.default = paymentRouter;
//# sourceMappingURL=payment.js.map