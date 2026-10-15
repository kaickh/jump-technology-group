import Link from "next/link";
import { ApproachPath } from "@/components/experiences/approach-path";
import { Discovery } from "@/components/experiences/discovery";
import { VaultStages } from "@/components/experiences/vault-stages";
import { ServiceIndex } from "@/components/home/service-index";
import { PortraitFrame } from "@/components/portrait-frame";
import { SectionLabel } from "@/components/section-label";
import { closing, fieldNotesPreview, founderIntro, hero } from "@/content/home";
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
      <section className="frame pb-16 pt-8 sm:pb-24 sm:pt-14 lg:pt-16">
        <SectionLabel number={hero.number} label={hero.label} />
        <h1 className="mt-8 max-w-[14ch] font-serif text-[clamp(3.15rem,7.6vw,6.35rem)] leading-[0.92] font-normal tracking-[-0.04em]">
          {hero.headlineLead} {hero.headlineTail}
          <em className="italic">{hero.headlineEm}</em>
          {hero.headlineEnd}
        </h1>
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <p className="max-w-xl text-lg leading-relaxed lg:col-span-6">{hero.support}</p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-10 lg:col-span-4 lg:col-start-8 lg:pt-1">
            <Link className="link-strong" href={hero.primary.href}>
              {hero.primary.label}
            </Link>
            <Link className="link-quiet" href={hero.secondary.href}>
              {hero.secondary.label}
            </Link>
          </div>
        </div>
      </section>

      <Discovery />

      <section className="frame py-20 lg:py-28" aria-labelledby="practice-title">
        <SectionLabel number="02" label="The practice" />
        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <h2
            id="practice-title"
            className="max-w-[16ch] font-serif text-[clamp(2.4rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] lg:col-span-7"
          >
            Help, named by the problem.
          </h2>
          <p className="text-muted lg:col-span-4 lg:col-start-9">
            Four areas of work. Each one is a way to start a conversation, not a package with a fixed promise.
          </p>
        </div>
        <div className="mt-12">
          <ServiceIndex />
        </div>
      </section>

      <section className="bg-sage" aria-labelledby="vault-title">
        <div className="frame py-20 lg:py-28">
          <SectionLabel number="03" label="VaultIQ" />
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <h2
              id="vault-title"
              className="max-w-[12ch] font-serif text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.96] tracking-[-0.03em] lg:col-span-7"
            >
              Documents, held as records.
            </h2>
            <p className="text-lg leading-relaxed lg:col-span-4 lg:col-start-9">{vaultiq.summary}</p>
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">{vaultiq.stagesIntro}</p>
          <div className="mt-10">
            <VaultStages />
          </div>
          <p className="mt-8">
            <Link className="link-strong" href="/solutions/vaultiq/">
              Read the VaultIQ page
            </Link>
          </p>
        </div>
      </section>

      <ApproachPath />

      <section className="bg-white">
        <div className="frame grid gap-12 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
          <div className="lg:col-span-6">
            <SectionLabel number={founderIntro.number} label={founderIntro.label} />
            <h2 className="mt-6 font-serif text-[clamp(2.6rem,4vw,4rem)] leading-[1] tracking-[-0.03em]">
              {founderIntro.name}
            </h2>
            <p className="mt-3 text-muted">{founderIntro.role}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{founderIntro.body}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{founderIntro.note}</p>
            <p className="mt-8">
              <Link className="link-strong" href={founderIntro.action.href}>
                {founderIntro.action.label}
              </Link>
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <PortraitFrame label={founderIntro.portraitLabel} />
          </div>
        </div>
      </section>

      <section className="frame py-20 lg:py-28" aria-labelledby="notes-title">
        <p className="text-sm text-muted">{fieldNotesPreview.kicker}</p>
        <h2
          id="notes-title"
          className="mt-4 font-serif text-[clamp(3.4rem,8vw,6.5rem)] leading-[0.88] tracking-[-0.045em]"
        >
          {fieldNotesPreview.title}
        </h2>
        <div className="mt-10 grid gap-8 border-t border-line pt-8 lg:grid-cols-12">
          <p className="max-w-xl text-lg leading-relaxed lg:col-span-6">{fieldNotesPreview.body}</p>
          <div className="lg:col-span-4 lg:col-start-8">
            <p className="text-muted">{fieldNotesPreview.empty}</p>
            <p className="mt-6">
              <Link className="link-strong" href={fieldNotesPreview.action.href}>
                {fieldNotesPreview.action.label}
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="frame border-t border-line py-20 lg:py-32" aria-labelledby="close-title">
        <h2
          id="close-title"
          className="max-w-[12ch] font-serif text-[clamp(2.7rem,6vw,4.8rem)] leading-[0.96] tracking-[-0.03em]"
        >
          {closing.title}
        </h2>
        <p className="mt-6 max-w-xl text-muted">{closing.body}</p>
        <p className="mt-10 text-2xl tracking-[-0.03em] sm:text-3xl">
          <a className="link-quiet font-serif" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <p className="mt-6">
          <Link className="link-strong" href={closing.action.href}>
            {closing.action.label}
          </Link>
        </p>
      </section>
    </>
  );
}
