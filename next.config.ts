import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "**.wp.com",
      },
      {
        protocol: "https",
        hostname: "www.wonderworldtravels.com",
      },
    ],
    qualities: [75, 90],
  },
};

export default nextConfig;