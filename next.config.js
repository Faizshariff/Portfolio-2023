// next.config.js
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

if (isProd) {
  nextConfig.basePath = '/Portfolio-2023';
}

module.exports = nextConfig;