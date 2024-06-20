import type { Metadata } from "next";
import "./globals.css";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({  subsets: ["latin"], weight: "400"});



export const metadata: Metadata = {
  title: "Torro",
  description: "Cryptocurrency derivatives trading fund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[&::-webkit-scrollbar]:hidden">
      <body 
        className={playfair.className}
      >
          {children}
      </body>
    </html>
  );
}
