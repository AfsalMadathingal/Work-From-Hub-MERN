import { createLogger, format, transports } from "winston";
import "winston-mongodb"; // Import MongoDB transport

const { combine, timestamp, json, colorize } = format;

// Custom format for console logging with colors
const consoleLogFormat = format.combine(
  format.colorize(),
  format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
  })
);

// Create a Winston logger
const logger = createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    // Console Transport
    new transports.Console({
      format: consoleLogFormat,
    }),
    // MongoDB Transport
    new transports.MongoDB({
      level: "info", // Log level
      db: process.env.MONGO_URI, // MongoDB connection string
      options: { useUnifiedTopology: true }, // MongoDB connection options
      collection: "logs", // Capped collection name
      tryReconnect: true, // Automatically reconnect on connection loss
      format: json(), // Format logs in JSON
    }),
  ],
});

export default logger;
