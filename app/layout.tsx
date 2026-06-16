import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'], 
  variable: '--font-cormorant', // This creates a custom CSS variable
  display: 'swap',
});

export const metadata: Metadata = {
  title: "The Collided - Brand Landing",
  description: "Welcome to The Collided. Discover our brand, shop on Myntra, and get in touch with us.",
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="h-full w-full">{children}</body>
    </html>
  );
}
