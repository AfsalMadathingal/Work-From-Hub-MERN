"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminAuthController_1 = __importDefault(require("../../controllers/adminAuthController"));
const adminValidator_1 = require("../../validator/adminValidator");
const authMiddleware_1 = require("../../middleware/authMiddleware");
const adminAuthRoute = (0, express_1.Router)();
adminAuthRoute.post('/login', adminValidator_1.validateLoginDetails, adminAuthController_1.default.login);
adminAuthRoute.patch('/logout', authMiddleware_1.decodedRefreshToken, adminAuthController_1.default.logout);
adminAuthRoute.get('/refresh-token', authMiddleware_1.verifyRefreshTokenMiddleware, adminAuthController_1.default.refreshAccessToken);
exports.default = adminAuthRoute;
//# sourceMappingURL=adminAuthRoute.js.map