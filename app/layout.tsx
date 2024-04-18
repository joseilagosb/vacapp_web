import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import 'mapbox-gl/dist/mapbox-gl.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VacApp",
  description: "Transita por la ciudad de Osorno de forma segura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
