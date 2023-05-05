/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.ezegatica.com', 'i.ezegatica.com', 'gatica.sirv.com', 'tailwindui.com']
  },
  experimental: {
    appDir: true,
    serverActions: true
  },
}

module.exports = nextConfig
