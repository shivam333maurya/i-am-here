"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading: React.FC = () => {
  return (
    <div className="fixed app-loader inset-0 flex gap-2 items-center justify-center bg-white bg-opacity-75 z-50">
      <motion.div
        className="spinner-border inline-block w-8 h-8 border-4 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;
