"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface SongCardProps {
  song: {
    title: string;
    artist: string;
    cover: string;
  };
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <motion.div className="flex flex-col p-4 mb-4">
      <Image
        src={song.cover}
        alt={song.title}
        width={200}
        height={200}
        className="w-40 h-40 rounded-sm"
      />
      <h3 className="text-lg font-bold">{song.title}</h3>
      <p className="text-gray-500">{song.artist}</p>
    </motion.div>
  );
};

export default SongCard;
