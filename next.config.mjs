/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/twiting-camel-app',
  assetPrefix: '/twiting-camel-app/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig; 