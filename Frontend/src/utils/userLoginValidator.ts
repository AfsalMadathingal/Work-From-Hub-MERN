import Joi from "joi";
import { IUsers } from "../@types/user";

const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email is required",
    }),
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.min": "Password should be at least 8 characters long",
      "string.pattern.base":
        "Password should include uppercase, lowercase, number, and special character",
      "string.empty": "Password is required",
    }),
});

const passwordSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
      )
    )
    .required()
    .messages({
      "string.min": "Password should be at least 8 characters long",
      "string.pattern.base":
        "Password should include uppercase, lowercase, number, and special character",
      "string.empty": "Password is required",
    }),
});

const emailSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address",
      "string.empty": "Email is required",
    }),
});

const profileEditSchema = Joi.object({
  fullName: Joi.string()
    .pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.base": "Full name must be a text.",
      "string.pattern.base": "Full name must consist of at least two words.",
      "string.empty": "Full name is required.",
      "string.min": "Full name must be at least 3 characters long.",
      "string.max": "Full name must be less than 100 characters long.",
      "any.required": "Full name is required.",
    }),
  phone: Joi.string().pattern(/^\d{10}$/).messages({
    "string.pattern.base": "Phone must be a 10-digit number.",
    "string.empty": "Phone is required.",
  }),
  date_of_birth: Joi.date().messages({
    "date.base": "Date of birth must be a valid date.",
    "date.empty": "Date of birth is required.",
  }),
  pin_code: Joi.string()
    .pattern(/^\d{6}$/)
    .messages({
      "string.pattern.base": "Pin code must be a 6-digit number.",
      "string.empty": "Pin code is required.",
    }),
  state: Joi.string().messages({
    "string.empty": "State is required.",
  }),
  city: Joi.string().messages({
    "string.empty": "City is required.",
  }),
  gender: Joi.string().valid("male", "female", "others").messages({
    "string.invalid": "Gender must be one of the following: male, female, others",
    "string.empty": "Gender is required.",
  }),
});

export const validateEditing = (data: Partial<IUsers>) => {
  const { error } = profileEditSchema.validate(data, { abortEarly: false });

  console.log("================ddfgdfg====================");
  console.log(error);
  console.log("====================================");

  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
    });

    return formattedErrors;
  }

  return null;
};

export const validatePassword = (password: string) => {
  const { error } = passwordSchema.validate({ password });

  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
      console.log(detail.path[0]);
    });

    return formattedErrors;
  }

  return null;
};

const validate = (data: Partial<IUsers>) => {
  const { error } = loginSchema.validate(data, { abortEarly: false });

  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
      console.log(detail.path[0]);
    });

    return formattedErrors;
  }

  return null;
};

export const emailValidate = (email: string) => {
  const { error } = emailSchema.validate({ email });

  console.log("====================================");
  console.log(error);
  console.log("====================================");
  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
      console.log(detail.path[0]);
    });

    return formattedErrors;
  }

  return null;
};

export default validate;
