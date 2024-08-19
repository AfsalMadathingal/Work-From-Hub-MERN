import { IUsers } from "entities/UserEntity";
import { IOTP } from "../../entities/OTPEntity";

export interface IOTPRepository{

    saveOtp(otp:IOTP) : Promise<IOTP> | null ;
    findOTP(user: IUsers) : Promise <IOTP> | null ;

}