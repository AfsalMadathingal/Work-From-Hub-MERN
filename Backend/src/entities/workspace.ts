import mongoose, { Schema, Document, model, ObjectId } from 'mongoose';

export interface IWorkspace extends Document {
  buildingName?: string;
  state?: string;
  district?: string;
  location?: string;
  pinCode?: string;
  street?: string;
  contactNo?: string;
  powerBackup?: boolean;
  ac?: boolean;
  bathroom?: boolean;
  photos?: string[];
  video?: string;
  tablesAvailable?: number;
  seatsPerTable?: number;
  ownerId?:  ObjectId;
  createdAt?: Date;
  updatedAt?: Date;
  approved?:boolean;
  rejected?:boolean;
  rejectionReason?:string;
  isOnHold?:boolean;
  holdingReason?:string;
  listed?:boolean;
  pricePerSeat?:number;
  timing?:string;
  workingDays?:string;
  rating?:number;
}