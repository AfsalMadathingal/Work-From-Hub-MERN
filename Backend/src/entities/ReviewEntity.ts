import mongoose, { Document } from 'mongoose';

export interface IReview extends Document {
    userId?: mongoose.Types.ObjectId; 
    workspaceId?: mongoose.Types.ObjectId; 
    comment?: string;
    rating: number;
    createdAt: Date;
}
