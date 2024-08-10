import mongoose, { model, Schema } from "mongoose";
import { IUsers } from "entities/UserEntity";

const UsersSchema: Schema = new Schema({
  Email: { type: String, unique: true },
  Name: { type: String },
  Password: { type: String },
  Date_of_birth: { type: Date },
  Pin_code: { type: Number },
  Address: { type: String },
  Gender: { type: String },
  Membership: { type: Schema.Types.ObjectId },
  Phone: { type: Number },
  ProfilePic: { type: String },
});

const Users = mongoose.model<IUsers>("Users", UsersSchema);

export default Users;
