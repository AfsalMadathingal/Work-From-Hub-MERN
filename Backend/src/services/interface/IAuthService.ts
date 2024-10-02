import { IUsers } from "entities/UserEntity";


export interface IAuthService {

  register(user: Partial<IUsers>): Promise<{ user: IUsers; accessToken: string; refreshToken: string; }>;
  login(user: Partial<IUsers>): Promise<{ accessToken: string; refreshToken: string; userFound: Omit<IUsers, "password">; } | null>;
  refreshAccessToken(refreshToken: string): Promise<string | null>;
  generateTokenForForgotPassword(user: Partial<IUsers>) : string;
  logout(token:string , id: string) : Promise <IUsers | null>;
  changePassword(id: string, password: string): Promise<IUsers | null>;
  verifyOldPassword(id: string, oldPassword: string): Promise<IUsers | null>;
  googleSignIn(user: Partial<IUsers>): Promise<{ user: IUsers; accessToken: string; refreshToken: string; } | null>;
  decodeAndVerifyToken (token:string): Promise <Partial<IUsers | null> >;

}

