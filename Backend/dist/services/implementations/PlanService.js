"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlanRepository_1 = __importDefault(require("../../repositories/implementations/PlanRepository"));
const stripe_1 = __importDefault(require("stripe"));
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY);
class PlanService {
    planRepository;
    constructor() {
        this.planRepository = new PlanRepository_1.default();
    }
    async createStripePlan(plan) {
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
    async createPlan(bodyObj) {
        const stripePlanId = await this.createStripePlan(bodyObj);
        bodyObj.stripeId = stripePlanId;
        const planObj = await this.planRepository.createPlan(bodyObj);
        return planObj;
    }
    async getAllPlan(page, limit) {
        const allPlans = await this.planRepository.getAllPlans(page, limit);
        return allPlans;
    }
    async editPlan(id, action) {
        if (!id) {
            return null;
        }
        const plan = await this.planRepository.getPlan(id);
        console.log(plan);
        const activePlan = await this.planRepository.getActivePlan();
        console.log(activePlan);
        let planAction = {};
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
        if (activePlan) {
            const changingActivePlan = await this.planRepository.editPlan(activePlan?.stripeId, { status: "paused" });
            if (!changingActivePlan) {
                return null;
            }
        }
        console.log(id, planAction);
        const editedPlan = await this.planRepository.editPlan(id, planAction);
        console.log(editedPlan);
        return editedPlan;
    }
    async getPlansWithoutPagination() {
        return await this.planRepository.getPlansWithoutPagination();
    }
    async getActivePlan() {
        return await this.planRepository.getActivePlan();
    }
    async filterPlan(query) {
        return await this.planRepository.filterPlan(query);
    }
}
exports.default = PlanService;
//# sourceMappingURL=PlanService.js.map