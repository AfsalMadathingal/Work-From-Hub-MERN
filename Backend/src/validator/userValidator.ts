import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../middleware/errorHandler";


const userRegistration = Joi.object({
  email: Joi.string().min(6).max(50).email().required(),
  fullName: Joi.string().pattern(/^[a-zA-Z ]*$/).min(6).max(50).required(),
  password: Joi.string().min(6).required(),
  
});

const userLoginSchema =Joi.object({
  email: Joi.string().min(6).max(50).email().required(),
  password: Joi.string().min(6).required(),
  
});


export function validateRegistration(req: Request, res: Response, next: NextFunction) {
  const { error } = userRegistration.validate(req.body, { abortEarly: false });

  if (error) {

    return  res.status(400).json(new ApiError(
      400,
      JSON.stringify(error.details)
    ))
  }

  next(); 
}


export function validateLoginDetails(req:Request , res: Response , next: NextFunction){

  const { error } = userLoginSchema.validate(req.body)

  if(error){

    return  res.status(400).json(new ApiError(
      400,
      error.details[0].message
    ))

  }
    next()
}
