import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_URL = "https://spotify23.p.rapidapi.com/tracks/";
const API_KEY = "da310a6ea2msh905ef0560873e9ep1e9dedjsnb4da7fa7572c";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_URL,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data from Spotify API" });
  }
};

export default handler;
