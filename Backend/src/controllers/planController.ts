import { Request,Response } from "express";
import PlanService from "../services/implementations/PlanService";
import ApiResponse from "../utils/ApiResponse";
import { ApiError } from "../middleware/errorHandler";


class  PlanController {
    private planService : PlanService;


    constructor(){
        this.planService = new PlanService();
    }


    public createPlan = async (req:Request,res:Response)=>{

        const plan = await this.planService.createPlan(req.body)

        if(plan){
            return res.status(200)
            .json(new ApiResponse(
                200,
                plan,
                "plan created successfully"
            ))

        }

        return res.status(500)
        .json(new ApiError(
            500,
            "Something Went Wrong While Creating Plan"
        ))

  
    }

    public getPlans = async (req:Request,res:Response)=>{

        const plans = await this.planService.getAllPlan()

        return res.status(200)
        .json(new ApiResponse(
            200,
            plans,
            "fetched successfully"
        ))

    }
}


export default new PlanController()
