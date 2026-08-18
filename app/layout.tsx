import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Relix — AI Video Production Studio",
  description: "AI-powered video production for brands, campaigns, and ideas that deserve to move.",
  openGraph: {
    title: "Relix — Impossible stories. Made visible.",
    description: "AI video production for ambitious brands and ideas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relix — Impossible stories. Made visible.",
    description: "AI video production for ambitious brands and ideas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
