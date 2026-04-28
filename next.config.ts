import type { NextConfig } from "next";
const hostname = process.env.NEXT_HOST ?? "localhost"
const port =  process.env.NEXT_HOST_PORT ?? "1337"
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: hostname ,
        port: port,
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
