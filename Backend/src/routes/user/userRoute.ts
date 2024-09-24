import { Router } from "express";
import userAuthRoute from "./userAuthRoute";
import { authenticateUser } from "../../middleware/authMiddleware";
import userController from "../../controllers/userController";
import upload from "../../utils/multer";
import paymentRouter from "./payment";
import paymentController from "controllers/paymentController";


const userRouter = Router();



userRouter.use('/auth',userAuthRoute)
userRouter.get('/validate-session',authenticateUser,userController.validateSuccessResponse)
userRouter.use('/payment',authenticateUser,paymentRouter)

userRouter.patch('/',authenticateUser,userController.editUser)
userRouter.patch('/upload-profile-photo',authenticateUser,upload.single('image'),userController.editProfilePhoto)
userRouter.get('/active-plan',authenticateUser,userController.getActivePlan)


userRouter.get('/workspace',authenticateUser,userController.getWorkspace)
userRouter.get('/workspace/:workspaceId/available-seats',authenticateUser,userController.getAvailableSeatsOfWorkspace)
userRouter.get('/workspace/:id',authenticateUser,userController.getSingleWorkspace)









export default userRouter;
