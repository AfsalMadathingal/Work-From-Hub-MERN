import { ApiError } from "../../middleware/errorHandler";
import UserRepository from "../../repositories/implementations/UserRepository";
import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { IPaymentService } from "../../services/interface/IPaymentService";
import stripe from "../../config/stripe";
import { ISubscription } from "entities/SubscriptionEntity";
import { SubscriptionRepository } from "../../repositories/implementations/subscriptionRepository";
import { IUsers } from "entities/UserEntity";
import Stripe from "stripe";

export default class PaymentService implements IPaymentService {

    private userRepository: IUserRepository;
    private subscriptionRepository: SubscriptionRepository;

    constructor() {
        this.userRepository = new UserRepository();
        this.subscriptionRepository = new SubscriptionRepository();
    }

    async createCheckoutSession(priceId: string): Promise<any> {
        try {
            const session = await stripe.checkout.sessions.create({
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
        } catch (error) {
            throw new ApiError(
                500,
                error.message,
                "error happened while the checkout"
            );
        }
    }



    async updateSubscriptionStatus(paymentIntent: Stripe.PaymentIntent, user: IUsers,stripeResponse:Stripe.Invoice): Promise<any> {
            try {
            const userFound = await this.userRepository.findByUsername(user?.email);

            if (!userFound) {
                throw new ApiError(
                    404,
                    "User Not Found",
                    "User is not found with this payment intent id"
                );
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
        } catch (error) {
            throw error;
        }
    }



   
}


