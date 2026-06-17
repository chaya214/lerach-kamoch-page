
// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import NedarimFrame from '@/components/NedarimFrame';

// export default function DonationLandingPage() {
//   const [amount, setAmount] = useState<number>(180);
//   const [customAmount, setCustomAmount] = useState<string>("");
  
//   // הסטייט שמנהל האם הקופה הצפה פתוחה ובאיזה סכום
//   const [activeAmount, setActiveAmount] = useState<number | null>(null);

//   const currentAmount = customAmount ? Number(customAmount) : amount;

//   const handleTierClick = (selectedAmount: number) => {
//     setAmount(selectedAmount);
//     setCustomAmount(""); 
//     // ברגע שנלחץ כפתור סכום - נפתח מיד את הקופה הצפה מעל המסך עם הסכום הזה!
//     setActiveAmount(selectedAmount);
//   };

//   const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCustomAmount(e.target.value);
//   };

//   const handleOpenCustomAmount = () => {
//     if (customAmount && Number(customAmount) > 0) {
//       setActiveAmount(Number(customAmount));
//     } else {
//       alert("אנא הזן סכום תקין תחילה");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#060d18] text-white font-assistant antialiased pb-24 relative select-none" dir="rtl">
      
//       {/* מסגרת עיטור חיצונית דקה */}
//       <div className="fixed inset-4 border border-gold-base/10 pointer-events-none z-50 rounded-sm"></div>

//       {/* ----------------- אזור פתיח (HERO SECTION) ----------------- */}
//       <header className="relative w-full overflow-hidden bg-[#040911] border-b border-gold-base/10">
//         <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
//           <div className="flex-1 bg-[#040911] z-10 relative">
//             <div className="absolute inset-0 bg-gradient-to-l from-[#040911] via-[#040911]/80 to-transparent z-20"></div>
//             <div className="absolute inset-0 opacity-10 mix-blend-luminosity grayscale z-10">
//               <Image 
//                 src="/לומדים.webp" 
//                 alt="רקע" 
//                 fill
//                 priority
//                 className="object-cover object-center"
//               />
//             </div>
//           </div>

//           <div className="flex-1 relative min-h-[350px] md:min-h-[550px] z-0">
//             <div 
//               className="absolute inset-0 bg-[#0b1424] z-10"
//               style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
//             >
//               <Image 
//                 src="/מרן.webp" 
//                 alt="מרן" 
//                 fill
//                 priority
//                 className="object-cover object-top scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//             </div>
//           </div>
//         </div>

//         <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#060d18] via-transparent to-transparent"></div>

//         <div className="container mx-auto px-6 max-w-6xl relative z-30 pt-16 pb-12 md:pt-24 md:pb-24">
//           <div className="w-full md:w-1/2 text-center md:text-right space-y-6">
//             <div>
//               <p className="text-xl md:text-2xl text-gold-base font-medium tracking-widest opacity-90 mb-1">
//                 כולל ערב
//               </p>
//               <h1 className="text-5xl md:text-7xl font-black text-gold-base tracking-tight drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]">
//                 לרעך כמוך
//               </h1>
//             </div>

//             <div className="flex items-center justify-center md:justify-start gap-4 my-2">
//               <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gold-base/50"></div>
//               <span className="text-gold-base text-lg opacity-80">📖</span>
//               <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gold-base/50"></div>
//             </div>

//             <div className="space-y-3 bg-[#0c1625]/85 border border-gold-base/20 rounded-2xl p-6 md:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md">
//               <p className="text-sm md:text-base text-slate-400 font-light tracking-wide">לעילוי נשמת סבנו, אבינו ורבינו</p>
//               <div className="space-y-1">
//                 <p className="text-xs text-gold-light tracking-widest font-bold uppercase opacity-90">הגאון הצדיק</p>
//                 <p className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-sm">
//                   רבי יצחק אייזיק
//                 </p>
//                 <p className="text-sm md:text-base text-slate-400 font-medium">בן רבי בנימין זאב מנצר זצוק"ל</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ----------------- אזור התוכן המרכזי ----------------- */}
//       <main className="container mx-auto px-6 max-w-5xl text-center mt-12">
//         <div className="space-y-3 mb-10">
//           <h2 className="text-4xl md:text-6xl font-black text-gold-base tracking-wide drop-shadow-sm">
//             לעשות רצון צדיק
//           </h2>
//           <p className="text-2xl md:text-3xl font-bold text-slate-200 tracking-normal">
//             מקימים ישיבה על קברו
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto text-base md:text-lg text-slate-300 leading-relaxed space-y-6 mb-12">
//           <p className="px-4">
//             לציון שלוש שנים להסתלקותו של סבא זצוק"ל, אנו זוכים בעזרת ה' להקים את כולל הערב "לרעך כמוך", ללימוד הלכות וסוגיות יבין אדם לחברו מן השורש ועד ההלכה למעשה.
//           </p>
//           <div className="bg-gradient-to-r from-gold-base/5 via-gold-base/15 to-gold-base/5 border-y border-gold-base/30 py-4 px-6 text-center text-gold-light font-medium max-w-2xl mx-auto shadow-inner rounded-xl">
//             "אין דרך גדולה יותר להמשיך את דרכו של מי שכל חייו היו תורה, מאשר להרבות תורה לאחר פטירתו."
//           </div>
//         </div>

