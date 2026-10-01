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

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://arpan-portfolio-five.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Arpan Shah | Full Stack Developer",
    template: "%s | Arpan Shah",
  },
  description:
    "Arpan Shah — Full Stack Developer crafting modern web experiences with clean UI and powerful backend systems.",
  keywords: [
    "Arpan Shah",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Arpan Shah", url: BASE_URL }],
  creator: "Arpan Shah",
  verification: {
    google: "google238d1d2572c10429",
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Arpan Shah Portfolio",
    title: "Arpan Shah | Full Stack Developer",
    description:
      "Building modern web experiences with clean UI and powerful backend systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpan Shah | Full Stack Developer",
    description:
      "Building modern web experiences with clean UI and powerful backend systems.",
    creator: "@arpanshah",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
