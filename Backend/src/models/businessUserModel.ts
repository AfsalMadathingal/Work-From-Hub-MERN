import mongoose, { model, Schema } from "mongoose";
import { IBusinessUser } from "entities/BusinessUserEntity";

const BusinessUserSchema: Schema = new Schema({
  email: { type: String }, 
  name: { type: String },
  password: { type: String },
  date_of_birth: { type: Date },
  pin_code: { type: Number },
  address: { type: String },
  phone: { type: Number },
  profilePic: { type: String },
  refreshToken:{type:String},
  role: {type:String , default:"businessUser"}
});

const BusinessUser = mongoose.model<IBusinessUser>("BusinessUser", BusinessUserSchema);

export default BusinessUser;
