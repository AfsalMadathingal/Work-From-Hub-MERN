import { Router } from "express";
import authController from "../../controllers/authController";
import { validateRegistration, validateLoginDetails, validateEmail } from "../../validator/userValidator";
const userAuthRoute = Router();


userAuthRoute.post('/register' , validateRegistration , authController.createUser);
userAuthRoute.post('/send-otp',validateRegistration,authController.sendOTP)
userAuthRoute.post('/google-sign-in',authController.googleSignIn)
userAuthRoute.post('/login',validateLoginDetails, authController.login)
userAuthRoute.post('/send-otp-forgot',validateEmail,authController.forgotPasswordOTP)
userAuthRoute.post('/otp-verify' ,authController.otpVerify)


export default userAuthRoute