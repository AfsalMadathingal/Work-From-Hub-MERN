import { IAdmin } from "entities/AdminEntity";
import Admin from "../../models/adminModel";
import { IAdminRepository } from "repositories/interface/IAdminRepository";
import { log } from "console";

export default class AdminRepository implements IAdminRepository {

    async findByUsername(userId: string): Promise<IAdmin | null> {

        const  adminData = await Admin.findOne({userId})

        return adminData
    }

    async saveRefreshToken(userId: string, refreshToken: string): Promise<IAdmin | null> {


        const adminWithSavedToken = await Admin.findOneAndUpdate({_id:userId},{$set:{refreshToken:refreshToken}})
        .select(
            "-password -refreshToken"
        )

        return adminWithSavedToken
        
    }
}