import bcrypt from "bcryptjs";
import UserRepository from "../../repositories/implementations/UserRepository";
import UserModel from "../../models/userModel";
import { IUsers } from "entities/UserEntity";
import { IAuthService } from "../../services/interface/IAuthService";
import { IUserRepository } from "../../repositories/interface/IUserRepository";
import {
  accessTokenForReset,
  decodeAndVerifyToken,
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../../utils/jwt";
import { sendEmail } from "../../utils/emailService";
import { IOTPRepository } from "../../repositories/interface/IOTPRepository";
import OTPRepository from "../../repositories/implementations/OTPRepository";
import { IOTP } from "../../entities/OTPEntity";

export default class AuthService implements IAuthService {
  private userRepository: IUserRepository;
  private OTPRepository: IOTPRepository;

  constructor() {
    this.userRepository = new UserRepository();
    this.OTPRepository = new OTPRepository();
  }

  async register(user: IUsers): Promise<{
    user: IUsers;
    accessToken: string;
    refreshToken: string;
  } | null> {
    const hashedPassword = await bcrypt.hash(user.password.toString(), 10);

    const newUser = new UserModel({
      ...user,
      password: hashedPassword,
    });

   
   

    const createdUser = await this.userRepository.createUser(newUser);

    if (createdUser) {
      const accessToken = generateAccessToken({
        id: createdUser.id,
        role: createdUser.role,
      });
      const refreshToken = generateRefreshToken({
        id: createdUser.id,
        role: createdUser.role,
      });
      const userAfterSavedToken = await this.userRepository.saveRefreshToken(
        createdUser.id,
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

  async login(user: IUsers): Promise<{
    accessToken: string;
    refreshToken: string;
    userFound: Omit<IUsers, "password">;
  } | null> {


    let userFound = await this.userRepository.findByUsername(
      user.email.toString()
    );

    console.log('====================================');
    console.log(userFound);
    console.log('====================================');

    if(!userFound?.password){
      return null
    }

    if (
      userFound &&
      (await bcrypt.compare(
        user.password.toString(),
        userFound.password.toString()
      ))
    ) {
      const accessToken = generateAccessToken({
        id: userFound.id,
        role: userFound.role,
      });
      const refreshToken = generateRefreshToken({
        id: userFound.id,
        role: userFound.role,
      });
      const userWithNewToken = await this.userRepository.saveRefreshToken(
        userFound.id,
        refreshToken
      );
      const { password, ...userWithoutPassword } = userFound.toObject();
      return { accessToken, refreshToken, userFound: userWithNewToken };
    }

    return null;
  }

  async refreshAccessToken(refreshToken: string): Promise<string | null> {
    try {
      const payload = verifyRefreshToken(refreshToken);
      const newAccessToken = generateAccessToken({
        id: payload.id,
        role: payload.role,
      });

      return newAccessToken;
    } catch (error) {
      return null;
    }
  }

  async googleSignIn(user: Partial<IUsers>): Promise<{
    user: IUsers;
    accessToken: string;
    refreshToken: string;
  } | null> {
    try {

      const userAfterSuccess = await this.userRepository.googleSignIn(user);
  
      if (!userAfterSuccess) {
        return null; 
      }

      const userId = userAfterSuccess.id || (userAfterSuccess.toObject && userAfterSuccess.toObject().id);
  
      if (!userId) {
        throw new Error('User ID is not available');
      }

      const accessToken = generateAccessToken({ id: userId, role: userAfterSuccess.role });
      const refreshToken = generateRefreshToken({ id: userId, role: userAfterSuccess.role });

      const userAfterSavedToken = await this.userRepository.saveRefreshToken(userId, refreshToken);
  

      return {
        user: userAfterSavedToken,
        accessToken,
        refreshToken
      };
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      return null;
    }
  }


  async decodeAndVerifyToken (token:string): Promise <Partial<IUsers | null> > {

    try {


      const decode = decodeAndVerifyToken(token)


      return decode
      
    } catch (error) {

      return null
      
    }

  

  }

  
  generateTokenForForgotPassword(user: Partial<IUsers>): string {
      return accessTokenForReset(user)
      
  }

  async logout(token: string , id:string): Promise<IUsers | null> {

    const user = await this.userRepository.removeRefreshToken(id,token)
    
    return user ? user : null
}


}
