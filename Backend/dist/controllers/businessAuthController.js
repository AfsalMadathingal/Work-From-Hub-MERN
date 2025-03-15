"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BusinessAuthService_1 = __importDefault(require("../services/implementations/BusinessAuthService"));
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const errorHandler_1 = require("../middleware/errorHandler");
const OTPService_1 = __importDefault(require("../services/implementations/OTPService"));
const BusinessUserService_1 = __importDefault(require("../services/implementations/BusinessUserService"));
class AuthController {
    businessAuthService;
    OTPService;
    businessUserService;
    options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    };
    constructor() {
        this.businessAuthService = new BusinessAuthService_1.default();
        this.OTPService = new OTPService_1.default();
        this.businessUserService = new BusinessUserService_1.default();
    }
    login = async (req, res) => {
        const loginData = await this.businessAuthService.login(req.body);
        if (loginData?.userFound.isBlocked) {
            return res.status(401)
                .json(new errorHandler_1.ApiError(401, "You're blocked", "You're blocked"));
        }
        if (loginData) {
            return res.status(200)
                .cookie('BusinessUserRefreshToken', loginData.refreshToken, this.options)
                .json(new ApiResponse_1.default(200, loginData));
        }
        else {
            return res.status(400)
                .json(new errorHandler_1.ApiError(400, "Invalid Credentials"));
        }
    };
    refreshAccessToken = async (req, res) => {
        const { user } = req;
        const accessToken = await this.businessAuthService.refreshAccessToken(user.id);
        if (accessToken) {
            return res.status(200)
                .json(new ApiResponse_1.default(200, { accessToken }, "token Created Successfully"));
        }
    };
    createUser = async (req, res, next) => {
        try {
            const { user, otp } = req.body;
            const OTPVerification = await this.OTPService.verifyOTP(user, otp);
            if (!OTPVerification) {
                return res.status(500)
                    .json(new errorHandler_1.ApiError(500, "Entered Wrong OTP"));
            }
            const result = await this.businessAuthService.register(user);
            if (!result) {
                res.status(500)
                    .json(new errorHandler_1.ApiError(500, "Something Went Wrong Try Again"));
            }
            const options = {
                httpOnly: true,
                secure: true
            };
            return res
                .status(200)
                .cookie('BusinessUserRefreshToken', result.refreshToken, options)
                .json(new ApiResponse_1.default(200, {
                data: result
            }, "User Registration Success"));
        }
        catch (error) {
            next(error);
        }
    };
    sendOTP = async (req, res, next) => {
        try {
            const user = req.body;
            const otpExists = await this.OTPService.checkBusinessUserOTPExists(user);
            if (otpExists) {
                return res.status(500)
                    .json(new errorHandler_1.ApiError(500, "Please Wait 1 Minute. Before Trying to register again"));
            }
            const isUserExists = await this.businessUserService.findUserWithEmail(user);
            if (isUserExists) {
                return res.status(500)
                    .json(new errorHandler_1.ApiError(500, "User Already Exists"));
            }
            const response = await this.OTPService.sendBusinessUserOTP(user);
            console.log(response);
            return res.status(200)
                .json(new ApiResponse_1.default(200, user, "otp sent successfully"));
        }
        catch (error) {
            next(error);
        }
    };
    logout = async (req, res) => {
        const { user } = req;
        const logoutData = await this.businessAuthService.logout(user.rawToken, user.id);
        if (logoutData) {
            return res.status(200)
                .clearCookie('BusinessUserRefreshToken')
                .json(new ApiResponse_1.default(200, { message: "successfully cleared the token" }, "logout success"));
        }
        return res.status(500)
            .json(new ApiResponse_1.default(500, null, "Something Went Wrong Clear your Browser Cookies"));
    };
}
exports.default = new AuthController();
//# sourceMappingURL=businessAuthController.js.map