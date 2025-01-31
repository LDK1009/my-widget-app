import type { NextConfig } from "next";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  sw: "service-worker.js",
});

module.exports = withPWA({
  reactStrictMode: true,
});


const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = withPWA({
  reactStrictMode: true,
});

export default nextConfig;

