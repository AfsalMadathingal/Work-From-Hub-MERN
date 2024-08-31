import mongoose,{Document, ObjectId} from "mongoose";


export interface IBusinessUser  extends Document{
    _id: ObjectId ;
    fullName: string | null;
    email: string | null;
    phone: string | null;
    gender: string | null;
    state: string | null;
    password: string | null;
    isBlocked: boolean | null;
    is_deleted: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    role:string | null

}