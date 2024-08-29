import { Router } from "express";
import adminAuthRoute from "./adminAuthRoute";
import planController from "../../controllers/planController";
import { validatePlanDetails } from "../../validator/adminValidator";
import { authenticate } from "../../middleware/authMiddleware";
import adminController from "../../controllers/adminController";


const adminRouter = Router()


adminRouter.use('/auth',adminAuthRoute)
adminRouter.post('/plan', authenticate,validatePlanDetails, planController.createPlan)
adminRouter.get('/plan',authenticate,planController.getPlans)

adminRouter.get('/users',authenticate,adminController.getAllUser)




export default adminRouter