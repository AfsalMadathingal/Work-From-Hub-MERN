import { Document } from "mongoose";
import { IPlan } from "../../entities/PlanEntity";
import Plans from "../../models/planModel";
import { IPlanRepository } from "../../repositories/interface/IPlanRepository";

export default class PlanRepository implements IPlanRepository{

    async createPlan(plan: IPlan): Promise<IPlan | null> {

        const newPlan = new Plans(plan)

        const savedPlan = await newPlan.save()

        return savedPlan
    }

    async getAllPlans(): Promise<Document[] | null> {
        
        const allPlans = await Plans.find({})

        return allPlans
    }
}