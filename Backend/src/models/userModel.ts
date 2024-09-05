import mongoose, { model, Schema } from "mongoose";
import { IUsers } from "entities/UserEntity";

const UsersSchema: Schema = new Schema({
  email: { type: String }, 
  fullName: { type: String },
  password: { type: String },
  date_of_birth: { type: Date },
  pin_code: { type: String },
  address: { type: String },
  gender: { type: String },
  membership: { type: Schema.Types.ObjectId },
  phone: { type: String },
  profilePic: { type: String , default:"https://www.svgrepo.com/show/192247/man-user.svg"},
  refreshToken:{type:Array},
  role: {type:String , default:"user"},
  isBlocked:{type:Boolean , default:false},
  createdAt:{type:Date , default : new Date()}
});

const Users = mongoose.model<IUsers>("Users", UsersSchema);

export default Users;
