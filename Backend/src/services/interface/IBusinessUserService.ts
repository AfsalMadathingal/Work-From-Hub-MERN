import { IBusinessUser } from "entities/BusinessUserEntity";



export interface IBusinessUserService {

    createUser(user: IBusinessUser): Promise<IBusinessUser | null>;
    findUserWithEmail(user:IBusinessUser) : Promise <IBusinessUser | null>;


}