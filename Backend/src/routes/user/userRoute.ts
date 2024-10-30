import { Router } from "express";
import userAuthRoute from "./userAuthRoute";
import { authenticateUser } from "../../middleware/authMiddleware";
import userPrivetRoute from "./userPrivetRoute";


const userRouter = Router();



userRouter.use('/auth', userAuthRoute)
userRouter.use('/',authenticateUser,userPrivetRoute)



export default userRouter;
