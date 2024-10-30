import { IWallet } from "entities/Wallet";
import { Document, model, Schema } from "mongoose";



const walletSchema = new Schema<IWallet>({
  balance: {
    type: Number,
    default: 0,
  },
  transactionHistory: [
    {
      amount: { type: Number, required: true },
      transactionType: {
        type: String,
        enum: ["credit", "withdrawal"],
        required: true,
      },
      transactionDate: { type: Date, default: Date.now },
    },
  ],
});

export const Wallet = model<IWallet & Document>("Wallet", walletSchema);
