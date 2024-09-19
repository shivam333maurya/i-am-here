import { CONSTANTS } from "@/utils/constant";
import MusicPlayer from "./music-player";
import SongCard from "./song-card";

const Music = () => {
  const { SONGS } = CONSTANTS;

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <MusicPlayer songs={SONGS} />
      <div className="flex flex-wrap justify-start">
        {SONGS.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Music;
