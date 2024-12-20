import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import 'dotenv/config';
import { connectDatabase } from './config/database';
import { errorHandler } from './middleware/errorHandler';
import logger from "./utils/logger";
import morgan from "morgan";
import router from './routes/router';
import bodyParser from 'body-parser';
import http from "http";
import { initializeSocket } from "./utils/socket"; 
import path from 'path';
import limiter from './utils/rateLimiter';
// import helmet from 'helmet';

const app = express();

// app.use(helmet())

//server

app.use(limiter)

app.use((req, res, next) => {
  logger.info(`Request from ${req.ip}`);
  next();
})



const buildPath = path.join(__dirname,'../../Frontend/dist')




app.use('/', express.static(buildPath));


const server = http.createServer(app);

initializeSocket(server);




app.use(cors({
  origin: ['http://localhost:5173', "http://68.183.90.31", "https://29g0hjwd-5173.inc1.devtunnels.ms"],
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



app.get("/*", function (req, res) {
  console.log("user");
  res.sendFile( 
    path.join(__dirname, "../../Frontend/dist/index.html"),
    function (err) {
      if (err) {
        res.status(500).send("something wrong");
      }
    }
  );
});

app.use(errorHandler);

connectDatabase();


server.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port http://localhost:${process.env.PORT || 5000}`);
});
