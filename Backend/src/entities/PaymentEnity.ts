import mongoose, { Schema, Document, ObjectId } from "mongoose";

export interface IPayment extends Document {
  _id: ObjectId | null;
  status: string | null;
  amount:number | null;
  transactionNo: string | null ;
  createdAt: Date | null;
}
