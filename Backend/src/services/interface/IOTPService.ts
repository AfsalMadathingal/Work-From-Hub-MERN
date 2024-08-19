import { IOTP } from "entities/OTPEntity";
import { IUsers } from "entities/UserEntity";

export interface IOTPSerivice {


        sendOtp(user:IUsers): Promise <IOTP> | null; 
        verifyOTP(user:IUsers ,otp:IOTP ) :Promise <IOTP> | null ;
        checkOTPExists(users:IUsers) :Promise <IOTP> | null ;


}