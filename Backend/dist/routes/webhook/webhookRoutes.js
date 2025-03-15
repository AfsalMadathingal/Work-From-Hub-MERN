"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webhookController_1 = __importDefault(require("../../controllers/webhookController"));
const stripeMiddleware_1 = require("../../middleware/stripeMiddleware");
const webhookRoute = (0, express_1.Router)();
webhookRoute.use('/', stripeMiddleware_1.stripeMiddleware, webhookController_1.default.handleWebhook);
// webhookRoute.post('/', stripeMiddleware, webhookController.handleWebhook);
exports.default = webhookRoute;
//# sourceMappingURL=webhookRoutes.js.map