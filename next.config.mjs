/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["via.placeholder.com", "link.to"], // Add any other domains you need to allow
    env: {
      CLIENT_ID: "eqQpKZ3wRE2KH2igQC1uyA",
      CLEINT_SECRET_KEY: "VzK4kL1i3uyOPUdgB4MUs7PdAkwZZfpE",
    },
  },
};

export default nextConfig;
