import { Document } from "mongoose";
import { IPlan } from "../../entities/PlanEntity";
import Plans from "../../models/planModel";
import {
  GetAllPlansResponse,
  IPlanRepository,
} from "../../repositories/interface/IPlanRepository";

export default class PlanRepository implements IPlanRepository {
  async createPlan(plan: IPlan): Promise<IPlan | null> {

    const newPlan = new Plans(plan);

    const savedPlan = await newPlan.save();

    return savedPlan;
  }

  async getAllPlans(
    page: number,
    limit: number
  ): Promise<GetAllPlansResponse | null> {
    
    const allPlans = await Plans.find()
      .skip((page - 1) * limit)
      .limit(limit);
    const totalPlans = await Plans.countDocuments();
    const totalPages = Math.ceil(totalPlans / limit);

    return { allPlans, totalPages };
  }
}
