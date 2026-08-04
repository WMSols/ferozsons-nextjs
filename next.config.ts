import type { NextConfig } from "next";
const hostname = process.env.NEXT_HOST ?? "localhost"
const port =  process.env.NEXT_HOST_PORT ?? "1337"
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost" ,
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "srv1615764.hstgr.cloud",
        pathname: "/uploads/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",  
      },
    ],
  },
};

export default nextConfig;
