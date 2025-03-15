"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminModel_1 = __importDefault(require("../../models/adminModel"));
class AdminRepository {
    async findById(userId) {
        const adminData = await adminModel_1.default.findOne({ _id: userId });
        return adminData;
    }
    async findByUserId(userId) {
        const adminData = await adminModel_1.default.findOne({ userId });
        return adminData;
    }
    async saveRefreshToken(userId, refreshToken) {
        const adminWithSavedToken = await adminModel_1.default.findOneAndUpdate({ _id: userId }, { $push: { refreshToken: refreshToken } }).select("-password -refreshToken");
        return adminWithSavedToken;
    }
    async removeRefreshToken(userId, refreshToken) {
        const adminWithRemovedToken = await adminModel_1.default.findOneAndUpdate({ _id: userId }, { $pull: { refreshToken: refreshToken } }, { new: true }).select("-password -refreshToken");
        return adminWithRemovedToken;
    }
}
exports.default = AdminRepository;
//# sourceMappingURL=AdminRepository.js.map