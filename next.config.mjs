/** @type {import('next').NextConfig} */
import dotenv from "dotenv";
// import i18nConfig from "./next-i18next.config.mjs";
dotenv.config();

const nextConfig = {
  // i18n: i18nConfig.i18n, // Importing i18n settings from next-i18next.config.js
  // reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "link.to",
      },
    ],
  },
};

export default nextConfig;
