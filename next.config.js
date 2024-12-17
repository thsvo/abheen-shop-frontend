/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.codeopx.com",
      "i.ibb.co",
      "res.cloudinary.com",
      "images.unsplash.com",
      "plus.unsplash.com",
      "codeopx.com"
    ]
  },
}

module.exports = nextConfig
