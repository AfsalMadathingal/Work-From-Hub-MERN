import express , {Express , Request , Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import 'dotenv/config'
import { connectDatabase } from './config/database';
// import  userRoute from './routes/userRoute';
import authRoute  from './routes/authRoute'
import  { errorHandler } from './middleware/errorHandler';
import logger from "../src/utils/logger";
import morgan from "morgan";



const app = express();
app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.get("/" , (req , res) => {
    res.send(process.env.MONGO_URI);
})


app.use('/',authRoute)


app.use(errorHandler);
connectDatabase();
app.listen(process.env.PORT || 5000, () => {
    console.log("Server started on port http://localhost:5000");
});


