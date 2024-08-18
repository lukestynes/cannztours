/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/customer-reviews",
        destination: "/client-reviews",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/homestay-in-christchurch",
        destination: "/homestay",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      // Map old tours to new ones
      {
        source: "/tranzalpine-day-tour",
        destination: "/tours/tranzalpine",
        permanent: true,
      },
      {
        source: "/christchurch-to-mt-cook-tour",
        destination: "/tours/aoraki-mount-cook",
        permanent: true,
      },
      {
        source: "/christchurch-to-akaroa",
        destination: "/tours/akaroa",
        permanent: true,
      },
      {
        source: "/kaikoura-whale-watch",
        destination: "/tours/kaikoura-whale-watch",
        permanent: true,
      },
      {
        source: "/hanmer-springs-day-tour",
        destination: "/tours/hanmer-springs",
        permanent: true,
      },
      {
        source: "/garden-tours-2",
        destination: "/tours/christchurch-garden",
        permanent: true,
      },
    ];
  },
};

export default config;
