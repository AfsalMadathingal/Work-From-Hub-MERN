import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import 'dotenv/config';
import { connectDatabase } from './config/database';
import { errorHandler } from './middleware/errorHandler';
import logger from "../src/utils/logger";
import morgan from "morgan";
import router from './routes/router';
import bodyParser from 'body-parser';
import http from "http";
import { initializeSocket } from "./utils/socket"; 

const app = express();
const server = http.createServer(app);

initializeSocket(server);

app.use(cors({
  origin: ['http://localhost:5173', "https://29g0hjwd-5173.inc1.devtunnels.ms"],
  credentials: true,
}));


app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: 'application/json' }));

const morganFormat = ":method :url :status :response-time ms";
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);


app.use('/', router);


app.use(errorHandler);

connectDatabase();


server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT || 5000}`);
});
