import { IAdmin } from "entities/AdminEntity";
import mongoose, { model, Schema } from "mongoose";


const AdminSchema: Schema = new Schema({
  userId: { type: String },
  password: { type: String },
  refreshToken:{type:String},
  role: {type:String , default:"admin"},
});

const Admin = mongoose.model<IAdmin>("admin", AdminSchema);

export default Admin;
