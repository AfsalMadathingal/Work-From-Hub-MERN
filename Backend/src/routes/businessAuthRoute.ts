import { Router } from "express";
import businessAuthController from "../controllers/businessAuthController";
import { validateRegistration, validateLoginDetails } from "../validator/userValidator";
const businessAuthRoute = Router();


businessAuthRoute.post('/register' , validateRegistration , businessAuthController.createUser);
businessAuthRoute.post('/login',validateLoginDetails, businessAuthController.login)


export default businessAuthRoute