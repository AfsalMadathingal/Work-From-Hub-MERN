import { Router } from "express";
import userAuthRoute from "./userAuthRoute";

const userRouter = Router();



userRouter.use('/auth',userAuthRoute)
userRouter.post('/subscribe',)




export default userRouter;
