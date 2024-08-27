import { IAdmin } from "entities/AdminEntity";

export interface IAdminService {


    findById(id:string ):Promise <IAdmin | null>;
    
}