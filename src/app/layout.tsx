import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


export const manrope = Manrope({
  weight: ['600', '800']
})


export const metadata: Metadata = {
  title: "InvstoTask",
  description: "A simple reusable pricing component",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        {children}
      </body>
    </html>
  );
}
