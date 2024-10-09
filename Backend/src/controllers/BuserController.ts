import { IBusinessUserService } from "../services/interface/IBusinessUserService";
import WorkspaceService from "../services/implementations/WorkspaceService";
import { IWorkspaceService } from "../services/interface/IWorkSpaceService";
import { Request,Response, NextFunction, response } from "express";
import BusinessUserService from "../services/implementations/BusinessUserService";
import { IBusinessUser } from "../entities/BusinessUserEntity";
import { ApiError } from "../middleware/errorHandler";
import ApiResponse from "../utils/ApiResponse";
import { HttpStatus } from "../enums/HttpStatus";

class BUserController {

    private workspaceService : IWorkspaceService
    private bUserService : IBusinessUserService

    constructor()
    {
        this.workspaceService = new WorkspaceService()
        this.bUserService = new BusinessUserService()
    }



    public  submitListingData = async (req:Request,res:Response,next:NextFunction)=>{


        try {

       

            if(!req.files){
                return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .json(
                    new ApiError(
                        HttpStatus.INTERNAL_SERVER_ERROR,
                        "no files found ",
                        "something wrong with uploading"
                    )
                )
            }


            console.log(req.file);
            

            const response = await this.workspaceService.submitWorkspaceListing(req)

            console.log(response);
            

            res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK,response,"Workspace listing created successfully"))
            
        } catch (error) {

            next(error)
            
        }
    }

    public validateUser = async (req:Request & {user:IBusinessUser},res:Response,next:NextFunction)=>{

        try {

         
            const user = await this.bUserService.findUserWithId(req.user)

            if(user?.isBlocked){
                throw (new ApiError(
                    401,
                    "User is blocked ",
                    "validation failed user has no access to the website"
                ))
            }



        if(!user){
            throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,"something went wrong ", "please trddy again later")
        }

        next()
            
        } catch (error) {

            next(error)
            
        }
    }

    public getAllPendingSubmission = async (req:Request , res:Response , next:NextFunction)=> {

        try {

            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 5;

            const response = await this.workspaceService.getWorkSpaceSubmission(page,limit);

          
           
           return res.json(new ApiResponse( HttpStatus.OK, response, "fetched successfully"))
            

        } catch (error) {

            next(error)
            
        }
    }

    public getAllWorkspaces = async (req:Request , res:Response , next:NextFunction)=> {

        try {

            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 5;

            const response = await this.workspaceService.getAllWorkspaces();

            console.log(response);
            
            return res.json(new ApiResponse( HttpStatus.OK, response, "fetched successfully"));
            

        } catch (error) {

           
            next(error)
            
        }
    }

    
    public getApprovedWorkspaces = async (req:Request , res:Response , next:NextFunction)=> {

        try {

            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 5;

            const response = await this.workspaceService.getApprovedWorkspaces(page,limit);

            console.log(response);
            
            return res.json(new ApiResponse( HttpStatus.OK, response, "fetched successfully"));
            

        } catch (error) {

            next(error)
            
        }
    }


    
}


export default  new BUserController();