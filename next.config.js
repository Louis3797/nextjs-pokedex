/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,

  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  poweredByHeader: false,

  images: {
    domains: ['raw.githubusercontent.com'],
    minimumCacheTTL: 84600 * 30, // 30days
  },
}

module.exports = nextConfig
