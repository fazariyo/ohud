/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in `out/` on `next build` (host anywhere).
  output: 'export',
  // Plain <img> + remote Pexels URLs, so skip the Image Optimization server.
  images: { unoptimized: true },
  // Export nested routes as folders (/treatments/general-dentistry/index.html).
  trailingSlash: true,
  // Don't fail the static build on lint stylistic rules (e.g. unescaped apostrophes).
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
