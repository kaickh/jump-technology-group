import { approach } from "@/content/home";
import { SectionLabel } from "@/components/section-label";

const lifts = ["md:mt-24", "md:mt-16", "md:mt-8", "md:mt-0"];
const indents = ["ml-0", "ml-3", "ml-6", "ml-9"];

export function ApproachPath() {
  return (
    <section className="frame py-20 lg:py-28" aria-labelledby="approach-title">
      <SectionLabel number={approach.number} label={approach.label} />
      <div className="mt-8 grid gap-6 lg:grid-cols-12">
        <h2
          id="approach-title"
          className="max-w-[14ch] font-serif text-[clamp(2.4rem,4vw,3.6rem)] leading-[1.02] tracking-[-0.03em] lg:col-span-7"
        >
          {approach.title}
        </h2>
        <p className="text-muted lg:col-span-4 lg:col-start-9 lg:pt-4">{approach.note}</p>
      </div>
      <ol className="mt-14 grid gap-8 md:mt-16 md:grid-cols-4 md:items-start md:gap-6">
        {approach.steps.map((step, index) => (
          <li key={step.title} className={`${indents[index]} border-t border-ink pt-4 md:ml-0 ${lifts[index]}`}>
            <p className="num text-muted">0{index + 1}</p>
            <h3 className="mt-3 font-serif text-2xl leading-tight tracking-[-0.03em]">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
