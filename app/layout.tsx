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
  title: "AeroSuite | Signature Scents Elevated",
  description:
    "AeroSuite crafts couture perfumes inspired by the art of movement—discover ethereal fragrances and sensory rituals designed for the modern connoisseur.",
  metadataBase: new URL("https://agentic-28b57d7b.vercel.app"),
  openGraph: {
    title: "AeroSuite | Signature Scents Elevated",
    description:
      "Experience the world of AeroSuite—couture perfumes with weightless projection and enduring presence.",
    url: "https://agentic-28b57d7b.vercel.app",
    siteName: "AeroSuite",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AeroSuite | Signature Scents Elevated",
    description:
      "Couture perfumes inspired by aviation—discover ethereal fragrance rituals from AeroSuite.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#08070a] text-stone-100 selection:bg-[#f2d5a7]/60 selection:text-[#0f0d13]`}
      >
        {children}
      </body>
    </html>
  );
}
