import { Router } from "express";
import adminAuthController from "../../controllers/adminAuthController";
import { validateLoginDetails } from "../../validator/adminValidator";
import { authenticate, decodedRefreshToken, verifyRefreshTokenMiddleware } from "../../middleware/authMiddleware";

const adminAuthRoute = Router();


adminAuthRoute.post('/login',validateLoginDetails, adminAuthController.login)
adminAuthRoute.patch('/logout',decodedRefreshToken,adminAuthController.logout)
adminAuthRoute.get('/refresh-token',verifyRefreshTokenMiddleware,adminAuthController.refreshAccessToken)


export default adminAuthRoute