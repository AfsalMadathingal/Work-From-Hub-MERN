import { IUsers } from "entities/UserEntity";
import { IOTP } from "../../entities/OTPEntity";
import { IBusinessUser } from "entities/BusinessUserEntity";

export interface IOTPRepository{

    saveOtp(otp:IOTP) : Promise<IOTP> | null ;
    findOTP(user: Partial<IUsers>) : Promise <IOTP> | null ;
    saveBusinessUserOTP(otp:IOTP): Promise <IOTP> |null; 
    findBusinessUserOTP(user:IBusinessUser):Promise <IOTP> |null ;

}