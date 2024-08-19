import { IBusinessUser } from "../../entities/BusinessUserEntity";


export interface IBusinessAuthService {
  register(user: Partial<IBusinessUser>): Promise<{ user: IBusinessUser; accessToken: string; refreshToken: string; }>;
  login(user: Partial<IBusinessUser>): Promise<{ accessToken: string; refreshToken: string } | null>;
  refreshAccessToken(refreshToken: string): Promise<string | null>;
}
