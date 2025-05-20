const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    unoptimized: true,
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      { protocol: "https", hostname: "source.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com",   pathname: "/**" },
      { protocol: "https", hostname: "ext.same-assets.com",   pathname: "/**" },
      { protocol: "https", hostname: "ugc.same-assets.com",   pathname: "/**" },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');
    return config;
  },
};
