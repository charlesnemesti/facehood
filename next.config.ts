import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "i.insider.com" },
      { protocol: "https", hostname: "ml.globenewswire.com" },
      { protocol: "https", hostname: "images.financemagnates.com" },
      { protocol: "https", hostname: "cdn.benzinga.com" },
      { protocol: "https", hostname: "image.cnbcfm.com" },
      { protocol: "https", hostname: "assets.robinhood.com" },
    ],
  },
};

export default nextConfig;
