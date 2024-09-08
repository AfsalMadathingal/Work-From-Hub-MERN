export interface IPaymentService{


    createCheckoutSession(productId:string):Promise<any>
    savePaymentData (stripeData:{}):Promise <any>
}