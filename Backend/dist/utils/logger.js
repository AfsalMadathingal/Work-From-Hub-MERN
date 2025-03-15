"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
require("winston-mongodb"); // Import MongoDB transport
const { combine, timestamp, json, colorize } = winston_1.format;
// Custom format for console logging with colors
const consoleLogFormat = winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
}));
// Create a Winston logger
const logger = (0, winston_1.createLogger)({
    level: "info",
    format: combine(timestamp(), json()),
    transports: [
        // Console Transport
        new winston_1.transports.Console({
            format: consoleLogFormat,
        }),
        // MongoDB Transport
        new winston_1.transports.MongoDB({
            level: "info", // Log level
            db: process.env.MONGO_URI, // MongoDB connection string
            options: { useUnifiedTopology: true }, // MongoDB connection options
            collection: "logs", // Capped collection name
            tryReconnect: true, // Automatically reconnect on connection loss
            format: json(), // Format logs in JSON
        }),
    ],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map