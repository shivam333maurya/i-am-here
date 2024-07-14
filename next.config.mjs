/** @type {import('next').NextConfig} */
import dotenv from "dotenv";

dotenv.config();

const nextConfig = {
  images: {
    domains: ["via.placeholder.com", "link.to"], // Add any other domains you need to allow
  },
};

export default nextConfig;
