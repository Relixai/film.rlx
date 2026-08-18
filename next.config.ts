import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/studio", permanent: true },
      { source: "/chatgpt", destination: "/services", permanent: true },
      { source: "/terms", destination: "https://relix.ai/terms-of-service", permanent: true },
      { source: "/terms-of-service", destination: "https://relix.ai/terms-of-service", permanent: false },
      { source: "/privacy-policy", destination: "https://relix.ai/privacy-policy", permanent: false },
    ];
  },
};

export default nextConfig;
