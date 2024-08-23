import { Router } from "express";
import adminAuthController from "../controllers/adminAuthController";
import { validateLoginDetails } from "../validator/admInValidator";
const adminAuthRoute = Router();


adminAuthRoute.post('/login',validateLoginDetails, adminAuthController.login)


export default adminAuthRoute