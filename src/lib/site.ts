export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

export function getContactEndpoint() {
  const raw = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "local";
  return raw.trim() || "local";
}

/** Prefix a public file for GitHub Pages. next/image skips basePath when unoptimized. */
export function publicPath(path: string) {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
