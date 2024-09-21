import mongoose, { Schema, Document, ObjectId } from 'mongoose';


export interface ISeat extends Document {

  workspaceId: Schema.Types.ObjectId;
  tableNumber: number;
  seatNumber: number;
  isAvailable: boolean;
  createdAt: Date;
  updatedAt: Date;

}


