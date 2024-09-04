import { Request, Response ,NextFunction } from 'express';
import  BusinessAuthService  from '../services/implementations/BusinessAuthService';
import ApiResponse from '../utils/ApiResponse';
import { ApiError } from '../middleware/errorHandler';
import OTPService from '../services/implementations/OTPService';
import BusinessUserService from '../services/implementations/BusinessUserService';



class AuthController {


  private businessAuthService: BusinessAuthService;
  private OTPService : OTPService;
  private businessUserService: BusinessUserService
  

  public options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'strict' as const,
    maxAge: 24 * 60 * 60 * 1000 
  };

  constructor(){
    this.businessAuthService = new BusinessAuthService()
    this.OTPService = new OTPService()
    this.businessUserService = new BusinessUserService()

  }


  public login = async (req: Request, res: Response) => {
    
    const loginData = await this.businessAuthService.login(req.body);

    if(loginData?.userFound.isBlocked){
      return res.status(401)
      .json(
        new ApiError(
          401,
          "You're blocked",
          "You're blocked"
        )
      );
    }
  
    if (loginData) { 
      
      
      return res.status(200)
        .cookie('BusinessUserRefreshToken', loginData.refreshToken, this.options)
        .json(
          new ApiResponse(
            200,
            loginData
          )
        );
    } else {
      return res.status(400)
        .json(
          new ApiError(
            400,
            "Invalid Credentials"
          )
        );
    }
  }


  public refreshAccessToken = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const newAccessToken = await this.businessAuthService.refreshAccessToken(refreshToken);
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
      const {user,otp} = req.body;



      
      const OTPVerification = await this.OTPService.verifyOTP(user,otp)

      if(!OTPVerification){
        return res.status(500)
        .json(
          new ApiError(
            500,
            "Entered Wrong OTP"
          )
        )
      }

      const result = await this.businessAuthService.register(user);

     
      if(!result){
        res.status(500)
        .json(
          new ApiError(
            500,
            "Something Went Wrong Try Again"
          )
        )
      }


      const options ={
        httpOnly: true,
        secure: true
      }

     return res
     .status(200)
     .cookie('BusinessUserRefreshToken',result.refreshToken,options)
     .json(

      new ApiResponse(
        200,
       {
       data:result
       },
       "User Registration Success"

      )
     )
    } catch (error) {
      
      next(error);
    }
  };


  public sendOTP = async (req:Request, res:Response, next : NextFunction)=>{
    try {

      const user= req.body;

      const otpExists = await this.OTPService.checkBusinessUserOTPExists(user)

      if(otpExists){
        return res.status(500)
        .json(
          new ApiError(
            500,
            "Please Wait 1 Minute. Before Trying to register again"
          )
        )
      }

      const isUserExists = await this.businessUserService.findUserWithEmail(user)

      if(isUserExists){
        return res.status(500)
        .json(
          new ApiError(
            500,
            "User Already Exists"
          )
        )
      }

      const response = await this.OTPService.sendBusinessUserOTP(user)

      console.log(response);

      return res.status(200)
      .json(
        new ApiResponse(
          200,
          user,
          "otp sent successfully"
        )
      )
      

      
    } catch (error) {
      next(error)
    }
  }
  
  public logout = async (req:Request & {user: {rawToken: string, id: string}},res:Response)=>{

  
    const {user} = req;

    const logoutData = await this.businessAuthService.logout(user.rawToken,user.id)

    if(logoutData){
      return res.status(200)
      .clearCookie('BusinessUserRefreshToken')
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

}



export default new AuthController();
