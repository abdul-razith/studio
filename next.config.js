
const nextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ["6000-firebase-studio-1749116645742.cluster-ikxjzjhlifcwuroomfkjrx437g.cloudworkstations.dev"],
  },

  output: "export",
};

module.exports = nextConfig;
