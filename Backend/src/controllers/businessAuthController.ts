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
  
    if (loginData) { 
      const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure in production
        sameSite: 'strict' as const,
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      };
      
      return res.status(200)
        .cookie('accessToken', loginData.refreshToken, options)
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
     .cookie('refreshToken',result.refreshToken,options)
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
  


}



export default new AuthController();
