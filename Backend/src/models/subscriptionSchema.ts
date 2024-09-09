import { ISubscription } from '../entities/SubscriptionEntity';
import mongoose, { Document, Schema } from 'mongoose';


const SubscriptionSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  stripeCustomerId: { type: String, required: true },
  stripeSubscriptionId: { type: String, required: true, unique: true },
  status: { type: String, required: true },  // To store statuses like 'pending', 'succeeded', 'failed', etc.
  paymentIntentId: { type: String },
  amount: { type: Number },
  currency: { type: String },
  paymentMethodId: { type: String },
  invoiceId: { type: String },
  eventType: { type: String },  // To capture event type like 'invoice.payment_succeeded'
  timestamp: { type: Date, default: Date.now },
}, { timestamps: true });

export const Subscription = mongoose.model<ISubscription>('Subscription', SubscriptionSchema);

