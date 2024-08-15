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
    });


    const createdUser = await this.userRepository.createUser(newUser);

    if (createdUser) {
      const accessToken = generateAccessToken({ id: createdUser.id, role: createdUser.role });
      const refreshToken = generateRefreshToken({ id: createdUser.id, role: createdUser.role });
      const userAfterSavedToken = await this.userRepository.saveRefreshToken(createdUser.id,refreshToken)
      return {
        user: userAfterSavedToken,
        accessToken,
        refreshToken,
      };
    }

    return null;
  }

  async login(user: IUsers): Promise<{ accessToken: string; refreshToken: string; userFound: Omit<IUsers, 'password'> } | null> {
    let userFound = await this.userRepository.findByUsername(user.email.toString());
  
    if (userFound && await bcrypt.compare(user.password.toString(), userFound.password.toString())) {
      const accessToken = generateAccessToken({ id: userFound.id, role: userFound.role });
      const refreshToken = generateRefreshToken({ id: userFound.id, role: userFound.role });
     const userWithNewToken =  await this.userRepository.saveRefreshToken(userFound.id,refreshToken)
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
}
