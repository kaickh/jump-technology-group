import Link from "next/link";
import { navigation, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="frame flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[-0.03em]">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted">Technology services, managed IT, and business advisory.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="link-quiet">
              {item.label}
            </Link>
          ))}
          <Link href="/privacy/" className="link-quiet">
            Privacy
          </Link>
        </nav>
        <a className="link-strong text-sm" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </div>
    </footer>
  );
}
