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
  metadataBase: new URL('https://vitalband.com'),
  title: "Vitalband - Smart Health Monitoring & Emergency Response",
  description: "24/7 health tracking with instant SOS and location sharing. Stay connected with your loved ones and ensure their safety with real-time monitoring.",
  keywords: "health monitoring, emergency response, elderly care, health tracking, SOS device, medical alert, senior safety, health tech",
  authors: [{ name: "Vitalband" }],
  openGraph: {
    title: "Vitalband - Smart Health Monitoring & Emergency Response",
    description: "24/7 health tracking with instant SOS and location sharing. Keep your loved ones safe.",
    images: [
      {
        url: "/images/Band preview 1.png",
        width: 1200,
        height: 630,
        alt: "Vitalband Smart Health Monitor",
        type: "image/png",
      },
      {
        // Square image for WhatsApp
        url: "/images/Logo square.jpg",
        width: 600,
        height: 600,
        alt: "Vitalband Logo",
        type: "image/jpeg",
      }
    ],
    locale: "en_US",
    type: "website",
    siteName: "Vitalband",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vitalband - Smart Health Monitoring",
    description: "24/7 health tracking with instant SOS and location sharing",
    images: ["/images/Band preview 1.png", "/images/Logo square.jpg"],
    creator: "@vitalband",
    site: "@vitalband",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://vitalband.com",
  },
  category: "Health & Wellness",
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
