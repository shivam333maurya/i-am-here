"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui";
import { CONSTANTS } from "@/utils/constant";

const HomeNavigation = () => {
  const router = useRouter();
  console.log({ router }, usePathname());
  return (
    <motion.div className="flex gap-4 flex-wrap justify-center space-x-4 space-y-4 p-4 cursor-default">
      {CONSTANTS.APP_NAV_DATA.map((card, index) => (
        <Card key={index} link={card.path}>
          <Link href={card.path}>
            <div
              className={`w-[180px] h-[200px] flex items-center justify-center bg-gradient-to-br from-blue-400 to-red-400 rounded opacity-70`}
            >
              <h3 className="px-6 py-4 font-bold text-[20px] text-gray-100 shadow-sm">
                {card?.title}
              </h3>
            </div>
          </Link>
        </Card>
      ))}
    </motion.div>
  );
};

export { HomeNavigation };
