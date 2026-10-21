import type { NextConfig } from 'next';

const longCache = [{ key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' }];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return ['img', 'frames', 'abframes', 'csframes', 'hrframes', 'ppframes', 'wkframes'].map((dir) => ({
      source: `/${dir}/:path*`,
      headers: longCache,
    }));
  },
};

export default nextConfig;
