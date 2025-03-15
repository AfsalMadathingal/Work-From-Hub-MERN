"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOTP = validateOTP;
exports.validateRegistration = validateRegistration;
exports.validateLoginDetails = validateLoginDetails;
exports.validateEmail = validateEmail;
exports.validateResetPasswordData = validateResetPasswordData;
const joi_1 = __importDefault(require("joi"));
const errorHandler_1 = require("../middleware/errorHandler");
const userRegistration = joi_1.default.object({
    email: joi_1.default.string().min(6).max(50).email().required(),
    fullName: joi_1.default.string().pattern(/^[a-zA-Z ]*$/).min(6).max(50).required(),
    password: joi_1.default.string().min(6).required(),
});
const userLoginSchema = joi_1.default.object({
    email: joi_1.default.string().min(6).max(50).email().required(),
    password: joi_1.default.string().min(6).required(),
});
const resetData = joi_1.default.object({
    email: joi_1.default.string().min(6).max(50).email().required(),
    token: joi_1.default.string().required(),
    password: joi_1.default.string().min(6).required(),
});
const otpSchema = joi_1.default.string().length(4).pattern(/^[0-9]+$/).required();
const emailValidate = joi_1.default.string().email().required();
function validateOTP(req, res, next) {
    const { error } = otpSchema.validate(req.body.otp);
    if (error) {
        return res.status(400).json(new errorHandler_1.ApiError(400, error.details[0].message));
    }
    next();
}
function validateRegistration(req, res, next) {
    const { error } = userRegistration.validate(req.body.user, { abortEarly: false });
    if (error) {
        return res.status(400).json(new errorHandler_1.ApiError(400, JSON.stringify(error.details)));
    }
    next();
}
function validateLoginDetails(req, res, next) {
    const { error } = userLoginSchema.validate(req.body);
    if (error) {
        return res.status(400).json(new errorHandler_1.ApiError(400, error.details[0].message));
    }
    next();
}
function validateEmail(req, res, next) {
    const { error } = emailValidate.validate(req.body.email);
    if (error) {
        return res.status(400).json(new errorHandler_1.ApiError(400, error.details[0].message));
    }
    next();
}
function validateResetPasswordData(req, res, next) {
    const { error } = resetData.validate(req.body);
    if (error) {
        return res.status(400).json(new errorHandler_1.ApiError(400, error.details[0].message));
    }
    next();
}
//# sourceMappingURL=userValidator.js.map