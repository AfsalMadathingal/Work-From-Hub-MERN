import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { IUsers } from "../../entities/UserEntity";
import { IUserService } from "../../services/interface/IUserService";
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

}
