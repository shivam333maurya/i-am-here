import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xaar",
  description: "Project Xaar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900`}>
        <div
          //  className="min-h-[calc(100vh-48px)] "
          className="min-h-screen flex items-center justify-center"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
