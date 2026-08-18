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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://film.relix.ai";
const socialTitle = "Relix — Impossible stories. Made visible.";
const description = "AI-powered video production for brands, campaigns, and ideas that deserve to move.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Relix — AI Video Production Studio", template: "%s — Relix" },
  description,
  openGraph: { title: socialTitle, description, images: [{ url: "/og.png", width: 1730, height: 909, alt: socialTitle }] },
  twitter: { card: "summary_large_image", title: socialTitle, description, images: ["/og.png"] },
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
