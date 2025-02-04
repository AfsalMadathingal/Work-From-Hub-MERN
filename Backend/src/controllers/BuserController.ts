import { IBusinessUserService } from "../services/interface/IBusinessUserService";
import WorkspaceService from "../services/implementations/WorkspaceService";
import { IWorkspaceService } from "../services/interface/IWorkSpaceService";
import { Request,Response, NextFunction, response } from "express";
import BusinessUserService from "../services/implementations/BusinessUserService";
import { IBusinessUser } from "../entities/BusinessUserEntity";
import { ApiError } from "../middleware/errorHandler";
import ApiResponse from "../utils/ApiResponse";
import { HttpStatus } from "../enums/HttpStatus";
import { IBookingService } from "../services/interface/IBookingService";
import { IDecode } from "entities/decode";
import BookingService from "../services/implementations/BookingServices";

class BUserController {

    private workspaceService : IWorkspaceService
    private bUserService : IBusinessUserService
    private bookingService: IBookingService;


    constructor()
    {
        this.workspaceService = new WorkspaceService()
        this.bUserService = new BusinessUserService()
        this.bookingService = new BookingService();
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

    public getAllWorkspaces = async (req:Request & IDecode , res:Response , next:NextFunction)=> {

        try {

            const  user = req.user as IBusinessUser;

            console.log(user);
            

            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 5;

            const response = await this.workspaceService.getWorkspaceByOwnerId(user.id);

            console.log(response);
            
            return res.json(new ApiResponse( HttpStatus.OK, response, "fetched successfully"));
            

        } catch (error) {

           
            next(error)
            
        }
    }

    
    public getApprovedWorkspaces = async (req:Request & IDecode , res:Response , next:NextFunction)=> {

        try {

            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 5;

            const response = await this.workspaceService.findApprovedByOwnerId(req.user.id, page,limit);

            
            return res.json(new ApiResponse( HttpStatus.OK, response, "fetched successfully"));
            

        } catch (error) {

            next(error)
            
        }
    }

    public getBookingsByOwnerId = async (req:Request , res:Response , next:NextFunction)=> {

        try {

            const page = parseInt(req.query.page as string) || 1;
            const limit = parseInt(req.query.limit as string) || 5;
            const id = req.query.ownerId.toString();

            const response = await this.bookingService.getBookingsByOwnerId(id,page,limit);

            console.log(response);
            
            return res.json(new ApiResponse( HttpStatus.OK, response, "fetched successfully"));
            

        } catch (error) {

            next(error)
            
        }
    }


    public getDashboardData = async (req: Request & IDecode, res: Response, next: NextFunction) => {
    try {
       

        const [bookingData, workspaceData , countBooking] = await Promise.all([
            this.bookingService.getBookingsByOwnerId(req.user.id),
            this.workspaceService.getWorkspaceByOwnerId(req.user.id),
            this.bookingService.countByOwnerId(req.user.id),
            // this.workspaceService.countByOwnerId(req.user.id)

          ]);

          
        
    
    
          if(bookingData && workspaceData && countBooking ){
            return res.status(HttpStatus.OK).json(new ApiResponse(HttpStatus.OK,{bookingData , workspaceData , countBooking}))
          }
          
    
          throw new Error("something went wrong")



    } catch (error) {
        next(error);
    }
}

public getReport = async (req:Request & IDecode, res:Response,next:NextFunction )=>{

try {
    let filter :{
    } = {}
    const ownerId = req.user.id;
    filter = {ownerId,...req.query};

    const data = await this.bookingService.ReportByOwnerId(filter)

    if(!data){
        throw new Error('something went Wrong')
    }

    res.status(HttpStatus.OK )
    .json(new ApiResponse(HttpStatus.OK,data,"successfully fetched "))
    
} catch (error) {
    next(error)
}
 

}


public unHoldWorkspace = async (req:Request & IDecode, res:Response,next:NextFunction) => {

    try {
        const workspaceId = req.params.workspaceId;
        const ownerId = req.user.id;
        console.log('====================================');
        console.log(workspaceId,ownerId);
        console.log('====================================');
        const workspace = await this.workspaceService.unHoldWorkspace(workspaceId, ownerId);

        if(!workspace){
            throw new Error('something went wrong while unholding workspace')
        }

        res.status(HttpStatus.OK )
        .json(new ApiResponse(HttpStatus.OK,workspace,"successfully unholded "))
        
    } catch (error) {
        next(error)
    }
    



    
}

}

export default  new BUserController();