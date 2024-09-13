import { Router } from "express";
import businessAuthRoute from "./businessAuthRoute";
import { authenticateBUser } from "../../middleware/authMiddleware";
import BUserController from "../../controllers/BUserController";
import upload from "../../utils/multer";
import { validateWorkspaceSubmission } from "../../validator/BUserValidator";
const cpUpload = upload.fields([{ name: 'photos', maxCount: 10 }, { name: 'video', maxCount: 1 }]);

const businessRoute = Router()



businessRoute.use('/auth',businessAuthRoute)

businessRoute.post('/work-space',authenticateBUser,BUserController.validateUser,cpUpload,validateWorkspaceSubmission,BUserController.submitListingData)

export default businessRoute;
