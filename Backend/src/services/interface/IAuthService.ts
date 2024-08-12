import { IUsers } from "entities/UserEntity";


export interface IAuthService {
  register(user: Partial<IUsers>): Promise<{ user: IUsers; accessToken: string; refreshToken: string; }>;
  login(user: Partial<IUsers>): Promise<{ accessToken: string; refreshToken: string } | null>;
  refresh(refreshToken: string): Promise<string | null>;
}