//         {/* ----------------- כרטיסיות דרגות תרומה (בלחיצה פותח מיד את החלון) ----------------- */}
//         <div className="my-12">
//           <h3 className="text-lg md:text-xl font-bold text-gold-base mb-8 opacity-95">
//             לחצו על דרגת השותפות שלכם לפתיחת הקופה המאובטחת (הוראת קבע):
//           </h3>
          
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
//             {[
//               { amount: 50, label: "שותף" },
//               { amount: 100, label: "לוקח חלק" },
//               { amount: 180, label: "בונה" },
//               { amount: 300, label: "מייסד" },
//             ].map((tier) => (
//               <button 
//                 key={tier.amount}
//                 onClick={() => handleTierClick(tier.amount)}
//                 className={`border rounded-2xl p-5 flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 cursor-pointer ${
//                   currentAmount === tier.amount && !customAmount
//                     ? 'border-gold-base bg-[#0f223f] shadow-[0_10px_25px_rgba(223,183,108,0.25)] ring-1 ring-gold-base/50' 
//                     : 'border-gold-base/20 bg-[#0c1625]/90 text-slate-300 hover:border-gold-base/40'
//                 }`}
//               >
//                 <p className="text-sm md:text-base font-semibold tracking-wide w-full text-center">{tier.label}</p>
//                 <div className="my-4 w-full text-center">
//                   <span className="text-xs text-gold-base font-bold ml-1">₪</span>
//                   <span className="text-3xl md:text-4xl font-black text-gold-base tracking-tight">{tier.amount}</span>
//                 </div>
//                 <p className="text-[11px] text-slate-500 font-medium w-full text-center">לחודש</p>
//               </button>
//             ))}

//             <button 
//               onClick={() => handleTierClick(500)}
//               className={`border rounded-2xl p-5 flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 cursor-pointer col-span-2 sm:col-span-1 ${
//                 currentAmount === 500 && !customAmount
//                   ? 'border-2 border-gold-base bg-[#112749] shadow-[0_12px_30px_rgba(223,183,108,0.35)]' 
//                   : 'border border-gold-base/40 bg-[#0e1d33] text-slate-200 hover:border-gold-base'
//               }`}
//             >
//               <p className="text-sm md:text-base font-bold text-gold-base tracking-wide w-full text-center">מקים ישיבה על קברו</p>
//               <div className="my-4 w-full text-center">
//                 <span className="text-xs text-gold-base font-bold ml-1">₪</span>
//                 <span className="text-3xl md:text-4xl font-black text-gold-base tracking-tight">{500}</span>
//               </div>
//               <p className="text-[11px] text-slate-400 font-medium w-full text-center">לחודש</p>
//             </button>
//           </div>
//         </div>

//         {/* שדה סכום חופשי + כפתור הפעלה מובנה */}
//         <div className="max-w-md mx-auto mb-12 bg-[#0c1625]/60 border border-slate-800/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
//           <div className="flex items-center gap-3 w-full">
//             <label htmlFor="custom-amount-input" className="text-xs md:text-sm font-medium text-slate-400 whitespace-nowrap">סכום אחר (₪):</label>
//             <input 
//               id="custom-amount-input"
//               type="number" 
//               value={customAmount}
//               onChange={handleCustomAmountChange}
//               placeholder="הזן סכום חודשי מותאם" 
//               className="w-full bg-[#050a12] border border-slate-800 rounded-lg py-2 px-3 text-white placeholder-slate-600 text-sm focus:border-gold-base focus:outline-none text-center"
//             />
//           </div>
//           {customAmount && (
//             <button
//               onClick={handleOpenCustomAmount}
//               className="w-full sm:w-auto bg-gold-base text-slate-950 font-bold text-xs py-2 px-4 rounded-lg hover:bg-gold-light transition-all whitespace-nowrap cursor-pointer"
//             >
//               פתיחת קופה בסך ₪{customAmount}
//             </button>
//           )}
//         </div>

//         {/* כפתור גיבוי תחתון במידה והם רוצים לפתוח את הקופה על הסכום שכרגע מסומן */}
//         <div className="mt-6">
//           <button
//             onClick={() => setActiveAmount(currentAmount)}
//             className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-sm py-4 px-8 rounded-xl shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200 active:scale-[0.98] cursor-pointer"
//           >
//             מעבר לתשלום מאובטח בסך ₪{currentAmount}
//           </button>
//         </div>

//         <footer className="mt-20 pt-4 border-t border-slate-900 text-xs text-slate-600 tracking-widest">
//           לזכר עולם יהיה צדיק
//         </footer>
//       </main>

//       {/* ----------------- הקופה הצפה שתעלה מעל המסך רק כשנבחר סכום ----------------- */}
//       <NedarimFrame 
//         amount={activeAmount} 
//         onClose={() => setActiveAmount(null)} 
//       />

