import { IUserRepository } from "repositories/interface/IUserRepository";
import { IUsers } from "entities/UserEntity";
import Users from "../../models/userModel";
import { ApiError } from "../../middleware/errorHandler";
import { GetAllUsers } from "services/interface/IUserService";

export default class UserRepository implements IUserRepository {
  async createUser(user: IUsers): Promise<IUsers | null> {
    const isUserExists = await Users.findOne({ email: user.email });

    if (isUserExists) {
      throw new ApiError(400, "User Already Exists");
    }

    const newUser = new Users(user);
    const result = await newUser.save();
    const registeredUser = await Users.findById(result?._id).select(
      "-password -refreshToken"
    );

    return registeredUser;
  }

  async findByUsername(email: string): Promise<IUsers | null> {
    const userData = await Users.findOne({ email: email });
    return userData;
  }

  async saveRefreshToken(
    userId: string,
    refreshToken: string
  ): Promise<IUsers | null> {
    const userWithSavedToken = await Users.findByIdAndUpdate(
      { _id: userId },
      { $set: { refreshToken: refreshToken } }
    ).select("-password -refreshToken");
    return userWithSavedToken;
  }

  async googleSignIn(user: Partial<IUsers>): Promise<IUsers | null> {
    try {
      const isUserExists = await Users.findOne({ email: user.email });

      if (isUserExists) {
        return isUserExists;
      }

      const newUser = new Users(user);

      const userData = await newUser.save();

      return userData;
    } catch (error) {
      return null;
    }
  }

  async getAllUsers(page: number, limit: number): Promise<GetAllUsers | null> {

    const allUsers = await Users.find()
      .skip((page - 1) * limit)
      .limit(limit).select(
        "-password -refreshToken"
      );
    const totalUser = await Users.countDocuments();
    const totalPages = Math.ceil(totalUser / limit);

    return { allUsers, totalPages };

  }
}
