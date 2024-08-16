import { IOTPRepository } from "../interface/IOTPRepository";
import { IOTP } from "../../entities/OTPEntity";
import { ApiError } from "../../middleware/errorHandler";
import OTPModel from "../../models/otpModel";

export default class OTPRepository implements IOTPRepository {
    
  async saveOtp(otp: IOTP): Promise<IOTP | null> {
    const otpForSave = new OTPModel(otp);

    const savedOTP = await otpForSave.save();

    return savedOTP;
  }
}
