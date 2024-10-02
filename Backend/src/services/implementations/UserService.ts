import { IUserRepository } from "../../repositories/interface/IUserRepository";
import { IUsers } from "../../entities/UserEntity";
import { GetAllUsers, IUserService } from "../../services/interface/IUserService";
import UserRepository from "../../repositories/implementations/UserRepository";
import bcrypt from 'bcryptjs'

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

  async blockUser(id: string): Promise<IUsers | null> {



    const userAfterUpdate= await this.userRepository.blockUser(id);

    return userAfterUpdate
      
  }

  async editUser(user:Partial<IUsers> ): Promise< Partial<IUsers> | {emailExists:boolean} | null> {


      const userAfterEdit = await this.userRepository.editUser(user)



      return userAfterEdit
  }

  async changePassword(password: string,email:string): Promise<IUsers | null> {

    const hashedPassword = await bcrypt.hash(password.toString(), 10);
      
    const userAfterUpdate = await this.userRepository.changePassword(hashedPassword,email)

    return userAfterUpdate
  }


  async findByEmail(email: string): Promise<IUsers | null> {


    const userFound = await this.userRepository.findByUsername(email)

    if(userFound){
      return userFound
    }

    return null

  }



}
