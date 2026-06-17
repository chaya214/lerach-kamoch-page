// app/api/nedarim-callback/route.ts
import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import { Donor } from '@/models/Donor';

export async function POST(request: Request) {
  try {
    // 1. אופציונלי: אימות IP כדי לוודא שהבקשה אכן מגיעה מנדרים פלוס
    // const forwardHeader = request.headers.get('x-forwarded-for');
    // const clientIp = forwardHeader ? forwardHeader.split(',')[0].trim() : '';
    // if (clientIp !== '18.194.219.73') {
    //   return new NextResponse('Unauthorized IP', { status: 401 });
    // }

    // 2. קריאת הנתונים שנשלחו מנדרים פלוס (הם שולחים application/json)
    const data = await request.json();

    // חילוץ הפרמטרים מתוך ה-JSON לפי השמות המדויקים בתיעוד שלהם:
    const transactionId = data.TransactionId;
    const clientName = data.ClientName || 'שותף בעילום שם';
    const amount = parseFloat(data.Amount) || 0;
    const currencyCode = data.Currency === '2' ? 'USD' : 'ILS'; // 1 = שקל, 2 = דולר
    const param1 = data.Param1; // טקסט חופשי שהעברנו מהאייפרם במידה ויש

    // הגנה: אם אין מזהה עסקה או סכום תקין, אל תשמור
    if (!transactionId || amount <= 0) {
      return new NextResponse('Invalid data structure', { status: 400 });
    }

    // 3. חיבור למסד הנתונים
    await connectDB();

    // 4. בדיקה שהעסקה הזו לא נשמרה כבר (למניעת כפילויות)
    const existingTransaction = await Donor.findOne({ transactionId });
    if (existingTransaction) {
      return new NextResponse('OK', { status: 200 }); // מחזירים אוקיי כדי שנדרים לא ינסו שוב
    }

    // 5. שמירת התורם החדש ב-MongoDB
    await Donor.create({
      transactionId,
      name: clientName.trim(),
      amount,
      currency: currencyCode,
      param1
    });

    console.log(`[Nedarim DB Sync] תרומה נשמרה בהצלחה במונגו! מזהה: ${transactionId}`);

    // נדרים פלוס מצפים לתשובת טקסט פשוטה של "OK" וסטטוס 200 כדי לדעת שהמידע נקלט בהצלחה
    return new NextResponse('OK', { status: 200 });
  } catch (error) {
    console.error('[Nedarim Callback Error]:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}