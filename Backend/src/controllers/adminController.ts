import { Request, Response } from "express";
import UserService from "../services/implementations/UserService";
import ApiResponse from "../utils/ApiResponse";

class AdminController {

    private userService : UserService;
    
    constructor(){
        this.userService = new UserService();
    }


    public getAllUser = async (req:Request, res:Response)=>{

        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 5;

        const allUsers = await   this.userService.getAllUsers(page,limit)



        return res.status(200)
        .json(new ApiResponse(
            200,
            allUsers,
            "fetched successfully"
        ))

    }



}

export default new AdminController();