import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental", // Enable Partial Prerendering (optional in Next.js 15 if stable)
  },
};

export default nextConfig;
