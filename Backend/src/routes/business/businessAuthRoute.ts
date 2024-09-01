import { Router } from "express";
import businessAuthController from "../../controllers/businessAuthController";
import { validateRegistration, validateLoginDetails } from "../../validator/userValidator";
import { decodedBUserRefreshToken } from "../../middleware/authMiddleware";

const businessAuthRoute = Router();

businessAuthRoute.post('/send-otp',validateRegistration,businessAuthController.sendOTP)
businessAuthRoute.post('/register' , validateRegistration , businessAuthController.createUser);
businessAuthRoute.post('/login',validateLoginDetails, businessAuthController.login)
businessAuthRoute.patch('/logout',decodedBUserRefreshToken,businessAuthController.logout)


export default businessAuthRoute