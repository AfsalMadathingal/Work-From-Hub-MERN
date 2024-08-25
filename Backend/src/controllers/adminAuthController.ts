import { Request, Response ,NextFunction } from 'express';
import ApiResponse from '../utils/ApiResponse';
import { ApiError } from '../middleware/errorHandler';
import AdminAuthService from '../services/implementations/AdminAuthService';



class AdminAuthController {


    private adminAuthService : AdminAuthService;

    public options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        sameSite: 'strict' as const,
        maxAge: 24 * 60 * 60 * 1000 
      };

      constructor() {
        this.adminAuthService = new AdminAuthService()
      }


      public login = async (req:Request,res:Response)=>{

        const loginData = await this.adminAuthService.login(req.body);

        if(loginData){
            
            return res.status(200)
            .cookie('refreshToken',loginData.refreshToken,this.options)
            .json(
                new ApiResponse(
                    200,
                    loginData
                )
            )
        }

        return res.status(400)
        .json(
            new ApiError(
                400,
                "invalid Credentials"
            )
        )

      }

}


export default new AdminAuthController()