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
  title: "Arpan Shah | Full Stack Developer",
  description: "Arpan Shah | Full Stack Developer | Building Modern Web Experiences",
  openGraph: {
    title: "Arpan Shah | Full Stack Developer",
    description: "Building modern web experiences with clean UI and powerful backend systems",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>A</text></svg>",
  },
};

import CustomCursor from "@/components/CustomCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      /* "dark" is the default — ThemeProvider will swap to "light" on mount if user prefers it */
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased cursor-none`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
