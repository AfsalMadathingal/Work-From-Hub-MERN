import { Request, Response, NextFunction } from "express";
import UserService from "../services/implementations/UserService";
import AuthService from "../services/implementations/AuthService";
import ApiResponse from "../utils/ApiResponse";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { ApiError } from "../middleware/errorHandler";
import { IUploadService } from "../services/interface/IUploadService";
import UploadService from "../services/implementations/UploadService";
import { IUsers } from "entities/UserEntity";
import { IPlanService } from "../services/interface/IPlanService";
import PlanService from "../services/implementations/PlanService";
import WorkspaceService from "../services/implementations/WorkspaceService";
import { IWorkspaceService } from "../services/interface/IWorkSpaceService";
import { ISeatService } from "../services/interface/ISeatService";
import { SeatService } from "../services/implementations/SeatService";

class UserController {
  private userService: UserService;
  private uploadService : IUploadService
  private AuthService: AuthService;
  private planService : IPlanService
  private workspaceService:IWorkspaceService;
  private seatService: ISeatService;
  

  constructor() {
    this.userService = new UserService();
    this.AuthService = new AuthService();
    this.uploadService = new UploadService();
    this.planService = new PlanService();
    this.workspaceService = new WorkspaceService();
    this.seatService = new SeatService();


  }


  public editUser = async(req:Request,res:Response,next:NextFunction)=>{

    try {
      

        const editedUser = await this.userService.editUser(req.body)

     
        if(!editedUser){
            return res.status(422)
            .json(new ApiResponse(
                422,
                null,
                "Unprocessable Entity"
            ))
        }


        if('emailExists' in editedUser && editedUser.emailExists){
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
            editedUser,
            "Editing successful"
        ))

    } catch (error) {

      next(error)
      
    }


  }

  public editProfilePhoto = async (req: Request & {file:{path:string} ,user:IUsers}, res: Response ,next:NextFunction) => {
    try {

      if (!req.file) {
        
        return res.status(400)
        .json(new ApiError(
          400,
          "Upload Error",
          "No file to Upload"
          
        ))
      }
  

      const uploadResult = await this.uploadService.uploadSinglePhoto(req.file.path)
      const user = {profilePic:uploadResult.url , id:req.user.id}

      console.log(user);
      
      const userFound = await this.userService.editUser(user)

  

      console.log(userFound);

      // const {password,refreshToken,...userToSend} = userFound;
      
      if(userFound){
        return res.status(200)
        .json(
          new ApiResponse(
            200,
            userFound,
            "Success fully Uploaded"
          )
        )
      }

      return res.status(500)
      .json(
        new ApiError(
          500,
          "Error While Uploading",
          "uploading failed"
        )
      )

    } catch (error) {
      next(error)
    }
  };


  public getActivePlan = async (req:Request , res:Response, next:NextFunction)=>{

    try {


      const activePlan = await this.planService.getActivePlan();


     if(!activePlan){
      return res.status(404)
      .json(new ApiError(
        404,
        "No active Plan",
        "Currently subscription not available"
      ))
     }

     return res.status(200)
     .json(new ApiResponse(
       200,
       activePlan,
       "Fetched Successfully"
     ))

      
    } catch (error) {

      next(error)

    }


  }

  
  public validateSuccessResponse = async (req:Request , res:Response, next:NextFunction)=>{

    try {

      return res.status(200)
      .json(new ApiResponse(
        200,
        null,
        "Validation successful"
      ))
      
    } catch (error) {

      next(error)

    }


  }

  
  public getWorkspace = async (req:Request , res:Response, next:NextFunction)=>{

    try {

      const workspace = await this.workspaceService.getApprovedWorkspaces(1,4)
      if(!workspace){
        return res.status(404)
        .json(new ApiResponse(
          404,
          null,
          "Workspace not found"
        ))
      }

      return res.status(200)
      .json(new ApiResponse(
        200,
        workspace,
        "Fetched Successfully"
      ))
      
    } catch (error) {

      next(error)

    }


  }

  public getSingleWorkspace = async (req:Request , res:Response, next:NextFunction)=>{

    try {

      const id = req.params.id;

      const workspace = await this.workspaceService.getSingleWorkspace(id);
      if(!workspace){
        return res.status(404)
        .json(new ApiResponse(
          404,
          null,
          "Workspace not found"
        ))
      }

      return res.status(200)
      .json(new ApiResponse(
        200,
        workspace,
        "Fetched Successfully"
      ))
      
    } catch (error) {

      next(error)

    }


  }

  
  public getAvailableSeatsOfWorkspace = async (req:Request , res:Response, next:NextFunction)=>{

    try {

      const {workspaceId} = req.params;

      const workspace = await this.workspaceService.getSingleWorkspace(workspaceId);
      if(!workspace){
        return res.status(404)
        .json(new ApiResponse(
          404,
          null,
          "Workspace not found"
        ))
      }

      const availableSeats = await this.seatService.getSeatsByWorkspaceId(workspace.id)
      if(!availableSeats){
        return res.status(404)
        .json(new ApiResponse(
          404,
          null,
          "No available seats"
        ))
      }

      return res.status(200)
      .json(new ApiResponse(
        200,
        availableSeats,
        "Fetched Successfully"
      ))
      
    } catch (error) {

      next(error)

    }


  }
  
  

}

export default new UserController();
