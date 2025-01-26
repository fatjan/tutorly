/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa'
import createNextIntl from 'next-intl/plugin'

const withNextIntl = createNextIntl()

const config = withNextIntl(
  withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    experimental: {
      turbo: {
        enabled: true,
        // Add any specific Turbopack options here
      }
    }
  })
)

export default config
