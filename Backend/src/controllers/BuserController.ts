import WorkspaceService from "../services/implementations/WorkspaceService";
import { IWorkspaceService } from "../services/interface/IWorkSpaceService";
import { Request,Response, NextFunction } from "express";

class BUserController {

    private workspaceService : IWorkspaceService

    constructor()
    {
        this.workspaceService = new WorkspaceService()
    
    }



    public  submitListingData = async (req:Request,res:Response,next:NextFunction)=>{


        try {


            const response = await this.workspaceService.submitWorkspaceListing(req.body)


            res.send(response)

            
        } catch (error) {

            next(error)
            
        }
    }


    
}


export default  new BUserController();