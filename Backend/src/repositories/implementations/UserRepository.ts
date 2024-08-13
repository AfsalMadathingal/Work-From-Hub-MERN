import { IUserRepository } from "repositories/interface/IUserRepository";
import { IUsers } from "entities/UserEntity";
import  Users from "../../models/userModel";
import { ApiError } from "../../middleware/errorHandler";

 export default class UserRepository implements IUserRepository {

    async createUser(user: IUsers): Promise<IUsers | null> {


        const isUserExists =  await Users.findOne({email:user.email})

        if (isUserExists){
            throw new ApiError(400,"User Already Exists")
        }

        const newUser = new Users(user);
        const result = await newUser.save();
        const registeredUser =  await Users.findById(result?._id).select(
            "-password -refreshToken"
        )

        return registeredUser;
    }


    async findByUsername(email: string): Promise<IUsers | null> {

        const result = await Users.findOne({ email: email });
        return result;
    }
    
 }