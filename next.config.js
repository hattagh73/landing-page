/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com', 
      'images8.alphacoders.com',
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig
