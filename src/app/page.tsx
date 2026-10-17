import Link from "next/link";
import { ApproachPath } from "@/components/experiences/approach-path";
import { VaultStages } from "@/components/experiences/vault-stages";
import { PracticeSwitch } from "@/components/home/practice-switch";
import { PortraitFrame } from "@/components/portrait-frame";
import { closing, fieldNotesPreview, flagship, founderIntro, hero, practice } from "@/content/home";
import { site } from "@/content/site";
import { vaultiq } from "@/content/vaultiq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: site.name,
  description: site.description,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <section className="frame pb-8 pt-8 sm:pb-12 sm:pt-12 lg:pt-16">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="pill">
              <span className="pill-dot" aria-hidden="true" />
              Technology services, managed IT, and advisory
            </p>
            <h1 className="mt-6 max-w-[12ch] text-[clamp(2.7rem,5.5vw,4.7rem)] leading-[1.05]">
              {hero.headlineLead} {hero.headlineTail}
              <span className="pop">{hero.headlineEm}</span>
              {hero.headlineEnd}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{hero.support}</p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link className="btn btn-primary" href={hero.primary.href}>
                {hero.primary.label} <span aria-hidden="true">→</span>
              </Link>
              <Link className="btn btn-ghost" href={hero.secondary.href}>
                {hero.secondary.label}
              </Link>
            </div>
          </div>
          <ul className="grid gap-3 lg:col-span-5">
            {hero.offers.map((offer) => (
              <li key={offer.href}>
                <Link href={offer.href} className="lift block rounded-2xl border border-line p-5">
                  <p className="text-xs font-semibold tracking-[0.14em] text-blue uppercase">{offer.kicker}</p>
                  <p className="mt-1 font-serif text-lg font-semibold tracking-[-0.02em]">{offer.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{offer.body}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist" aria-labelledby="vault-title">
        <div className="frame py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="pill">
                <span className="pill-dot" aria-hidden="true" />
                {flagship.kicker} · {vaultiq.status}
              </p>
              <h2 id="vault-title" className="mt-5 max-w-[14ch] text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.08]">
                {flagship.titleLead}
                <span className="pop">{flagship.titlePop}</span>
                {flagship.titleEnd}
              </h2>
            </div>
            <p className="text-lg leading-relaxed lg:col-span-4 lg:col-start-9">{vaultiq.summary}</p>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">{vaultiq.stagesIntro}</p>
          <div className="mt-8">
            <VaultStages />
          </div>
          <p className="mt-6">
            <Link className="btn btn-primary" href="/solutions/vaultiq/">
              Read the VaultIQ page <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      <section className="frame py-16 lg:py-24" aria-labelledby="practice-title">
        <h2 id="practice-title" className="max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)] leading-[1.08]">
          {practice.titleLead}
          <span className="pop">{practice.titlePop}</span>
          {practice.titleEnd}
        </h2>
        <p className="mt-4 max-w-xl text-muted">{practice.note}</p>
        <div className="mt-8">
          <PracticeSwitch />
        </div>
      </section>

      <ApproachPath />

      <section className="bg-mist">
        <div className="frame grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-6">
            <p className="pill">
              <span className="pill-dot" aria-hidden="true" />
              {founderIntro.label}
            </p>
            <h2 className="mt-5 text-[clamp(2.2rem,4vw,3.4rem)] leading-[1.05]">{founderIntro.name}</h2>
            <p className="mt-2 text-muted">{founderIntro.role}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{founderIntro.body}</p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{founderIntro.note}</p>
            <p className="mt-6">
              <Link className="btn btn-ghost bg-white" href={founderIntro.action.href}>
                {founderIntro.action.label}
              </Link>
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <PortraitFrame label={founderIntro.portraitLabel} />
          </div>
        </div>
      </section>

      <section className="frame py-16 lg:py-20" aria-labelledby="notes-title">
        <p className="text-sm font-semibold tracking-[0.08em] text-blue uppercase">{fieldNotesPreview.kicker}</p>
        <h2 id="notes-title" className="mt-3 text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05]">
          Field <span className="pop">Notes</span>
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed">{fieldNotesPreview.body}</p>
        <p className="mt-3 max-w-xl text-muted">{fieldNotesPreview.empty}</p>
        <p className="mt-6">
          <Link className="btn btn-ghost" href={fieldNotesPreview.action.href}>
            {fieldNotesPreview.action.label}
          </Link>
        </p>
      </section>

      <section className="bg-navy text-white" aria-labelledby="close-title">
        <div className="frame py-16 lg:py-24">
          <h2 id="close-title" className="max-w-[14ch] text-[clamp(2.3rem,5vw,3.8rem)] leading-[1.08]">
            Tell us what you&apos;re <span className="pop-light">working on</span>.
          </h2>
          <p className="mt-5 max-w-xl text-white/80">{closing.body}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link className="btn btn-teal" href={closing.action.href}>
              {closing.action.label} <span aria-hidden="true">→</span>
            </Link>
            <a className="font-semibold text-white underline decoration-white/40 underline-offset-4" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
