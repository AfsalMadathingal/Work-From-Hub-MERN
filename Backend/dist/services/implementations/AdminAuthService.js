"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt_1 = require("../../utils/jwt");
const AdminRepository_1 = __importDefault(require("../../repositories/implementations/AdminRepository"));
class AdminAuthService {
    AdminRepository;
    constructor() {
        this.AdminRepository = new AdminRepository_1.default();
    }
    async login(user) {
        let adminFound = await this.AdminRepository.findByUserId(user.userId.toString());
        if (adminFound && (await bcryptjs_1.default.compare(user.password.toString(), adminFound.password.toString()))) {
            const id = adminFound._id?.toString();
            const accessToken = (0, jwt_1.generateAccessToken)({
                id,
                role: adminFound.role,
            });
            const refreshToken = (0, jwt_1.generateRefreshToken)({
                id,
                role: adminFound.role,
            });
            await this.AdminRepository.saveRefreshToken(id, refreshToken);
            const adminObject = adminFound.toObject();
            const { password, ...adminWithoutPassword } = adminObject;
            return { accessToken, refreshToken, adminFound: adminWithoutPassword };
        }
        return null;
    }
    async logout(token, id) {
        const admin = await this.AdminRepository.removeRefreshToken(id, token);
        return admin ? admin : null;
    }
    async refreshAccessToken(userId) {
        const adminFound = await this.AdminRepository.findById(userId);
        if (adminFound) {
            const id = adminFound._id?.toString();
            const accessToken = (0, jwt_1.generateAccessToken)({
                id,
                role: adminFound.role,
            });
            return accessToken;
        }
        return null;
    }
}
exports.default = AdminAuthService;
//# sourceMappingURL=AdminAuthService.js.map