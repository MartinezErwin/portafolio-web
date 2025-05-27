import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jomhuria } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jomhuria = Jomhuria({
  weight: "400", // Solo tiene un peso
  subsets: ["latin"],
  variable: "--font-jomhuria", // Nombre de tu variable CSS
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Portafolio personal de Erwin Dayan Martínez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jomhuria.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
