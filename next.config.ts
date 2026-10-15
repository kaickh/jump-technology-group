import type { NextConfig } from "next";

const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "local";

if (process.env.NODE_ENV === "production" && contactEndpoint === "local") {
  console.warn(
    "\n[jump] NEXT_PUBLIC_CONTACT_ENDPOINT is local. This build will not send email.\n",
  );
}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
};

export default nextConfig;
