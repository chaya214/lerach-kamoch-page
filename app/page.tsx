
'use client';

import React, { useState, useEffect } from 'react';
import { Heart, ShieldCheck, Trophy, Sparkles, BookOpen, ArrowRight, Flame } from 'lucide-react';
import NedarimFrame from '@/components/NedarimFrame';

interface Donor {
  _id: string;
  name: string;
  amount: number;
  dedication?: string;
  currency: string;
  createdAt: string;
}

export default function DonationLandingPage() {
  const [step, setStep] = useState<number>(1);
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState<string>(""); 
  const [dedication, setDedication] = useState<string>(""); 
  const [activeAmount, setActiveAmount] = useState<number | null>(null);
  const [donors, setDonors] = useState<Donor[]>([]);

  const presetAmounts = [
    { amount: 500, title: 'מקים ישיבה על קברו', subtitle: 'לחודש' },
    { amount: 300, title: 'החזקת אברך', subtitle: 'לחודש' },
    { amount: 180, title: 'בונה', subtitle: 'לחודש' },
    { amount: 100, title: 'לוקח חלק', subtitle: 'לחודש' },
    { amount: 50, title: 'שותף', subtitle: 'לחודש' }
  ];

  // יעד הקמפיין בשקלים
const GOAL_AMOUNT = 60000;

// חישוב הסכום הכולל שנאסף
const totalDonated = donors.reduce((sum, donor) => sum + donor.amount, 0);

// הוספה של הסכום ההתחלתי (40,000 ש"ח כבקשתך)
const totalWithStartingAmount = totalDonated + 39000;

// חישוב אחוז ההתקדמות (מוגבל ל-100% אם עוברים את היעד)
const progressPercentage = Math.min(
  (totalWithStartingAmount / GOAL_AMOUNT) * 100,
  100
);

  const currentAmount = customAmount ? Number(customAmount) : amount || 0;

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
    const interval = setInterval(fetchDonors, 12000);
    return () => clearInterval(interval);
  }, []);

  const handleNextStep = () => {
    if (currentAmount <= 0) return alert("אנא בחרו סכום לשותפות");
    setStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount <= 0) return alert("אנא בחר סכום תקין");

    try {
      await fetch('/api/donors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: donorName.trim() || 'מוקיר תורה',
          amount: currentAmount,
          dedication: dedication.trim()
        })
      });
      fetchDonors();
    } catch (err) {
      console.error("שגיאה בשמירה למונגו:", err);
    }

    setActiveAmount(currentAmount);
  };

  const scrollToDonation = () => {
    const element = document.getElementById('donation-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-brand-bg text-slate-100 font-sans antialiased relative overflow-x-hidden" dir="rtl">
      
      {/* כפתור צף למעלה כל הזמן - מוזז מעט למטה ונמצא מעל כל התוכן */}
<div className="fixed top-19 left-6 z-[60]">
  <button 
    onClick={scrollToDonation}
    className="bg-gradient-to-r from-gold-light via-gold-base to-gold-dark hover:scale-105 text-[#060a13] font-black py-3 px-6 rounded-full shadow-[0_0_20px_rgba(223,183,108,0.4)] transition-all flex items-center gap-2 border border-gold-light/50 cursor-pointer"
  >
    <Heart className="w-5 h-5 fill-[#060a13]" /> אני רוצה לקחת חלק
  </button>
</div>

      {/* 1. רצועת תורמים רצה בלייב - מקובעת לראש המסך (Fixed) */}
{/* 1. רצועת תורמים רצה בלייב - מקובעת לראש המסך (Fixed) */}
<div className="fixed top-0 left-0 right-0 bg-navy-card/90 backdrop-blur-md border-b border-gold-base/20 py-3.5 overflow-hidden shadow-lg z-50">
  <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
    <span className="bg-gold-base/10 border border-gold-base/30 text-gold-light text-xs font-bold px-2.5 py-1 rounded-md animate-pulse flex items-center gap-1 shrink-0 z-10">
      <Sparkles className="w-3.5 h-3.5 text-gold-light" /> השותפים
    </span>
    
    <div className="w-full overflow-hidden relative h-6 flex items-center">
      {donors.length > 0 ? (
        <div className="flex gap-12 whitespace-nowrap animate-marquee min-w-full shrink-0">
          {[...donors, ...donors, ...donors].map((donor, index) => (
            <span key={`${donor._id || index}-${index}`} className="inline-flex items-center gap-2 font-medium text-sm text-slate-300">
              <Heart className="w-4 h-4 text-gold-base fill-gold-base/20" />
              <span className="font-bold text-gold-light">{donor.name}</span>
              
              {/* הצגת ההקדשה ברצועה למעלה */}
              {donor.dedication && (
                <span className="text-gold-base/80 text-xs bg-gold-base/5 px-1.5 py-0.5 rounded border border-gold-base/10 mx-1">
                  {donor.dedication}
                </span>
              )}
              
              תרם/ה לקופת הכולל{' '}
              <span className="text-gold-base font-bold bg-gold-base/5 border border-gold-base/10 px-2 py-0.5 rounded text-xs">
                {donor.amount} ₪ לחודש
              </span>
            </span>
          ))}
        </div>
      ) : (
        <span className="text-sm text-slate-400 animate-fade-in">ממתין לשותפים הראשונים... אשרי חלקכם בהחזקת התורה!</span>
      )}
    </div>
  </div>
</div>

      <main className="relative z-10">
{/* אזור ההירו - פרוס על כל רוחב המסך מקצה לקצה (Full Bleed Background) עם תאורה מוגברת */}
<section className="w-full relative overflow-hidden min-h-[700px] border-b border-gold-base/10 bg-brand-bg">
  
  {/* אפקט אור עליון מרכזי ששוטף את ה-Hero */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-gradient-to-b from-gold-base/10 via-gold-base/5 to-transparent blur-[100px] pointer-events-none z-10" />
  
  {/* ----------------- תמונת הרקע (מתפרסת על 100% מהמסך) ----------------- */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/אנשים לומדים.webp" 
      alt="רקע בית מדרש" 
      className="w-full h-full object-cover object-center opacity-15" 
    />
    {/* שכבות הגרדיאנט המדויקות למותג */}
    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/85 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-transparent to-brand-bg" />
  </div>

  {/* ----------------- קווי עיטור רקע אבסולוטיים בקצוות המסך ----------------- */}
  <div className="absolute right-4 top-1/4 w-px h-64 bg-gradient-to-b from-transparent via-gold-base/35 to-transparent hidden xl:block z-10" />
  <div className="absolute left-4 top-1/3 w-px h-64 bg-gradient-to-b from-transparent via-gold-base/35 to-transparent hidden xl:block z-10" />

  {/* ----------------- קונטיינר התוכן (נשאר מוגבל וממורכז שלא יתפזר) ----------------- */}
  <div className="max-w-7xl mx-auto px-4 pt-16 pb-12 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
    
    {/* בלוק הטקסט והתארים */}
    <div className="w-full md:w-[45%] text-center md:text-right space-y-6 z-20">
      
      <div className="space-y-1">
        <span className="text-gold-light font-medium tracking-[0.2em] text-xl md:text-2xl uppercase block">
          כולל ערב
        </span>
        <div className="w-16 h-[2px] bg-gold-base mx-auto md:mr-0 md:ml-auto mt-2" />
      </div>

      <h1 className="text-8xl md:text-[8.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold-base to-gold-dark drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] tracking-tight leading-none py-2">
        לרעך כמוך
      </h1>
      
      {/* אלמנט הפרדה יוקרתי עם קווים ואייקון הספר */}
      <div className="flex justify-center md:justify-start items-center gap-6 py-2">
        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent to-gold-base/40"></div>
        <BookOpen className="w-7 h-7 text-gold-light drop-shadow-[0_0_8px_rgba(231,194,125,0.5)]" />
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-gold-base/40"></div>
      </div>

      {/* קופסת תארים ממוסגרת בקווים עליונים ותחתונים עם עימעום רקע קל */}
      <div className="relative py-4 border-y border-gold-base/15 my-4 max-w-xl mx-auto md:mr-0 md:ml-auto bg-navy-card/40 backdrop-blur-sm p-6 rounded-xl">
        <div className="space-y-3">
          <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">לעילוי נשמת סבנו, אבינו ורבינו</p>
          <p className="text-3xl md:text-4xl font-bold text-slate-100 tracking-wide">הגאון הצדיק</p>
          
          <p className="text-5xl md:text-[4.5rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gold-light to-white tracking-wide leading-tight drop-shadow-sm">
            רבי יצחק אייזיק
          </p>
          
          <p className="text-2xl md:text-3xl text-gold-base font-semibold tracking-wide">
            בן רבי בנימין זאב מנצר זצוק"ל
          </p>
        </div>
      </div>
    </div>
    
    {/* ----------------- בלוק תמונת הרב (מוגדל משמעותית + תאורה) ----------------- */}
    <div className="w-full md:w-[55%] mt-4 md:mt-0 relative flex justify-center items-center z-10">
      {/* max-w-3xl מגדיל את אזור התמונה בצורה בולטת */}
      <div className="relative w-full max-w-3xl transform md:scale-110 origin-center transition-transform duration-700">
        
        {/* הילת אור אחורית רכה ועוצמתית יותר בצבעי זהב להבלטת הדמות */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold-dark/20 via-gold-base/30 to-transparent blur-[140px] rounded-full pointer-events-none scale-125 opacity-40 animate-pulse" />
        <img 
          src="/רקע שקוף.webp" 
          alt="רבי יצחק אייזיק" 
          className="w-full h-auto object-contain drop-shadow-[0_25px_70px_rgba(0,0,0,0.85)] relative z-10 select-none max-h-[700px] md:max-h-[800px] transform hover:scale-[1.01] transition-transform duration-500 ease-out" 
        />
      </div>
    </div>

  </div>
</section>

{/* ----------------- פס התקדמות יעד הקמפיין ----------------- */}
<div className="bg-navy-card/60 backdrop-blur-sm rounded-3xl shadow-xl border border-gold-base/20 p-8 md:p-10 mb-10 animate-fade-in relative">
  {/* אפקט הילה פנימית קלה לאור */}
  <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold-light/20 to-transparent" />
  
  <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 border-b border-slate-800/80 pb-6">
    <div className="flex items-center gap-4 text-right">
      <Flame className="w-10 h-10 text-gold-light flex-shrink-0" />
      <div>
        <h3 className="text-3xl font-black text-slate-100 mb-1 leading-tight">יעד הקמת הכולל</h3>
        <p className="text-gold-base text-lg font-medium">יחד בני המשפחה נגיע ליעד ע"י תרומה חודשית קבועה</p>
      </div>
    </div>
    
    {/* תצוגת הסכומים */}
    <div className="text-center md:text-left flex flex-col items-center md:items-start gap-1 p-4 bg-brand-bg rounded-2xl border border-slate-800/60 shadow-inner">
      <div className="text-slate-400 text-sm font-medium tracking-wide">נאספו עד כה:</div>
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-light via-gold-base to-gold-dark drop-shadow-[0_2px_10px_rgba(223,183,108,0.3)]">
          ₪{totalWithStartingAmount.toLocaleString()}
        </span>
        <span className="text-slate-500 text-xl font-bold">
          / ₪{GOAL_AMOUNT.toLocaleString()}
        </span>
      </div>
    </div>
  </div>

  {/* פס ההתקדמות הויזואלי */}
  <div className="relative w-full h-8 bg-brand-bg rounded-full border-2 border-slate-800 shadow-inner overflow-hidden group">
    {/* שכבת אור אחורית פועמת על הפס */}
    <div className="absolute inset-y-0 right-0 h-full bg-gold-base/10 blur-[10px] pointer-events-none transition-all duration-1000 ease-out" style={{ width: `${progressPercentage}%` }} />
    
    {/* פס המילוי המדורג */}
    <div 
      className="absolute inset-y-0 right-0 h-full rounded-full bg-gradient-to-r from-gold-dark via-gold-base to-gold-light transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(223,183,108,0.5)] flex items-center justify-end px-3"
      style={{ width: `${progressPercentage}%` }}
    >
      {/* תצוגת האחוזים בתוך הפס (מוצג רק כשיש מספיק מקום) */}
      {progressPercentage > 15 && (
        <span className="text-[#060a13] font-black text-sm drop-shadow-md animate-fade-in delay-300">
          {totalWithStartingAmount >= GOAL_AMOUNT ? "היעד הושלם!" : `${progressPercentage.toFixed(0)}%`}
        </span>
      )}
    </div>
  </div>

  {/* טקסט השלמה אם עברנו את היעד */}
  {totalWithStartingAmount >= GOAL_AMOUNT && (
    <div className="mt-6 p-4 bg-gold-base/5 border border-gold-base/20 rounded-2xl text-center animate-fade-in relative overflow-hidden">
      <Sparkles className="w-5 h-5 text-gold-light absolute -top-1 -right-1" />
      <p className="text-gold-light font-bold text-xl relative z-10">
        אשריכם! עברנו את היעד, הכולל מוקם ברוב פאר. כל תרומה נוספת מחזקת את לומדי התורה!
      </p>
    </div>
  )}
</div>

        {/* טקסט השראה */}
        <div className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-light to-gold-base mb-6 drop-shadow-lg leading-tight">
            לעשות רצון צדיק<br />מקימים ישיבה על קברו
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            לציון שלוש שנים להסתלקותו של סבא זצוק"ל, אנו זוכים בעזרת ה' להקים את כולל הערב "לרעך כמוך", ללימוד הלכות וסוגיות בין אדם לחברו מן השורש ועד ההלכה למעשה.
          </p>
          <div className="inline-block bg-navy-card border border-gold-base/30 rounded-2xl p-6 shadow-2xl">
            <p className="text-xl md:text-2xl font-bold text-gold-light">
              אין דרך גדולה יותר להמשיך את דרכו של מי שכל חייו היו תורה,<br className="hidden md:block"/>
              מאשר להרבות תורה לאחר פטירתו.
            </p>
          </div>
        </div>

        {/* אזור התרומה הדינאמי - חצוי ל-2 שלבים */}
        {/* אזור התרומה הדינאמי - חצוי ל-2 שלבים */}
<div id="donation-section" className="max-w-5xl mx-auto px-4 pb-16">
  <div className="bg-navy-card/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-gold-base/20 p-8 md:p-12">
    
    {step === 1 ? (
      <div className="space-y-8 animate-fade-in">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">בחרו את שותפות הקודש שלכם</h3>
          <p className="text-gold-base">כל סכום מקרב אותנו ליעד ומחזיק את לומדי התורה</p>
        </div>

        {/* גריד כפתורי הסכומים המשודרג */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {presetAmounts.map((preset) => {
            const isSelected = amount === preset.amount && !customAmount;
            return (
              <button
                key={preset.amount}
                type="button"
                onClick={() => {
                  setAmount(preset.amount);
                  setCustomAmount('');
                }}
                className={`flex flex-col items-center justify-center py-6 px-4 rounded-2xl border-2 transition-all duration-300 ${
                  isSelected
                    ? 'bg-gradient-to-b from-navy-card to-brand-bg border-gold-base shadow-[0_0_15px_rgba(223,183,108,0.2)] scale-105'
                    : 'bg-brand-bg/60 border-slate-800/80 hover:border-gold-base/40 hover:bg-brand-bg'
                }`}
              >
                {/* כותרת המסלול */}
                <span className="text-gold-light font-bold mb-2 text-center text-sm md:text-base h-10 flex items-center">
                  {preset.title}
                </span>

                {/* הסכום הגדול */}
                <span className={`text-3xl md:text-4xl font-black ${isSelected ? 'text-gold-light' : 'text-slate-200'}`}>
                  ₪{preset.amount}
                </span>

                {/* הכיתוב "לחודש" המודגש */}
                <span className={`text-xs font-bold tracking-wide mt-1.5 px-2.5 py-0.5 rounded-md transition-colors ${
                  isSelected 
                    ? 'bg-gold-base/20 text-gold-light border border-gold-base/30' 
                    : 'bg-slate-800/50 text-slate-400 border border-transparent'
                }`}>
                  {preset.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* שדה סכום חופשי משודרג עם תגית "לחודש" דינמית */}
        <div className="max-w-xl mx-auto relative mt-6">
          <input
            type="number"
            placeholder="או הזינו סכום נדבת לבכם..."
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount(null);
            }}
            className="w-full bg-brand-bg text-gold-base text-center font-bold text-xl placeholder-slate-600 px-14 py-5 rounded-2xl border border-slate-800 focus:border-gold-base/50 outline-none transition"
          />
          {/* תגית "לחודש" שמופיעה בתוך האינפוט ברגע שמתחילים להקליד סכום */}
          {customAmount && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 bg-gold-base/10 border border-gold-base/20 text-gold-light text-xs font-bold px-2.5 py-1 rounded-md animate-fade-in">
              לחודש
            </div>
          )}
        </div>

        <div className="text-center mt-10">
          <button
            type="button"
            onClick={handleNextStep}
            className="bg-gradient-to-r from-gold-light to-gold-dark hover:from-gold-light hover:to-gold-base text-[#060a13] py-4 px-12 rounded-xl font-black text-xl shadow-xl transition-all cursor-pointer inline-flex items-center gap-3"
          >
            המשך לפרטים והקדשה <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
        </div>
      </div>
    ) : (
              <form onSubmit={handlePaymentSubmit} className="space-y-6 max-w-2xl mx-auto animate-fade-in">
                <button 
                  type="button" 
                  onClick={() => setStep(1)} 
                  className="text-gold-base hover:text-gold-light flex items-center gap-2 font-medium mb-6 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" /> חזרה לבחירת סכום
                </button>
                
                <div className="bg-brand-bg p-6 rounded-2xl border border-gold-base/20 mb-8 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">סכום השותפות:</span>
                  <span className="text-2xl font-black text-gold-light">₪{currentAmount}</span>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gold-light">שם התורם להצגה באתר</span>
                      <span className="text-xs text-gold-base/70 bg-gold-base/5 px-2 py-0.5 rounded border border-gold-base/10">לא חובה</span>
                    </label>
                    <input
                      type="text"
                      placeholder="למשל: משפחת כהן"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full bg-brand-bg text-slate-200 placeholder-slate-600 px-5 py-4 rounded-xl border border-slate-800 focus:border-gold-base/50 outline-none transition text-base"
                    />
                  </div>

                  <div>
                    <label className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gold-light">הקדשה אישית / לעילוי נשמת</span>
                      <span className="text-xs text-gold-base/70 bg-gold-base/5 px-2 py-0.5 rounded border border-gold-base/10">לא חובה</span>
                    </label>
                    <input
                      type="text"
                      placeholder="למשל: להצלחת הילדים / פלוני בן אלמוני"
                      value={dedication}
                      onChange={(e) => setDedication(e.target.value)}
                      className="w-full bg-brand-bg text-slate-200 placeholder-slate-600 px-5 py-4 rounded-xl border border-slate-800 focus:border-gold-base/50 outline-none transition text-base"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold-light via-gold-base to-gold-dark hover:from-gold-light hover:to-gold-base text-[#060a13] mt-8 py-4.5 px-6 rounded-xl font-extrabold text-lg shadow-[0_0_20px_rgba(223,183,108,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-6 h-6" />
                  מעבר לסליקה מאובטחת
                </button>
              </form>
            )}
          </div>
        </div>

        {/* לוח כל השותפים - מציג את כולם מיידית ללא פילטור */}
<div className="max-w-5xl mx-auto px-4 pb-16">
  <div className="bg-navy-card/60 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-800/50 p-6 md:p-10">
    <div className="flex items-center justify-between mb-8 border-b border-slate-800/80 pb-4">
      <div className="flex items-center gap-3">
        <Trophy className="w-6 h-6 text-gold-base" />
        <h2 className="text-xl md:text-2xl font-bold text-slate-200">לוח השותפים: מחזיקי הכולל</h2>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {donors.map((donor) => (
        <div key={donor._id} className="bg-brand-bg/80 border border-slate-800 hover:border-gold-base/30 transition-colors rounded-xl p-4 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-2 animate-fade-in">
            <span className="font-bold text-slate-200 truncate pr-1 align-middle self-center">{donor.name}</span>
            
            {/* קופסית הסכום עם תוספת "לחודש" מעוצבת באותיות קטנות יותר */}
            <span className="font-black text-gold-light bg-gold-base/10 border border-gold-base/20 px-3 py-1 rounded-lg text-sm shrink-0 flex items-center gap-1">
              <span>₪{donor.amount}</span>
              <span className="text-[10px] opacity-80 font-normal">לחודש</span>
            </span>
          </div>
          
          {donor.dedication && (
            <div className="text-xs text-gold-base/70 pr-1 truncate mt-1">
              {donor.dedication}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
      </main>

      <NedarimFrame 
        amount={activeAmount} 
        donorName={donorName}
        dedication={dedication}
        onClose={() => setActiveAmount(null)} 
      />
    </div>
  );
}


