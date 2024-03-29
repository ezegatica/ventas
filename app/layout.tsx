import { Suspense } from "react";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import Navbar from "../components/layout/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ventas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
