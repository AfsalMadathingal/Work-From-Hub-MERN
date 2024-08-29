import { IUsers } from "entities/UserEntity";

export interface GetAllUsers {
    allUsers: IUsers[];
    totalPages: number;
  }

export interface IUserService {

    createUser(user: IUsers): Promise<IUsers | null>;
    findUserWithEmail(user:IUsers) : Promise <IUsers | null>;
    getAllUsers(page:number,limit:number) : Promise <GetAllUsers | null>


}