import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Sports Content Generator",
  description: "منصة لمتابعة الفرق العربية والخليجية والمباريات الرياضية السابقة والحالية.",
  keywords: ["رياضة", "كرة قدم", "فرق عربية", "خليجية", "مباريات", "أرشيف"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body style={{ fontFamily: "sans-serif", padding: "1rem", direction: "rtl" }}>
        {children}
      </body>
    </html>
  );
}
