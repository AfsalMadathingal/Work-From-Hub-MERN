import { IPlan } from "../../entities/PlanEntity";
import PlanRepository from "../../repositories/implementations/PlanRepository";
import { IPlanRepository } from "../../repositories/interface/IPlanRepository";
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
}
