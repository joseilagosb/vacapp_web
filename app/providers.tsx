"use client";

import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";

// ThemeProvider solo se puede renderizar por el lado del cliente, por lo que lo importamos con la función dynamic().
const ThemeProvider = dynamic(() => import("@/providers/theme_provider"), { ssr: false });

const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
