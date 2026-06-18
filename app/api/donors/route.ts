// import { NextResponse } from 'next/server';
// import { connectDB } from '@/lib/db';
// import { Donor } from '@/models/Donor';

// // 1. שליפת התורמים עבור לוח השותפים והרצועה
// export async function GET() {
//   try {
//     await connectDB();

//     const latestDonors = await Donor.find()
//       .sort({ createdAt: -1 })
//       .limit(40)
//       .lean();

//     return NextResponse.json(latestDonors);
//   } catch (error) {
//     console.error('Failed to fetch donors from MongoDB:', error);
//     return NextResponse.json({ error: 'שגיאה בשליפת הנתונים מהשרת' }, { status: 500 });
//   }
// }

// // 2. שמירת תורם חדש ששלח את הטופס (לפני פתיחת הסליקה)
// export async function POST(request: Request) {
//   try {
//     const data = await request.json();
//     await connectDB();

//     // מייצרים מזהה עסקה ייחודי זמני מכיוון שהעסקה נשמרת לפני סליקת נדרים
//     const localTxId = 'LOCAL_' + Math.random().toString(36).substring(2, 11).toUpperCase();

//     const newDonor = await Donor.create({
//       transactionId: localTxId,
//       name: (data.name || 'מוקיר תורה').trim(),
//       amount: parseFloat(data.amount) || 0,
//       currency: 'ILS'
//     });

//     console.log(`[Local DB Save] תורם נשמר בהצלחה במונגו: ${newDonor.name} בסך ${newDonor.amount} ₪`);

//     return NextResponse.json({ success: true, donor: newDonor });
//   } catch (error) {
//     console.error('[Donors POST Error]:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }
// app/api/donors/route.ts
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
    // החזרת שגיאה בצורה פשוטה ללא כותרות סטטוס מורכבות בעברית
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}

// 2. שמירת תורם חדש ומניעת כפילויות חכמה לפי שם וזמן
export async function POST(request: Request) {
  try {
    const data = await request.json();
    await connectDB();

    const cleanName = (data.name || 'מוקיר תורה').trim();
    const amount = parseFloat(data.amount) || 0;
    const dedication = (data.dedication || '').trim();

    // הגדרת חלון זמן של 30 דקות לאחור
    const halfAnHourAgo = new Date(Date.now() - 30 * 60 * 1000);

    // בדיקה: אם זה שם אמיתי (לא "מוקיר תורה" ולא ריק)
    if (cleanName !== 'מוקיר תורה' && cleanName !== '') {
      
      // מחפשים האם האדם הזה כבר שלח טופס עם אותו סכום בחצי שעה האחרונה
      const existingDonor = await Donor.findOne({
        name: cleanName,
        amount: amount,
        createdAt: { $gte: halfAnHourAgo }
      });

      if (existingDonor) {
        // מצאנו כפילות! נעדכן רק את ההקדשה למקרה ששינה אותה ונעדכן את הזמן
        existingDonor.dedication = dedication;
        existingDonor.createdAt = new Date();
        await existingDonor.save();

        console.log(`[Duplicate Prevented] עודכנה רשומה קיימת עבור ${cleanName} למניעת כפילות.`);
        return NextResponse.json({ success: true, donor: existingDonor });
      }
    }

    // אם הגענו לכאן - מדובר בתרומה חדשה (או תרומה של "מוקיר תורה")
    const localTxId = 'LOCAL_' + Math.random().toString(36).substring(2, 11).toUpperCase();

    const newDonor = await Donor.create({
      transactionId: localTxId,
      name: cleanName,
      amount: amount,
      dedication: dedication,
      currency: 'ILS',
      createdAt: new Date()
    });

    console.log(`[Local DB Save] שותפות חדשה נשמרה: ${newDonor.name} בסך ${newDonor.amount} ₪`);

    return NextResponse.json({ success: true, donor: newDonor });
  } catch (error) {
    console.error('[Donors POST Error]:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}