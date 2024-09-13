
import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { ApiError } from "../middleware/errorHandler";



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
    tablesAvailable: Joi.number().integer().min(0).required().messages({
      'number.base': 'Tables available must be a number',
      'number.integer': 'Tables available must be an integer',
      'number.min': 'Tables available must be a non-negative number',
      'any.required': 'Tables available is required',
    }),
    seatsPerTable: Joi.number().integer().min(0).required().messages({
      'number.base': 'Seats per table must be a number',
      'number.integer': 'Seats per table must be an integer',
      'number.min': 'Seats per table must be a non-negative number',
      'any.required': 'Seats per table is required',
    }),
    photos: Joi.any().required().messages({
      'any.unknown': 'Photos must be a file list',
      'any.required': "Photo Required"
    }),
    video: Joi.any().required().messages({
      'any.unknown': 'Video must be a file list',
      'any.required': "Video is Mandatory"
    }),
  });


  export const validateWorkspaceSubmission = (req:Request, res:Response, next:NextFunction) => {

    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    const { error } = buildingFormSchema.validate(req.body, { abortEarly: false });



  
    if (error) {

      if (error) {
        const formattedErrors: { [key: string]: string } = {};
        error.details.forEach((detail) => {
          formattedErrors[detail.path[0]] = detail.message;
        });

        console.log('====================================');
        console.log(formattedErrors);
        console.log('====================================');
    
        return formattedErrors;
      }


        // throw new ApiError(
        //     500,
        //     "Inputs not Valid",
        //     "something wrong with the data user filled"
        // )
    }


  
    next()
  };