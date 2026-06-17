import type { Metadata, Viewport } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

// אופטימיזציית פונט: טעינת Assistant עם תמיכה מלאה בעברית
const assistant = Assistant({
  subsets: ["latin", "hebrew"],
  weight: ["200", "300", "400", "500", "700", "800",],
  variable: "--font-assistant",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0a1424", // צבע הסטטוס באר בניידים (כחול כהה)
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "כולל ערב לרעך כמוך | מקימים ישיבה על קברו",
  description: "ציון שלוש שנים להסתלקותו של הגאון הצדיק רבי יצחק אייזיק זצוק\"ל. שותפים להקמת כולל הערב ללימוד הלכות וסוגיות יבין אדם לחברו.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} scroll-smooth`}>
      <body className="antialiased bg-[#0a1424] text-white font-assistant min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}