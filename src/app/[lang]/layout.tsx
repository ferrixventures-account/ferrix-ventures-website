import type { Metadata } from "next";
import "@/index.css";

export const metadata: Metadata = {
  title: "Ferrix Ventures",
  description: "Pioneering the future of deep-tech and hard-tech innovations.",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
