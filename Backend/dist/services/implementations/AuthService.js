"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserRepository_1 = __importDefault(require("../../repositories/implementations/UserRepository"));
const userModel_1 = __importDefault(require("../../models/userModel"));
const jwt_1 = require("../../utils/jwt");
const OTPRepository_1 = __importDefault(require("../../repositories/implementations/OTPRepository"));
class AuthService {
    userRepository;
    OTPRepository;
    constructor() {
        this.userRepository = new UserRepository_1.default();
        this.OTPRepository = new OTPRepository_1.default();
    }
    async register(user) {
        const hashedPassword = await bcryptjs_1.default.hash(user.password.toString(), 10);
        const newUser = new userModel_1.default({
            ...user,
            password: hashedPassword,
        });
        const createdUser = await this.userRepository.createUser(newUser);
        if (createdUser) {
            const accessToken = (0, jwt_1.generateAccessToken)({
                id: createdUser.id,
                role: createdUser.role,
            });
            const refreshToken = (0, jwt_1.generateRefreshToken)({
                id: createdUser.id,
                role: createdUser.role,
            });
            const userAfterSavedToken = await this.userRepository.saveRefreshToken(createdUser.id, refreshToken);
            return {
                user: userAfterSavedToken,
                accessToken,
                refreshToken,
            };
        }
        return null;
    }
    async login(user) {
        let userFound = await this.userRepository.findByUsername(user.email.toString());
        console.log('====================================');
        console.log(userFound);
        console.log('====================================');
        if (!userFound?.password) {
            return null;
        }
        if (userFound &&
            (await bcryptjs_1.default.compare(user.password.toString(), userFound.password.toString()))) {
            const accessToken = (0, jwt_1.generateAccessToken)({
                id: userFound.id,
                role: userFound.role,
            });
            const refreshToken = (0, jwt_1.generateRefreshToken)({
                id: userFound.id,
                role: userFound.role,
            });
            const userWithNewToken = await this.userRepository.saveRefreshToken(userFound.id, refreshToken);
            const { password, ...userWithoutPassword } = userFound.toObject();
            return { accessToken, refreshToken, userFound: userWithoutPassword };
        }
        return null;
    }
    async refreshAccessToken(refreshToken) {
        try {
            const payload = (0, jwt_1.verifyRefreshToken)(refreshToken);
            const newAccessToken = (0, jwt_1.generateAccessToken)({
                id: payload.id,
                role: payload.role,
            });
            return newAccessToken;
        }
        catch (error) {
            return null;
        }
    }
    async googleSignIn(user) {
        try {
            const userAfterSuccess = await this.userRepository.googleSignIn(user);
            if (!userAfterSuccess) {
                return null;
            }
            const userId = userAfterSuccess.id || (userAfterSuccess.toObject && userAfterSuccess.toObject().id);
            if (!userId) {
                throw new Error('User ID is not available');
            }
            const accessToken = (0, jwt_1.generateAccessToken)({ id: userId, role: userAfterSuccess.role });
            const refreshToken = (0, jwt_1.generateRefreshToken)({ id: userId, role: userAfterSuccess.role });
            console.log('====================================');
            console.log(userAfterSuccess);
            console.log('====================================');
            const userAfterSavedToken = await this.userRepository.saveRefreshToken(userId, refreshToken);
            return {
                user: userAfterSavedToken,
                accessToken,
                refreshToken
            };
        }
        catch (error) {
            console.error('Error during Google sign-in:', error);
            return null;
        }
    }
    async decodeAndVerifyToken(token) {
        try {
            const decode = (0, jwt_1.decodeAndVerifyToken)(token);
            return decode;
        }
        catch (error) {
            return null;
        }
    }
    generateTokenForForgotPassword(user) {
        return (0, jwt_1.accessTokenForReset)(user);
    }
    async logout(token, id) {
        const user = await this.userRepository.removeRefreshToken(id, token);
        return user ? user : null;
    }
    async changePassword(email, password) {
        try {
            const hashedPassword = await bcryptjs_1.default.hash(password, 10);
            const user = await this.userRepository.changePassword(hashedPassword, email);
            console.log(user);
            return user;
        }
        catch (error) {
            return null;
        }
    }
    async verifyOldPassword(id, oldPassword) {
        try {
            const user = await this.userRepository.findById(id);
            if (!user) {
                return null;
            }
            const isPasswordMatched = await bcryptjs_1.default.compare(oldPassword, user?.password);
            return isPasswordMatched ? user : null;
        }
        catch (error) {
            return null;
        }
    }
}
exports.default = AuthService;
//# sourceMappingURL=AuthService.js.map