//     </div>
//   );
// }














// "use client";

// import React, { useState } from 'react';
// import Image from 'next/image';
// import NedarimFrame from '@/components/NedarimFrame';

// export default function DonationLandingPage() {
//   const [amount, setAmount] = useState<number>(185);
//   const [customAmount, setCustomAmount] = useState<string>("");
//   const [activeAmount, setActiveAmount] = useState<number | null>(null);

//   const currentAmount = customAmount ? Number(customAmount) : amount;

//   const handleTierClick = (selectedAmount: number) => {
//     setAmount(selectedAmount);
//     setCustomAmount(""); 
//   };

//   const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCustomAmount(e.target.value);
//   };

//   return (
//     <div className="min-h-screen bg-[#060d18] text-white font-assistant antialiased pb-24 relative select-none" dir="rtl">
      
//       {/* מסגרת עיטור חיצונית דקה למראה ספר תורני קלאסי */}
//       <div className="fixed inset-4 border border-amber-500/10 pointer-events-none z-50 rounded-sm"></div>

//       {/* ----------------- אזור פתיח (HERO SECTION) עם תמונה פרוסה ומרווחת ----------------- */}
//       <header className="relative w-full overflow-hidden bg-[#040911] border-b border-amber-500/10 min-h-[500px] flex items-center">
        
//         {/* שכבת רקע תורנית עמומה בצד ימין */}
//         <div className="absolute inset-y-0 right-0 w-full md:w-2/3 opacity-5 mix-blend-luminosity grayscale pointer-events-none">
//           <Image 
//             src="/לומדים.webp" 
//             alt="רקע בית מדרש" 
//             fill
//             priority
//             className="object-cover object-center"
//           />
//         </div>

//         <div className="container mx-auto px-6 max-w-6xl relative z-20 pt-12 pb-12">
//           <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
//             {/* צד ימין: כותרות ופרטי ההנצחה */}
//             <div className="md:col-span-7 text-center md:text-right space-y-6">
//               <div>
//                 <p className="text-xl md:text-2xl text-amber-400 font-medium tracking-widest opacity-90 mb-2">
//                   כולל ערב
//                 </p>
//                 <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-400 to-amber-600 tracking-tight drop-shadow-md">
//                   לרעך כמוך
//                 </h1>
//               </div>

//               <div className="flex items-center justify-center md:justify-start gap-4">
//                 <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-amber-400/50"></div>
//                 <span className="text-amber-400 text-lg opacity-80">📖</span>
//                 <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-amber-400/50"></div>
//               </div>

//               <div className="space-y-3 bg-[#0c1625]/90 border border-amber-500/20 rounded-2xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
//                 <p className="text-sm md:text-base text-slate-400 font-light tracking-wide">לעילוי נשמת סבנו, אבינו ורבינו</p>
//                 <div className="space-y-1">
//                   <p className="text-xs text-amber-300 tracking-widest font-bold uppercase opacity-90">הגאון הצדיק</p>
//                   <p className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">
//                     רבי יצחק אייזיק
//                   </p>
//                   <p className="text-sm md:text-base text-slate-400 font-medium">בן רבי בנימין זאב מנצר זצוק"ל</p>
//                 </div>
//               </div>
//             </div>

//             {/* צד שמאל: תמונת הרב פרוסה, מרווחת ולא בתוך עיגול */}
//             <div className="md:col-span-5 w-full flex justify-center">
//               <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-amber-500/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] bg-[#0b1424]">
//                 <Image 
//                   src="/מרן.webp" 
//                   alt="מרן הגאון הצדיק זצוקל" 
//                   fill
//                   priority
//                   className="object-cover object-top hover:scale-102 transition-transform duration-700"
//                 />
//                 {/* גרדיאנטים עדינים למיזוג התמונה עם הרקע הכהה */}
//                 <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#040911] via-[#040911]/40 to-transparent"></div>
//                 <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#040911]/30 to-transparent"></div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </header>

//       {/* ----------------- אזור התוכן המרכזי ושילוב חומרי הקריאה המורחבים ----------------- */}
//       <main className="container mx-auto px-6 max-w-4xl text-center mt-16">
        
//         <div className="space-y-3 mb-12">
//           <h2 className="text-4xl md:text-6xl font-black text-amber-400 tracking-wide">
//             להקים ישיבה על קברו
//           </h2>
//           <div className="h-[2px] w-20 bg-amber-500/30 mx-auto mt-4"></div>
//         </div>

//         {/* טקסט המודעה המלא והמרגש - מחולק לפסקאות קריאות ומעוצבות */}
//         <div className="text-right text-base md:text-lg text-slate-300 leading-relaxed space-y-6 max-w-3xl mx-auto bg-slate-900/40 p-8 md:p-12 rounded-3xl border border-slate-800/60 shadow-xl backdrop-blur-sm">
//           <p>
//             שלוש שנים חלפו מאז הסתלקותו של רבי יצחק אייזיק זצ"ל. שלוש שנים שבהן חסר קולו בבית המדרש.
//           </p>
//           <p>
//             שלוש שנים שבהן חסר אותו יהודי שכל חייו היו תורה. לא תורה מן השפה ולחוץ, אלא תורה שחיה עמו, נשמה עמו והובילה את כל ארחות חייו. וככל שהתקרב מועד היארצייט השלישי, הלכה והתחזקה בלבנו שאלה אחת: <span className="text-amber-400 font-medium">כיצד מנציחים אדם שכל חייו היו תורה?</span>
//           </p>
          
