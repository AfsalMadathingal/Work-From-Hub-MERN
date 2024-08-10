import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUsers extends Document {
  _id: ObjectId;
  Email: String | null;
  Name: String | null;
  Password: String | null;
  Date_of_birth: Date | null;
  Pin_code: Number | null;
  Address: String | null;
  Gender: String | null;
  Membership: ObjectId | null;
  Phone: Number | null;
  ProfilePic: String | null;
}
