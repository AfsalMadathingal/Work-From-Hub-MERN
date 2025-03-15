"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// Create a rate limiter instance
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500, // Limit each IP to 5 requests per windowMs
    handler: (req, res) => {
        console.log(`Rate limit exceeded: ${req.method} ${req.url}`);
        res.status(429).json({
            message: `You are Blocked`,
        });
    },
});
// Export the limiter for use in other parts of your app
exports.default = limiter;
//# sourceMappingURL=rateLimiter.js.map