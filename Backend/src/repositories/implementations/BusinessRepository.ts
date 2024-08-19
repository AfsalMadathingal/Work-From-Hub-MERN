import { IBusinessUserRepository } from "repositories/interface/IBusinessRepository";
import { IBusinessUser } from "entities/BusinessUserEntity";
import BusinessUser from "../../models/businessUserModel";
import { ApiError } from "../../middleware/errorHandler";



 export default class BusinessRepository implements IBusinessUserRepository {

    async createUser(user: IBusinessUser , ): Promise<IBusinessUser | null> {

        console.log(user);
        

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


    async findByUsername(email: string): Promise<IBusinessUser | null> {

        const userData = await BusinessUser.findOne({ email: email })
        return userData;
    }

    async saveRefreshToken(userId: string, refreshToken: string): Promise<IBusinessUser | null> {

        const userWithSavedToken = await BusinessUser.findByIdAndUpdate(
          { _id: userId },
          { $set: { refreshToken: refreshToken } }
        ).select(
            "-password -refreshToken"
        );
        return userWithSavedToken;
      }


 }