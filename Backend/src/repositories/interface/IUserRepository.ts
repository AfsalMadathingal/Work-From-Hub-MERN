import { IUsers } from "entities/UserEntity";

export interface IUserRepository {

   createUser(user: IUsers): Promise<IUsers | null>;
   saveRefreshToken(userId:string,refreshToken:string):Promise<IUsers | null>;
   findByUsername(email: string): Promise<IUsers | null>;
   googleSignIn(user : Partial <IUsers> ):  Promise <IUsers | null >;
   

}