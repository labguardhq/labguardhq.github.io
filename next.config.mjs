/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig; 