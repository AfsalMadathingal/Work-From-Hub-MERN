import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import 'dotenv/config';
import { connectDatabase } from './config/database';
import { errorHandler } from './middleware/errorHandler';
import logger from './utils/logger';
import morgan from 'morgan';
import router from './routes/router';
import bodyParser from 'body-parser';
import http from 'http';
import { initializeSocket } from './utils/socket';
import path from 'path';
import limiter from './utils/rateLimiter';
import proxy from 'express-http-proxy'

const app = express();

// Server setup
const buildPath = path.join(__dirname, '../../Frontend/dist');
const server = http.createServer(app);

initializeSocket(server);

// Middleware for rate limiting
// app.use(limiter);

// Serve static files
app.use('/', express.static(buildPath));

// CORS setup
app.use(
  cors({
    origin: [
      '*',
    ],
    methods: ['GET', 'POST', 'PUT','PATCH','DELETE'],
    credentials: true,
  })
);

// Compression and cookie parsing
app.use(compression());
app.use(cookieParser());

// **Raw body middleware for Stripe Webhooks**
app.post(
  '/webhook', // This must come before body parsers like `express.json()`
  bodyParser.raw({ type: 'application/json' }),
  (req, res, next) => {
    req.rawBody = req.body; // Attach raw body to the request
    next();
  }
);

// General JSON parser for other routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging setup
const morganFormat = ':method :url :status :response-time ms';
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(' ')[0],
          url: message.split(' ')[1],
          status: message.split(' ')[2],
          responseTime: message.split(' ')[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// Router setup
app.use('/', router);

// Catch-all route for SPA
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../Frontend/dist/index.html'), function (err) {
    if (err) {
      res.status(500).send('something wrong');
    }
  });
});

// Error handler
app.use(errorHandler);

// Connect database
connectDatabase();

// Start server
server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT || 5000}`);
});
