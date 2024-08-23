import { IAdmin } from "entities/AdminEntity";

export interface IAdminRepository {


   saveRefreshToken(userId:string,refreshToken:string):Promise<IAdmin | null>;
   findByUsername(email: string): Promise<IAdmin | null>;

}