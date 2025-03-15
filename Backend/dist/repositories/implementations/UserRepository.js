"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../../models/userModel"));
const errorHandler_1 = require("../../middleware/errorHandler");
class UserRepository {
    async getTotalUser() {
        try {
            const users = await userModel_1.default.find().sort({ date: -1 }).limit(5);
            const userCount = await userModel_1.default.countDocuments();
            return { users, userCount };
        }
        catch (error) {
            return null;
        }
    }
    async createUser(user) {
        try {
            const isUserExists = await userModel_1.default.findOne({ email: user.email });
            if (isUserExists) {
                throw new errorHandler_1.ApiError(400, "User Already Exists");
            }
            const newUser = new userModel_1.default(user);
            const result = await newUser.save();
            const registeredUser = await userModel_1.default.findById(result?._id).select("-password -refreshToken");
            return registeredUser;
        }
        catch (error) {
            return null;
        }
    }
    async findByUsername(email) {
        try {
            const userData = await userModel_1.default.findOne({ email: email });
            return userData;
        }
        catch (error) {
            return null;
        }
    }
    async saveRefreshToken(userId, refreshToken) {
        try {
            const userWithSavedToken = await userModel_1.default.findByIdAndUpdate(userId, { $push: { refreshToken: refreshToken } }, { new: true }).select("-password -refreshToken");
            return userWithSavedToken;
        }
        catch (error) {
            return null;
        }
    }
    async googleSignIn(user) {
        try {
            const isUserExists = await userModel_1.default.findOne({ email: user.email });
            if (isUserExists) {
                return isUserExists;
            }
            const newUser = new userModel_1.default(user);
            const userData = await newUser.save();
            return userData;
        }
        catch (error) {
            return null;
        }
    }
    async getAllUsers(page, limit) {
        try {
            const allUsers = await userModel_1.default.find()
                .skip((page - 1) * limit)
                .limit(limit).select("-password -refreshToken");
            const totalUser = await userModel_1.default.countDocuments();
            const totalPages = Math.ceil(totalUser / limit);
            return { allUsers, totalPages };
        }
        catch (error) {
            return null;
        }
    }
    async blockUser(id) {
        try {
            const user = await userModel_1.default.findOne({ _id: id });
            const userAfterUpdate = await userModel_1.default.findByIdAndUpdate(id, { $set: { isBlocked: !user.isBlocked } });
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
            const emailExists = await userModel_1.default.findOne({ email: user.email });
            if (emailExists && emailExists._id.toString() !== user.id) {
                console.log(emailExists._id, user.id);
                return { emailExists: true };
            }
            const updateResult = await userModel_1.default.updateOne({ _id: user.id }, { $set: user });
            if (updateResult.modifiedCount > 0) {
                const updatedUser = await userModel_1.default.findById(user.id).select("-password -refreshToken");
                return updatedUser;
            }
            return null;
        }
        catch (error) {
            return null;
        }
    }
    async changePassword(password, email) {
        try {
            const userAfterUpdate = await userModel_1.default.findOneAndUpdate({ email: email }, { $set: { password: password } });
            return userAfterUpdate;
        }
        catch (error) {
            return null;
        }
    }
    async removeRefreshToken(userId, refreshToken) {
        try {
            const userWithRemovedToken = await userModel_1.default.findOneAndUpdate({ _id: userId }, { $pull: { refreshToken: refreshToken } }, { new: true }).select("-password -refreshToken");
            return userWithRemovedToken;
        }
        catch (error) {
            return null;
        }
    }
    async updateUser(user, id) {
        try {
            const userAfterUpdate = await userModel_1.default.findByIdAndUpdate(id, user, { new: true });
            console.log(user);
            return userAfterUpdate;
        }
        catch (error) {
            return null;
        }
    }
    async findById(id) {
        try {
            const user = await userModel_1.default.findById(id).select("-refreshToken");
            return user;
        }
        catch (error) {
            return null;
        }
    }
}
exports.default = UserRepository;
//# sourceMappingURL=UserRepository.js.map