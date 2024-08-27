import mongoose, { Schema, Document } from 'mongoose';

export interface IPlan extends Document {
  planId: string;
  stripeId:string ;
  price:number;
  discountAmount: number;
  createdAt: Date;
}

