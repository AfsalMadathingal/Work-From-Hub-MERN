import mongoose, { Schema, Document, model } from 'mongoose';

export interface IWorkspace extends Document {
  name?: string;
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
  ownerId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  approved?:boolean;
}