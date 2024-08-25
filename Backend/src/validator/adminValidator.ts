import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../middleware/errorHandler";



const adminLoginSchema =Joi.object({
  userId: Joi.string().min(4).max(50).required(),
  password: Joi.string().min(6).required(),
  
});

const planSchema = Joi.object({
  price: Joi.number().integer().min(1).max(1000).required(),
  discount: Joi.number().integer().min(1).max(100).required(),
});





export function validateLoginDetails(req:Request , res: Response , next: NextFunction){

  const { error } = adminLoginSchema.validate(req.body)

  if(error){

    return  res.status(400).json(new ApiError(
      400,
      error.details[0].message
    ))

  }
    next()
}

export function validatePlanDetails (req:Request, res:Response, next:NextFunction){

  console.log('====================================');
  console.log(req.body);
  console.log('====================================');
  const {error } = planSchema.validate(req.body)

  if(error){
    return  res.status(400).json(new ApiError(
      400,
      error.details[0].message
    ))
  }

  next()


}