import { Request, Response, NextFunction } from "express";
import AuthService from "../services/implementations/AuthService";
import ApiResponse from "../utils/ApiResponse";
import { ApiError } from "../middleware/errorHandler";
import OTPService from "../services/implementations/OTPService";
import UserService from "../services/implementations/UserService";
import { IAuthService } from "../services/interface/IAuthService";
import { IUserService } from "services/interface/IUserService";
import axios from 'axios';
import { IUploadService } from "../services/interface/IUploadService";
import UploadService from "../services/implementations/UploadService";
import { IUsers } from "entities/UserEntity";

class AuthController {
  private authService: IAuthService;
  private OTPService: OTPService;
  private UserService: IUserService;
  private UploadService :IUploadService;

  options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: 24 * 60 * 60 * 1000,
  };

  constructor() {
    this.authService = new AuthService();
    this.OTPService = new OTPService();
    this.UserService = new UserService();
    this.UploadService = new UploadService();
  }

  public login = async (req: Request, res: Response) => {
    let loginData = await this.authService.login(req.body);

    console.log("============logindata========");
    
    console.log(loginData);
    console.log("============logindata========");

   
    

    if (loginData?.userFound?.isBlocked) {
      return res
        .status(401)
        .json(new ApiError(401, "You're blocked", "You're blocked"));
    }

    if (loginData) {

      const photoURL = loginData.userFound.profilePic;

      if(loginData.userFound.profilePic.includes('google')){
    
        const response = await axios.get(photoURL as string, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data, 'binary');

      const s3UrlFromGoogleImage = await this.UploadService.uploadSinglePhotoToS3(imageBuffer)

      loginData.userFound.profilePic = s3UrlFromGoogleImage
      loginData.userFound.id = loginData.userFound._id.toString();
      const userAfterImageChnage =  await this.UserService.editUser(loginData.userFound)
      loginData.userFound = userAfterImageChnage as IUsers

      console.log(loginData.userFound);
      
      }
      return res
        .status(200)
        .cookie("refreshToken", loginData.refreshToken, this.options)
        .json(new ApiResponse(200, loginData));
    } else {
      return res.status(400).json(new ApiError(400, "Invalid Credentials"));
    }
  };

  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response> => {
    try {
      const { user, otp } = req.body;

      const OTPVerification = await this.OTPService.verifyOTP(user, otp);

      if (!OTPVerification) {
        return res.status(500).json(new ApiError(500, "Entered Wrong OTP"));
      }

      const result = await this.authService.register(user);

      if (!result) {
        res
          .status(500)
          .json(new ApiError(500, "Something Went Wrong Try Again"));
      }

      return res
        .status(200)
        .cookie("refreshToken", result.refreshToken, this.options)
        .json(
          new ApiResponse(
            200,
            {
              data: result,
            },
            "User Registration Success"
          )
        );
    } catch (error) {
      next(error);
    }
  };

  public googleSignIn = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { displayName, email, photoURL } = req.body;

      // Fetch the image from the photoURL and get the buffer
      const response = await axios.get(photoURL, { responseType: 'arraybuffer' });
      const imageBuffer = Buffer.from(response.data, 'binary');

      const s3UrlFromGoogleImage = await this.UploadService.uploadSinglePhotoToS3(imageBuffer)

      const userAfterAuth = await this.authService.googleSignIn({
        fullName: displayName,
        email: email, 
        profilePic: s3UrlFromGoogleImage,
      });

      console.log('====================================');
      console.log(userAfterAuth);
      console.log('====================================');


      return res
        .status(200)
        .cookie("refreshToken", userAfterAuth.refreshToken, this.options)
        .json(
          new ApiResponse(200, userAfterAuth, "User authentication success")
        );
    } catch (error) {
      next(error);
    }
  };

  public sendOTP = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body;

      const otpExists = await this.OTPService.checkOTPExists(user);

      if (otpExists) {
        return res
          .status(500)
          .json(
            new ApiError(
              500,
              "Please Wait 1 Minute. Before Trying to register again"
            )
          );
      }

      const isUserExists = await this.UserService.findUserWithEmail(user);

      if (isUserExists) {
        return res.status(500).json(new ApiError(500, "User Already Exists"));
      }

      const response = await this.OTPService.sendOtp(user);

      console.log(response);

      return res
        .status(200)
        .json(new ApiResponse(200, user, "otp sent successfully"));
    } catch (error) {
      next(error);
    }
  };

  public forgotPasswordOTP = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const isUserExists = await this.UserService.findUserWithEmail(req.body);

      if (!isUserExists || isUserExists?.isBlocked) {
        return res
          .status(400)
          .json(
            new ApiResponse(
              400,
              null,
              isUserExists?.isBlocked
                ? "Account is blocked"
                : "Check Your Email"
            )
          );
      }

      const otpExists = await this.OTPService.checkOTPExists(req.body);

      if (otpExists) {
        return res
          .status(500)
          .json(new ApiError(500, "Please Wait 1 Minute. Before Trying again"));
      }

      await this.OTPService.sendOtp(req.body);

      return res
        .status(200)
        .json(new ApiResponse(200, null, "OTP sent successfully"));
    } catch (error) {
      next(error);
    }
  };

  public otpVerify = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { email, otp } = req.body;

      const isUserExists = await this.UserService.findUserWithEmail(req.body);

      if (!isUserExists || isUserExists.isBlocked) {
        return res
          .status(400)
          .json(
            new ApiResponse(
              400,
              null,
              isUserExists.isBlocked ? "Account is blocked" : "Something Wrong"
            )
          );
      }

      const OTPVerification = await this.OTPService.verifyOTP(
        isUserExists,
        req.body
      );

      if (!OTPVerification) {
        return res.status(500).json(new ApiError(500, "Entered Wrong OTP"));
      }

      const { password, refreshToken, ...user } = isUserExists;

      const accessToken = this.authService.generateTokenForForgotPassword(user);

      return res
        .status(200)
        .cookie("userOtpAccessToken", accessToken)
        .json(
          new ApiResponse(200, { accessToken }, "OTP Verified Successfully")
        );
    } catch (error) {
      next(error);
    }
  };

  public resetPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { password, token } = req.body;

      const decode = await this.authService.decodeAndVerifyToken(token);
      req.body.user = decode;

      if (!decode) {
        return res
          .status(405)
          .json(new ApiResponse(405, null, "Session Expired Try Again"));
      }

      const isUserExists = await this.UserService.findUserWithEmail(
        req.body.user
      );

      if (!isUserExists || isUserExists?.isBlocked) {
        return res
          .status(400)
          .json(
            new ApiResponse(
              400,
              null,
              isUserExists.isBlocked ? "Account is blocked" : "Something Wrong"
            )
          );
      }

      const passwordUpdated = await this.UserService.changePassword(
        password,
        decode.email
      );



      if (passwordUpdated) {
        return res
          .status(200)
          .json(new ApiResponse(200, null, "reset success"));
      }

      return res
        .status(500)
        .json(new ApiError(500, "something went wrong", "reset Failed"));
    } catch (error) {
      next(error);
    }
  };

  public logout = async (
    req: Request & { user: { rawToken: string; id: string } },
    res: Response
  ) => {
    const { user } = req;


    const logoutData = await this.authService.logout(user.rawToken, user.id);


    if (logoutData) {
      return res
        .status(200)
        .clearCookie("refreshToken")
        .json(
          new ApiResponse(
            200,
            { message: "successfully cleared the token" },
            "logout success"
          )
        );
    }

    return res
      .status(500)
      .json(
        new ApiResponse(
          500,
          null,
          "Something Went Wrong Clear your Browser Cookies"
        )
      );
  };

  public refreshAccessToken = async (
    req: Request & { user: { rawToken: string; id: string } },
    res: Response,
    next:NextFunction
  ) => {
    const { user } = req;



    try {
      const accessToken = await this.authService.refreshAccessToken(user.rawToken);



      if (accessToken) {
        return res
          .status(200)
          .json(
            new ApiResponse(200, { accessToken }, "token Created Successfully")
          );
      }
    } catch (error) {
      next(error)

    }
  };

  public changePassword = async (req: Request, res: Response , next:NextFunction ) => {

    const {currentPassword, newPassword, email } = req.body;



    try {



      const userFound = await this.UserService.findByEmail(email)

      if(!userFound){
        return res
        .status(404)
        .json(new ApiResponse(404, null, "something went wrong"));
  
      }


      const compare = await this.authService.verifyOldPassword(userFound._id.toString(),currentPassword)


        if(!compare){

          return res
          .status(404)
          .json(new ApiResponse(404, null, "Current Password Is Wrong "));
    
          
        }
      
      
      

      const user = await this.authService.changePassword(email, newPassword);



      if (user) {
        return res
          .status(200)
          .json(new ApiResponse(200, user, "Password Changed Successfully"));
      }


      return res
      .status(404)
      .json(new ApiResponse(404, user, "something went wrong"));

      
    } catch (error) {
      next(error)
    }
  };
}

export default new AuthController();
