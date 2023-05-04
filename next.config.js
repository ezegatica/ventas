/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.ezegatica.com', 'i.ezegatica.com', 'gatica.sirv.com']
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