//           <p className="font-medium text-slate-200">
//             אפשר להקים מצבה. אפשר לכתוב ספר וזה בהחלט חשוב. אבל האם זה מה שהיה רבי יצחק אייזיק מבקש? דומה שהתשובה ברורה.
//           </p>

//           <div className="bg-gradient-to-r from-amber-500/5 via-amber-500/15 to-amber-500/5 border-y border-amber-500/20 py-4 px-6 text-center text-amber-300 font-medium my-6 rounded-xl">
//             "אילו היו מעניקים לו עוד יום אחד בעולם הזה, מה היה עושה בו? הוא היה רץ לבית המדרש. הוא היה מחפש עוד משנה, עוד דף, עוד רגע של תורה."
//           </div>

//           <p>
//             ולכן הבנו שהדרך הגดולה ביותר להנציח אותו היא לא רק לדבר עליו — אלא להמשיך את דרכו. <span className="text-white font-bold">לא להקים רק מצבה על קברו, אלא להקים ישיבה על קברו!</span>
//           </p>
          
//           <p>
//             בסייעתא דשמיא, לקראת מלאות שלוש שנים לפטירתו, החלו להירקם היסודות להקמת כולל הערב <span className="text-amber-400 font-bold">"לרעך כמוך"</span>. הדבר החל לקרום עור וגידים כאשר הקב"ה שלח שליחים טובים — נדיבי עם שקיבלו על עצמם לשאת בחלק משמעותי מהתקציב, ואט־אט החל החלום להפוך למציאות.
//           </p>

//           <p>
//             עשרה אברכים תלמידי חכמים עתידים לשבת וללמוד בכולל, לעסוק בסוגיות שבין אדם לחברו מן השורשים שבש"ס ובדברי חז"ל, ועד ההלכה למעשה ממש.
//           </p>

//           <p>
//             שהרי אם יש תחום אחד שיכול לסכם את חייו של רבי יצחק אייזיק, הרי הוא הזהירות בכבודו של הזולת, הרגישות לאחר, הנתינה, והשאיפה המתמדת לעשות את רצון ה'. ואין דבר מתאים יותר מאשר לחבר יחד את עומק התורה עם קדושת ה"בין אדם לחברו".
//           </p>

//           <p className="pt-2 text-amber-400 font-bold text-xl text-center border-t border-slate-800/80">
//             עכשיו, אתה תהיה חלק!
//           </p>
//         </div>

//         {/* ----------------- בחירת דרגות תרומה ----------------- */}
//         <div className="my-16">
//           <h3 className="text-xl md:text-2xl font-bold text-amber-400 mb-8">
//             בחרו את חלקכם בשותפות והקמת הכולל
//           </h3>
          
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
//             {[
//               { amount: 55, label: "שותף" },
//               { amount: 100, label: "לוקח חלק" },
//               { amount: 185, label: "בונה" },
//               { amount: 300, label: "מייסד" },
//             ].map((tier) => (
//               <button 
//                 key={tier.amount}
//                 type="button"
//                 onClick={() => handleTierClick(tier.amount)}
//                 className={`border rounded-2xl p-5 flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 cursor-pointer ${
//                   currentAmount === tier.amount && !customAmount
//                     ? 'border-amber-400 bg-[#0f223f] shadow-[0_10px_25px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/50' 
//                     : 'border-slate-800 bg-[#0c1625]/90 text-slate-300 hover:border-slate-700'
//                 }`}
//               >
//                 <p className="text-sm md:text-base font-semibold tracking-wide w-full text-center">{tier.label}</p>
//                 <div className="my-4 w-full text-center">
//                   <span className="text-xs text-amber-400 font-bold ml-1">₪</span>
//                   <span className="text-3xl md:text-4xl font-black text-amber-400 tracking-tight">{tier.amount}</span>
//                 </div>
//                 <p className="text-[11px] text-slate-500 font-medium w-full text-center">לחודש</p>
//               </button>
//             ))}

//             {/* כרטיסיית פרימיום בולטת */}
//             <button 
//               type="button"
//               onClick={() => handleTierClick(500)}
//               className={`border rounded-2xl p-5 flex flex-col justify-between hover:scale-[1.03] transition-all duration-300 cursor-pointer col-span-2 sm:col-span-1 ${
//                 currentAmount === 500 && !customAmount
//                   ? 'border-2 border-amber-400 bg-[#112749] shadow-[0_12px_30px_rgba(245,158,11,0.35)]' 
//                   : 'border border-amber-500/40 bg-[#0e1d33] text-slate-200 hover:border-amber-400'
//               }`}
//             >
//               <p className="text-sm md:text-base font-bold text-amber-400 tracking-wide w-full text-center">מקים ישיבה על קברו</p>
//               <div className="my-4 w-full text-center">
//                 <span className="text-xs text-amber-400 font-bold ml-1">₪</span>
//                 <span className="text-3xl md:text-4xl font-black text-amber-400 tracking-tight">{500}</span>
//               </div>
//               <p className="text-[11px] text-slate-400 font-medium w-full text-center">לחודש</p>
//             </button>
//           </div>
//         </div>

