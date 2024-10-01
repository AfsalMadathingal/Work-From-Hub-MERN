import { IBooking } from "../entities/BookingEntity";
import mongoose, { Document, Schema } from "mongoose";


const BookingSchema: Schema = new Schema({
  userId: { type: String, required: true },
  seatId: { type: String, required: true },
  workspaceId: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, default: "pending" },
  paymentIntentId: { type: String },
  paymentStatus: { type: String },
  amount: { type: Number },
  currency: { type: String },
  paymentMethod: { type: String },
  paymentDate: { type: Date },
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const BookingModel = mongoose.model<IBooking>("Booking", BookingSchema);

export default BookingModel;
