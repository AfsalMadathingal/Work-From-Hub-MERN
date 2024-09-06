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
adminRouter.patch('/plan',authenticate,planController.editPlan)

adminRouter.get('/users',authenticate,adminController.getAllUser)
adminRouter.patch('/users',authenticate,adminController.editUser)
adminRouter.patch('/users/block-and-unblock/:id',authenticate,adminController.blockUsers)



adminRouter.get('/business-users',authenticate,adminController.getBusinessUsers)
adminRouter.patch('/business-users',authenticate,adminController.editBUser)
adminRouter.patch('/business-user/block-and-unblock/:id',authenticate,adminController.blockBUseres)




export default adminRouter