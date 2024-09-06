import { IPlan } from "entities/PlanEntity";
import { Document } from "mongoose";

export interface GetAllPlansResponse {
    allPlans: IPlan[];
    totalPages: number;
  }

export interface IPlanRepository {

    createPlan(plan: IPlan): Promise<IPlan | null>;
    getAllPlans(page:number,limit:number): Promise<GetAllPlansResponse | null>;
    getPlansWithoutPagination():Promise<IPlan[] | null>
    editPlan(id:string , planAction:Partial<IPlan>):Promise<IPlan | null>; 
    getPlan(id:string):Promise<IPlan| null>;
    getActivePlan():Promise <IPlan | null> ;
    

 }