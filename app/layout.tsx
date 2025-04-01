import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roland Ibiwoye",
  description: "Roland Ibiwoye's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-950">{children}</body>
    </html>
  );
}
