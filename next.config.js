/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,

  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,

    legacyBrowsers: false,
    browsersListForSwc: true,

    images: { allowFutureImage: true },
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  poweredByHeader: false,

  images: {
    domains: ['raw.githubusercontent.com'],
    minimumCacheTTL: 84600 * 90, // 90days
  },
}

module.exports = nextConfig
