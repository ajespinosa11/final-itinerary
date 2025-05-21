
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'runningpinoy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pix8.agoda.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.hive.blog',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dgfi96202bcqs.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.bworldonline.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'beholdbataan.ph',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
