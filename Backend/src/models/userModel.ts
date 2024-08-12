import mongoose, { model, Schema } from "mongoose";
import { IUsers } from "entities/UserEntity";

const UsersSchema: Schema = new Schema({
  email: { type: String, unique: true },
  name: { type: String },
  password: { type: String },
  date_of_birth: { type: Date },
  pin_code: { type: Number },
  address: { type: String },
  gender: { type: String },
  membership: { type: Schema.Types.ObjectId },
  phone: { type: Number },
  profilePic: { type: String },
});

const Users = mongoose.model<IUsers>("Users", UsersSchema);

export default Users;
