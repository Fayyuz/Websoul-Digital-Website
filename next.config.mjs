/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRITICAL: Static export for Cloudflare Pages
  output: 'export',
  
  // Transpile packages that might have ESM/CJS compatibility issues
  transpilePackages: ['framer-motion', 'lucide-react'],

  // Optional: Optimize images (using unoptimized for static export)
  images: {
    unoptimized: true,
  },
  
  // Trailing slashes for compatibility
  trailingSlash: false,
  
  // React strict mode for development
  reactStrictMode: true,

  // SWC minification for faster builds
  swcMinify: true,
  
  // Disable x-powered-by header for security
  poweredByHeader: false,
}

export default nextConfig
