import { IUsers } from "entities/UserEntity";
import { NullExpression } from "mongoose";


export interface IUserService {

    createUser(user: IUsers): Promise<IUsers | null>;
    findUserWithEmail(user:IUsers) : Promise <IUsers | null>;


}