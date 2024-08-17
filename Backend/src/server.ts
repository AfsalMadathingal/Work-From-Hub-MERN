import express , {Express , Request , Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import 'dotenv/config'
import { connectDatabase } from './config/database';
// import  userRoute from './routes/userRoute';
import userAuthRoute  from './routes/userAuthRoute'
import  { ApiError, errorHandler } from './middleware/errorHandler';
import logger from "../src/utils/logger";
import morgan from "morgan";
const morganFormat = ":method :url :status :response-time ms";


const app = express();
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



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





app.use('/api/user/',userAuthRoute)








app.use(errorHandler);
connectDatabase();
app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port http://localhost:5000");
});


