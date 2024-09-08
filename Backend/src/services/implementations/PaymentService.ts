import { ApiError } from "../../middleware/errorHandler";
import UserRepository from "../../repositories/implementations/UserRepository";
import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { IPaymentService } from "../../services/interface/IPaymentService";
import stripe from "../../config/stripe";

export default class PaymentService implements IPaymentService{


    private userRepository: IUserRepository


    constructor(){
        this.userRepository = new UserRepository();

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
            // res.json({ id: session.id });
          } catch (error) {

            throw new ApiError(
                500,
                error.message,
                "error happened while the checkout"
            )
          }
    }


    async savePaymentData(stripeData: {}) {
        
    }



}


