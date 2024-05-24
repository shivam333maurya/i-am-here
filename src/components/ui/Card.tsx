import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Card = ({ title, description, imageUrl, link }: any) => {
  return (
    <motion.div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
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
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
      {link && (
        <div className="px-6 py-4">
          <Link
            href={link}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Learn More
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export { Card };
