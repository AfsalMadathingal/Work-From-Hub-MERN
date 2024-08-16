import { IOTP } from "../../entities/OTPEntity";

export interface IOTPRepository{

    saveOtp(otp:IOTP) : Promise<IOTP> | null ;

}