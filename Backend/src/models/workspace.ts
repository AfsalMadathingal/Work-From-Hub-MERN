import { IWorkspace } from 'entities/workspace';
import mongoose, { Schema, Document, model } from 'mongoose';



const workspaceSchema = new Schema<IWorkspace>({
  buildingName: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  location: { type: String, required: true },
  pinCode: { type: String, required: true },
  street: { type: String, required: true },
  contactNo: { type: String, required: true },
  powerBackup: { type: Boolean, required: true },
  ac: { type: Boolean, required: true },
  bathroom: { type: Boolean, required: true },
  photos: { type: [String], required: true },
  video: { type: String },
  tablesAvailable: { type: Number, required: true },
  seatsPerTable: { type: Number, required: true },
  ownerId:{ type: Schema.Types.ObjectId, ref: 'BusinessUser', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  approved:{type:Boolean,default:false},
  rejected:{type:Boolean,default:false},
  rejectionReason:{type:String, default:""},
  isOnHold:{type:Boolean,default:false},
  holdingReason:{type:String,default:""},
  listed:{type:Boolean,default:false},
  pricePerSeat:{type:Number, required: true},
  timing:{type:String,required:true},
  workingDays:{type:String,required:true},
});

export const WorkspaceModel = model<IWorkspace>('Workspace', workspaceSchema);
