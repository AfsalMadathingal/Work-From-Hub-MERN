import { IUsers } from "entities/UserEntity";


export interface IAuthService {
  register(user: Partial<IUsers>): Promise<{ user: IUsers; accessToken: string; refreshToken: string; }>;
  login(user: Partial<IUsers>): Promise<{ accessToken: string; refreshToken: string } | null>;
  refreshAccessToken(refreshToken: string): Promise<string | null>;
  generateTokenForForgotPassword(user: Partial<IUsers>) : string;
  logout(token:string , id: string) : Promise <IUsers | null>;
}
