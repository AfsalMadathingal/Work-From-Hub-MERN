import { IPlan } from "entities/PlanEntity";
import mongoose, { model, Schema } from "mongoose";


const planSchema: Schema = new Schema({
  planId: {type: String},
  stripeId:{type:String},
  price:{type:Number},
  discount:{type:Number},
  createdAt:{type:Date , default: new Date()}
});

const Plans = mongoose.model<IPlan>("plans", planSchema);

export default Plans;
