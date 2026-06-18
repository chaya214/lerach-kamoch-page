// models/Donor.ts
import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IDonor extends Document {
  transactionId: string; // מזהה ייחודי מקומי או מנדרים
  name: string;          // שם התורם
  amount: number;        // סכום לחודש
  dedication?: string;   // הקדשה (לעילוי נשמת וכדומה)
  currency: string;      // מטבע
  createdAt: Date;       // תאריך ושעה
  param1?: string;       
}

const DonorSchema = new Schema<IDonor>({
  transactionId: { type: String, required: true, unique: true },
  name: { type: String, required: true, default: 'מוקיר תורה' },
  amount: { type: Number, required: true },
  dedication: { type: String, default: '' }, // הוספת שדה ההקדשה
  currency: { type: String, required: true, default: 'ILS' },
  createdAt: { type: Date, default: () => new Date() },
  param1: { type: String }
});

export const Donor = models.Donor || model<IDonor>('Donor', DonorSchema);