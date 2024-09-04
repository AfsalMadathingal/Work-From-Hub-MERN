import { Router } from "express";
import userAuthRoute from "./userAuthRoute";
import { authenticateUser } from "../../middleware/authMiddleware";
import userController from "../../controllers/userController";

const userRouter = Router();



userRouter.use('/auth',userAuthRoute)

userRouter.patch('/',authenticateUser,userController.editUser)
userRouter.post('/subscribe',)




export default userRouter;
