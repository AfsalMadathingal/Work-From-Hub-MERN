import bcrypt from "bcryptjs";
import UserRepository from "../../repositories/implementations/UserRepository";
import UserModel from "../../models/userModel";
import { IUsers } from "entities/UserEntity";
import { IAuthService } from "../../services/interface/IAuthService";
import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../../utils/jwt";

export default class AuthService implements IAuthService {

  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async register(user: IUsers): Promise<{ user: IUsers; accessToken: string; refreshToken: string } | null> {
    
    const hashedPassword = await bcrypt.hash(user.password.toString(), 10);
    
    const newUser = new UserModel({
      ...user,
      password: hashedPassword,
      role: user.role,
    });


    const createdUser = await this.userRepository.createUser(newUser);

    if (createdUser) {
      const accessToken = generateAccessToken({ id: createdUser.id, role: createdUser.role });
      const refreshToken = generateRefreshToken({ id: createdUser.id, role: createdUser.role });
      return {
        user: createdUser,
        accessToken,
        refreshToken,
      };
    }

    return null;
  }

  async login(user: IUsers): Promise<{ accessToken: string; refreshToken: string } | null> {

    const result = await this.userRepository.findByUsername(user.email.toString());

    if (result && await bcrypt.compare(result.password.toString(), result.password.toString())) { 

      const accessToken = generateAccessToken({ id: result.id, role: result.role });
      const refreshToken = generateRefreshToken({ id: result.id, role: result.role });

      return { accessToken, refreshToken };
    }

    return null;
  }

  async refresh(refreshToken: string): Promise<string | null> {
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
