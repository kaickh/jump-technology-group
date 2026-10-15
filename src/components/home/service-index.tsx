import Link from "next/link";
import { services } from "@/content/services";

export function ServiceIndex() {
  return (
    <div>
      {services.map((service, index) => {
        const flipped = index % 2 === 1;
        return (
          <article key={service.id} className="index-row border-t border-line py-12 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
              <div className={flipped ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5"}>
                <p className="index-shift num text-lg text-muted">{service.number}</p>
                <h3 className="mt-3 font-serif text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.08] tracking-[-0.03em]">
                  <Link href={`/services/#${service.id}`} className="underline decoration-transparent underline-offset-[0.18em] hover:decoration-ink">
                    {service.title}
                  </Link>
                </h3>
              </div>
              <div className={flipped ? "lg:col-span-6 lg:col-start-1 lg:row-start-1" : "lg:col-span-6 lg:col-start-7"}>
                <dl className="grid gap-5">
                  <div>
                    <dt className="text-sm text-muted">The challenge</dt>
                    <dd className="mt-1">{service.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">How we approach it</dt>
                    <dd className="mt-1">{service.approach}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">What an engagement can look like</dt>
                    <dd className="mt-1">{service.engagement}</dd>
                  </div>
                </dl>
                <p className="mt-6">
                  <Link
                    className="link-strong"
                    href={`/contact/?interest=${service.interest}&topic=${service.topic}`}
                  >
                    {service.inquire}
                  </Link>
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
