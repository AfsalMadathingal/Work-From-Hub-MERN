import Joi from "joi";
import { IWorkspace } from "../@types/workspace";

const buildingFormSchema = Joi.object({
  buildingName: Joi.string().required().messages({
    'string.empty': 'Building name is required',
    'any.required': 'Building name is required',
  }),
  state: Joi.string().required().messages({
    'string.empty': 'State is required',
    'any.required': 'State is required',
  }),
  district: Joi.string().required().messages({
    'string.empty': 'District is required',
    'any.required': 'District is required',
  }),
  location: Joi.string().required().messages({
    'string.empty': 'Location is required',
    'any.required': 'Location is required',
  }),
  pinCode: Joi.string().pattern(/^\d{6}$/).required().messages({
    'string.pattern.base': 'Pin Code must be a 6-digit number',
    'string.empty': 'Pin Code is required',
    'any.required': 'Pin Code is required',
  }),
  street: Joi.string().required().messages({
    'string.empty': 'Street is required',
    'any.required': 'Street is required',
  }),
  contactNo: Joi.string().pattern(/^\d{10}$/).required().messages({
    'string.pattern.base': 'Contact number must be a 10-digit number',
    'string.empty': 'Contact number is required',
    'any.required': 'Contact number is required',
  }),
  powerBackup: Joi.boolean().required().messages({
    'boolean.base': 'Power Backup must be a boolean value',
    'any.required': 'Power Backup is required',
  }),
  ac: Joi.boolean().required().messages({
    'boolean.base': 'AC must be a boolean value',
    'any.required': 'AC is required',
  }),
  bathroom: Joi.boolean().required().messages({
    'boolean.base': 'Bathroom must be a boolean value',
    'any.required': 'Bathroom is required',
  }),
  tablesAvailable: Joi.number().integer().min(1).required().messages({
    'number.base': 'Tables available must be a number',
    'number.integer': 'Tables available must be an integer',
    'number.min': 'Tables available must be greater than 1',
    'any.required': 'Tables available is required',
  }),
  seatsPerTable: Joi.number().integer().min(2).required().messages({
    'number.base': 'Seats per table must be a number',
    'number.integer': 'Seats per table must be an integer',
    'number.min': 'Seats per table must be greater than 2',
    'any.required': 'Seats per table is required',
  }),
  imageAdded: Joi.boolean().valid(true).required().messages({
    'boolean.base': 'Image is required',
    'boolean.invalid': 'Image is required',
    'any.required': 'Image is required',
    'any.valid': 'Image is required',
  }),
  videoAdded: Joi.boolean().valid(true).required().messages({
    'boolean.base': 'Video is required',
    'boolean.invalid': 'Video is required',
    'any.required': 'Video is required',
    'any.valid': 'Video is required',
  }),
  photos: Joi.any().required().messages({
    'any.unknown': 'Photos must be a file list',
    'any.required': 'Photo is required',
  }),
  video: Joi.any().required().messages({
    'any.unknown': 'Video must be a file list',
    'any.required': 'Video is mandatory',
  }),
  pricePerSeat: Joi.number().integer().min(2).required().messages({
    'number.base': 'Price per seat must be a number',
    'number.integer': 'Price per seat must be an integer',
    'number.min': 'Price per seat must be greater than 2',
    'any.required': 'Price per seat is required',
  }),

  // Timing validation
  timing: Joi.string()
    .valid('08:00-12:00', '09:00-06:00', '10:00-07:00', '11:00-08:00', '12:00-10:00')
    .required()
    .messages({
      'any.only': 'Please select a valid time slot from the dropdown',
      'any.required': 'Timing is required',
    }),

  // Working days validation
  workingDays: Joi.string()
    .valid('MON-FRI', 'MON-SAT', 'ALL DAYS')
    .required()
    .messages({
      'any.only': 'Please select valid working days from the dropdown',
      'any.required': 'Working days are required',
    }),
});


  export const validateWorkspaceSubmission = (data: Partial<IWorkspace>) => {

    const { error } = buildingFormSchema.validate(data, { abortEarly: false });
  
    if (error) {
      const formattedErrors: { [key: string]: string } = {};
      error.details.forEach((detail) => {
        formattedErrors[detail.path[0]] = detail.message;
      });
  
      return formattedErrors;
    }
  
    return null;
  };