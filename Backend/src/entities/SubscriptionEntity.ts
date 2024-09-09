import mongoose  ,{ Document}from "mongoose";

export interface ISubscription extends Document {
    userId: mongoose.Schema.Types.ObjectId;
    stripeCustomerId: string;
    stripeSubscriptionId: string;
    status: string;
    paymentIntentId?: string;
    amount?: number;
    currency?: string;
    paymentMethodId?: string;
    invoiceId?: string;
    eventType?: string;
    timestamp?: Date;
  }