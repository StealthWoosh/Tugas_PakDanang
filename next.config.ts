/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3.eu-west-1.amazonaws.com', 'cdn.growtopiagame.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.eu-west-1.amazonaws.com',
        pathname: '/cdn.growtopiagame.com/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/Growtopia-Installer.exe',
        destination: 'https://growtopiagame.com/Growtopia-Installer.exe',
      },
      {
        source: '/Growtopia-mac.dmg',
        destination: 'https://growtopiagame.com/Growtopia-mac.dmg',
      },
    ];
  },
}

module.exports = nextConfig