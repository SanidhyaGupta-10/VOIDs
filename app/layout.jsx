import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import LenisProvider from "@/providers/LenisProvider";
import SessionWrapper from "@/providers/SessionWrapper";


export const metadata = {
  title: "VOID",
  description: "AI workspace by VOID",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-black text-white">
        <SessionWrapper>
          <LenisProvider>

            {children}
            <SpeedInsights />
          </LenisProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
