/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // This ensures that the static export works correctly
  trailingSlash: true,
}

module.exports = nextConfig

