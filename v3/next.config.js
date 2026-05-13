/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/v3',
  assetPrefix: '/v3',
  images: { unoptimized: true },
}
module.exports = nextConfig
