import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  async rewrites() {
    return [
      // AI Gamejam Sapporo の告知LP(public/aigamejam/index.html)
      { source: "/aigamejam", destination: "/aigamejam/index.html" },
    ];
  },
};

export default nextConfig;
