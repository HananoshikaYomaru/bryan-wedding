import userConfig from "./i18next.config.js"

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: "/wedding",
  ...userConfig,
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/wedding',
        permanent: true,
        basePath: false
      },
    ]
  },
}

export default nextConfig 
