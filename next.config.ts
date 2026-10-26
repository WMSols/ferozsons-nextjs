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
        hostname: "admin.ferozsons-labs.com",
        pathname: "/uploads/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",  
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/product-concern",
        destination: "/safety-reporting-form",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
