import { IBusinessUser } from "entities/BusinessUserEntity";

export interface GetAllBUsers {
    allUsers: IBusinessUser[];
    totalPages: number;
  }


export interface IBusinessUserService {

    createUser(user: IBusinessUser): Promise<IBusinessUser | null>;
    findUserWithEmail(user:IBusinessUser) : Promise <IBusinessUser | null>;
    getBusinessUsers(page:number,limit:number) : Promise <GetAllBUsers | null>
    blockUser(id:string): Promise <IBusinessUser | null > ;
    editUser(user:IBusinessUser):Promise <IBusinessUser | {emailExists:boolean} | null > ;
    findUserWithId(user:IBusinessUser):Promise <IBusinessUser | null> ;
}