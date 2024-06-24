"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlay } from "react-icons/fa";

interface MusicPlayerProps {
  songs: {
    title: string;
    artist: string;
    cover: string;
    audio: string;
  }[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const audio = document.getElementById("audio") as HTMLAudioElement;

    if (isPlaying) {
      audio.pause();
    } else {
      audio
        .play()
        .catch((error) => console.error("Audio playback error:", error));
    }

    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    const currentIndex = songs.indexOf(currentSong);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
  };

  const handlePreviousSong = () => {
    const currentIndex = songs.indexOf(currentSong);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    setCurrentSong(songs[previousIndex]);
  };

  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-center mb-4">
        <Image
          src={currentSong.cover}
          alt={currentSong.title}
          width={200}
          height={200}
          className="w-40 h-40 rounded-sm"
        />
      </div>
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl font-bold">{currentSong.title}</h2>
        <p className="text-gray-500">{currentSong.artist}</p>
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={handlePreviousSong}
        >
          <FaBackward />
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-2"
          onClick={handlePlayPause}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleNextSong}
        >
          <FaForward />
        </button>
      </div>
      <motion.audio
        id="audio"
        src={currentSong.audio}
        autoPlay={isPlaying}
        loop={false}
        onEnded={handleNextSong}
      />
    </div>
  );
};

export default MusicPlayer;
