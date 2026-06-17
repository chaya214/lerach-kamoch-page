import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Donor } from '@/models/Donor';

// 1. שליפת התורמים עבור לוח השותפים והרצועה
export async function GET() {
  try {
    await connectDB();

    const latestDonors = await Donor.find()
      .sort({ createdAt: -1 })
      .limit(40)
      .lean();

    return NextResponse.json(latestDonors);
  } catch (error) {
    console.error('Failed to fetch donors from MongoDB:', error);
    return NextResponse.json({ error: 'שגיאה בשליפת הנתונים מהשרת' }, { status: 500 });
  }
}

// 2. שמירת תורם חדש ששלח את הטופס (לפני פתיחת הסליקה)
export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectDB();

    // מייצרים מזהה עסקה ייחודי זמני מכיוון שהעסקה נשמרת לפני סליקת נדרים
    const localTxId = 'LOCAL_' + Math.random().toString(36).substring(2, 11).toUpperCase();

    const newDonor = await Donor.create({
      transactionId: localTxId,
      name: (data.name || 'מוקיר תורה').trim(),
      amount: parseFloat(data.amount) || 0,
      currency: 'ILS'
    });

    console.log(`[Local DB Save] תורם נשמר בהצלחה במונגו: ${newDonor.name} בסך ${newDonor.amount} ₪`);

    return NextResponse.json({ success: true, donor: newDonor });
  } catch (error) {
    console.error('[Donors POST Error]:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}