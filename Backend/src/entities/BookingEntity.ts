import mongoose, { Document, Schema } from 'mongoose';

export interface IBooking extends Document {
    userId: string;
    seatId: string;
    date: Date;
    workspaceId: string;
    status: string;
    paymentIntentId?: string;
    paymentStatus?: string;
    amount?: number;
    currency?: string;
    paymentMethod?: string;
    paymentDate?: Date;
    isDeleted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}


