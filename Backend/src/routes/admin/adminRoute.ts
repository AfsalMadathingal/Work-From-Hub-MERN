import { Router } from "express";
import adminAuthRoute from "./adminAuthRoute";
import planController from "../../controllers/planController";
import { validatePlanDetails } from "../../validator/adminValidator";

const adminRouter = Router()


adminRouter.use('/auth',adminAuthRoute)
adminRouter.post('/plan',validatePlanDetails, planController.createPlan)




export default adminRouter