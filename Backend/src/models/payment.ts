import { IPayment } from "entities/PaymentEnity";
import { string } from "joi";
import mongoose, { Schema, Document } from "mongoose";

const paymentSchema: Schema = new Schema({
    
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const OTPModel = mongoose.model<IPayment>("payment", paymentSchema);

export default OTPModel;
