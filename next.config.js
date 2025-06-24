/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  trailingSlash: true,
  experimental: {
    esmExternals: 'loose'
  },
  transpilePackages: ['lucide-react']
};

module.exports = nextConfig;