import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUsers extends Document {
  _id: ObjectId | null;
  email: string | null;
  fullName: String | null;
  password: String | null;
  date_of_birth: Date | null;
  pin_code: String | null;
  address: String | null;
  gender: String | null;
  membership: ObjectId | null;
  phone: String | null;
  profilePic: String | null;
  role: String | null;
  refreshToken: string | null;
  isBlocked: Boolean | null;
  createdAt: Date | null;
}
