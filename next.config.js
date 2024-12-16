/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "res.cloudinary.com",
      "images.unsplash.com",
      "plus.unsplash.com"
    ]
  },
}

module.exports = nextConfig
