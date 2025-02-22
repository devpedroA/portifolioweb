import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Portifolio Web",
  description: "Portifolio Web",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Next.js, React, TypeScript, Tailwind CSS, Vercel",
  icons: "/Profile.png", // Caminho correto
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}
