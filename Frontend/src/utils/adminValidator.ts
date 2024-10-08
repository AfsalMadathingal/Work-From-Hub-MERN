import Joi from 'joi';
import { IAdmin } from '../@types/admin';
import { IUsers } from '../@types/user';

const loginSchema = Joi.object({
  userId: Joi.string().required().messages({
    'string.base': 'Please enter a valid user ID',
    'string.empty': 'User ID is required',
  }),
  password: Joi.string()
    .pattern(new RegExp('^[^\\s].*[^\\s]$'))
    .min(6)
    .required()
    .messages({
      'string.pattern.base': 'Password Should Not Contain Space.',
      'string.empty': 'Password is required',
    }),
});

const userEditSchema = Joi.object({
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
})


export const loginValidate = (data: Partial<IAdmin>) => {
  const { error } = loginSchema.validate(data, { abortEarly: false });

  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0] as string] = detail.message;
    });

    return formattedErrors;
  }

  return null;
};

export const userEditValidate = (data:Partial<IUsers>)=>{

  const {error } = userEditSchema.validate(data,{abortEarly:false});

  if(error){
    
  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0] as string] = detail.message;
    });
    return formattedErrors
  }

  }

  return null
}

