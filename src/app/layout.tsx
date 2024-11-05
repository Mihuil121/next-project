import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Hader from "./serverComponents/Hader/Hader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Finding the best employees is very simple",
  description: "We help you find employees for your company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Hader />
        {children}
      </body>
    </html>
  );
}
