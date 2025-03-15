"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const otpModel_1 = __importDefault(require("../../models/otpModel"));
class OTPRepository {
    async saveOtp(otp) {
        const otpForSave = new otpModel_1.default(otp);
        const savedOTP = await otpForSave.save();
        return savedOTP;
    }
    async findOTP(user) {
        const OTPFound = await otpModel_1.default.findOne({ email: user.email });
        if (OTPFound) {
            return OTPFound;
        }
        return null;
    }
    async saveBusinessUserOTP(otp) {
        const otpForSave = new otpModel_1.default(otp);
        const savedOTP = await otpForSave.save();
        return savedOTP;
    }
    async findBusinessUserOTP(user) {
        const OTPFound = await otpModel_1.default.findOne({ email: user.email, role: "businessUser" });
        if (OTPFound) {
            return OTPFound;
        }
        return null;
    }
}
exports.default = OTPRepository;
//# sourceMappingURL=OTPRepository.js.map