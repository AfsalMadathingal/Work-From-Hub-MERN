import { GetAllBUsers } from "services/interface/IBusinessUserService";
import { IBusinessUser } from "../../entities/BusinessUserEntity";

export interface IBusinessUserRepository {

   createUser(user: IBusinessUser): Promise<IBusinessUser | null>;
   saveRefreshToken(userId:string,refreshToken:string):Promise<IBusinessUser | null>;
   findByUsername(email: string): Promise<IBusinessUser | null>;
   getBusinessUsers(page:number,limit:number) : Promise <GetAllBUsers | null>
   blockUser(id:string):Promise <IBusinessUser| null>;
   removeRefreshToken(userId:string,refreshToken:string):Promise<IBusinessUser | null>;
   editUser(user:IBusinessUser):Promise <IBusinessUser | {emailExists:boolean} |null >;
}