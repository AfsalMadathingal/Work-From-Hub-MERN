"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginDetails = validateLoginDetails;
exports.validatePlanDetails = validatePlanDetails;
const joi_1 = __importDefault(require("joi"));
const errorHandler_1 = require("../middleware/errorHandler");
const adminLoginSchema = joi_1.default.object({
    userId: joi_1.default.string().min(4).max(50).required(),
    password: joi_1.default.string().min(6).required(),
});
const planSchema = joi_1.default.object({
    price: joi_1.default.number().integer().min(1).max(1000).required(),
    discount: joi_1.default.number().integer().min(1).max(100).required(),
});
function validateLoginDetails(req, res, next) {
    const { error } = adminLoginSchema.validate(req.body);
    if (error) {
        return res.status(400).json(new errorHandler_1.ApiError(400, error.details[0].message));
    }
    next();
}
function validatePlanDetails(req, res, next) {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    const { error } = planSchema.validate(req.body);
    if (error) {
        return res.status(400).json(new errorHandler_1.ApiError(400, error.details[0].message));
    }
    next();
}
//# sourceMappingURL=adminValidator.js.map