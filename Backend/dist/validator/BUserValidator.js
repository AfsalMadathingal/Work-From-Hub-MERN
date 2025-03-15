"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWorkspaceSubmission = void 0;
const joi_1 = __importDefault(require("joi"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const buildingFormSchema = joi_1.default.object({
    buildingName: joi_1.default.string().required().messages({
        'string.empty': 'Building name is required',
        'any.required': 'Building name is required',
    }),
    state: joi_1.default.string().required().messages({
        'string.empty': 'State is required',
        'any.required': 'State is required',
    }),
    district: joi_1.default.string().required().messages({
        'string.empty': 'District is required',
        'any.required': 'District is required',
    }),
    location: joi_1.default.string().required().messages({
        'string.empty': 'Location is required',
        'any.required': 'Location is required',
    }),
    pinCode: joi_1.default.string().pattern(/^\d{6}$/).required().messages({
        'string.pattern.base': 'Pin Code must be a 6-digit number',
        'string.empty': 'Pin Code is required',
        'any.required': 'Pin Code is required',
    }),
    street: joi_1.default.string().required().messages({
        'string.empty': 'Street is required',
        'any.required': 'Street is required',
    }),
    contactNo: joi_1.default.string().pattern(/^\d{10}$/).required().messages({
        'string.pattern.base': 'Contact number must be a 10-digit number',
        'string.empty': 'Contact number is required',
        'any.required': 'Contact number is required',
    }),
    powerBackup: joi_1.default.boolean().required().messages({
        'boolean.base': 'Power Backup must be a boolean value',
        'any.required': 'Power Backup is required',
    }),
    ac: joi_1.default.boolean().required().messages({
        'boolean.base': 'AC must be a boolean value',
        'any.required': 'AC is required',
    }),
    bathroom: joi_1.default.boolean().required().messages({
        'boolean.base': 'Bathroom must be a boolean value',
        'any.required': 'Bathroom is required',
    }),
    tablesAvailable: joi_1.default.number().integer().min(0).required().messages({
        'number.base': 'Tables available must be a number',
        'number.integer': 'Tables available must be an integer',
        'number.min': 'Tables available must be a non-negative number',
        'any.required': 'Tables available is required',
    }),
    seatsPerTable: joi_1.default.number().integer().min(0).required().messages({
        'number.base': 'Seats per table must be a number',
        'number.integer': 'Seats per table must be an integer',
        'number.min': 'Seats per table must be a non-negative number',
        'any.required': 'Seats per table is required',
    }),
    imageAdded: joi_1.default.boolean().valid(true).required().messages({
        'boolean.base': 'Image  is required',
        'boolean.invalid': 'Image  is required',
        'any.required': 'Image  is required',
    }),
    videoAdded: joi_1.default.boolean().valid(true).required().messages({
        'boolean.base': 'Video  is required',
        'boolean.invalid': 'Video  is required',
        'any.required': 'Video  is required',
    }),
    pricePerSeat: joi_1.default.number().integer().min(2).required().messages({
        'number.base': 'must be a number',
        'number.integer': ' must be an integer',
        'number.min': 'must be > 2 number',
        'any.required': 'required',
    }),
    timing: joi_1.default.string()
        .valid('08:00-12:00', '09:00-06:00', '10:00-07:00', '11:00-08:00', '12:00-10:00')
        .required()
        .messages({
        'any.only': 'Please select a valid time slot from the dropdown',
        'any.required': 'Timing is required',
    }),
    // Working days validation
    workingDays: joi_1.default.string()
        .valid('MON-FRI', 'MON-SAT', 'ALL DAYS')
        .required()
        .messages({
        'any.only': 'Please select valid working days from the dropdown',
        'any.required': 'Working days are required',
    }),
});
const validateWorkspaceSubmission = (req, res, next) => {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    const { error } = buildingFormSchema.validate(req.body, { abortEarly: false });
    if (error) {
        if (error) {
            const formattedErrors = {};
            error.details.forEach((detail) => {
                formattedErrors[detail.path[0]] = detail.message;
            });
            console.log(formattedErrors);
            return res.status(400).json(new ApiResponse_1.default(400, formattedErrors, "something wrong with the data user filled"));
        }
    }
    next();
};
exports.validateWorkspaceSubmission = validateWorkspaceSubmission;
//# sourceMappingURL=BUserValidator.js.map