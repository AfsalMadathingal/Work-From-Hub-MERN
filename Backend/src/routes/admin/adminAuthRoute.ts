import { Router } from "express";
import adminAuthController from "../../controllers/adminAuthController";
import { validateLoginDetails } from "../../validator/adminValidator";

const adminAuthRoute = Router();


adminAuthRoute.post('/login',validateLoginDetails, adminAuthController.login)


export default adminAuthRoute