import Link from "next/link";

export default function NotFound() {
  return (
    <div className="frame py-24">
      <p className="num text-muted">404</p>
      <h1 className="mt-4 max-w-[12ch] font-serif text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.96] tracking-[-0.035em]">
        This page is not on the site.
      </h1>
      <p className="mt-6 max-w-md text-lg">The address may be mistyped, or the page may have moved.</p>
      <p className="mt-8 flex gap-8">
        <Link className="link-strong" href="/">
          Back to home
        </Link>
        <Link className="link-quiet" href="/contact/">
          Contact
        </Link>
      </p>
    </div>
  );
}
