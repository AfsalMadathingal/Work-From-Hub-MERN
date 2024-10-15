import { Router } from "express";
import businessAuthRoute from "./businessAuthRoute";
import { authenticateBUser } from "../../middleware/authMiddleware";
import upload from "../../utils/multer";
import { validateWorkspaceSubmission } from "../../validator/BUserValidator";
import BUserController from "../../controllers/BUserController";

const cpUpload = upload.fields([{ name: 'photos', maxCount: 10 }, { name: 'video', maxCount: 1 }]);

const businessRoute = Router()



businessRoute.use('/auth',businessAuthRoute)

businessRoute.post('/work-space',authenticateBUser,BUserController.validateUser,cpUpload,validateWorkspaceSubmission,BUserController.submitListingData)
businessRoute.get('/workspaces',authenticateBUser,BUserController.getAllWorkspaces)
businessRoute.get('/approved-workspaces',authenticateBUser,BUserController.getApprovedWorkspaces)



businessRoute.get('/bookings',authenticateBUser,BUserController.getBookingsByOwnerId)


export default businessRoute;
