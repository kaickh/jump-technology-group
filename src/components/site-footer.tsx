import Link from "next/link";
import { navigation, site } from "@/content/site";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-mist">
      <div className="frame flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link href="/" aria-label="Jump Technology Group, home">
            <Wordmark />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">Technology services, managed IT, and business advisory.</p>
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
