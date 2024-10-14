import { IBooking } from "../entities/BookingEntity";
import mongoose, { Document, Schema } from "mongoose";


const BookingSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Users', required: true }, // 'User' should be the User model name
  seatId: { type: Schema.Types.ObjectId, ref: 'Seat', required: true }, // 'Seat' should be the Seat model name
  workspaceId: { type: Schema.Types.ObjectId, ref: 'Workspace', required: true }, // 'Workspace' should be the Workspace model name
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
