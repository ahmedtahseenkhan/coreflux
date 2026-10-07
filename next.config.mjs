/** @type {import('next').NextConfig} */

// Content-Security-Policy. 'unsafe-inline' scripts are needed for the inline
// data Next.js streams into each page; Google entries are only used once a
// visitor accepts analytics. Production only: `next dev` needs eval.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://*.google-analytics.com",
  "font-src 'self'",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  // HTTPS only for a year. Add `includeSubDomains` once every subdomain is on HTTPS.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  ...(process.env.NODE_ENV === "production"
    ? [{ key: "Content-Security-Policy", value: csp }]
    : []),
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
