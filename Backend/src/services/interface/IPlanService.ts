import { IPlan } from "entities/PlanEntity";
import { Document } from "mongoose";
import { GetAllPlansResponse } from "repositories/interface/IPlanRepository";


export interface IPlanService {
    
    createPlan(plan: IPlan): Promise<IPlan | null>
    getAllPlan(page:number, limit:number):Promise <GetAllPlansResponse | null>;

}