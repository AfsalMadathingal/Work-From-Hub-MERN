import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../middleware/errorHandler";



const adminLoginSchema =Joi.object({
  userId: Joi.string().min(4).max(50).required(),
  password: Joi.string().min(6).required(),
  
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
