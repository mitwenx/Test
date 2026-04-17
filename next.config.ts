import type { NextConfig } from "next";

codex/build-production-quality-frontend-for-cycleindia-sevxic
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repoName.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
=======
const nextConfig: NextConfig = {
  images: {
 main
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
 codex/build-production-quality-frontend-for-cycleindia-sevxic
  },
  basePath: isGithubActions && !isUserOrOrgSite ? `/${repoName}` : "",
  assetPrefix: isGithubActions && !isUserOrOrgSite ? `/${repoName}/` : undefined
=======
  }
main
};

export default nextConfig;
