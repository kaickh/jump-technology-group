import type { NextConfig } from "next";

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "local";

if (process.env.NODE_ENV === "production" && contactEndpoint === "local") {
  console.warn(
    "\n[jump] NEXT_PUBLIC_CONTACT_ENDPOINT is local. This build will not send email.\n",
  );
}

/** Project Pages sites are served from /<repo>. Leave unset for local dev and a future apex domain. */
function pagesBasePath() {
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  if (!raw || raw === "/") return "";
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.endsWith("/") ? withSlash.slice(0, -1) : withSlash;
}

const basePath = pagesBasePath();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
