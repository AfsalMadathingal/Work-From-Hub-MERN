import { Request, Response ,NextFunction } from 'express';
import  AuthService  from '../services/implementations/AuthService';
import ApiResponse from '../utils/ApiResponse';
import { ApiError } from '../middleware/errorHandler';
import OTPService from '../services/implementations/OTPService';
import UserService from '../services/implementations/UserService';



class AuthController {


  private authService: AuthService;
  private OTPService : OTPService;
  private UserService : UserService;

  options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'strict' as const,
    maxAge: 24 * 60 * 60 * 1000 
  };

  constructor(){
    this.authService = new AuthService()
    this.OTPService = new OTPService()
    this.UserService = new UserService()


  }


  public login = async (req: Request, res: Response) => {
    const loginData = await this.authService.login(req.body);
  
    if (loginData) { 

      
      return res.status(200)
        .cookie('refreshToken', loginData.refreshToken, this.options)
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

      const result = await this.authService.register(user);

     
      if(!result){
        res.status(500)
        .json(
          new ApiError(
            500,
            "Something Went Wrong Try Again"
          )
        )
      }


  
     return res
     .status(200)
     .cookie('refreshToken',result.refreshToken,this.options)
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
  
  public googleSignIn = async (req:Request,res:Response,next:NextFunction)=>{
    try {
      

      const {displayName,email,photoURL} = req.body;

      const userAfterAuth = await this.authService.googleSignIn({fullName:displayName,email:email,profilePic:photoURL})

      console.log(userAfterAuth);
      
      return res.status(200)
      .cookie("refreshToken",userAfterAuth.refreshToken,this.options)
      .json(
        new ApiResponse(
          200,
          userAfterAuth,
          "User authentication success"
        )
      )

    } catch (error) {

      next(error)
      
    }
  }

  public sendOTP = async (req:Request, res:Response, next : NextFunction)=>{
    try {

      const user= req.body;

      const otpExists = await this.OTPService.checkOTPExists(user)

      if(otpExists){
        return res.status(500)
        .json(
          new ApiError(
            500,
            "Please Wait 1 Minute. Before Trying to register again"
          )
        )
      }

      const isUserExists = await this.UserService.findUserWithEmail(user)

      if(isUserExists){
        return res.status(500)
        .json(
          new ApiError(
            500,
            "User Already Exists"
          )
        )
      }

      const response = await this.OTPService.sendOtp(user)

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
