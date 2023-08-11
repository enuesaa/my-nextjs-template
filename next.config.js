/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
}

module.exports = nextConfig
