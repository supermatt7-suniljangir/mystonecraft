import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("./src"), // Absolute path for "@" alias
    };
    return config;
  },
};

export default nextConfig;
