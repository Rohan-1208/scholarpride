/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <-- this is the important part
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
