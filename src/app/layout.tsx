import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caio Mendes",
  description: "My personal Portfólio builded on NextJS",
  icons: {
    icon: '/icon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-outfit bg-zinc-900"
      >
        {children}
      </body>
    </html>
  );
}
