"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../../middleware/errorHandler");
const UserRepository_1 = __importDefault(require("../../repositories/implementations/UserRepository"));
const stripe_1 = __importDefault(require("../../config/stripe"));
const subscriptionRepository_1 = require("../../repositories/implementations/subscriptionRepository");
const stripe_2 = __importDefault(require("stripe"));
const SeatRepository_1 = require("../../repositories/implementations/SeatRepository");
const WorkspaceRepository_1 = require("../../repositories/implementations/WorkspaceRepository");
class PaymentService {
    userRepository;
    subscriptionRepository;
    seatRepository;
    workspaceRepository;
    constructor() {
        this.userRepository = new UserRepository_1.default();
        this.subscriptionRepository = new subscriptionRepository_1.SubscriptionRepository();
        this.seatRepository = new SeatRepository_1.SeatRepository();
        this.workspaceRepository = new WorkspaceRepository_1.WorkspaceRepository();
    }
    async createCheckoutSession(priceId) {
        try {
            const session = await stripe_1.default.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: priceId,
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                success_url: 'http://localhost:3000/success',
                cancel_url: 'http://localhost:3000/cancel',
            });
            return session;
        }
        catch (error) {
            throw new errorHandler_1.ApiError(500, error.message, "error happened while the checkout");
        }
    }
    async updateSubscriptionStatus(paymentIntent, user, stripeResponse) {
        try {
            const userFound = await this.userRepository.findByUsername(user?.email);
            if (!userFound) {
                throw new errorHandler_1.ApiError(404, "User Not Found", "User is not found with this payment intent id");
            }
            const subscription = await this.subscriptionRepository.createSubscription({
                userId: userFound._id,
                stripeCustomerId: typeof stripeResponse.customer === 'string' ? stripeResponse.customer : stripeResponse.customer?.id,
                stripeSubscriptionId: typeof stripeResponse.subscription === 'string' ? stripeResponse.subscription : stripeResponse.subscription?.id,
                status: paymentIntent.status,
                paymentIntentId: paymentIntent.id,
                amount: paymentIntent.amount,
                currency: paymentIntent.currency,
                paymentMethodId: typeof paymentIntent.payment_method === 'string' ? paymentIntent.payment_method : paymentIntent.payment_method?.id,
                invoiceId: stripeResponse.id,
                invoicePdf: stripeResponse.invoice_pdf,
                timestamp: new Date(),
            });
            const updatedUser = await this.userRepository.updateUser({
                membership: subscription.id,
            }, user._id.toString());
            return null;
        }
        catch (error) {
            throw error;
        }
    }
    async createPaymentIntent(seatId, userId, date) {
        try {
            const seat = await this.seatRepository.getSeatById(seatId);
            if (!seat) {
                throw new errorHandler_1.ApiError(404, "Seat Not Found", "Seat is not found with this id");
            }
            const workspace = await this.workspaceRepository.findById(seat.workspaceId.toString());
            const amount = workspace.pricePerSeat * 100;
            const paymentIntent = await stripe_1.default.paymentIntents.create({
                amount,
                currency: "inr",
                metadata: {
                    seatId,
                    userId,
                    date,
                },
            });
            return paymentIntent;
        }
        catch (error) {
            throw error;
        }
    }
    async checkPaymentStatus(paymentIntentId) {
        try {
            const paymentIntent = await stripe_1.default.paymentIntents.retrieve(paymentIntentId);
            return paymentIntent;
        }
        catch (error) {
            if (error instanceof stripe_2.default.errors.StripeError && error.code === "resource_missing") {
                return null;
            }
            throw error;
        }
    }
    async getInvoice(invoice) {
        try {
            const invoiceData = await stripe_1.default.invoices.retrieve(invoice);
            return invoiceData;
        }
        catch (error) {
            if (error instanceof stripe_2.default.errors.StripeError && error.code === "resource_missing") {
                return null;
            }
            throw error;
        }
    }
    async initiateRefund(paymentIntentId, amount) {
        try {
            const amountAfterCut = amount - (amount * (30 / 100));
            const refund = await stripe_1.default.refunds.create({
                payment_intent: paymentIntentId,
                amount: amountAfterCut
            });
            return refund;
        }
        catch (error) {
            if (error instanceof stripe_2.default.errors.StripeError && error.code === "resource_missing") {
                return null;
            }
            throw error;
        }
    }
    async constructEvent(payload, signature) {
        const webhookSecret = process.env.STRIPE_WEBSECRET;
        console.log("Reached constructEvent");
        return stripe_1.default.webhooks.constructEvent(payload, signature, webhookSecret);
    }
}
exports.default = PaymentService;
//# sourceMappingURL=PaymentService.js.map