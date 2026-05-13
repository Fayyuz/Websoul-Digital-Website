/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Static export for Firebase Hosting
  // output: 'export',
  
  // Transpile packages that might have ESM/CJS compatibility issues in Next.js 14
  transpilePackages: ['framer-motion', 'lucide-react'],

  // Optional: Optimize images (using unoptimized for static export)
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for Firebase compatibility
  trailingSlash: false,
  
  // React strict mode for development
  reactStrictMode: true,
  
  // SWC minification for faster builds
  swcMinify: true,
  
  // Disable x-powered-by header for security
  poweredByHeader: false,
}

export default nextConfig
