import express , {Express , Request , Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv'
import { connectDatabase } from './config/database';
dotenv.config();



const app = express();

app.get("/" , (req , res) => {
    res.send("heeollo");
})

connectDatabase();
app.listen(5000, () => {
    console.log("Server started on port 5000");
});