//         {/* שדה סכום חופשי אינטראקטיבי */}
//         <div className="max-w-md mx-auto mb-16 bg-[#0c1625]/60 border border-slate-800/80 rounded-xl p-4 flex items-center justify-center gap-3">
//           <label htmlFor="custom-amount-input" className="text-xs md:text-sm font-medium text-slate-400 whitespace-nowrap">סכום אחר לחודש (₪):</label>
//           <input 
//             id="custom-amount-input"
//             type="number" 
//             value={customAmount}
//             onChange={handleCustomAmountChange}
//             placeholder="הזן סכום מותאם" 
//             className="w-full bg-[#050a12] border border-slate-800 rounded-lg py-2 px-3 text-white placeholder-slate-600 text-sm focus:border-amber-400 focus:outline-none text-center"
//           />
//         </div>

//         {/* ----------------- כפתור תשלום מרכזי יחיד וברור ללא כפילויות ----------------- */}
//         <div className="mt-12 bg-gradient-to-b from-[#0c1625] to-[#040911] p-8 rounded-2xl border border-slate-800 shadow-2xl max-w-xl mx-auto">
//           <p className="text-slate-400 text-sm mb-4">
//             התרומה מבוצעת בסביבה מאובטחת תחת קופה מוגנת.
//           </p>
//           <button
//             type="button"
//             onClick={() => setActiveAmount(currentAmount)}
//             className="w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-slate-950 font-black text-base md:text-lg py-4 px-8 rounded-xl shadow-lg hover:brightness-110 transition-all duration-200 active:scale-[0.98] cursor-pointer tracking-wide"
//           >
//             אישור ומעבר לתשלום מאובטח: ₪{currentAmount} לחודש
//           </button>
//         </div>

//         {/* פוטר סיום הדף */}
//         <footer className="mt-28 pt-6 border-t border-slate-900 text-xs text-slate-600 tracking-widest">
//           "לזכר עולם יהיה צדיק... לחטוף עוד משנה"
//         </footer>
//       </main>

//       {/* ----------------- הקופה הצפה (מודאל נדרים פלוס) ----------------- */}
//       <NedarimFrame 
//         amount={activeAmount} 
//         onClose={() => setActiveAmount(null)} 
//       />

//     </div>
//   );
// }






















'use client';

import React, { useState, useEffect } from 'react';
import { Heart, ShieldCheck, Trophy, Sparkles, BookOpen } from 'lucide-react';
import NedarimFrame from '@/components/NedarimFrame';

interface Donor {
  _id: string;
  name: string;
  amount: number;
  currency: string;
  createdAt: string;
}

