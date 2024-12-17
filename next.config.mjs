/** @type {import('next').NextConfig} */
import path from "path";

const nextConfig = {
  experimental: {
    turbo: {
      enabled: true, // Proper way to disable Turbopack
    },
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, "src");
    return config;
  },
};

export default nextConfig;
