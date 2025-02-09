import type { Metadata } from "next";
import "../../index.css";
import { Jura } from "next/font/google";

export const metadata: Metadata = {
  title: "Oblivion.co",
  description: "Who Am I",
};

const JuraText = Jura({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={JuraText.className}>{children}</body>
    </html>
  );
}
