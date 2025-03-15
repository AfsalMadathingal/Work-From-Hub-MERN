"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = __importDefault(require("../../controllers/authController"));
const userValidator_1 = require("../../validator/userValidator");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const userAuthRoute = (0, express_1.Router)();
userAuthRoute.post('/register', userValidator_1.validateRegistration, authController_1.default.createUser);
userAuthRoute.post('/send-otp', userValidator_1.validateRegistration, authController_1.default.sendOTP);
userAuthRoute.post('/google-sign-in', authController_1.default.googleSignIn);
userAuthRoute.post('/login', userValidator_1.validateLoginDetails, authController_1.default.login);
userAuthRoute.patch('/logout', authMiddleware_1.decodedUserRefreshToken, authController_1.default.logout);
userAuthRoute.post('/send-otp-forgot', userValidator_1.validateEmail, authController_1.default.forgotPasswordOTP);
userAuthRoute.post('/otp-verify', userValidator_1.validateOTP, authController_1.default.otpVerify);
userAuthRoute.patch('/forgot-password-reset', authController_1.default.resetPassword);
userAuthRoute.get('/refresh-token', authMiddleware_1.verifyUserRefreshToken, authController_1.default.refreshAccessToken);
userAuthRoute.patch('/change-password', authMiddleware_1.authenticateUser, authController_1.default.changePassword);
exports.default = userAuthRoute;
//# sourceMappingURL=userAuthRoute.js.map