import mongoose, { Schema, Document } from 'mongoose';
import {IOTP} from '../entities/OTPEntity'


const OTPSchema: Schema = new Schema({
  email: { type: String, required: true }, // or use: userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  otp: { type: String, required: true },
  expirationTime: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  attempts: { type: Number, default: 0 }, 
  role:{ type:String, default:"user"} 
});

OTPSchema.index({ expirationTime: 1 }, { expireAfterSeconds: 0 });

const OTPModel = mongoose.model<IOTP>('OTP', OTPSchema);


export default OTPModel;