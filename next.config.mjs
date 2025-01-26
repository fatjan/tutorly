/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'

const nextConfig = {
  // Your other Next.js config options here
}

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})(nextConfig)

export default withPWAConfig
