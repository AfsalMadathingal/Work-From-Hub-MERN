import { Request, Response, NextFunction } from "express";
import UserService from "../services/implementations/UserService";
import AuthService from "../services/implementations/AuthService";
import ApiResponse from "../utils/ApiResponse";

class UserController {
  private userService: UserService;
  private AuthService: AuthService;

  constructor() {
    this.userService = new UserService();
    this.AuthService = new AuthService();
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

}

export default new UserController();
