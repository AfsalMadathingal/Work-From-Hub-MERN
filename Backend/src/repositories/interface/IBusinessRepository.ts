import { IBusinessUser } from "../../entities/BusinessUserEntity";

export interface IBusinessUserRepository {

   createUser(user: IBusinessUser): Promise<IBusinessUser | null>;
   saveRefreshToken(userId:string,refreshToken:string):Promise<IBusinessUser | null>;
   findByUsername(email: string): Promise<IBusinessUser | null>;

}