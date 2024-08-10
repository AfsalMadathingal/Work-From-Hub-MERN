 import { Router } from "express";
 import UserController from "../controllers/userController";
 import { validateUser } from "../validator/userValidator";
 const router = Router();


 router.post("/register" , validateUser , UserController.createUser);


 export default router