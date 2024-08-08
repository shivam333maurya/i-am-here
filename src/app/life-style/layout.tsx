import { Fragment } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LayoutLifeStyle } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life Style",
  description: "Project Life Style",
};

export default function LifeStyleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <div className="flex items-center flex-col">
        <LayoutLifeStyle />
        <div className="min-h-[calc(100vh-48px)] flex items-center justify-center">
          {children}
        </div>
      </div>
    </Fragment>
  );
}
