"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiResponse_1 = __importDefault(require("../utils/ApiResponse"));
const errorHandler_1 = require("../middleware/errorHandler");
const AdminAuthService_1 = __importDefault(require("../services/implementations/AdminAuthService"));
class AdminAuthController {
    adminAuthService;
    options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000
    };
    constructor() {
        this.adminAuthService = new AdminAuthService_1.default();
    }
    login = async (req, res) => {
        const loginData = await this.adminAuthService.login(req.body);
        if (loginData) {
            return res.status(200)
                .cookie('adminRefreshToken', loginData.refreshToken, this.options)
                .json(new ApiResponse_1.default(200, loginData));
        }
        return res.status(400)
            .json(new errorHandler_1.ApiError(400, "invalid Credentials"));
    };
    logout = async (req, res) => {
        const { user } = req;
        const logoutData = await this.adminAuthService.logout(user.rawToken, user.id);
        if (logoutData) {
            return res.status(200)
                .clearCookie('adminRefreshToken')
                .json(new ApiResponse_1.default(200, { message: "successfully cleared the token" }, "logout success"));
        }
        return res.status(500)
            .json(new ApiResponse_1.default(500, null, "Something Went Wrong Clear your Browser Cookies"));
    };
    refreshAccessToken = async (req, res) => {
        const { user } = req;
        const accessToken = await this.adminAuthService.refreshAccessToken(user.id);
        if (accessToken) {
            return res.status(200)
                .json(new ApiResponse_1.default(200, { accessToken }, "token Created Successfully"));
        }
    };
}
exports.default = new AdminAuthController();
//# sourceMappingURL=adminAuthController.js.map