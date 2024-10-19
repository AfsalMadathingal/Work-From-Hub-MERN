import { Router } from "express";
import adminRouter from "./admin/adminRoute";
import userRouter from "./user/userRoute";
import businessRoute from "./business/businessRoute";
import webhookRoute from "./webhook/webhookRoutes";
import BUserController from "../controllers/BUserController";
const router = Router();





router.use('/api/admin',adminRouter);
router.use('/api/user', userRouter);
router.use('/api/business', businessRoute)
router.use('/webhook',webhookRoute)

export default router;
