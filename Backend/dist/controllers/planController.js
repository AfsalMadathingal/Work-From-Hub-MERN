"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PlanService_1 = __importDefault(require("../services/implementations/PlanService"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const errorHandler_1 = require("../middleware/errorHandler");
class PlanController {
    planService;
    constructor() {
        this.planService = new PlanService_1.default();
    }
    createPlan = async (req, res, next) => {
        try {
            const plan = await this.planService.createPlan(req.body);
            if (plan) {
                return res
                    .status(200)
                    .json(new ApiResponse_1.default(200, plan, "plan created successfully"));
            }
            return res
                .status(500)
                .json(new errorHandler_1.ApiError(500, "Something Went Wrong While Creating Plan"));
        }
        catch (error) {
            next(error);
        }
    };
    getPlans = async (req, res, next) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 5;
            const query = req.query?.query || false;
            let filteredPlan;
            if (query) {
                filteredPlan = await this.planService.filterPlan(query);
                return res
                    .status(200)
                    .json(new ApiResponse_1.default(200, filteredPlan, "Success"));
            }
            const plans = await this.planService.getAllPlan(page, limit);
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, plans, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    editPlan = async (req, res, next) => {
        try {
            const { id, action } = req.body;
            const plans = await this.planService.editPlan(id, action);
            if (!plans) {
                return res
                    .status(500)
                    .json(new errorHandler_1.ApiError(500, "error while Edit", "something Went Wrong"));
            }
            const allPlans = await this.planService.getPlansWithoutPagination();
            if (!allPlans) {
                return res
                    .status(500)
                    .json(new errorHandler_1.ApiError(500, "error while Edit", "something Went Wrong"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, allPlans, "editing success"));
        }
        catch (error) {
            next(error);
        }
    };
    getActivePlan = async (req, res, next) => {
        try {
            const activePlan = await this.planService.getActivePlan();
            if (!activePlan) {
                return res
                    .status(404)
                    .json(new errorHandler_1.ApiError(404, "not found", "plan not found"));
            }
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, activePlan, "fetched successfully"));
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = new PlanController();
//# sourceMappingURL=planController.js.map