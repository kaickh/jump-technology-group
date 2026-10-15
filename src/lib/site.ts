export function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

export function getContactEndpoint() {
  const raw = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "local";
  return raw.trim() || "local";
}
