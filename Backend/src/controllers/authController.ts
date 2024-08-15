import { Request, Response ,NextFunction } from 'express';
import  AuthService  from '../services/implementations/AuthService';
import ApiResponse from '../utils/ApiResponse';
import { ApiError } from '../middleware/errorHandler';



class AuthController {


  private authService: AuthService;

  constructor(){
    this.authService = new AuthService()

  }


  public login = async (req: Request, res: Response) => {


    const loginData = await this.authService.login(req.body);
    

    if (loginData) { 

      const options ={
        httpOnly: true,
        secure: true
      }
      
     return res.status(200)
     .cookie(loginData.accessToken,options)
     .cookie(loginData.refreshToken,options)
     .json(
      new ApiResponse(
        200,
        loginData
      )
     )
    } else {
      return res.status(400)
      .json(
        new ApiError(
          400,
          "Invalid Credentials"
        )
      )
    }


  }


  public refreshAccessToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const newAccessToken = await this.authService.refreshAccessToken(refreshToken);
    if (newAccessToken) {
      res.json({ accessToken: newAccessToken });
    } else {
      res.status(400).json({ message: 'Invalid refresh token' });
    }
  };


  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      const user = req.body;

      const result = await this.authService.register(user);

      const options ={
        httpOnly: true,
        secure: true
      }

     return res
     .status(200)
     .cookie('accessToken',result.accessToken,options)
     .cookie('refreshToken',result.refreshToken,options)
     .json(

      new ApiResponse(
        200,
       {
        data: result
       },
       "User Registration Success"

      )
     )
    } catch (error) {
      next(error);
    }
  };
  

}



export default new AuthController();