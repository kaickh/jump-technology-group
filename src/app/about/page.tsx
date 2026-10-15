import { PortraitFrame } from "@/components/portrait-frame";
import { about } from "@/content/about";
import { founderIntro } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Why Jump Technology Group exists, and the background of founder Dwalu Khasu, previously of Airbnb and Meta.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <article className="frame pb-8 pt-12 sm:pt-16">
        <p className="text-sm text-muted">About</p>
        <h1 className="mt-6 max-w-[16ch] font-serif text-[clamp(2.8rem,6vw,5rem)] leading-[0.98] tracking-[-0.035em]">
          {about.title}
        </h1>
        <div className="mt-10 max-w-[40rem]">
          <p className="font-serif text-2xl leading-snug tracking-[-0.02em]">{about.lede}</p>
          <p className="mt-6 text-lg leading-relaxed">{about.technology}</p>
        </div>
      </article>

      <section className="mt-16 bg-white">
        <div className="frame grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <PortraitFrame label={founderIntro.portraitLabel} />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-sm text-muted">{about.founderRole}</p>
            <h2 className="mt-3 font-serif text-[clamp(2.4rem,4vw,3.6rem)] leading-none tracking-[-0.03em]">
              {about.founderTitle}
            </h2>
            <p className="mt-6 text-lg leading-relaxed">{about.founderBody}</p>
          </div>
        </div>
      </section>

      <section className="frame py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-3xl tracking-[-0.03em]">{about.principlesTitle}</h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">{about.principlesNote}</p>
          </div>
          <ol className="lg:col-span-7 lg:col-start-6">
            {about.principles.map((principle, index) => (
              <li
                key={principle.number}
                className="border-t border-line py-7"
                style={{ marginLeft: `${index * 0.75}rem` }}
              >
                <p className="num text-muted">{principle.number}</p>
                <h3 className="mt-2 font-serif text-2xl tracking-[-0.03em]">{principle.title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed">{principle.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="frame grid gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 className="font-serif text-3xl tracking-[-0.03em]">{about.relationshipsTitle}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{about.relationships}</p>
          </div>
          <div className="bg-sage p-8 lg:mt-10">
            <h2 className="font-serif text-3xl tracking-[-0.03em]">{about.peopleTitle}</h2>
            <p className="mt-5 leading-relaxed">{about.people}</p>
          </div>
        </div>
      </section>
    </>
  );
}
