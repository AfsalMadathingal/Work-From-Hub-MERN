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

      public logout = async (req:Request & {user: {rawToken: string, id: string}},res:Response)=>{

  
          const {user} = req;

          const logoutData = await this.adminAuthService.logout(user.rawToken,user.id)

          if(logoutData){
            return res.status(200)
            .clearCookie('refreshToken')
            .json(
                new ApiResponse(
                    200,
                    {message:"successfully cleared the token"},
                    "logout success"
                )
            )
          }

          return res.status(500)
          .json(new ApiResponse(
            500,
            null,
            "Something Went Wrong Clear your Browser Cookies"
          ))

      }

      public refreshAccessToken = async (req:Request & {user: {rawToken: string, id: string}} ,res:Response)=>{

        const {user} = req

 

        const accessToken = await this.adminAuthService.refreshAccessToken(user.id)

        if(accessToken){
          return res.status(200)
          .json(
            new ApiResponse(
              200,
              {accessToken},
              "token Created Successfully"
            )
          )
        }

        
      }

}


export default new AdminAuthController()