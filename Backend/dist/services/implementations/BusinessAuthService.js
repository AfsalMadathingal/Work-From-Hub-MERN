"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const BusinessRepository_1 = __importDefault(require("../../repositories/implementations/BusinessRepository"));
const businessUserModel_1 = __importDefault(require("../../models/businessUserModel"));
const jwt_1 = require("../../utils/jwt");
const OTPRepository_1 = __importDefault(require("../../repositories/implementations/OTPRepository"));
class BusinessAuthService {
    BusinessRepository;
    OTPRepository;
    constructor() {
        this.BusinessRepository = new BusinessRepository_1.default();
        this.OTPRepository = new OTPRepository_1.default();
    }
    async register(user) {
        const hashedPassword = await bcryptjs_1.default.hash(user.password.toString(), 10);
        const newUser = new businessUserModel_1.default({
            ...user,
            password: hashedPassword,
        });
        const createdUser = await this.BusinessRepository.createUser(newUser);
        if (createdUser) {
            const accessToken = (0, jwt_1.generateAccessToken)({
                id: createdUser._id,
                role: createdUser.role,
            });
            const refreshToken = (0, jwt_1.generateRefreshToken)({
                id: createdUser._id,
                role: createdUser.role,
            });
            const userAfterSavedToken = await this.BusinessRepository.saveRefreshToken(createdUser.email, refreshToken);
            return {
                user: userAfterSavedToken,
                accessToken,
                refreshToken,
            };
        }
        return null;
    }
    async login(user) {
        const userFounded = await this.BusinessRepository.findByUsername(user.email.toString());
        if (userFounded && await bcryptjs_1.default.compare(user.password.toString(), userFounded.password.toString())) {
            const userId = userFounded._id?.toString();
            const accessToken = (0, jwt_1.generateAccessToken)({
                id: userId,
                role: userFounded.role,
            });
            const refreshToken = (0, jwt_1.generateRefreshToken)({
                id: userId,
                role: userFounded.role,
            });
            await this.BusinessRepository.saveRefreshToken(userId, refreshToken);
            const { password, ...userFound } = userFounded.toObject();
            return { accessToken, refreshToken, userFound };
        }
        return null;
    }
    async refreshAccessToken(userId) {
        const userFound = await this.BusinessRepository.findById(userId);
        if (userFound) {
            const id = userFound._id?.toString();
            const accessToken = (0, jwt_1.generateAccessToken)({
                id,
                role: userFound.role,
            });
            return accessToken;
        }
        return null;
    }
    async logout(token, id) {
        const user = await this.BusinessRepository.removeRefreshToken(id, token);
        return user ? user : null;
    }
}
exports.default = BusinessAuthService;
//# sourceMappingURL=BusinessAuthService.js.map