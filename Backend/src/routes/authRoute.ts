import { Router } from "express";
import authController from "../controllers/authController";
import { validateRegistration, validateLoginDetails } from "../validator/userValidator";
const router = Router();


router.post("/register" , validateRegistration , authController.createUser);
router.post('/login',validateLoginDetails, authController.login)


export default router