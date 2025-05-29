import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jomhuria } from "next/font/google";
import "./globals.css";
import Header from "@/components/Ui/Header";
import Footer from "@/components/Ui/Footer";
import { ThemeProvider } from "@/components/Dark/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jomhuria = Jomhuria({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jomhuria",
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
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jomhuria.variable} theme-bg theme-text min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
