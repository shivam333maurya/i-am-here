"use client";
import { CONSTANTS } from "@/utils/constant";
import { motion } from "framer-motion";
import { Fragment } from "react";

export default function Activities() {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex min-h-screen flex-col items-center justify-between p-24"
      >
        activites
      </motion.div>
    </Fragment>
  );
}
