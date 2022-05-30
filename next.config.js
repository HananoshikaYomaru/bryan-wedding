import userConfig from "./i18next.config.js"

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  basePath: "/wedding",
  ...userConfig,
  images: {
    domains: ["res.cloudinary.com"],
  }
}

export default nextConfig 
