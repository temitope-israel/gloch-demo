import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    // Strips console.* calls from production builds automatically,
    // as a safety net in case any debug logs slip through review.
    removeConsole: process.env.NODE_ENV === 'production',
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
