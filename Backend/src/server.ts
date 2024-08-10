import express , {Express , Request , Response} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv'
import { connectDatabase } from './config/database';
import  userRoute from './routes/userRoute';
import  { errorHandler } from './middleware/errorHandler';
dotenv.config();



const app = express();

app.use(cors());
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/" , (req , res) => {
    res.send("heeollo");
})

app.use('/',userRoute)


app.use(errorHandler);
connectDatabase();
app.listen(5000, () => {
    console.log("Server started on port http://localhost:5000");
});


