import mongoose,{ObjectId} from "mongoose";


export interface IBusinessUser {
    _id: ObjectId;
    name: string;
    email: string;
    phone: string;
    gender: string;
    state: string;
    password: string;
    is_blocked: boolean;
    is_deleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    role:string
}