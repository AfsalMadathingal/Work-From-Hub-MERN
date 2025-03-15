"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AdminRepository_1 = __importDefault(require("repositories/implementations/AdminRepository"));
class AdminService {
    adminRepository;
    constructor() {
        this.adminRepository = new AdminRepository_1.default();
    }
    async findById(id) {
        this.adminRepository.findById(id);
        return null;
    }
}
exports.default = AdminService;
//# sourceMappingURL=AdminService.js.map