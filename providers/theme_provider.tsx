"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

const ThemeProvider = ({
  children,
  defaultTheme = "system",
  enableSystem = true,
  ...otherProps
}: ThemeProviderProps) => {
  return (
    <NextThemesProvider
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      {...otherProps}
    >
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
