import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost", "127.0.0.1"],
  },
  typescript: {
    // !! This allows production builds to successfully complete
    // even if your project has type errors.
    ignoreBuildErrors: true,
  },
  eslint: {
    // !! This allows production builds to complete even with ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
