import { NextFunction, Request, Response } from "express";
import PlanService from "../services/implementations/PlanService";
import ApiResponse from "../utils/ApiResponse";
import { ApiError } from "../middleware/errorHandler";
import { number } from "joi";

class PlanController {
  private planService: PlanService;

  constructor() {
    this.planService = new PlanService();
  }

  public createPlan = async (req: Request, res: Response,next:NextFunction) => {

    try {
        
        const plan = await this.planService.createPlan(req.body);

        if (plan) {
          return res
            .status(200)
            .json(new ApiResponse(200, plan, "plan created successfully"));
        }
    
        return res
          .status(500)
          .json(new ApiError(500, "Something Went Wrong While Creating Plan"));
        
    } catch (error) {

        next(error)
        
    }

  };

  public getPlans = async (req: Request, res: Response) => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 5;

      const plans = await this.planService.getAllPlan(page, limit);

      return res
        .status(200)
        .json(new ApiResponse(200, plans, "fetched successfully"));
    } catch (error) {}
  };

  public editPlan = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const {id,action} = req.body
        

        const plans = await this.planService.editPlan(id,action)

        if(!plans){
            return res.status(500)
            .json(new ApiError(
                500,
                "error while Edit",
                "something Went Wrong"
            ))
        }


        const allPlans = await this.planService.getPlansWithoutPagination()

        if(!allPlans){
            return res.status(500)
            .json(new ApiError(
                500,
                "error while Edit",
                "something Went Wrong"
            ))
        }


        return res.status(200)
        .json(
            new ApiResponse(
                200,
                allPlans,
                "editing success"

            )
        )



    } catch (error) {
      next(error);
    }
  };
}

export default new PlanController();
