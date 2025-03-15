"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessAuthController_1 = __importDefault(require("../../controllers/businessAuthController"));
const userValidator_1 = require("../../validator/userValidator");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const businessAuthRoute = (0, express_1.Router)();
businessAuthRoute.post('/send-otp', userValidator_1.validateRegistration, businessAuthController_1.default.sendOTP);
businessAuthRoute.post('/register', userValidator_1.validateRegistration, businessAuthController_1.default.createUser);
businessAuthRoute.post('/login', userValidator_1.validateLoginDetails, businessAuthController_1.default.login);
businessAuthRoute.patch('/logout', authMiddleware_1.decodedBUserRefreshToken, businessAuthController_1.default.logout);
businessAuthRoute.get('/refresh-token', authMiddleware_1.verifyRefreshTokenMiddlewareBUser, businessAuthController_1.default.refreshAccessToken);
exports.default = businessAuthRoute;
//# sourceMappingURL=businessAuthRoute.js.map