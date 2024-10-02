import { Router } from "express";
import authController from "../../controllers/authController";
import { validateRegistration, validateLoginDetails, validateEmail, validateOTP } from "../../validator/userValidator";
import { authenticate, authenticateUser, decodedRefreshToken, decodedUserRefreshToken, verifyUserRefreshToken } from "../../middleware/authMiddleware";
const userAuthRoute = Router();


userAuthRoute.post('/register' , validateRegistration , authController.createUser);
userAuthRoute.post('/send-otp',validateRegistration,authController.sendOTP)
userAuthRoute.post('/google-sign-in',authController.googleSignIn)
userAuthRoute.post('/login',validateLoginDetails, authController.login)
userAuthRoute.patch('/logout',decodedUserRefreshToken,authController.logout)
userAuthRoute.post('/send-otp-forgot',validateEmail,authController.forgotPasswordOTP)
userAuthRoute.post('/otp-verify' ,validateOTP,authController.otpVerify)
userAuthRoute.patch('/forgot-password-reset',authController.resetPassword)
userAuthRoute.get('/refresh-token',verifyUserRefreshToken,authController.refreshAccessToken)
userAuthRoute.patch('/change-password',authenticateUser,authController.changePassword)


export default userAuthRoute