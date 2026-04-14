import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "ShilajitPrice — Compare Shilajit Prices, Purity & Lab Data (2026)",
  description:
    "The most comprehensive shilajit comparison database. Compare prices, fulvic acid content, COA availability, and purity scores across 55+ products from 20+ brands. Find the best shilajit for your budget.",
  keywords:
    "shilajit price, shilajit comparison, best shilajit, shilajit purity score, fulvic acid content, shilajit COA, shilajit lab tested, shilajit resin, shilajit capsules, cheap shilajit, shilajit deals",
  openGraph: {
    title: "ShilajitPrice — Compare Shilajit Prices, Purity & Lab Data (2026)",
    description:
      "The most comprehensive shilajit comparison database. Compare prices, fulvic acid content, COA availability, and purity scores across 55+ products from 20+ brands.",
    url: "https://shilajitprice.com",
    siteName: "ShilajitPrice.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ShilajitPrice.com — Compare Shilajit Prices, Purity & Lab Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShilajitPrice — Compare Shilajit Prices, Purity & Lab Data",
    description:
      "55+ products, 20+ brands. Compare fulvic acid content, COA availability, purity scores, and prices. Find the best shilajit for your budget.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DFZ31GCRBY"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DFZ31GCRBY');
          `}
        </Script>
      </body>
    </html>
  );
}
