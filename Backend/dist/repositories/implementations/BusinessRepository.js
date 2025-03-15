"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const businessUserModel_1 = __importDefault(require("../../models/businessUserModel"));
const errorHandler_1 = require("../../middleware/errorHandler");
class BusinessRepository {
    async createUser(user) {
        const isUserExists = await businessUserModel_1.default.findOne({ email: user.email });
        if (isUserExists) {
            throw new errorHandler_1.ApiError(400, "User Already Exists");
        }
        const newUser = new businessUserModel_1.default(user);
        const result = await newUser.save();
        const registeredUser = await businessUserModel_1.default.findById(result?._id).select("-password -refreshToken");
        return registeredUser;
    }
    async findById(id) {
        try {
            console.log('====================================');
            console.log(id);
            console.log('====================================');
            const userData = await businessUserModel_1.default.findById(id).select("-password -refreshToken");
            console.log('===============from repo=====================');
            console.log(userData);
            console.log('====================================');
            return userData;
        }
        catch (error) {
            return null;
        }
    }
    async findByUsername(email) {
        const userData = await businessUserModel_1.default.findOne({ email: email });
        return userData;
    }
    async saveRefreshToken(userId, refreshToken) {
        const userWithSavedToken = await businessUserModel_1.default.findOneAndUpdate({ email: userId }, { $push: { refreshToken: refreshToken } }).select("-password -refreshToken");
        return userWithSavedToken;
    }
    async getBusinessUsers(page, limit) {
        const allUsers = await businessUserModel_1.default.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .select("-password -refreshToken");
        const totalUser = await businessUserModel_1.default.countDocuments();
        const totalPages = Math.ceil(totalUser / limit);
        return { allUsers, totalPages };
    }
    async blockUser(id) {
        try {
            const user = await businessUserModel_1.default.findOne({ _id: id });
            const userAfterUpdate = await businessUserModel_1.default.findByIdAndUpdate(id, {
                $set: { isBlocked: !user.isBlocked },
            });
            if (!userAfterUpdate) {
                return null;
            }
            return userAfterUpdate;
        }
        catch (error) {
            return null;
        }
    }
    async editUser(user) {
        try {
            const emailExists = await businessUserModel_1.default.findOne({ email: user.email });
            if (emailExists && emailExists._id.toString() !== user.id) {
                return { emailExists: true };
            }
            const updateResult = await businessUserModel_1.default.updateOne({ _id: user.id }, { $set: { fullName: user.fullName, email: user.email } });
            if (updateResult.modifiedCount > 0) {
                const updatedUser = await businessUserModel_1.default.findById(user.id);
                return updatedUser;
            }
            return null;
        }
        catch (error) {
            return null;
        }
    }
    async removeRefreshToken(userId, refreshToken) {
        const userWithRemovedToken = await businessUserModel_1.default.findOneAndUpdate({ _id: userId }, { $pull: { refreshToken: refreshToken } }, { new: true }).select("-password -refreshToken");
        return userWithRemovedToken;
    }
}
exports.default = BusinessRepository;
//# sourceMappingURL=BusinessRepository.js.map