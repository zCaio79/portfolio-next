import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caio Port |",
  description: "My personal Portifolio buil in NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-outfit"
      >
        {children}
      </body>
    </html>
  );
}
