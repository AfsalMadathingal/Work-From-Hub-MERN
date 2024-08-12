import { Router } from "express";
import authController from "../controllers/authController";
import { validateUser } from "../validator/userValidator";
const router = Router();


router.post("/register" , validateUser , authController.createUser);


export default router