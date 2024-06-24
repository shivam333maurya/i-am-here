import { Fragment } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutMusic } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Support",
  description: "Project Support",
};

export default function MusicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <div className="flex items-center flex-col">
        <LayoutMusic />
        <div className="min-h-[calc(100vh-48px)] flex items-center justify-center">
          {children}
        </div>
      </div>
    </Fragment>
  );
}
