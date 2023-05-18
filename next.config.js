/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://performance-feedback-server.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
