import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};

// module.exports = {
//   images: {
//     remotePatterns: [new URL('https://cdn.weatherapi.com')],
//   },
// }

export default nextConfig;
