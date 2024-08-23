import bcrypt from 'bcryptjs'
import { IAdmin } from 'entities/AdminEntity'
import { IAdminAuthService } from '../../services/interface/IAdminAuthService'
import {
    generateAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
  } from "../../utils/jwt";
import { IAdminRepository } from '../../repositories/interface/IAdminRepository';
import AdminRepository from '../../repositories/implementations/AdminRepository';

  export default class AdminAuthService implements IAdminAuthService{

    private AdminRepository: IAdminRepository

    constructor(){
        this.AdminRepository = new AdminRepository()
    }

    async login(user: IAdmin): Promise<{
        accessToken: string;
        refreshToken: string;
        adminFound: Omit<IAdmin, 'password'>; 
    } | null> {
        
        let adminFound = await this.AdminRepository.findByUsername(user.userId.toString());
    
        if (adminFound && (
            await bcrypt.compare(user.password.toString(), adminFound.password.toString())
        )) {
            const id = adminFound._id?.toString();
            
            const accessToken = generateAccessToken({
                id,
                role: adminFound.role,
            });
    
            const refreshToken = generateRefreshToken({
                id,
                role: adminFound.role,
            });
    
            await this.AdminRepository.saveRefreshToken(id, refreshToken);
    
            const adminObject = adminFound.toObject();

            const { password, ...adminWithoutPassword } = adminObject;
    
            return { accessToken, refreshToken, adminFound: adminWithoutPassword };
        }
    
        return null;
    }
    
    
  }