import { IPlan } from "entities/PlanEntity";

export interface IPlanRepository {

    createPlan(plan: IPlan): Promise<IPlan | null>;
    
 
 }