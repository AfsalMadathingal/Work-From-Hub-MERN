"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const planModel_1 = __importDefault(require("../../models/planModel"));
class PlanRepository {
    async createPlan(plan) {
        const newPlan = new planModel_1.default(plan);
        const savedPlan = await newPlan.save();
        return savedPlan;
    }
    async getAllPlans(page, limit) {
        const allPlans = await planModel_1.default.find({ isDeleted: false })
            .skip((page - 1) * limit)
            .limit(limit);
        const totalPlans = await planModel_1.default.countDocuments();
        const totalPages = Math.ceil(totalPlans / limit);
        console.log(allPlans);
        return { allPlans, totalPages };
    }
    async editPlan(id, planAction) {
        try {
            const plan = await planModel_1.default.findOneAndUpdate({ stripeId: id }, {
                $set: planAction
            });
            console.log(plan);
            return plan;
        }
        catch (error) {
            return null;
        }
    }
    async getPlansWithoutPagination() {
        try {
            const allPlans = await planModel_1.default.find({});
            return allPlans;
        }
        catch (error) {
            return null;
        }
    }
    async getPlan(id) {
        try {
            const plan = await planModel_1.default.findOne({ stripeId: id });
            return plan;
        }
        catch (error) {
            return null;
        }
    }
    async getActivePlan() {
        try {
            const activePlan = await planModel_1.default.findOne({ status: "active" });
            return activePlan;
        }
        catch (error) {
            return null;
        }
    }
    async filterPlan(query) {
        try {
            const filteredPlan = await planModel_1.default.find({ stripeId: query });
            return filteredPlan;
        }
        catch (error) {
            return null;
        }
    }
}
exports.default = PlanRepository;
//# sourceMappingURL=PlanRepository.js.map