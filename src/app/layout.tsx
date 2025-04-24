import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

export const metadata: Metadata = {
  title: "Portifolio Web - Desenvolvedor Pedro A.",
  description: "Portifolio Web - Desenvolvedor Pedro A.",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Next.js, React, TypeScript, Tailwind CSS, Vercel, Pedro A., Portifolio, Ph.Tech",
  icons: "/img-redonda.png",
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

