/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
      },
      {
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
