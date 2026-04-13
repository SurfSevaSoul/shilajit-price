import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "ShilajitPrice.com — Best Shilajit Deals & Price Comparison",
  description:
    "Compare shilajit prices across top brands. Find the best deals on resin, capsules, gummies, tinctures, and honey — all lab-tested and COA verified.",
  keywords:
    "shilajit price, shilajit comparison, best shilajit, shilajit resin, shilajit capsules, cheap shilajit, shilajit deals, lab tested shilajit, COA shilajit",
  openGraph: {
    title: "ShilajitPrice.com — Best Shilajit Deals & Price Comparison",
    description:
      "Compare shilajit prices across top brands. Find the best deals on resin, capsules, gummies, tinctures, and honey.",
    url: "https://shilajitprice.com",
    siteName: "ShilajitPrice.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShilajitPrice.com — Best Shilajit Deals",
    description:
      "Compare shilajit prices across top brands. COA verified, lab tested.",
  },
  metadataBase: new URL("https://shilajitprice.com"),
  alternates: {
    canonical: "https://shilajitprice.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
