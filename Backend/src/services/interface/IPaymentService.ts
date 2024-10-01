import { IUsers } from "entities/UserEntity"
import Stripe from "stripe"

export interface IPaymentService{

    createPaymentIntent(seatId:string,userId:string,date:string):Promise <Stripe.PaymentIntent | null>
    createCheckoutSession(productId:string):Promise<any>
    // savePaymentData (stripeData:{}):Promise <any>
    updateSubscriptionStatus(paymentIntent:Stripe.PaymentIntent,user:IUsers,stripeResponse:Stripe.Invoice):Promise<any>
    checkPaymentStatus(paymentIntentId:string):Promise<Stripe.PaymentIntent | null>
    
}