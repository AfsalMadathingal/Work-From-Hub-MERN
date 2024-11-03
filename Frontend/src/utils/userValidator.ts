import Joi from "joi";
import { IUsers } from "../@types/user";


const planSchema = Joi.object({
  price: Joi.string()
    .pattern(/^\d+$/)
    .min(0)
    .max(1000)
    .required()
    .messages({
      "string.min": "Price should be at least 0",
      "string.max": "Price should not be more than 1000",
      "string.empty": "Price is required",
      "string.pattern.base": "Price should be a number",
    }),
  discount: Joi.string()
    .pattern(/^\d+$/)
    .min(0)
    .max(50)
    .required()
    .messages({
      "string.min": "Discount should be at least 0",
      "string.max": "Discount should not be more than 50",
      "string.empty": "Discount is required",
      "string.pattern.base": "Discount should be a number",
    }),
});

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
  gender: Joi.string().valid("Male", "Female", "Others").messages({
    "string.invalid": "Gender must be one of the following: male, female, others",
    "string.empty": "Gender is required.",
  }),
});


const reviewSchema = Joi.object({
  rating: Joi.number()
    .integer()
    .min(1)
    .max(5)
    .required()
    .messages({
      "number.base": "Rating must be a number.",
      "number.integer": "Rating must be an integer.",
      "number.min": "Rating must be at least 1.",
      "number.max": "Rating must be less than 5.",
      "any.required": "Rating is required.",
    }),
  comment: Joi.string()
    .max(500)
    .pattern(
      new RegExp(
        /^(?:(?!spam|bad|worst|poor|awful|terrible|fake|fraud|illegal|unlawful|forbidden|prohibited|banned|blocked|not allowed|not permitted|unauthorized|unapproved|disapproved|rejected|denied|refused|unacceptable|objectionable|offensive|inappropriate|inadmissible|invalid|null|void|none|undefined|unspecified|unknown|unidentified|unrecognizable|unreadable|unusable|unavailable|unaccessible|unattainable|unrealizable|unfeasible|impossible|unimaginable|unbelievable|unthinkable|unconscionable|egregious|heinous|atrocious|abominable|abhorrent|odious|loathsome|despicable|contemptible|detestable|execrable|abysmal|appalling|ghastly|grisly|grim|ghastful|fearful|frightful|dreadful|direful|calamitous|catastrophic|disastrous|unmitigated|unrelieved|unremitting|unrelenting|incessant|unending|uninterrupted|unceasing|unabated|unbridled|unchecked|unfettered|unconstrained|unrestricted|uninhibited|unbound|unlimited|endless|boundless|infinite|immeasurable|inestimable|incalculable|priceless|invaluable|incomparable|unparalleled|unmatched|unequaled|unexcelled|unsurpassed|unbeaten|unrivaled|unrivaled|unrivaled|unrivaled|unrivaled|un).*)$/i
      )
    )
    .messages({
      "string.pattern.base":
        "Comment contains forbidden words. Please refrain from using offensive language.",
      "string.max": "Comment must be less than 500 characters long.",
      "any.required": "Rating is required.",
    }),
});


const passwordChangeSchema = Joi.object({
  currentPassword: Joi.string()
    .required()
    .label('Current Password')
    .messages({
      'string.empty': 'Current password is required.',
    }),

  newPassword: Joi.string()
    .min(8) // Minimum length of 8 characters
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])')) // At least one lowercase, one uppercase, one digit, and one special character
    .required()
    .label('New Password')
    .messages({
      'string.empty': 'New password is required.',
      'string.min': 'New password must be at least 8 characters long.',
      'string.pattern.base': 'New password must include at least one uppercase letter, one lowercase letter, one number, and one special character.',
    }),

  confirmPassword: Joi.any()
    .equal(Joi.ref('newPassword'))
    .required()
    .label('Confirm Password')
    .messages({
      'any.only': 'Confirm password must match new password.',
      'any.required': 'Confirm password is required.',
    }),
});


export const reviewValidator = (data: {
  rating: number,
  comment: string,
}) => {


  const { error } = reviewSchema.validate(data, { abortEarly: false });

  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
    });

    return formattedErrors;
  }

  return null;
};


export const passwordChangeValidator = (data:{
  currentPassword: string,
  newPassword: string,
  confirmPassword: string,
}) => {

  const { error } = passwordChangeSchema.validate(data, { abortEarly: false });

  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
    });

    return formattedErrors;
  }

  return null;
};


export const validateEditing = (data: Partial<IUsers>) => {
  const { error } = profileEditSchema.validate(data, { abortEarly: false });

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
      ;
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
      ;
    });

    return formattedErrors;
  }

  return null;
};

export const emailValidate = (email: string) => {
  const { error } = emailSchema.validate({ email });


  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
      ;
    });

    return formattedErrors;
  }

  return null;
};


export const planValidate= (price:string,discount:string)=>{

  const { error } = planSchema.validate({price,discount}, { abortEarly: false });

  if (error) {
    const formattedErrors: { [key: string]: string } = {};
    error.details.forEach((detail) => {
      formattedErrors[detail.path[0]] = detail.message;
    });

    return formattedErrors;
  }

  return null;



}






export default validate;
