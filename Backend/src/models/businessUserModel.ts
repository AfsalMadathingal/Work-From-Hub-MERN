import mongoose, { model, Schema } from "mongoose";
import { IBusinessUser } from "entities/BusinessUserEntity";

const BusinessUserSchema: Schema = new Schema({
  email: { type: String }, 
  fullName: { type: String },
  password: { type: String },
  date_of_birth: { type: Date },
  pin_code: { type: Number },
  address: { type: String },
  phone: { type: Number },
  profilePic: { type: String , default:"https://www.svgrepo.com/show/192247/man-user.svg"},
  refreshToken:{type:Array},
  role: {type:String , default:"businessUser"},
  createdAt:{type:Date , default : new Date()},
  isBlocked:{type:Boolean, default:false}
});

const BusinessUser = mongoose.model<IBusinessUser>("BusinessUser", BusinessUserSchema);

export default BusinessUser;
