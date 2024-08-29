/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Ensure correct formats are supported
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    serverActions: {
      // Update to new key for allowed origins
      allowedOrigins: ['localhost:3000', 'get-zen.vercel.app'],
    },
  },
};

export default nextConfig;
