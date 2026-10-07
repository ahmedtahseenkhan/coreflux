/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // One canonical host. Apache should already do this (see DEPLOY.md);
      // this is the fallback if a www request reaches the app.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.corefluxsolutions.com" }],
        destination: "https://corefluxsolutions.com/:path*",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
