"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Link from "next/link";

function WelcomePage() {
  return (
    <div className={`${styles.container} h-full`}>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.title}
      >
        Welcome to My Landing Page
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={styles.description}
      >
        This is a simple landing page with some animated content.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className={styles.cta}
      >
        <a href="#start" className={styles.ctaButton}>
          Get Started
        </a>
      </motion.div>
    </div>
  );
}

export { WelcomePage };
