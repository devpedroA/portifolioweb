import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}
