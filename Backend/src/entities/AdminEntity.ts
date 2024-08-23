import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IAdmin extends Document {
  _id: ObjectId;
  userId: string | null;
  password: String | null;
  role: String | null;
  refreshToken: string | null;
}
