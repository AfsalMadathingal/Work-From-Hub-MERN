"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const businessAuthRoute_1 = __importDefault(require("./businessAuthRoute"));
const authMiddleware_1 = require("../../middleware/authMiddleware");
const multer_1 = __importDefault(require("../../utils/multer"));
const BUserValidator_1 = require("../../validator/BUserValidator");
const BuserController_1 = __importDefault(require("../../controllers/BuserController"));
const BuserController_2 = __importDefault(require("../../controllers/BuserController"));
const cpUpload = multer_1.default.fields([{ name: 'photos', maxCount: 10 }, { name: 'video', maxCount: 1 }]);
const businessRoute = (0, express_1.Router)();
businessRoute.use('/auth', businessAuthRoute_1.default);
businessRoute.post('/work-space', authMiddleware_1.authenticateBUser, BuserController_1.default.validateUser, cpUpload, BUserValidator_1.validateWorkspaceSubmission, BuserController_1.default.submitListingData);
businessRoute.get('/workspaces', authMiddleware_1.authenticateBUser, BuserController_1.default.getAllWorkspaces);
businessRoute.patch('/workspaces/unhold/:workspaceId', authMiddleware_1.authenticateBUser, BuserController_2.default.unHoldWorkspace);
businessRoute.get('/approved-workspaces', authMiddleware_1.authenticateBUser, BuserController_1.default.getApprovedWorkspaces);
businessRoute.get('/bookings', authMiddleware_1.authenticateBUser, BuserController_1.default.getBookingsByOwnerId);
businessRoute.get('/dashboard', authMiddleware_1.authenticateBUser, BuserController_1.default.getDashboardData);
businessRoute.get('/booking-report', authMiddleware_1.authenticateBUser, BuserController_2.default.getReport);
exports.default = businessRoute;
//# sourceMappingURL=businessRoute.js.map