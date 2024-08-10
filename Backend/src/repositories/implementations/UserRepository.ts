import { IUserRepository } from "repositories/interface/IUserRepository";
import { IUsers } from "entities/UserEntity";
import  Users from "../../models/userModel";

 export default class UserRepository implements IUserRepository {

    async createUser(user: IUsers): Promise<IUsers | null> {

        const newUser = new Users(user);
        const result = await newUser.save();
        
        return result;
    }
    
 }