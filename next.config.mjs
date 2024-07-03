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
      {
        hostname: "media.themoviedb.org",
      },
    ],
  },
};

export default nextConfig;
