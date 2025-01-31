import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 임포트
import type { Metadata, Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 뷰포트 & 메타 데이터 정의
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "widget",
  description: "widget",
  manifest: "/manifest.json",
  icons: {
    icon: "/sch-logo.png",
    apple: "/sch-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* PWA 관련 메타 태그 추가 */}
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/sch-logo.png" />
      </head>
      {/* PWA 관련 메타 태그 추가 END */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
