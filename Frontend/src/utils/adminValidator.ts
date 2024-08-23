import Joi from 'joi';
import { IAdmin } from '../@types/admin';

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

const loginValidate = (data: Partial<IAdmin>) => {
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

export default loginValidate;
