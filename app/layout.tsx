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
  title: "NESCUP 2026 Tolosa | Torneo Fútbol Alevín Femenino",
  description: "Torneo de fútbol alevín femenino de rendimiento en Tolosa, Gipuzkoa. Participa en la NESCUP 2026.",
  keywords: ["NESCUP", "2026", "Tolosa", "Gipuzkoa", "fútbol femenino", "alevín", "torneo"],
  openGraph: {
    title: "NESCUP 2026 Tolosa",
    description: "Torneo de fútbol alevín femenino de rendimiento",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