export default function DonationLandingPage() {
  const [amount, setAmount] = useState<number>(180);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>(""); 
  const [activeAmount, setActiveAmount] = useState<number | null>(null);
  const [donors, setDonors] = useState<Donor[]>([]);

  const presetAmounts = [50, 100, 180, 360, 500, 1000];
  const currentAmount = customAmount ? Number(customAmount) : amount;

  // משיכת התורמים ממונגו לרצועה וללוח
  const fetchDonors = async () => {
    try {
      const res = await fetch('/api/donors');
      if (res.ok) {
        const data = await res.json();
        setDonors(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDonors();
    const interval = setInterval(fetchDonors, 12000); // ריענון כל 12 שניות
    return () => clearInterval(interval);
  }, []);

  // שמירה במונגו ופתיחת מסך הסליקה מיד לאחר מכן
  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount <= 0) return alert("אנא בחר סכום תקין");

    // 1. שמירה מהירה ומיידית ב-MongoDB שלך
    try {
      await fetch('/api/donors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: donorName.trim() || 'מוקיר תורה',
          amount: currentAmount,
        })
      });
      
      // 2. ריענון מהיר על המסך כדי שהשם שלו יופיע מיד בלייב!
      fetchDonors();
    } catch (err) {
      console.error("שגיאה בשמירה למונגו:", err);
    }

    // 3. פתיחת החלונית של נדרים פלוס
    setActiveAmount(currentAmount);
  };

  return (
    <div className="min-h-screen bg-[#060a13] text-slate-100 font-sans antialiased relative overflow-x-hidden" dir="rtl">
      
      {/* הילת אור יוקרתית ברקע */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. רצועת תורמים רצה בלייב */}
      <div className="bg-[#090f1b] border-b border-amber-500/20 text-slate-200 py-3.5 overflow-hidden shadow-lg relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-2.5 py-1 rounded-md animate-pulse flex items-center gap-1 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" /> שותפות בלייב
          </span>
          <div className="w-full overflow-hidden relative h-6">
            <div className="flex gap-12 animate-marquee whitespace-nowrap absolute">
              {donors.length > 0 ? (
                donors.map((donor) => (
                  <span key={donor._id} className="inline-flex items-center gap-2 font-medium text-sm text-slate-300">
                    <Heart className="w-4 h-4 text-amber-400 fill-amber-500/20" />
                    <span className="font-bold text-amber-200">{donor.name}</span> תרם/ה לקופת הכולל{' '}
                    <span className="text-amber-400 font-bold bg-amber-500/5 border border-amber-500/10 px-2 py-0.5 rounded text-xs">{donor.amount} ₪</span>
                  </span>
                ))
              ) : (
                <span className="text-sm text-slate-400">ממתין לשותפים הראשונים... אשרי חלקכם בהחזקת התורה!</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. אזור הכותרות והלוגו */}
      <main className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <p className="text-amber-400/90 font-medium tracking-widest text-lg md:text-xl border-b border-amber-500/10 max-w-xs mx-auto pb-2">
            כולל ערב
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-400 to-amber-500 tracking-tight drop-shadow-md py-1">
            לרעד כמוך
          </h1>
          
          <div className="flex justify-center items-center gap-2 py-2">
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-amber-500/30"></div>
            <BookOpen className="w-5 h-5 text-amber-400/60" />
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-amber-500/30"></div>
          </div>

          <div className="space-y-1">
            <p className="text-xs md:text-sm text-slate-400 tracking-wider">לעילוי נשמת סבנו, אבינו ורבינו</p>
            <p className="text-lg md:text-xl text-slate-400">הגאון הצדיק</p>
            <p className="text-2xl md:text-3xl font-bold text-amber-100/90 tracking-wide pt-1">
              רבי יצחק אייזיק
            </p>
            <p className="text-sm md:text-base text-amber-500/80 font-medium">בן רבי בנימין זאב מנצר זצוק"ל</p>
          </div>
        </div>

        {/* 3. כרטיס הטופס היוקרתי */}
        <div className="bg-[#0b1424] rounded-3xl shadow-2xl border border-slate-800/80 p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          
          <form onSubmit={handlePaymentSubmit} className="space-y-8">
            
            {/* שדה שם התורם + הודעת הבהרה על ההצגה באתר לכולם */}
            <div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 mb-2.5">
                <label className="text-sm font-semibold text-amber-200/80">
                  שם התורם / הקדשה / לזכות ולרפואת
                </label>
                <span className="text-xs text-amber-500/70 font-medium bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
                  ⚠️ השם יופיע באתר לכולם ברצועה ובלוח השותפים
                </span>
              </div>
              <input
                type="text"
                placeholder="למשל: משפחת כהן / לזכות אלמוני בן פלונית"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                className="w-full bg-[#070d17] text-slate-200 placeholder-slate-500 px-5 py-4 rounded-xl border border-slate-800 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 outline-none transition text-base"
              />
            </div>

            {/* בחירת סכום קבוע */}
            <div>
              <label className="block text-sm font-semibold text-amber-200/80 mb-3.5">
                בחרו את סכום השותפות שלכם
              </label>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => {
                      setAmount(preset);
                      setCustomAmount('');
                    }}
                    className={`py-3.5 px-4 rounded-xl border font-bold text-center text-sm md:text-base transition-all duration-200 ${
                      currentAmount === preset && !customAmount
                        ? 'bg-gradient-to-b from-amber-300 to-amber-500 border-amber-400 text-[#060a13] shadow-lg shadow-amber-500/10'
                        : 'bg-[#070d17] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {preset} ₪
                  </button>
                ))}
              </div>
            </div>

            {/* סכום מותאם אישית */}
            <div>
              <input
                type="number"
                placeholder="או הזינו סכום נדבת לבכם בשקלים..."
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full bg-[#070d17] text-slate-200 placeholder-slate-500 px-5 py-4 rounded-xl border border-slate-800 focus:border-amber-500/50 outline-none text-base"
              />
            </div>

            {/* כפתור מעבר לסליקה */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-[#060a13] py-4.5 px-6 rounded-xl font-extrabold text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5" />
              חתימה על שותפות קודש בסך {currentAmount || 0} ₪
            </button>
          </form>
        </div>

        {/* 4. לוח עשרה שותפים אחרונים בתחתית */}
        <div className="mt-12 bg-[#0b1424]/60 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-800/50 p-6 md:p-8">
          <div className="flex items-center justify-between mb-5 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2.5">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg md:text-xl font-bold text-slate-200">לוח קודש: השותפים האחרונים</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">מתעדכן בלייב</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-3">
            {donors.slice(0, 10).map((donor) => (
              <div key={donor._id} className="bg-[#070d17]/50 border border-slate-900/60 rounded-xl px-4 py-3.5 flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-300 truncate max-w-[70%]">{donor.name}</span>
                <span className="font-bold text-amber-400 bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-lg text-xs">
                  {donor.amount} ₪
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 5. קומפוננטת קופת התשלום הצפה שלך */}
      <NedarimFrame 
        amount={activeAmount} 
        donorName={donorName}
        onClose={() => setActiveAmount(null)} 
      />
    </div>
  );
}












// 'use client';

// import { useState, useEffect } from 'react';
// import { Heart, ShieldCheck, Users, Sparkles, X } from 'lucide-react';

// interface Donor {
//   _id: string;
//   name: string;
//   amount: number;
//   currency: string;
//   createdAt: string;
// }

// export default function HomePage() {
//   const [amount, setAmount] = useState<string>('180');
//   const [customAmount, setCustomAmount] = useState<string>('');
//   const [donorName, setDonorName] = useState<string>('');
//   const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
//   const [donors, setDonors] = useState<Donor[]>([]);

//   const presetAmounts = ['50', '100', '180', '360', '500', '1000'];

//   // משיכת התורמים מ-MongoDB לטובת הרצועה
//   const fetchDonors = async () => {
//     try {
//       const res = await fetch('/api/donors');
//       if (res.ok) {
//         const data = await res.json();
//         setDonors(data);
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchDonors();
//     // ריענון אוטומטי של הרצועה בכל 15 שניות
//     const interval = setInterval(fetchDonors, 15000);
//     return () => clearInterval(interval);
//   }, []);

//   // האזנה להצלחת התשלום ושמירה במונגו מהדפדפן של המשתמש!
//   useEffect(() => {
//     const handleNedarimMessage = async (event: MessageEvent) => {
//       if (event.data && event.data.Name === 'NedarimResult') {
//         if (event.data.Value && event.data.Value.Status === 'OK') {
          
//           // 1. קריאת הנתונים מנדרים פלוס
//           const txId = event.data.Value.TransactionId;
//           const finalAmt = amount === 'custom' ? customAmount : amount;

//           // 2. שמירה ישירה ב-MongoDB שלך
//           try {
//             await fetch('/api/donors', {
//               method: 'POST',
//               headers: { 'Content-Type': 'application/json' },
//               body: JSON.stringify({
//                 transactionId: txId,
//                 name: donorName || 'מוקיר תורה',
//                 amount: finalAmt,
//               })
//             });
//           } catch (err) {
//             console.error('Failed to save donor directly:', err);
//           }

//           alert('התרומה התקבלה ונשמרה בהצלחה!');
//           setIsCheckoutOpen(false);
//           fetchDonors(); // ריענון מיידי של הרצועה על המסך
//         }
//       }
//     };

//     window.addEventListener('message', handleNedarimMessage);
//     return () => window.removeEventListener('message', handleNedarimMessage);
//   }, [amount, customAmount, donorName]);

//   const handleOpenCheckout = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsCheckoutOpen(true);
//   };

//   const finalAmount = amount === 'custom' ? customAmount : amount;

//   // עודכן מזהה המוסד המדויק שלך: 7008763
//   const nedarimIframeUrl = isCheckoutOpen
//     ? `https://www.matara.pro/nedarimplus/iframe/?Mosad=7008763&Amount=${finalAmount}&ClientName=${encodeURIComponent(
//         donorName || 'מוקיר תורה'
//       )}&ApiValid=1`
//     : '';

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased" dir="rtl">
      
//       {/* רצועה רצה (Live Ticker) */}
//       <div className="bg-blue-600 text-white py-3 overflow-hidden shadow-md relative z-10">
//         <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
//           <span className="bg-red-500 text-xs font-bold px-2 py-1 rounded-full animate-pulse flex items-center gap-1 shrink-0">
//             <Sparkles className="w-3 h-3" /> לייב
//           </span>
//           <div className="w-full overflow-hidden relative h-6">
//             <div className="flex gap-8 animate-marquee whitespace-nowrap absolute">
//               {donors.length > 0 ? (
//                 donors.map((donor) => (
//                   <span key={donor._id} className="inline-flex items-center gap-1.5 font-medium text-sm">
//                     <Heart className="w-4 h-4 text-rose-300 fill-rose-300" />
//                     <span className="font-bold">{donor.name}</span> תרם/ה{' '}
//                     <span className="text-yellow-300 font-bold">{donor.amount} ₪</span>
//                   </span>
//                 ))
//               ) : (
//                 <span className="text-sm text-slate-200">ממתין לתרומות ראשונות... השותפות שלכם מניעה את המערכת!</span>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* תוכן מרכזי */}
//       <main className="max-w-4xl mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
//             שותפות בהחזקת המרכז והפעילות
//           </h1>
//           <p className="text-lg text-slate-600 max-w-xl mx-auto">
//             בחרו את סכום השותפות שלכם, הפרטים יישמרו ויוצגו בלוח השותפים בזמן אמת.
//           </p>
//         </div>

//         <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
//           <form onSubmit={handleOpenCheckout} className="space-y-6">
            
//             {/* שם התורם */}
//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-2">שם התורם (להצגה בלייב)</label>
//               <input
//                 type="text"
//                 placeholder="למשל: משפחת כהן / לזכות אלמוני"
//                 value={donorName}
//                 onChange={(e) => setDonorName(e.target.value)}
//                 className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition text-base"
//               />
//             </div>

//             {/* בחירת סכום קבוע */}
//             <div>
//               <label className="block text-sm font-semibold text-slate-700 mb-3">בחרו סכום לתרומה</label>
//               <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
//                 {presetAmounts.map((preset) => (
//                   <button
//                     key={preset}
//                     type="button"
//                     onClick={() => {
//                       setAmount(preset);
//                       setCustomAmount('');
//                     }}
//                     className={`py-3 px-4 rounded-xl border font-bold text-center transition ${
//                       amount === preset ? 'bg-blue-600 border-blue-600 text-white shadow-md' : 'border-slate-200 text-slate-700 hover:bg-slate-50'
//                     }`}
//                   >
//                     {preset} ₪
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* סכום מותאם אישית */}
//             <div className="pt-2">
//               <button
//                 type="button"
//                 onClick={() => setAmount('custom')}
//                 className={`w-full py-2 text-sm rounded-lg border text-center transition mb-3 ${
//                   amount === 'custom' ? 'bg-slate-100 border-slate-300' : 'border-dashed border-slate-300 text-slate-500 hover:bg-slate-50'
//                 }`}
//               >
//                 או סכום אחר...
//               </button>

//               {amount === 'custom' && (
//                 <div className="relative">
//                   <input
//                     type="number"
//                     min="1"
//                     required
//                     placeholder="הזן סכום בשקלים"
//                     value={customAmount}
//                     onChange={(e) => setCustomAmount(e.target.value)}
//                     className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none text-base pl-12"
//                   />
//                   <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">₪</span>
//                 </div>
//               )}
//             </div>

//             {/* כפתור תשלום */}
//             <button
//               type="submit"
//               disabled={!finalAmount || parseFloat(finalAmount) <= 0}
//               className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
//             >
//               <ShieldCheck className="w-5 h-5" />
//               מעבר לתשלום מאובטח בסך {finalAmount || 0} ₪
//             </button>
//           </form>
//         </div>

//         {/* רשימת 10 שותפים אחרונים בתחתית */}
//         <div className="mt-12 bg-white rounded-2xl shadow-md border border-slate-100 p-6">
//           <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
//             <Users className="w-5 h-5 text-blue-600" />
//             <h2 className="text-xl font-bold text-slate-800">השותפים האחרונים שלנו</h2>
//           </div>
//           <div className="divide-y divide-slate-100">
//             {donors.slice(0, 10).map((donor) => (
//               <div key={donor._id} className="py-3 flex justify-between items-center text-sm">
//                 <span className="font-semibold text-slate-700">{donor.name}</span>
//                 <span className="font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
//                   +{donor.amount} ₪
//                 </span>
//               </div>
//             ))}
//             {donors.length === 0 && (
//               <p className="text-slate-400 text-center py-4">היו השותפים הראשונים ברשימה!</p>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* קומפוננטת ה-Modal (הפופ-אפ) של האייפרם */}
//       {/* קומפוננטת ה-Modal (הפופ-אפ) של האייפרם */}
// {/* קומפוננטת ה-Modal (הפופ-אפ) של האייפרם */}
// {isCheckoutOpen && (
//   <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
//     {/* הגדלנו את הגובה המקסימלי ל-850px ושינינו את ה-h ל-95vh */}
//     <div className="bg-white w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden relative flex flex-col h-[95vh] max-h-[850px]">
      
//       <div className="px-6 py-4 bg-slate-50 border-b flex justify-between items-center shrink-0">
//         <div>
//           <h3 className="font-bold text-slate-800 text-lg">סליקה מאובטחת - נדרים פלוס</h3>
//           <p className="text-xs text-slate-500">סכום לחיוב: {finalAmount} ₪</p>
//         </div>
//         <button onClick={() => setIsCheckoutOpen(false)} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600">
//           <X className="w-5 h-5" />
//         </button>
//       </div>

//       {/* הוספת overflow-y-auto מאפשרת לגלול בתוך המודל אם הכפתור עדיין מעט נמוך */}
//       <div className="w-full flex-1 bg-slate-50 overflow-y-auto custom-scrollbar">
//         <iframe 
//           src={nedarimIframeUrl} 
//           className="w-full h-full min-h-[580px] border-0" 
//           title="נדרים פלוס" 
//           allow="payment" 
//         />
//       </div>

//     </div>
//   </div>
// )}

// {/* תוספת אנימציית ה-Marquee ישירות בתוך ה-CSS אם היא לא מוגדרת ב-Tailwind config */}
// <style jsx global>{`
//   @keyframes marquee-rtl {
//     0% { transform: translateX(-50%); }
//     100% { transform: translateX(0%); }
//   }
//   .animate-marquee-rtl {
//     display: inline-block;
//     animation: marquee-rtl 25s linear infinite;
//   }
//   /* עיצוב פס גלילה עדין לרשימה המלאה */
//   .custom-scrollbar::-webkit-scrollbar {
//     width: 6px;
//   }
//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: transparent;
//   }
//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background: #1e293b;
//     border-radius: 20px;
//   }
//   .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//     background: #334155;
//   }
// `}</style>
//     </div>
//   );
// }