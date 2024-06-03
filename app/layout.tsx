import type { Metadata } from "next";
import Script from "next/script";
import { registerUrql } from "@urql/next/rsc";
import { Inter } from "next/font/google";
import "./globals.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "mapbox-gl/dist/mapbox-gl.css";

import Navbar from "@/components/layout/navbar";
import Providers from "./providers";

import { getUrqlClient } from "@/services/urql";
import { mapViewDataQuery } from "@/graphql/map_view_data/map_view_data";

const inter = Inter({ subsets: ["latin"] });

const { getClient } = registerUrql(getUrqlClient);

export const metadata: Metadata = {
  title: "VacApp",
  description: "Transita por la ciudad de Osorno de forma segura",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: mapViewData, error } = await mapViewDataQuery(getClient);

  if (error) {
    throw new Error(error.message);
  }

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
      <Script>{`window.__URQL_DATA__ = ${JSON.stringify(mapViewData)}`}</Script>
    </html>
  );
}
