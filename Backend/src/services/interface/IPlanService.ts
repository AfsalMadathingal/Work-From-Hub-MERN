import { IPlan } from "entities/PlanEntity";
import { Document } from "mongoose";


export interface IPlanService {
    
    createPlan(plan: IPlan): Promise<IPlan | null>
    getAllPlan():Promise <Document[] | null>;

}