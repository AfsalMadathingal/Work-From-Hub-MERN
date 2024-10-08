import mongoose, { Schema, Document } from 'mongoose';

export interface ISeat extends Document {
  id: string;
  workspaceId: Schema.Types.ObjectId;
  tableNumber: number;
  seatNumber: number;
  availability: Map<string, boolean>; // Use Map for availability
  createdAt: Date;
  updatedAt: Date;
  
}
