"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthService_1 = __importDefault(require("../services/implementations/AuthService"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const errorHandler_1 = require("../middleware/errorHandler");
const OTPService_1 = __importDefault(require("../services/implementations/OTPService"));
const UserService_1 = __importDefault(require("../services/implementations/UserService"));
const axios_1 = __importDefault(require("axios"));
const UploadService_1 = __importDefault(require("../services/implementations/UploadService"));
class AuthController {
    authService;
    OTPService;
    UserService;
    UploadService;
    options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
    };
    constructor() {
        this.authService = new AuthService_1.default();
        this.OTPService = new OTPService_1.default();
        this.UserService = new UserService_1.default();
        this.UploadService = new UploadService_1.default();
    }
    login = async (req, res) => {
        let loginData = await this.authService.login(req.body);
        console.log("============logindata========");
        console.log(loginData);
        console.log("============logindata========");
        if (loginData?.userFound?.isBlocked) {
            return res
                .status(401)
                .json(new errorHandler_1.ApiError(401, "You're blocked", "You're blocked"));
        }
        if (loginData) {
            const photoURL = loginData.userFound.profilePic;
            if (loginData.userFound.profilePic.includes('google')) {
                const response = await axios_1.default.get(photoURL, { responseType: 'arraybuffer' });
                const imageBuffer = Buffer.from(response.data, 'binary');
                const s3UrlFromGoogleImage = await this.UploadService.uploadSinglePhotoToS3(imageBuffer);
                loginData.userFound.profilePic = s3UrlFromGoogleImage;
                loginData.userFound.id = loginData.userFound._id.toString();
                const userAfterImageChnage = await this.UserService.editUser(loginData.userFound);
                loginData.userFound = userAfterImageChnage;
                console.log(loginData.userFound);
            }
            return res
                .status(200)
                .cookie("refreshToken", loginData.refreshToken, this.options)
                .json(new ApiResponse_1.default(200, loginData));
        }
        else {
            return res.status(400).json(new errorHandler_1.ApiError(400, "Invalid Credentials"));
        }
    };
    createUser = async (req, res, next) => {
        try {
            const { user, otp } = req.body;
            const OTPVerification = await this.OTPService.verifyOTP(user, otp);
            if (!OTPVerification) {
                return res.status(500).json(new errorHandler_1.ApiError(500, "Entered Wrong OTP"));
            }
            const result = await this.authService.register(user);
            if (!result) {
                res
                    .status(500)
                    .json(new errorHandler_1.ApiError(500, "Something Went Wrong Try Again"));
            }
            return res
                .status(200)
                .cookie("refreshToken", result.refreshToken, this.options)
                .json(new ApiResponse_1.default(200, {
                data: result,
            }, "User Registration Success"));
        }
        catch (error) {
            next(error);
        }
    };
    googleSignIn = async (req, res, next) => {
        try {
            const { displayName, email, photoURL } = req.body;
            // Fetch the image from the photoURL and get the buffer
            const response = await axios_1.default.get(photoURL, { responseType: 'arraybuffer' });
            const imageBuffer = Buffer.from(response.data, 'binary');
            const s3UrlFromGoogleImage = await this.UploadService.uploadSinglePhotoToS3(imageBuffer);
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
                .json(new ApiResponse_1.default(200, userAfterAuth, "User authentication success"));
        }
        catch (error) {
            next(error);
        }
    };
    sendOTP = async (req, res, next) => {
        try {
            const user = req.body;
            const otpExists = await this.OTPService.checkOTPExists(user);
            if (otpExists) {
                return res
                    .status(500)
                    .json(new errorHandler_1.ApiError(500, "Please Wait 1 Minute. Before Trying to register again"));
            }
            const isUserExists = await this.UserService.findUserWithEmail(user);
            if (isUserExists) {
                return res.status(500).json(new errorHandler_1.ApiError(500, "User Already Exists"));
            }
            const response = await this.OTPService.sendOtp(user);
            console.log(response);
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, user, "otp sent successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    forgotPasswordOTP = async (req, res, next) => {
        try {
            const isUserExists = await this.UserService.findUserWithEmail(req.body);
            if (!isUserExists || isUserExists?.isBlocked) {
                return res
                    .status(400)
                    .json(new ApiResponse_1.default(400, null, isUserExists?.isBlocked
                    ? "Account is blocked"
                    : "Check Your Email"));
            }
            const otpExists = await this.OTPService.checkOTPExists(req.body);
            if (otpExists) {
                return res
                    .status(500)
                    .json(new errorHandler_1.ApiError(500, "Please Wait 1 Minute. Before Trying again"));
            }
            await this.OTPService.sendOtp(req.body);
            return res
                .status(200)
                .json(new ApiResponse_1.default(200, null, "OTP sent successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    otpVerify = async (req, res, next) => {
        try {
            const { email, otp } = req.body;
            const isUserExists = await this.UserService.findUserWithEmail(req.body);
            if (!isUserExists || isUserExists.isBlocked) {
                return res
                    .status(400)
                    .json(new ApiResponse_1.default(400, null, isUserExists.isBlocked ? "Account is blocked" : "Something Wrong"));
            }
            const OTPVerification = await this.OTPService.verifyOTP(isUserExists, req.body);
            if (!OTPVerification) {
                return res.status(500).json(new errorHandler_1.ApiError(500, "Entered Wrong OTP"));
            }
            const { password, refreshToken, ...user } = isUserExists;
            const accessToken = this.authService.generateTokenForForgotPassword(user);
            return res
                .status(200)
                .cookie("userOtpAccessToken", accessToken)
                .json(new ApiResponse_1.default(200, { accessToken }, "OTP Verified Successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    resetPassword = async (req, res, next) => {
        try {
            const { password, token } = req.body;
            const decode = await this.authService.decodeAndVerifyToken(token);
            req.body.user = decode;
            if (!decode) {
                return res
                    .status(405)
                    .json(new ApiResponse_1.default(405, null, "Session Expired Try Again"));
            }
            const isUserExists = await this.UserService.findUserWithEmail(req.body.user);
            if (!isUserExists || isUserExists?.isBlocked) {
                return res
                    .status(400)
                    .json(new ApiResponse_1.default(400, null, isUserExists.isBlocked ? "Account is blocked" : "Something Wrong"));
            }
            const passwordUpdated = await this.UserService.changePassword(password, decode.email);
            if (passwordUpdated) {
                return res
                    .status(200)
                    .json(new ApiResponse_1.default(200, null, "reset success"));
            }
            return res
                .status(500)
                .json(new errorHandler_1.ApiError(500, "something went wrong", "reset Failed"));
        }
        catch (error) {
            next(error);
        }
    };
    logout = async (req, res) => {
        const { user } = req;
        const logoutData = await this.authService.logout(user.rawToken, user.id);
        if (logoutData) {
            return res
                .status(200)
                .clearCookie("refreshToken")
                .json(new ApiResponse_1.default(200, { message: "successfully cleared the token" }, "logout success"));
        }
        return res
            .status(500)
            .json(new ApiResponse_1.default(500, null, "Something Went Wrong Clear your Browser Cookies"));
    };
    refreshAccessToken = async (req, res, next) => {
        const { user } = req;
        try {
            const accessToken = await this.authService.refreshAccessToken(user.rawToken);
            if (accessToken) {
                return res
                    .status(200)
                    .json(new ApiResponse_1.default(200, { accessToken }, "token Created Successfully"));
            }
        }
        catch (error) {
            next(error);
        }
    };
    changePassword = async (req, res, next) => {
        const { currentPassword, newPassword, email } = req.body;
        try {
            const userFound = await this.UserService.findByEmail(email);
            if (!userFound) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "something went wrong"));
            }
            const compare = await this.authService.verifyOldPassword(userFound._id.toString(), currentPassword);
            if (!compare) {
                return res
                    .status(404)
                    .json(new ApiResponse_1.default(404, null, "Current Password Is Wrong "));
            }
            const user = await this.authService.changePassword(email, newPassword);
            if (user) {
                return res
                    .status(200)
                    .json(new ApiResponse_1.default(200, user, "Password Changed Successfully"));
            }
            return res
                .status(404)
                .json(new ApiResponse_1.default(404, user, "something went wrong"));
        }
        catch (error) {
            next(error);
        }
    };
}
exports.default = new AuthController();
//# sourceMappingURL=authController.js.map