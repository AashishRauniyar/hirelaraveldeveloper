/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'www.hirelaraveldeveloper.dev',
      'hirelaraveldeveloper.dev',
      'fishtailinfosolutions.com',
      'www.fishtailinfosolutions.com'
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

export default nextConfig
