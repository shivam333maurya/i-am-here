"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Card = ({
  title,
  description,
  imageUrl,
  link,
  children,
  onClick = () => {},
}: any) => {
  return (
    <motion.div
      className="rounded shadow-lg bg-gray-800 !m-0"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(link)}
    >
      {imageUrl && (
        <div className="w-full relative" style={{ height: "200px" }}>
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t"
          />
        </div>
      )}
      {(title || description) && (
        <div className="px-6 py-4">
          {title && <div className="font-bold text-white">{title}</div>}
          {description && (
            <p className="text-gray-300 mt-2 text-base">{description}</p>
          )}
        </div>
      )}
      {link && description && (
        <div className="px-6 py-4">
          <Link
            href={"#"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Learn More
          </Link>
        </div>
      )}
      {children}
    </motion.div>
  );
};

export { Card };
