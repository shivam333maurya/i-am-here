"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const AnimatedLayout: React.FC<LayoutProps> = ({ children }) => {
  //   const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { AnimatedLayout };
