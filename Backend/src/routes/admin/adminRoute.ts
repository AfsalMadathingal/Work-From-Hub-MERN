import { Router } from "express";
import adminAuthRoute from "./adminAuthRoute";
import planController from "../../controllers/planController";
import { validatePlanDetails } from "../../validator/adminValidator";
import { authenticate } from "../../middleware/authMiddleware";


const adminRouter = Router()


adminRouter.use('/auth',adminAuthRoute)
adminRouter.post('/plan', authenticate,validatePlanDetails, planController.createPlan)
adminRouter.get('/plan',authenticate,planController.getPlans)




export default adminRouter