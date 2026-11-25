import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/ceiling-and-wall-systems",
        destination: "/services/interior-finishing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
