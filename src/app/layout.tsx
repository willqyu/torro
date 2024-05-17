import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const serif = DM_Serif_Display({  subsets: ["latin"], weight: "400"});

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
    <html lang="en">
      <body className={serif.className}>{children}</body>
    </html>
  );
}
