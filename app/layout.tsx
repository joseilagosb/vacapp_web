import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "mapbox-gl/dist/mapbox-gl.css";

import Navbar from "@/components/layout/navbar";
import Providers from "./providers";
import ProgressBar from "@/components/progress_bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VacApp",
  description: "Transita por la ciudad de Osorno de forma segura",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ProgressBar />
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
