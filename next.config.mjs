/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // static-export mode
  trailingSlash: true,     // generate folder-based pages with index.html
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
