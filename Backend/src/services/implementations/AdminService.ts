import { IAdmin } from "entities/AdminEntity";
import AdminRepository from "repositories/implementations/AdminRepository";
import { IAdminRepository } from "repositories/interface/IAdminRepository";
import { IAdminService } from "services/interface/IAdminService";

export default class AdminService implements IAdminService{

    private adminRepository : IAdminRepository

    constructor(){
        this.adminRepository = new AdminRepository()
    }

    
    async findById(id: string): Promise<IAdmin | null> {

        this.adminRepository.findById(id)

        return null
    }
}