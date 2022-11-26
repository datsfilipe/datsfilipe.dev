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
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
          {
            key: 'Content-Security-Policy',
            value: 'object-src \'none\'; base-uri \'none\'; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\''
          },
        ]
      }
    ]
  }
}

export default nextConfig
