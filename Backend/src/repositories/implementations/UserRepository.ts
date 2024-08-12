import { IUserRepository } from "repositories/interface/IUserRepository";
import { IUsers } from "entities/UserEntity";
import  Users from "../../models/userModel";

 export default class UserRepository implements IUserRepository {

    async createUser(user: IUsers): Promise<IUsers | null> {
        console.log(user);
        
        const newUser = new Users(user);
        console.log(newUser);
        
        const result = await newUser.save();
        console.log(result);
        return result;
    }


    async findByUsername(email: string): Promise<IUsers | null> {

        const result = await Users.findOne({ email: email });
        return result;
    }
    
 }