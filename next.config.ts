import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repoName.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  basePath: isGithubActions && !isUserOrOrgSite ? `/${repoName}` : "",
  assetPrefix: isGithubActions && !isUserOrOrgSite ? `/${repoName}/` : undefined
};

export default nextConfig;
