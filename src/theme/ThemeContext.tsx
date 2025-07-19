"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

// Re-export the provider
export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

// Re-export the hook
export { useTheme };

// Re-export the type for compatibility
export type Theme = 'light' | 'dark' | 'system';
