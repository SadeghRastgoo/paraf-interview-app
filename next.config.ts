import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.loremfaces.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "wholesaler-core-develop.web.parafacc.ir",
        port: "",
      },
    ],
  },
};

export default nextConfig;
