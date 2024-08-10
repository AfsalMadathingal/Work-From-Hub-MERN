import { IUsers } from "entities/UserEntity";

export interface IUserRepository {

   createUser(user: IUsers): Promise<IUsers | null>;
   

}