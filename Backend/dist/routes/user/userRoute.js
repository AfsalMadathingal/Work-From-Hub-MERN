"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userAuthRoute_1 = __importDefault(require("./userAuthRoute"));
const authMiddleware_1 = require("../../middleware/authMiddleware");
const userPrivetRoute_1 = __importDefault(require("./userPrivetRoute"));
const userRouter = (0, express_1.Router)();
userRouter.use('/auth', userAuthRoute_1.default);
userRouter.use('/', authMiddleware_1.authenticateUser, userPrivetRoute_1.default);
exports.default = userRouter;
//# sourceMappingURL=userRoute.js.map