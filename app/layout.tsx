import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* 🔥 GLOBAL SEO (FULL WEBSITE) */
export const metadata: Metadata = {
  title: {
    default: "AI Website Generator | WebGenie-AI",
    template: "%s | WebGenie-AI",
  },
  description:
    "WebGenie-AI is a powerful AI website generator that helps you create modern, fast and SEO-optimized websites instantly. No coding required.",
  keywords: [
    "AI website generator",
    "website builder AI",
    "AI web design tool",
    "generate website with AI",
    "no code website builder",
    "WebGenie AI",
  ],
  authors: [{ name: "WebGenie-AI" }],
  creator: "WebGenie-AI",
  metadataBase: new URL("https://webgenie-ai.vercel.app"), // deploy ke baad change kar sakte ho
  openGraph: {
    title: "AI Website Generator | WebGenie-AI",
    description:
      "Create beautiful, responsive and SEO-friendly websites instantly using AI.",
    url: "https://webgenie-ai.vercel.app",
    siteName: "WebGenie-AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebGenie-AI Website Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
