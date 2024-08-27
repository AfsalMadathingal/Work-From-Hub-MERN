import { IPlan } from "entities/PlanEntity";
import { Document } from "mongoose";

export interface IPlanRepository {

    createPlan(plan: IPlan): Promise<IPlan | null>;
    getAllPlans():Promise <Document[] | null> ;
 
 }