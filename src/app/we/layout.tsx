import { Fragment } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutWe } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Who We are?",
  description: "Project We-X",
};

export default function MusicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <div className="flex items-center flex-col">
        <LayoutWe />
        <div className="min-h-[calc(100vh-48px)] flex items-center justify-center">
          {children}
        </div>
      </div>
    </Fragment>
  );
}
