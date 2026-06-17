// "use client";

// import React from 'react';
// import { X } from 'lucide-react';

// interface NedarimFrameProps {
//   amount: number | null;
//   onClose: () => void;
// }

// export default function NedarimFrame({ amount, onClose }: NedarimFrameProps) {
//   // אם לא נבחר סכום או שהחלון סגור - לא מרנדרים כלום
//   if (amount === null) return null;

//   const mosadId = "7008763";
//   // בניית הקישור הנקי של נדרים פלוס עם הסכום שהועבר מהלחיצה בדף הבית
//   const nedarimUrl = `https://www.matara.pro/nedarimplus/online/?mosad=${mosadId}&language=he&Amount=${amount}&Group=1&Groupe=1&Zevel=1`;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      
//       {/* שכבת רקע כהה שסוגרת את המודאל בלחיצה מחוץ לחלון */}
//       <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

//       {/* חלון התשלום הצף */}
//       <div className="relative w-full max-w-4xl bg-[#0b1424] border border-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[85vh] max-h-[800px] z-10 animate-scale-up text-right" dir="rtl">
        
//         {/* בר עליון ניהולי של החלון הצף */}
//         <div className="bg-[#090f1b] px-6 py-4 border-b border-slate-900 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
//             <span className="text-sm font-bold text-slate-200">
//               קופת תשלום מאובטחת: סכום של ₪{amount} לחודש
//             </span>
//           </div>
          
//           {/* כפתור סגירה (X) בולט וברור */}
//           <button 
//             onClick={onClose}
//             className="text-slate-400 hover:text-white transition-colors bg-slate-800/80 hover:bg-slate-800 p-2 rounded-xl flex items-center justify-center cursor-pointer"
//             aria-label="סגור חלון"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         {/* ה-Iframe הנקי והמקורי נטען פה בפנים ללא שום מניפולציות */}
//         <div className="w-full flex-1 bg-white">
//           <iframe 
//             src={nedarimUrl}
//             className="w-full h-full border-none"
//             title="קופת תשלום נדרים פלוס"
//             allow="payment"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import React from 'react';
import { X } from 'lucide-react';

interface NedarimFrameProps {
  amount: number | null;
  donorName: string;
  dedication: string;
  onClose: () => void;
}

export default function NedarimFrame({ amount, donorName, dedication, onClose }: NedarimFrameProps) {
  if (amount === null) return null;

  const mosadId = "7008763";
  // שילוב השם וההקדשה יחד שיופיעו לקופאי
  const fullNameForNedarim = dedication ? `${donorName} - ${dedication}` : donorName;
  
  // בניית הקישור על בסיס הקישור המדויק שנתת, פלוס הזרקת השם והסכום דינמית
  const nedarimUrl = `https://www.matara.pro/nedarimplus/online/?mosad=${mosadId}&Groupe=%D7%94%D7%A7%D7%9E%D7%AA%20%D7%9B%D7%95%D7%9C%D7%9C%20%D7%9C%D7%A2%22%D7%A0%20%D7%A8%27%20%D7%99%D7%A6%D7%97%D7%A7%20%D7%90%D7%99%D7%99%D7%96%D7%99%D7%A7%20%D7%9E%D7%A0%D7%A6%D7%A8&language=he&Amount=${amount}&ClientName=${encodeURIComponent(fullNameForNedarim || 'מוקיר תורה')}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-sm">
      
      {/* שכבת רקע כהה שסוגרת את המודאל בלחיצה מחוץ לחלון */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* חלון התשלום הצף */}
      <div className="relative w-full max-w-4xl bg-[#0b1424] border border-slate-800 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col h-[85vh] max-h-[800px] z-10 text-right animate-scale-up" dir="rtl">
        
        {/* בר עליון ניהולי של החלון הצף */}
        <div className="bg-[#090f1b] px-6 py-4 border-b border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]"></span>
            <span className="text-sm font-bold text-slate-200">
              קופת תשלום מאובטחת: שותפות בסך ₪{amount}
            </span>
          </div>
          
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors bg-slate-800/80 hover:bg-slate-700 p-2 rounded-xl flex items-center justify-center cursor-pointer"
            aria-label="סגור חלון"
          >
            <X size={20} />
          </button>
        </div>

        {/* ה-Iframe נטען פה בפנים */}
        <div className="w-full flex-1 bg-white relative">
          <iframe 
            src={nedarimUrl}
            className="w-full h-full border-none absolute inset-0"
            title="קופת תשלום נדרים פלוס"
            allow="payment"
          />
        </div>
      </div>
    </div>
  );
}