import { IUsers } from "entities/UserEntity";


export interface IUserService {

    createUser(user: IUsers): Promise<IUsers | null>;


}