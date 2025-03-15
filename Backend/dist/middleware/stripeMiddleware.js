"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripeMiddleware = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
// Middleware to capture the raw body for Stripe webhook verification
exports.stripeMiddleware = [
    body_parser_1.default.raw({ type: 'application/json' }), // Captures raw body as Buffer
    (req, res, next) => {
        req.sig = req.headers['stripe-signature']; // Extract Stripe signature header
        req.rawBody = req.body; // Assign raw body to `req.rawBody`
        next();
    },
];
//# sourceMappingURL=stripeMiddleware.js.map