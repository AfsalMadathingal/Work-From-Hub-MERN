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

        const paln = this.planService.createPlan(req.body)

        return res.json(paln)
    }
}


export default new PlanController()
