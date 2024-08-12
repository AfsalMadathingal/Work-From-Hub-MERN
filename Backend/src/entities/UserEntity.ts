import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUsers extends Document {
  _id: ObjectId;
  email: String | null;
  name: String | null;
  password: String | null;
  date_of_birth: Date | null;
  pin_code: Number | null;
  address: String | null;
  gender: String | null;
  membership: ObjectId | null;
  phone: Number | null;
  profilePic: String | null;
  role: String | null;
}
