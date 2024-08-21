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
    userFound: Omit<IBusinessUser, "password">;
  } | null> {


    // Find the user by email
  let userFound = await this.BusinessRepository.findByUsername(user.email.toString());

  // Check if user is found and password matches
  if (
    userFound &&
    (await bcrypt.compare(user.password.toString(), userFound.password.toString()))
  ) {

    const userId = userFound._id?.toString();


    const accessToken = generateAccessToken({
      id: userId,
      role: userFound.role,
    });
    const refreshToken = generateRefreshToken({
      id: userId,
      role: userFound.role,
    });

    // Save refresh token
    await this.BusinessRepository.saveRefreshToken(userId, refreshToken);

    // Exclude the password from the returned user object
    const { password, ...userWithoutPassword } = userFound 

    return { accessToken, refreshToken, userFound: userWithoutPassword };
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


  
}
