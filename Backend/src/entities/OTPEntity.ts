import mongoose, { Schema, Document } from 'mongoose';

export interface IOTP extends Document {
  email: string;
  otp: string;
  expirationTime: Date;
  createdAt: Date;
  attempts: number;
  role:string;
}


