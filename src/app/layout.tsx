import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  themeColor: "#07080c",
  width: "device-width" as const,
  initialScale: 1,
};

const defaultUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://tu-dominio.com";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: `${site.name} | Gimnasio y entrenamiento en ${site.address.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "gimnasio",
    "fitness",
    "entrenamiento",
    "HIIT",
    "fuerza",
    "Madrid",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
