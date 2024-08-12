import Joi from "joi";
import { Request, Response, NextFunction } from "express";


const userSchema = Joi.object({
  email: Joi.string().min(6).max(50).email().required(),
  name: Joi.string().pattern(/^[a-zA-Z ]*$/).min(6).max(50).required(),
  password: Joi.string().required(),
  
});


export function validateUser(req: Request, res: Response, next: NextFunction) {
  const { error } = userSchema.validate(req.body);

  if (error) {

    return res.status(400).json({ error: error.details[0].message });
  }

  next(); 
}
