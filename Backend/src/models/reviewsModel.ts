import mongoose, { Document, Model, Schema } from "mongoose";
import { IReview } from "entities/ReviewEntity";

const reviewSchema = new Schema<IReview>({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  workspaceId: {
    type: Schema.Types.ObjectId,
    ref: "Workspace",
    required: true,
  },
  comment: { type: String, required: true },
  rating: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export const Review:Model<IReview & Document > = mongoose.model('Review',reviewSchema);
