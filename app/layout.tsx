import type { Metadata, Viewport } from "next";
import { Inter, Koulen, Geist, Host_Grotesk, Cinzel } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const koulen = Koulen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-koulen"
});
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});
const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host-grotesk",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "SoulPrint - Discover Your Digital Soul",
  description: "Analyze your digital footprint and discover your unique SoulPrint.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        koulen.variable,
        geist.variable,
        hostGrotesk.variable,
        cinzel.variable
      )}>
        {children}
      </body>
    </html>
  );
}
