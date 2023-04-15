/** @type {import('next').NextConfig} */
const nextConfig = {
  // add github domain to images
  images: {
    domains: ['github.com'],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
