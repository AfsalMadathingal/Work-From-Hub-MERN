import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { IUsers } from "../../entities/UserEntity";
import { GetAllUsers, IUserService } from "../../services/interface/IUserService";
import UserRepository from "../../repositories/implementations/UserRepository";

export default class UserService implements IUserService {

  private userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(user: IUsers): Promise<IUsers | null> {

    
    const result = await this.userRepository.createUser(user);
    return result;
  }

  async findUserWithEmail(user:IUsers) : Promise< IUsers | null >{

    const userFound = await this.userRepository.findByUsername(user.email)

    if(userFound){
      return userFound
    }

    return null 
  }

  async getAllUsers(page: number, limit: number): Promise<GetAllUsers | null> {

    const allUsers = await this.userRepository.getAllUsers(page,limit)


    return allUsers;
      
  }

}
