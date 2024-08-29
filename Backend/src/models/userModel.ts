import mongoose, { model, Schema } from "mongoose";
import { IUsers } from "entities/UserEntity";

const UsersSchema: Schema = new Schema({
  email: { type: String }, 
  fullName: { type: String },
  password: { type: String },
  date_of_birth: { type: Date },
  pin_code: { type: Number },
  address: { type: String },
  gender: { type: String },
  membership: { type: Schema.Types.ObjectId },
  phone: { type: Number },
  profilePic: { type: String },
  refreshToken:{type:String},
  role: {type:String , default:"user"},
  isBlocked:{type:Boolean , default:false}
});

const Users = mongoose.model<IUsers>("Users", UsersSchema);

export default Users;
