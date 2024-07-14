"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const SpotifyTracks: React.FC = () => {
  const [tracks, setTracks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const API_URL = "https://spotify23.p.rapidapi.com/tracks/";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(API_URL);
  //       setTracks(data.tracks);
  //     } catch (err) {
  //       setError("Failed to fetch data from Spotify.");
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "da310a6ea2msh905ef0560873e9ep1e9dedjsnb4da7fa7572c",
              "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from Spotify");
        }

        const data = await response.json();
        setTracks(data.tracks);
      } catch (err) {
        setError("Failed to fetch data from Spotify.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <div>
        {tracks.map((track) => (
          <div key={track.id}>
            <img
              src={track.album.images[0]?.url}
              alt={track.name}
              width="150"
            />
            <p>{track.name}</p>
            <p>{track.artists.map((artist: any) => artist.name).join(", ")}</p>
            <motion.audio
              id="audio"
              src={track.external_urls.spotify}
              autoPlay={true}
              loop={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyTracks;
