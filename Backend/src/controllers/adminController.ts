import { Request, Response } from "express";
import UserService from "../services/implementations/UserService";
import ApiResponse from "../utils/ApiResponse";
import BusinessUserService from "../services/implementations/BusinessUserService";

class AdminController {

    private userService : UserService;
    private businessUserService : BusinessUserService
    
    constructor(){
        this.userService = new UserService();
        this.businessUserService = new BusinessUserService();
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


    public blockUsers = async (req:Request , res:Response)=>{

        const id = req.params.id;

 
  
        
        const userBlocked = await this.userService.blockUser(id)

        if(!userBlocked){
            return res.status(422)
            .json(new ApiResponse(
                422,
                null,
                "Unprocessable Entity"
            ))
        }


        return res.status(200)
        .json(new ApiResponse(
            200,
            userBlocked,
            "Operation successful"
        ))




    }


    public blockBUseres =async (req:Request , res:Response)=>{

        const id = req.params.id;

 
  
        
        const userBlocked = await this.businessUserService.blockUser(id)

        if(!userBlocked){
            return res.status(422)
            .json(new ApiResponse(
                422,
                null,
                "Unprocessable Entity"
            ))
        }


        return res.status(200)
        .json(new ApiResponse(
            200,
            userBlocked,
            "Operation successful"
        ))




    }


    public editUser = async (req:Request,res:Response)=>{

        const user = req.body
        const userEdited = await this.userService.editUser(user)

  

        if(!userEdited){
            return res.status(422)
            .json(new ApiResponse(
                422,
                null,
                "Unprocessable Entity"
            ))
        }


        if('emailExists' in userEdited && userEdited.emailExists){
            return res.status(409)
            .json(new ApiResponse(
                409,
                null,
                "Email Already Exists"
            ))
            
        }


        return res.status(200)
        .json(new ApiResponse(
            200,
            userEdited,
            "Editing successful"
        ))

    }

    public getBusinessUsers = async (req:Request,res:Response) =>{


        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 5;

        

        const allUsers = await   this.businessUserService.getBusinessUsers(page,limit)



        return res.status(200)
        .json(new ApiResponse(
            200,
            allUsers,
            "fetched successfully"
        ))
        

    }

    public editBUser =  async (req:Request,res:Response)=>{

        const user = req.body
        const userEdited = await this.businessUserService.editUser(user)

  

        if(!userEdited){
            return res.status(422)
            .json(new ApiResponse(
                422,
                null,
                "Unprocessable Entity"
            ))
        }


        if('emailExists' in userEdited && userEdited.emailExists){
            return res.status(409)
            .json(new ApiResponse(
                409,
                null,
                "Email Already Exists"
            ))
            
        }


        return res.status(200)
        .json(new ApiResponse(
            200,
            userEdited,
            "Editing successful"
        ))

    }



}

export default new AdminController();