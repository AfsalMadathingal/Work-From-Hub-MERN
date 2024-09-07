import { IPlan } from "entities/PlanEntity";
import { Document } from "mongoose";
import { GetAllPlansResponse } from "repositories/interface/IPlanRepository";


export interface IPlanService {
    
    createPlan(plan: IPlan): Promise<IPlan | null>
    getAllPlan(page:number, limit:number):Promise <GetAllPlansResponse | null>;
    editPlan(id:string,action:string):Promise <IPlan | null>;
    getPlansWithoutPagination():Promise <IPlan[]| null >    ;
    getActivePlan():Promise <IPlan | null > ;
    filterPlan(query:string): Promise <IPlan[] | null> ;
}