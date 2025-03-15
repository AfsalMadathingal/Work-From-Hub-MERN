"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OTPRepository_1 = __importDefault(require("../../repositories/implementations/OTPRepository"));
const emailService_1 = require("../../utils/emailService");
class OTPService {
    OTPRepository;
    constructor() {
        this.OTPRepository = new OTPRepository_1.default();
    }
    async sendOtp(user) {
        const otpNumber = Math.floor(1000 + Math.random() * 9000).toString();
        const expirationTime = new Date(Date.now() + 1 * 60000);
        const OTPToSave = {
            email: user.email.toString(),
            otp: otpNumber,
            expirationTime,
            attempts: 1,
            createdAt: new Date(),
        };
        const savedOTP = await this.OTPRepository.saveOtp(OTPToSave);
        const OtpDetails = await (0, emailService_1.sendEmail)(user.email, otpNumber);
        if (!OtpDetails) {
            return null;
        }
        return savedOTP;
    }
    async verifyOTP(user, otp) {
        const OTPFound = await this.OTPRepository.findOTP(user);
        if (!OTPFound) {
            return null;
        }
        if (OTPFound.otp == otp.otp) {
            return OTPFound;
        }
        return null;
    }
    async checkOTPExists(user) {
        const OTPFound = await this.OTPRepository.findOTP(user);
        if (!OTPFound) {
            return null;
        }
        return OTPFound;
    }
    async sendBusinessUserOTP(user) {
        const otpNumber = Math.floor(1000 + Math.random() * 9000).toString();
        const expirationTime = new Date(Date.now() + 1 * 60000);
        const OTPToSave = {
            email: user.email.toString(),
            otp: otpNumber,
            expirationTime,
            attempts: 1,
            createdAt: new Date(),
            role: "businessUser"
        };
        const savedOTP = await this.OTPRepository.saveBusinessUserOTP(OTPToSave);
        const OtpDetails = await (0, emailService_1.sendEmail)(user.email, otpNumber);
        if (!OtpDetails) {
            return null;
        }
        return savedOTP;
    }
    async verifyBusinessOTP(user, otp) {
        const OTPFound = await this.OTPRepository.findBusinessUserOTP(user);
        if (!OTPFound) {
            return null;
        }
        if (OTPFound.otp == otp.otp) {
            return OTPFound;
        }
        return null;
    }
    async checkBusinessUserOTPExists(user) {
        const OTPFound = await this.OTPRepository.findBusinessUserOTP(user);
        if (!OTPFound) {
            return null;
        }
        return OTPFound;
    }
}
exports.default = OTPService;
//# sourceMappingURL=OTPService.js.map