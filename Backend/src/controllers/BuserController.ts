import { IBusinessUserService } from "../services/interface/IBusinessUserService";
import WorkspaceService from "../services/implementations/WorkspaceService";
import { IWorkspaceService } from "../services/interface/IWorkSpaceService";
import { Request,Response, NextFunction, response } from "express";
import BusinessUserService from "../services/implementations/BusinessUserService";
import { IBusinessUser } from "../entities/BusinessUserEntity";
import { ApiError } from "../middleware/errorHandler";

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
                return res.status(500)
                .json(
                    new ApiError(
                        500,
                        "no files found ",
                        "something wrong with uploading"
                    )
                )
            }

            const response = await this.workspaceService.submitWorkspaceListing(req)


            res.send(response)

            
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
            throw new ApiError(500,"something went wrong ", "please trddy again later")
        }

        next()
            
        } catch (error) {

            next(error)
            
        }
    }


    
}


export default  new BUserController();