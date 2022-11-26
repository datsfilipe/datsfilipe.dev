/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['avatars.githubusercontent.com']
  },
  swcMinify: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Encoding',
            value: 'brotli'
          },
        ]
      }
    ]
  }
}

export default nextConfig
