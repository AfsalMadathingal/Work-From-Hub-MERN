import { Router } from "express";
import adminAuthRoute from "./adminAuthRoute";

const adminRouter = Router()


adminRouter.use('/auth',adminAuthRoute)

adminAuthRoute.post('/plan',)


export default adminRouter