import type { Metadata } from "next";
import {
  DM_Serif_Display,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const displayFont = DM_Serif_Display({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adithyan Valloor | Backend-focused Full-Stack Engineer",
  description:
    "Portfolio of Adithyan Valloor — a backend-focused full-stack engineer interested in infrastructure, system design, and distributed systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${displayFont.variable}
          ${inter.variable}
          ${monoFont.variable}
          font-sans
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}