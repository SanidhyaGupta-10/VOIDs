import "./globals.css";
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

          </LenisProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
