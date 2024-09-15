import { IBusinessUser } from "../../entities/BusinessUserEntity";
import BusinessRepository from "../../repositories/implementations/BusinessRepository";
import { IBusinessUserRepository } from "../../repositories/interface/IBusinessRepository";
import { GetAllBUsers, IBusinessUserService } from "../../services/interface/IBusinessUserService";


export default class BusinessUserService implements IBusinessUserService {

  private businessUserRepository: IBusinessUserRepository;

  constructor() {
    this.businessUserRepository = new BusinessRepository();
  }

  async createUser(user: IBusinessUser): Promise<IBusinessUser | null> {

    
    const result = await this.businessUserRepository.createUser(user);
    return result;
  }

  async findUserWithEmail(user:IBusinessUser) : Promise< IBusinessUser | null >{

    const userFound = await this.businessUserRepository.findByUsername(user.email)

    if(userFound){
      return userFound
    }

    return null 
  }
  
  async findUserWithId(user: Partial<IBusinessUser>) : Promise< IBusinessUser | null >{

    const userFound = await this.businessUserRepository.findById(user.id)

    if(userFound){
      return userFound
    }

    return null 
  }



  async  getBusinessUsers(page: number, limit: number): Promise<GetAllBUsers | null> {
      
    const allUsers = await this.businessUserRepository.getBusinessUsers(page,limit)

    return allUsers
  }

  async blockUser(id: string): Promise<IBusinessUser | null> {
      
    const userAfterUpdate= await this.businessUserRepository.blockUser(id);

    return userAfterUpdate

  }

  async editUser(user: IBusinessUser): Promise<IBusinessUser | { emailExists: boolean; } | null> {

    const userAfterEdit = await this.businessUserRepository.editUser(user)



      return userAfterEdit
      
  }
  

}
