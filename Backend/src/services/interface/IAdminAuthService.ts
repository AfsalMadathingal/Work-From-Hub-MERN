import { IAdmin } from "entities/AdminEntity";


export interface IAdminAuthService {
    login(user: Partial<IAdmin>): Promise<{ 
        accessToken: string; 
        refreshToken: string; 
        adminFound: Omit<IAdmin, 'password'>; 
    } | null>;
}
