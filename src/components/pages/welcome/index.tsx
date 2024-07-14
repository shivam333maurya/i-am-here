"use client";
import React from "react";
import { motion } from "framer-motion";

function WelcomePage() {
  return (
    <div className={`flex flex-col justify-center items-center px-1`}>
      <motion.h1
        className={` text-center bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text font-bold text-[48px] lg:text-[64px]`}
      >
        Welcome To The Arena
      </motion.h1>
    </div>
  );
}

export { WelcomePage };
