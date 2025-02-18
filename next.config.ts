import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: 'https',
        hostname: 'ozonecoffee.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'shop-phinf.pstatic.net'
      },
      {
        protocol: 'https',
        hostname: 'faabscafe.vercel.app'
      },
      {
        protocol: 'https',
        hostname: 'smartstore.naver.com'
      }
    ],
  },
};

export default nextConfig;
