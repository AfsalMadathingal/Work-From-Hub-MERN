import { IUsers } from "entities/UserEntity";
import { GetAllUsers } from "services/interface/IUserService";

export interface IUserRepository {

   createUser(user: IUsers): Promise<IUsers | null>;
   saveRefreshToken(userId:string,refreshToken:string):Promise<IUsers | null>;
   findByUsername(email: string): Promise<IUsers | null>;
   googleSignIn(user : Partial <IUsers> ):  Promise <IUsers | null >;
   getAllUsers(page:number,limit:number): Promise <GetAllUsers | null >;
   blockUser(id:string):Promise <IUsers| null>;
   editUser(user:IUsers):Promise <IUsers | {emailExists:boolean} |null >;
   changePassword(password:string,email:string):Promise <IUsers | null >;

}