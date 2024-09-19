"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading: React.FC = () => {
  return (
    <div className="absolute bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))] inset-0 flex gap-2 items-center justify-center bg-opacity-75 z-50">
      <motion.div
        className="inline-block w-8 h-8 border-4 rounded-full border-t-blue-500 border-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
