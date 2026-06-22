import type { Metadata } from "next";
import { Orbitron, Raleway } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AidanNation",
  description: "Music, creativity, and the phoenix rising",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${raleway.variable} scroll-smooth`}
    >
      <body className="bg-black text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
