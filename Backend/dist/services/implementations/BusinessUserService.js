"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BusinessRepository_1 = __importDefault(require("../../repositories/implementations/BusinessRepository"));
class BusinessUserService {
    businessUserRepository;
    constructor() {
        this.businessUserRepository = new BusinessRepository_1.default();
    }
    async createUser(user) {
        const result = await this.businessUserRepository.createUser(user);
        return result;
    }
    async findUserWithEmail(user) {
        const userFound = await this.businessUserRepository.findByUsername(user.email);
        if (userFound) {
            return userFound;
        }
        return null;
    }
    async findUserWithId(user) {
        const userFound = await this.businessUserRepository.findById(user.id);
        if (userFound) {
            return userFound;
        }
        return null;
    }
    async getBusinessUsers(page, limit) {
        const allUsers = await this.businessUserRepository.getBusinessUsers(page, limit);
        return allUsers;
    }
    async blockUser(id) {
        const userAfterUpdate = await this.businessUserRepository.blockUser(id);
        return userAfterUpdate;
    }
    async editUser(user) {
        const userAfterEdit = await this.businessUserRepository.editUser(user);
        return userAfterEdit;
    }
}
exports.default = BusinessUserService;
//# sourceMappingURL=BusinessUserService.js.map