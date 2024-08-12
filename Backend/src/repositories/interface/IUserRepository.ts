import { IUsers } from "entities/UserEntity";

export interface IUserRepository {

   createUser(user: IUsers): Promise<IUsers | null>;
   findByUsername(email: string): Promise<IUsers | null>;
   

}