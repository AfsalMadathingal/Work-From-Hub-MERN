"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
require("dotenv/config");
const database_1 = require("./config/database");
const errorHandler_1 = require("./middleware/errorHandler");
const logger_1 = __importDefault(require("./utils/logger"));
const morgan_1 = __importDefault(require("morgan"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const socket_1 = require("./utils/socket");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Server setup
const buildPath = path_1.default.join(__dirname, '../../Frontend/dist');
const server = http_1.default.createServer(app);
(0, socket_1.initializeSocket)(server);
// Middleware for rate limiting
// app.use(limiter);
// Serve static files
app.use('/', express_1.default.static(buildPath));
// CORS setup
app.use((0, cors_1.default)({
    origin: [
        '*',
    ],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
}));
// Compression and cookie parsing
app.use((0, compression_1.default)());
app.use((0, cookie_parser_1.default)());
// **Raw body middleware for Stripe Webhooks**
app.post('/webhook', // This must come before body parsers like `express.json()`
body_parser_1.default.raw({ type: 'application/json' }), (req, res, next) => {
    req.rawBody = req.body; // Attach raw body to the request
    next();
});
// General JSON parser for other routes
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Logging setup
const morganFormat = ':method :url :status :response-time ms';
app.use((0, morgan_1.default)(morganFormat, {
    stream: {
        write: (message) => {
            const logObject = {
                method: message.split(' ')[0],
                url: message.split(' ')[1],
                status: message.split(' ')[2],
                responseTime: message.split(' ')[3],
            };
            logger_1.default.info(JSON.stringify(logObject));
        },
    },
}));
// Router setup
app.use('/', router_1.default);
// Catch-all route for SPA
app.get('/*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../Frontend/dist/index.html'), function (err) {
        if (err) {
            res.status(500).send('something wrong');
        }
    });
});
// Error handler
app.use(errorHandler_1.errorHandler);
// Connect database
(0, database_1.connectDatabase)();
// Start server
server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port http://localhost:${process.env.PORT || 5000}`);
});
//# sourceMappingURL=server.js.map