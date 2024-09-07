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
    
    const allPlans = await Plans.find({isDeleted:false})
      .skip((page - 1) * limit)
      .limit(limit);
    const totalPlans = await Plans.countDocuments();
    const totalPages = Math.ceil(totalPlans / limit);

    console.log(allPlans);
    

    return { allPlans, totalPages };
  }

  async editPlan(id: string, planAction: Partial<IPlan>): Promise<IPlan | null> {
      try {

        const plan=  await Plans.findOneAndUpdate({stripeId:id},{
          $set:planAction
        })


        console.log(plan);
        
        return plan
        
      } catch (error) {

        return null
      }
  }

  async getPlansWithoutPagination(): Promise<IPlan[] | null> {
      try {

        const allPlans = await Plans.find({})
        
        return allPlans

      } catch (error) {
        return null
      }
  }

  async getPlan(id:string): Promise<IPlan | null> {
      try {
        

        const plan = await Plans.findOne({stripeId:id})

        return plan 

      } catch (error) {
        
        return null
      }
  }

  async getActivePlan(): Promise<IPlan | null> {
      try {

        const activePlan = await Plans.findOne({status:"active"})

        return activePlan
        
      } catch (error) {
        
        return null
      }
  }

  async filterPlan(query: string): Promise<IPlan[] | null> {
      try {
        

          const filteredPlan = await Plans.find({stripeId:query})

          return filteredPlan

      } catch (error) {
        return null
      }
  }

  
}
