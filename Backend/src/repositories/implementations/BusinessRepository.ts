import { IBusinessUserRepository } from "../../repositories/interface/IBusinessRepository";
import { IBusinessUser } from "../../entities/BusinessUserEntity";
import BusinessUser from "../../models/businessUserModel";
import { ApiError } from "../../middleware/errorHandler";
import { GetAllBUsers } from "services/interface/IBusinessUserService";



 export default class BusinessRepository implements IBusinessUserRepository {

    async createUser(user: IBusinessUser , ): Promise<IBusinessUser | null> {

        const isUserExists =  await BusinessUser.findOne({email:user.email})

        if (isUserExists ){
          
            throw new ApiError(400,"User Already Exists")
        }
        

        const newUser = new BusinessUser(user);
        const result = await newUser.save();
        const registeredUser =  await BusinessUser.findById(result?._id).select(
            "-password -refreshToken"
        )

        return registeredUser;
    }

    
    async findById(id: string): Promise<IBusinessUser | null> {

        const userData = await BusinessUser.findById(id).select(
            "-password -refreshToken"
        )
        return userData;
    }


    async findByUsername(email: string): Promise<IBusinessUser | null> {

        const userData = await BusinessUser.findOne({ email: email })
        return userData;
    }

    async saveRefreshToken(userId: string, refreshToken: string): Promise<IBusinessUser | null> {

        const userWithSavedToken = await BusinessUser.findOneAndUpdate(
          {email: userId },
          { $push:{refreshToken: refreshToken }  }
        ).select(
            "-password -refreshToken"
        );
        return userWithSavedToken;

        
      }


    async getBusinessUsers(page: number, limit: number): Promise<GetAllBUsers | null> {
        
        const allUsers = await BusinessUser.find()
        .skip((page - 1) * limit)
        .limit(limit).select(
          "-password -refreshToken"
        );
      const totalUser = await BusinessUser.countDocuments();
      const totalPages = Math.ceil(totalUser / limit);
  
      return { allUsers, totalPages };

    }

    async blockUser(id: string): Promise<IBusinessUser | null> {

        try {
            const user = await BusinessUser.findOne({_id:id})
            
            const userAfterUpdate = await BusinessUser.findByIdAndUpdate(id,{$set:{isBlocked:!user.isBlocked}})
        
            if(!userAfterUpdate){
        
              return null
        
            }
        
            return userAfterUpdate

          } catch (error) {
      
            return null
            
          }
        
    }

    async editUser(user: IBusinessUser): Promise<IBusinessUser | { emailExists: boolean; } | null> {
        try {
            const emailExists = await BusinessUser.findOne({ email: user.email });
            
        
            if (emailExists && emailExists._id.toString() !== user.id) {
              return { emailExists: true };
            }
        
           
            const updateResult = await BusinessUser.updateOne(
              { _id: user.id },
              { $set: { fullName: user.fullName, email: user.email } }
            );
        
      
      
            
          
            if (updateResult.modifiedCount > 0) {
             
              const updatedUser = await BusinessUser.findById(user.id);
              return updatedUser; 
            }
        
            return null; 
          } catch (error) {
            return null;
          }
    }

    async removeRefreshToken(
      userId: string,
      refreshToken: string
    ): Promise<IBusinessUser | null> {
      const userWithRemovedToken = await BusinessUser.findOneAndUpdate(
        { _id: userId },
        { $pull: { refreshToken: refreshToken } },
        { new: true }
      ).select("-password -refreshToken");
  
      return userWithRemovedToken;
    }


 }