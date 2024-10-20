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
  availability: {
    type: Map, // Use a Map to hold date availability
    of: { type: Boolean, default: true }, // Each date will map to a boolean
    default: {}, // Default to an empty object
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


export const Seat: Model<ISeat & Document> = mongoose.model('Seat', seatSchema);
