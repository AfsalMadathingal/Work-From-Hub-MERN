import { Request, Response, NextFunction } from "express";
import UserService from "../services/implementations/UserService";
import AuthService from "../services/implementations/AuthService";
import ApiResponse from "../utils/ApiResponse";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";
import { ApiError } from "../middleware/errorHandler";
import { IUploadService } from "../services/interface/IUploadService";
import UploadService from "../services/implementations/UploadService";

class UserController {
  private userService: UserService;
  private uploadService : IUploadService
  private AuthService: AuthService;

  constructor() {
    this.userService = new UserService();
    this.AuthService = new AuthService();
    this.uploadService = new UploadService();
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
      
    }


  }

  public editProfilePhoto = async (req: Request & {file:{path:string}}, res: Response) => {
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
      // Assuming `req.file.path` contains the path to the uploaded file

  
      res.status(200).json({
        message: 'File uploaded successfully',
        data: uploadResult,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

}

export default new UserController();
