import { IPlan } from "entities/PlanEntity";


export interface IPlanService {
    
    createPlan(plan: IPlan): Promise<IPlan>

}