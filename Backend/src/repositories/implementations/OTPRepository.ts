import { IOTPRepository } from "../interface/IOTPRepository";
import { IOTP } from "../../entities/OTPEntity";
import { ApiError } from "../../middleware/errorHandler";
import OTPModel from "../../models/otpModel";
import { IUsers } from "entities/UserEntity";

export default class OTPRepository implements IOTPRepository {
    
  async saveOtp(otp: IOTP): Promise<IOTP | null> {
    
    const otpForSave = new OTPModel(otp);

    const savedOTP = await otpForSave.save();

    return savedOTP;
  }

  async findOTP (user:IUsers): Promise < IOTP| null>{

    const OTPFound  = await OTPModel.findOne({email:user.email})

    if(OTPFound){
      return OTPFound
    }
    

    return null
  }

}
