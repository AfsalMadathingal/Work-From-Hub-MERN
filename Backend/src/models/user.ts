import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  role: 'user' | 'provider' | 'admin';
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'provider', 'admin'], required: true },
});

export const User = model<IUser>('User', userSchema);
