"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = __importDefault(require("../../repositories/implementations/UserRepository"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserService {
    userRepository;
    constructor() {
        this.userRepository = new UserRepository_1.default();
    }
    async getTotalUsers() {
        const result = await this.userRepository.getTotalUser();
        return result;
    }
    async createUser(user) {
        const result = await this.userRepository.createUser(user);
        return result;
    }
    async findUserWithEmail(user) {
        const userFound = await this.userRepository.findByUsername(user.email);
        if (userFound) {
            return userFound;
        }
        return null;
    }
    async getAllUsers(page, limit) {
        const allUsers = await this.userRepository.getAllUsers(page, limit);
        return allUsers;
    }
    async blockUser(id) {
        const userAfterUpdate = await this.userRepository.blockUser(id);
        return userAfterUpdate;
    }
    async editUser(user) {
        const userAfterEdit = await this.userRepository.editUser(user);
        return userAfterEdit;
    }
    async changePassword(password, email) {
        const hashedPassword = await bcryptjs_1.default.hash(password.toString(), 10);
        const userAfterUpdate = await this.userRepository.changePassword(hashedPassword, email);
        return userAfterUpdate;
    }
    async findByEmail(email) {
        const userFound = await this.userRepository.findByUsername(email);
        if (userFound) {
            return userFound;
        }
        return null;
    }
    async findById(userId) {
        const userFound = await this.userRepository.findById(userId);
        if (userFound) {
            return userFound;
        }
        return null;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map