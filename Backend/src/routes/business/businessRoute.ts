import { Router } from "express";
import businessAuthRoute from "./businessAuthRoute";
import { authenticateBUser } from "../../middleware/authMiddleware";
import BuserController from "../../controllers/BuserController";

const businessRoute = Router()

businessRoute.use('/auth',businessAuthRoute)

businessRoute.post('/work-space',authenticateBUser,BuserController.submitListingData)

export default businessRoute;
