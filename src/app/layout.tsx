import type { Metadata } from "next";
import { Inter, Roboto_Mono } from 'next/font/google';
import { ThemeProvider } from "@/theme/ThemeContext";
import "@/index.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ferrix Ventures',
    default: 'Ferrix Ventures - Venture Acceleration Studio',
  },
  description: 'Pioneering the future of deep-tech and hard-tech innovations through AI-powered venture acceleration.',
  metadataBase: new URL('https://ferrixventures.com'),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const lang = params?.lang || 'en';
  
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
      </head>
      <body className={`${inter.variable} ${roboto_mono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
