import { IBusinessUser } from "../../entities/BusinessUserEntity";
import BusinessRepository from "../../repositories/implementations/BusinessRepository";
import { IBusinessUserRepository } from "../../repositories/interface/IBusinessRepository";
import { IBusinessUserService } from "../../services/interface/IBusinessUserService";


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

}
