import MusicPlayer from "./music-player";
import SongCard from "./song-card";

// const songs = [
//   {
//     title: "Song 1",
//     artist: "Artist 1",
//     cover: "https://via.placeholder.com/300x200",
//     audio: "https://example.com/audio1.mp3",
//   },
//   {
//     title: "Song 2",
//     artist: "Artist 2",
//     cover: "https://via.placeholder.com/300x200",
//     audio: "https://example.com/audio2.mp3",
//   },
//   {
//     title: "Song 3",
//     artist: "Artist 3",
//     cover: "https://via.placeholder.com/300x200",
//     audio: "https://example.com/audio3.mp3",
//   },
// ];

// const songs = [
//   {
//     title: "G.O.A.T.",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/goat.jpg",
//     audio: "https://link.to/audio/goat.mp3",
//   },
//   {
//     title: "Do You Know",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/doyouknow.jpg",
//     audio: "https://link.to/audio/doyouknow.mp3",
//   },
//   {
//     title: "5 Taara",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/5taara.jpg",
//     audio: "https://link.to/audio/5taara.mp3",
//   },
//   {
//     title: "Laembadgini",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/laembadgini.jpg",
//     audio: "https://link.to/audio/laembadgini.mp3",
//   },
//   {
//     title: "Patiala Peg",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/patialapeg.jpg",
//     audio: "https://link.to/audio/patialapeg.mp3",
//   },
//   {
//     title: "Raat Di Gedi",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/raatdigedi.jpg",
//     audio: "https://link.to/audio/raatdigedi.mp3",
//   },
//   {
//     title: "El Sueno",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/elsueno.jpg",
//     audio: "https://link.to/audio/elsueno.mp3",
//   },
//   {
//     title: "Jind Mahi",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/jindmahi.jpg",
//     audio: "https://link.to/audio/jindmahi.mp3",
//   },
//   {
//     title: "Ikk Kudi",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/ikkkudi.jpg",
//     audio: "https://link.to/audio/ikkkudi.mp3",
//   },
//   {
//     title: "Sauda Khara Khara",
//     artist: "Diljit Dosanjh",
//     cover: "https://link.to/cover/saudakharakhara.jpg",
//     audio: "https://link.to/audio/saudakharakhara.mp3",
//   },
// ];
const songs = [
  {
    title: "G.O.A.T.",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=G.O.A.T.",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Do You Know",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=Do+You+Know",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    title: "5 Taara",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=5+Taara",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    title: "Laembadgini",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=Laembadgini",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    title: "Patiala Peg",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=Patiala+Peg",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    title: "Raat Di Gedi",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=Raat+Di+Gedi",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    title: "El Sueno",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=El+Sueno",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    title: "Jind Mahi",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=Jind+Mahi",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    title: "Ikk Kudi",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=Ikk+Kudi",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
  },
  {
    title: "Sauda Khara Khara",
    artist: "Diljit Dosanjh",
    cover: "https://via.placeholder.com/300x200?text=Sauda+Khara+Khara",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
  },
];

const Music = () => {
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <MusicPlayer songs={songs} />
      <div className="flex flex-wrap justify-start">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Music;
