import { Router } from "express";
import userAuthRoute from "./userAuthRoute";

const userRouter = Router();



userRouter.use('/auth',userAuthRoute)




export default userRouter;
