import {Request,Response, NextFunction } from "express";
import PaymentService from "../services/implementations/PaymentService";
import { IPaymentService } from "../services/interface/IPaymentService";

class PaymentController {

    private paymentService: IPaymentService;

    constructor(){
        this.paymentService = new PaymentService()

    }



    public   createCheckoutSession = async  (req:Request, res:Response,next:NextFunction)=> {
        const { priceId } = req.body;

        try {

            console.log('====================================');
            console.log(this.paymentService);
            console.log('====================================');
                const createCheckoutSession = await this.paymentService.createCheckoutSession(priceId)

                console.log('====================================');
                console.log(createCheckoutSession);
                console.log('====================================');
                res.json({id:createCheckoutSession.id})


            
        } catch (error) {
          
            next(error)
        }
    
       
      
       
      }

}


export default new PaymentController()