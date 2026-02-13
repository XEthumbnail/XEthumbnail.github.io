/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  // If deploying to https://username.github.io/repo-name
  // Uncomment the line below and replace 'repo-name' with your repository name
    basePath: '/Freelancing-', 
};

export default nextConfig;
