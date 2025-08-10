import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["quiz-b.kegelpower.pro", "localhost:3000"],
    },
  },
};

export default nextConfig;
