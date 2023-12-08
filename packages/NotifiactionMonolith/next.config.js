/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => ([
    {
      source: "/",
      destination: "/home",
      permanent: true
    }
  ]),
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      os: false,
      tls: false,
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
