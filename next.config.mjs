/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize image configuration for Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Enable strict mode for better error checking
  reactStrictMode: true,
  // Optimize production build
  swcMinify: true,
  // Ensure proper output for Vercel
  output: 'standalone',
}

export default nextConfig
