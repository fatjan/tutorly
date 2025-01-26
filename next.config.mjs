import withPWA from 'next-pwa'

const config = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  experimental: {
    turboMode: true,  // Turbo mode should be enabled here as a boolean flag
  },
  turbo: {
    enabled: true,  // Turbopack-specific options
    // Additional Turbopack config options can be added here
  },
})

export default config;
