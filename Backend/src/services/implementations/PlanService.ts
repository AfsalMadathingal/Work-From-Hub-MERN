import { Document } from "mongoose";
import { IPlan } from "../../entities/PlanEntity";
import PlanRepository from "../../repositories/implementations/PlanRepository";
import { GetAllPlansResponse, IPlanRepository } from "../../repositories/interface/IPlanRepository";
import { IPlanService } from "../../services/interface/IPlanService";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default class PlanService implements IPlanService {
  private planRepository: IPlanRepository;

  constructor() {
    this.planRepository = new PlanRepository();
  }

  async createStripePlan(plan: IPlan) {
    const stripePlan = await stripe.plans.create({
      amount: Number(plan.price) * 100,
      interval: "month",
      product: {
        name: "Subscription",
      },
      currency: "INR",
    });
    console.log(stripePlan);

    return stripePlan.id;
  }

  async createPlan(bodyObj: IPlan) {

    const stripePlanId = await this.createStripePlan(bodyObj);

    bodyObj.stripeId = stripePlanId as string;

    const planObj = await this.planRepository.createPlan(bodyObj);

    return planObj
  }



  async getAllPlan(page: number, limit: number): Promise<GetAllPlansResponse | null> {


    const allPlans = await this.planRepository.getAllPlans(page,limit)

    return allPlans
  }


  async editPlan(id: string, action: string): Promise<IPlan | null> {

    const plan = await this.planRepository.getPlan(id)
    const activePlan = await this.planRepository.getActivePlan()

    let planAction: Partial<IPlan> = {};

    switch (action) {
      case "pause":
        planAction.status = "paused";
        break;
      case "active":
        planAction.status = "active";
        break;
      case "delete":
        planAction.isDeleted = true;
        break;
      default:
        return null;
    }

    if(plan.status == planAction?.status  ){
      return null
    }

    if (!id) {
      return null;
    }
    
    if(activePlan){
      const changingActivePlan = await this.planRepository.editPlan(activePlan?.stripeId,{status:"paused"})
      if(!changingActivePlan)
      {
        return null
      }
    }

    console.log(id,planAction);
    

      const editedPlan = await this.planRepository.editPlan(id,planAction)

      console.log(editedPlan);
      

      return editedPlan
  }

  async getPlansWithoutPagination(): Promise<IPlan[] | null> {
      
    return this.planRepository.getPlansWithoutPagination();

  }

   async getActivePlan(): Promise<IPlan | null> {
      return this.planRepository.getActivePlan()
  }
}
