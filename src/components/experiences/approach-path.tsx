import { approach } from "@/content/home";

export function ApproachPath() {
  return (
    <section className="frame py-16 lg:py-24" aria-labelledby="approach-title">
      <p className="pill">
        <span className="pill-dot" aria-hidden="true" />
        {approach.label}
      </p>
      <div className="mt-6 grid gap-4 lg:grid-cols-12">
        <h2 id="approach-title" className="max-w-[16ch] text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] lg:col-span-7">
          How an engagement <span className="pop">moves</span>
        </h2>
        <p className="text-muted lg:col-span-4 lg:col-start-9 lg:pt-2">{approach.note}</p>
      </div>
      <ol className="mt-10 grid gap-4 md:grid-cols-4">
        {approach.steps.map((step, index) => (
          <li key={step.title} className="lift overflow-hidden rounded-2xl border border-line">
            <div className="h-1 bg-gradient-to-r from-teal via-blue to-navy" aria-hidden="true" />
            <div className="p-5">
              <p className="text-sm font-semibold text-blue">0{index + 1}</p>
              <h3 className="mt-3 text-xl leading-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
