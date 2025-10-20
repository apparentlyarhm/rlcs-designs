import type { Metadata } from "next";
import "./globals.css";
import { nunito } from "@/config/fonts";
import clsx from "clsx";
import { Providers } from './providers';

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
    <html lang="en" data-theme="silk" className="">
      <Providers>

        <body
          className={clsx('', nunito.className)}
        >
          {children}
        </body>
      </Providers>
    </html>
  );
}
