import { IOTPRepository } from "../../repositories/interface/IOTPRepository";
import { IOTPSerivice } from "../../services/interface/IOTPService";
import { IOTP } from "../../entities/OTPEntity";
import OTPRepository from "../../repositories/implementations/OTPRepository";
import { sendEmail } from "../../utils/emailService";
import { IUsers } from "../../entities/UserEntity";

export default class OTPService implements IOTPSerivice {
    private OTPRepository: IOTPRepository;

    constructor() {
        this.OTPRepository = new OTPRepository();
    }

    async sendOtp(user: IUsers): Promise<IOTP | null> {
        const otpNumber = Math.floor(1000 + Math.random() * 9000).toString();
        const expirationTime = new Date(Date.now() + 1 * 60000);

        const OTPToSave = {
            email: user.email.toString(),
            otp: otpNumber,
            expirationTime,
            attempts: 1,
            createdAt: new Date(),
        };

        const savedOTP = await this.OTPRepository.saveOtp(OTPToSave as IOTP);
        const OtpDetails = await sendEmail(user.email, otpNumber);

        if (!OtpDetails) {
            return null;
        }

        return savedOTP;
    }


    async verifyOTP(user:IUsers, otp:IOTP): Promise <IOTP| null> {

        

        const OTPFound = await this.OTPRepository.findOTP(user)

        if(!OTPFound){
            return null
        }

        if(OTPFound.otp == otp.otp){
            return OTPFound
        }



        return null 

    }

    async checkOTPExists (user:IUsers): Promise <IOTP | null >{

        const OTPFound = await this.OTPRepository.findOTP(user)

        if(!OTPFound){
            return null
        }

        return OTPFound 
    }
}
