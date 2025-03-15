"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PaymentService_1 = __importDefault(require("../services/implementations/PaymentService"));
const stripe_1 = __importDefault(require("../config/stripe"));
const errorHandler_1 = require("../middleware/errorHandler");
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
class PaymentController {
    paymentService;
    constructor() {
        this.paymentService = new PaymentService_1.default();
    }
    // Helper function to handle Stripe error types
    handleStripeError = (error, res, next) => {
        if (error.type === "StripeInvalidRequestError" && error.code === "payment_intent_unexpected_state") {
            res.status(400).json({
                error: "This PaymentIntent has already succeeded and cannot be confirmed again.",
            });
        }
        else if (error.type === "StripeInvalidRequestError" && error.code === "resource_missing") {
            res.status(404).json(new errorHandler_1.ApiError(404, "PaymentIntent not found", "This PaymentIntent does not exist"));
        }
        else {
            next(error);
        }
    };
    createCheckoutSession = async (req, res, next) => {
        const { priceId } = req.body;
        try {
            const checkoutSession = await this.paymentService.createCheckoutSession(priceId);
            res.json({ id: checkoutSession.id });
        }
        catch (error) {
            next(error);
        }
    };
    createSubscription = async (req, res, next) => {
        const { paymentMethodId, priceId, customerEmail } = req.body;
        try {
            // Create a customer
            const customer = await stripe_1.default.customers.create({
                email: customerEmail,
                payment_method: paymentMethodId,
                invoice_settings: {
                    default_payment_method: paymentMethodId,
                },
            });
            // Create a subscription
            const subscription = await stripe_1.default.subscriptions.create({
                customer: customer.id,
                items: [{ price: priceId }],
                expand: ["latest_invoice.payment_intent"],
                payment_behavior: "default_incomplete",
                payment_settings: {
                    save_default_payment_method: "on_subscription",
                    payment_method_options: {
                        card: {
                            request_three_d_secure: "any",
                        },
                    },
                },
            });
            const latestInvoice = subscription.latest_invoice;
            const paymentIntent = latestInvoice.payment_intent;
            if (paymentIntent.status === "succeeded") {
                return res.json({
                    message: "Payment already succeeded.",
                    clientSecret: paymentIntent.client_secret,
                });
            }
            const confirmedPaymentIntent = await stripe_1.default.paymentIntents.confirm(paymentIntent.id);
            res.status(200).json(new ApiResponse_1.default(200, {
                clientSecret: confirmedPaymentIntent.client_secret,
                latestInvoice,
                confirmedPaymentIntent,
            }, "success"));
        }
        catch (error) {
            this.handleStripeError(error, res, next);
        }
    };
    updatePaymentStatus = async (req, res, next) => {
        const { paymentData, user, stripeResponse } = req.body;
        if (!paymentData || !user) {
            return res.status(500).json(new errorHandler_1.ApiError(500, "Input error", "Invalid data"));
        }
        try {
            const paymentIntent = await stripe_1.default.paymentIntents.retrieve(paymentData.paymentIntent.id);
            if (paymentIntent.status !== "succeeded") {
                return res.status(400).json(new errorHandler_1.ApiError(400, "Invalid payment intent", "Payment is not in succeeded state"));
            }
            console.log(user, stripeResponse);
            // Update the subscription status in the database
            await this.paymentService.updateSubscriptionStatus(paymentData.paymentIntent, user, stripeResponse.latestInvoice);
            res.json({ message: "Payment status updated successfully" });
        }
        catch (error) {
            this.handleStripeError(error, res, next);
        }
    };
    createPaymentIntent = async (req, res, next) => {
        const { seatId, userId, date } = req.body;
        if (!seatId || !userId || !date) {
            return res.status(500).json(new errorHandler_1.ApiError(500, "Input error", "Invalid data"));
        }
        try {
            // Create a payment intent
            const paymentIntent = await this.paymentService.createPaymentIntent(seatId, userId, date);
            if (!paymentIntent) {
                return res.status(404).json(new errorHandler_1.ApiError(404, "Payment Intent Not Found", "Payment Intent is not found with this id"));
            }
            res.status(200).json(new ApiResponse_1.default(200, { paymentIntent }, "success"));
        }
        catch (error) {
            this.handleStripeError(error, res, next);
        }
    };
}
exports.default = new PaymentController();
//# sourceMappingURL=paymentController.js.map