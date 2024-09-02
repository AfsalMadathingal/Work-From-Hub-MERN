import { IOTPRepository } from "../interface/IOTPRepository";
import { IOTP } from "../../entities/OTPEntity";
import { ApiError } from "../../middleware/errorHandler";
import OTPModel from "../../models/otpModel";
import { IUsers } from "entities/UserEntity";
import { IBusinessUser } from "entities/BusinessUserEntity";

export default class OTPRepository implements IOTPRepository {
    
  async saveOtp(otp: IOTP): Promise<IOTP | null> {
    
    const otpForSave = new OTPModel(otp);

    const savedOTP = await otpForSave.save();

    return savedOTP;
  }

  async findOTP (user: Partial<IUsers>): Promise < IOTP| null>{

    const OTPFound  = await OTPModel.findOne({email:user.email})

    if(OTPFound){
      return OTPFound
    }
    

    return null
  }

  async saveBusinessUserOTP(otp: IOTP): Promise<IOTP | null > {
       
    const otpForSave = new OTPModel(otp);

    const savedOTP = await otpForSave.save();

    return savedOTP;
  }


  async findBusinessUserOTP(user: IBusinessUser): Promise<IOTP | null >{

    const OTPFound  = await OTPModel.findOne({email:user.email,role:"businessUser"})

    if(OTPFound){
      return OTPFound
    }
    

    return null
  }

}
