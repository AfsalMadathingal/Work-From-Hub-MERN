import { ISeat } from 'entities/Seat';
import mongoose, { Document, Model, Schema } from 'mongoose';

const seatSchema = new Schema<ISeat>({
  workspaceId: {
    type: Schema.Types.ObjectId,
    ref: 'Workspace',
    required: true,
  },
  tableNumber: {
    type: Number,
    required: true,
  },
  seatNumber: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const Seat: Model<Document> = mongoose.model('Seat', seatSchema);

