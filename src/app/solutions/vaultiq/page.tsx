import Link from "next/link";
import { VaultStages } from "@/components/experiences/vault-stages";
import { vaultiq } from "@/content/vaultiq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "VaultIQ",
  description: vaultiq.summary,
  path: "/solutions/vaultiq/",
});

export default function VaultIqPage() {
  return (
    <>
      <header className="frame pb-16 pt-10 sm:pt-14">
        <p className="text-sm text-muted">
          Product · <span className="text-ink">{vaultiq.status}</span>
        </p>
        <h1 className="mt-5 font-serif text-[clamp(4rem,12vw,8rem)] leading-[0.84] tracking-[-0.05em]">{vaultiq.name}</h1>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed">{vaultiq.intro}</p>
      </header>

      <section className="border-t border-line">
        <div className="frame grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <h2 className="font-serif text-3xl tracking-[-0.03em]">{vaultiq.challengeTitle}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{vaultiq.challenge}</p>
          </div>
          <div className="lg:pt-16">
            <h2 className="font-serif text-3xl tracking-[-0.03em]">{vaultiq.mattersTitle}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{vaultiq.matters}</p>
          </div>
        </div>
      </section>

      <section className="bg-sage" aria-labelledby="workflow-title">
        <div className="frame py-16 lg:py-24">
          <h2 id="workflow-title" className="font-serif text-3xl tracking-[-0.03em]">
            A simple workflow
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">{vaultiq.stagesIntro}</p>
          <div className="mt-10">
            <VaultStages />
          </div>
        </div>
      </section>

      <section className="frame grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-4">
          <h2 className="font-serif text-3xl tracking-[-0.03em]">{vaultiq.useCasesTitle}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">{vaultiq.useCasesNote}</p>
        </div>
        <ol className="lg:col-span-7 lg:col-start-6">
          {vaultiq.useCases.map((item, index) => (
            <li key={item} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5">
              <span className="num text-muted">0{index + 1}</span>
              <span className="text-lg leading-relaxed">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white">
        <div className="frame grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <h2 className="font-serif text-3xl tracking-[-0.03em] lg:col-span-4">{vaultiq.statusTitle}</h2>
          <ul className="lg:col-span-7 lg:col-start-6">
            {vaultiq.statusPoints.map((point) => (
              <li key={point} className="border-t border-line py-4 leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="frame py-20 lg:py-28">
        <h2 className="max-w-[14ch] font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1] tracking-[-0.03em]">
          If documents are the problem, start with a conversation.
        </h2>
        <p className="mt-8">
          <Link className="link-strong" href={vaultiq.action.href}>
            {vaultiq.action.label}
          </Link>
        </p>
      </section>
    </>
  );
}
