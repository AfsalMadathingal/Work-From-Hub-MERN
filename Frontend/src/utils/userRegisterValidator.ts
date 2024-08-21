import Joi from 'joi';
import { IUsers } from '../@types/user';

const registerSchema = Joi.object({
  fullName: Joi.string()
  .pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)
  .min(3)
  .max(100)
  .required()
  .messages({
    'string.base': 'Full name must be a text.',
    'string.pattern.base': 'Full name must consist of at least two words.',
    'string.empty': 'Full name is required.',
    'string.min': 'Full name must be at least 3 characters long.',
    'string.max': 'Full name must be less than 100 characters long.',
    'any.required': 'Full name is required.',
  }),
  email: Joi.string().email({ tlds: { allow: false } }).required().messages({
    'string.email': 'Please enter a valid email address',
    'string.empty': 'Email is required',
  }),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
    .required()
    .messages({
      'string.min': 'Password must be at least 8 characters long',
      'string.pattern.base': 'Password must include uppercase, lowercase, number, and special character',
      'string.empty': 'Password is required',
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Confirm password does not match',
      'string.empty': 'Confirm password is required',
    }),
});


export const validate = (data:  Partial<IUsers>,)   =>{

  const {error  } = registerSchema.validate(data,{abortEarly:false})

  if(error){

    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
      console.log(detail.path[0]);
      
    });

    return formattedErrors

  }

  return null
  

}




export default validate;

