import { Router } from "express";
import userAuthRoute from "./userAuthRoute";
import { authenticateUser } from "../../middleware/authMiddleware";
import userController from "../../controllers/userController";
import upload from "../../utils/multer";

const userRouter = Router();



userRouter.use('/auth',userAuthRoute)

userRouter.patch('/',authenticateUser,userController.editUser)
userRouter.patch('/upload-profile-photo',authenticateUser,upload.single('image'),userController.editProfilePhoto)
userRouter.post('/subscribe',)




export default userRouter;
