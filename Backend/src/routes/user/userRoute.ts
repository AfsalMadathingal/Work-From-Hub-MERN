import { Router } from "express";
import userAuthRoute from "./userAuthRoute";
import { authenticateUser } from "../../middleware/authMiddleware";
import userController from "../../controllers/userController";
import upload from "../../utils/multer";
import paymentRouter from "./payment";


const userRouter = Router();



userRouter.use('/auth',userAuthRoute)
userRouter.use('/payment',authenticateUser,paymentRouter)

userRouter.patch('/',authenticateUser,userController.editUser)
userRouter.patch('/upload-profile-photo',authenticateUser,upload.single('image'),userController.editProfilePhoto)
userRouter.get('/active-plan',authenticateUser,userController.getActivePlan)

userRouter.post('/subscribe',)






export default userRouter;
