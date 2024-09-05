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
    try {

      const userData = await Users.findOne({ email: email });
      return userData;
      
    } catch (error) {

      return null
      
    }
 
  }

  async saveRefreshToken(
    userId: string,
    refreshToken: string
  ): Promise<IUsers | null> {

    try {
      const userWithSavedToken = await Users.findByIdAndUpdate(
        { _id: userId },
        { $push: { refreshToken: refreshToken } }
      ).select("-password -refreshToken");
      return userWithSavedToken;
    } catch (error) {
      return null
    }
    
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

    try {
      const allUsers = await Users.find()
      .skip((page - 1) * limit)
      .limit(limit).select(
        "-password -refreshToken"
      );
    const totalUser = await Users.countDocuments();
    const totalPages = Math.ceil(totalUser / limit);

    return { allUsers, totalPages };

    } catch (error) {
      return null
    }

    
  }

  async blockUser(id: string): Promise<IUsers | null> {

    try {
      const user = await Users.findOne({_id:id})
      
      const userAfterUpdate = await Users.findByIdAndUpdate(id,{$set:{isBlocked:!user.isBlocked}})
  
      if(!userAfterUpdate){
  
        return null
  
      }
  
      return userAfterUpdate
    } catch (error) {

      return null
      
    }

   
  }



  async editUser(user: IUsers): Promise<IUsers | { emailExists: boolean } | null> {

    try {

      const emailExists = await Users.findOne({ email: user.email });
      
  
      if (emailExists && emailExists._id.toString() !== user.id) {
        return { emailExists: true };
      }
  
     
      const updateResult = await Users.updateOne(
        { _id: user.id },
        { $set: user }
      );

      
    
      if (updateResult.modifiedCount > 0) {
       
        const updatedUser = await Users.findById(user.id);
        return updatedUser; 
      }
  
      return null; 
    } catch (error) {

      return null;
    }
  }


  async changePassword(password: string,email:string): Promise<IUsers | null> {
      
    try {

      const userAfterUpdate = await Users.findOneAndUpdate({email:email},{$set:{password:password}})

      return userAfterUpdate
      
    } catch (error) {

      return null
      
    }
  }

  async removeRefreshToken(
    userId: string,
    refreshToken: string
  ): Promise<IUsers | null> {

    try {

      const userWithRemovedToken = await Users.findOneAndUpdate(
        { _id: userId },
        { $pull: { refreshToken: refreshToken } },
        { new: true }
      ).select("-password -refreshToken");
  
      return userWithRemovedToken;
      
    } catch (error) {
      return null
    }
   
  }
  

}
