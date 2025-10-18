import type { Metadata } from "next";
import "./globals.css";
import { jetbrainsMono, nunito } from "@/config/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Car Designs",
  description: "Designs are from twitter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body
        className={clsx('', nunito.className)}
      >
        {children}
      </body>
    </html>
  );
}
