import Link from "next/link";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "How Jump Technology Group helps with technology consulting, managed IT, operational advisory, and emerging digital products.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <div className="frame pb-24 pt-10 sm:pt-14">
      <p className="text-sm text-muted">Practice</p>
      <h1 className="mt-4 max-w-[10ch] font-serif text-[clamp(3.2rem,7vw,5.6rem)] leading-[0.92] tracking-[-0.04em]">
        Services
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        Four areas of work, described by the problem they address. They are not fixed packages, and they do not include a promised response time.
      </p>

      <div className="mt-16 grid gap-16 lg:grid-cols-12">
        <nav className="lg:sticky lg:top-8 lg:col-span-3 lg:self-start" aria-label="Services">
          <ol>
            {services.map((service) => (
              <li key={service.id} className="border-t border-line">
                <a className="flex gap-3 py-3 text-sm leading-snug" href={`#${service.id}`}>
                  <span className="num text-muted">{service.number}</span>
                  <span>{service.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="lg:col-span-8 lg:col-start-5">
          {services.map((service) => (
            <article id={service.id} key={service.id} className="scroll-mt-8 border-t border-ink py-14">
              <p className="num text-muted">{service.number}</p>
              <h2 className="mt-3 max-w-[16ch] font-serif text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.03em]">
                {service.title}
              </h2>
              <p className="mt-8 max-w-xl font-serif text-2xl leading-snug tracking-[-0.02em]">{service.challenge}</p>
              <div className="mt-10 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="text-sm text-muted">Who it is for</h3>
                  <p className="mt-2">{service.who}</p>
                </div>
                <div>
                  <h3 className="text-sm text-muted">How we approach it</h3>
                  <p className="mt-2">{service.approach}</p>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-sm text-muted">What the work can include</h3>
                <ul className="mt-4 grid gap-3">
                  {service.work.map((item) => (
                    <li key={item} className="border-t border-line pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted">{service.engagement}</p>
              </div>
              <p className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:gap-8">
                <Link className="link-strong" href={`/contact/?interest=${service.interest}&topic=${service.topic}`}>
                  {service.inquire}
                </Link>
                {service.related ? (
                  <Link className="link-quiet" href={service.related.href}>
                    {service.related.label}
                  </Link>
                ) : null}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
