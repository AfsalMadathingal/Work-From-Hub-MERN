import { Router } from "express";
import adminRouter from "./admin/adminRoute";
import userRouter from "./user/userRoute";
import businessRoute from "./business/businessRoute";
const router = Router();




router.use('/api/admin',adminRouter);
router.use('/api/user', userRouter);
router.use('/api/business', businessRoute)


export default router;
