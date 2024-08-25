import { IUsers } from "entities/UserEntity";



export interface IUserService {

    createUser(user: IUsers): Promise<IUsers | null>;
    findUserWithEmail(user:IUsers) : Promise <IUsers | null>;


}