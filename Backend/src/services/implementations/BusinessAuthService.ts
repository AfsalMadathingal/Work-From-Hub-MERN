import bcrypt from "bcryptjs";
import BusinessRepository from "../../repositories/implementations/BusinessRepository";
import  BusinessUser from "../../models/businessUserModel";
import { IBusinessUser } from "entities/BusinessUserEntity";
import { IBusinessAuthService } from "../interface/IBusinessAuthService";
import { IBusinessUserRepository } from "../../repositories/interface/IBusinessRepository";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../../utils/jwt";
import { sendEmail } from "../../utils/emailService";
import { IOTPRepository } from "../../repositories/interface/IOTPRepository";
import OTPRepository from "../../repositories/implementations/OTPRepository";
import { IOTP } from "../../entities/OTPEntity";
import { Document } from "mongoose";

export default class BusinessAuthService implements IBusinessAuthService {
  private BusinessRepository: IBusinessUserRepository;
  private OTPRepository: IOTPRepository;

  constructor() {
    this.BusinessRepository = new BusinessRepository();
    this.OTPRepository = new OTPRepository();
  }

  async register(user: IBusinessUser): Promise<{
    user: IBusinessUser;
    accessToken: string;
    refreshToken: string;
  } | null> {

    const hashedPassword = await bcrypt.hash(user.password.toString(), 10);

    const newUser = new BusinessUser({
      ...user,
      password: hashedPassword,
    });



    const createdUser = await this.BusinessRepository.createUser(newUser);



    if (createdUser) {
      const accessToken = generateAccessToken({
        id: createdUser._id,
        role: createdUser.role,
      });
      const refreshToken = generateRefreshToken({
        id: createdUser._id,
        role: createdUser.role,
      });
      const userAfterSavedToken = await this.BusinessRepository.saveRefreshToken(
        createdUser.email,
        refreshToken
      );
      return {
        user: userAfterSavedToken,
        accessToken,
        refreshToken,
      };
    }

    return null;
  }

  async login(user: IBusinessUser): Promise<{
    accessToken: string;
    refreshToken: string;
    userFound: Omit<IBusinessUser, 'password'>; 
  } | null> {
  
    
    const userFounded = await this.BusinessRepository.findByUsername(user.email.toString());
  
   
    if (userFounded && await bcrypt.compare(user.password.toString(), userFounded.password.toString())) {
  
      const userId = userFounded._id?.toString();
  
    
      const accessToken = generateAccessToken({
        id: userId,
        role: userFounded.role,
      });
  
      const refreshToken = generateRefreshToken({
        id: userId,
        role: userFounded.role,
      });
  
      
      await this.BusinessRepository.saveRefreshToken(userId, refreshToken);
  
      
      const { password, ...userFound } = userFounded.toObject();
  
      
      return { accessToken, refreshToken, userFound };
    }
 
    return null;
  }
  

  async refreshAccessToken(userId:string): Promise <string| null> {
        
    const userFound  = await this.BusinessRepository.findById(userId)


    if(userFound){
        const id = userFound._id?.toString();
        
        const accessToken = generateAccessToken({
            id,
            role: userFound.role,
        });

        return accessToken
    }



    return null
}


  async logout(token: string , id:string): Promise<IBusinessUser | null> {

    const user = await this.BusinessRepository.removeRefreshToken(id,token)
    
    return user ? user : null


}



  
}
