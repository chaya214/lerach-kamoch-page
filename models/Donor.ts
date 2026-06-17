// models/Donor.ts
import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IDonor extends Document {
  transactionId: string; // מזהה עסקה מנדרים פלוס
  name: string;          // שם התורם
  amount: number;        // סכום
  currency: string;      // מטבע (שקל / דולר)
  createdAt: Date;       // תאריך ושעה
  param1?: string;       // פרמטר חופשי להעברת נתונים נוספים מהאתר
}

const DonorSchema = new Schema<IDonor>({
  transactionId: { type: String, required: true, unique: true },
  name: { type: String, required: true, default: 'מוקיר תורה' },
  amount: { type: Number, required: true },
  currency: { type: String, required: true, default: 'ILS' },
  createdAt: { type: Date, default: () => new Date() },
  param1: { type: String }
});

// מניעת שגיאת יצירה מחדש של המודל בריענון של Next.js
export const Donor = models.Donor || model<IDonor>('Donor', DonorSchema);