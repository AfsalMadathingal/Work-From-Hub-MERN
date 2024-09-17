import { IUsers } from "entities/UserEntity"
import Stripe from "stripe"

export interface IPaymentService{


    createCheckoutSession(productId:string):Promise<any>
    // savePaymentData (stripeData:{}):Promise <any>
    updateSubscriptionStatus(paymentIntent:Stripe.PaymentIntent,user:IUsers,stripeResponse:Stripe.Invoice):Promise<any>
}