import Link from "next/link";
import { fieldNotes, insightCategories, publishedArticles } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Field Notes",
  description: fieldNotes.description,
  path: "/insights/",
});

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(iso));
}

export default function InsightsPage() {
  const notes = publishedArticles();
  const [feature, ...rest] = notes;

  return (
    <div className="frame pb-24 pt-12 sm:pt-16">
      <p className="text-sm text-muted">Journal</p>
      <h1 className="mt-4 max-w-[8ch] font-serif text-[clamp(3.8rem,10vw,7.5rem)] leading-[0.86] tracking-[-0.05em]">
        {fieldNotes.title}
      </h1>
      <p className="mt-8 max-w-2xl text-xl leading-relaxed">{fieldNotes.lede}</p>

      {feature ? (
        <div className="mt-16 border-t border-ink pt-8">
          <article className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-sm text-muted">
                {feature.category} · {formatDate(feature.publishedAt)} · {feature.readingMinutes} min
              </p>
              <h2 className="mt-4 font-serif text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.05] tracking-[-0.03em]">
                <Link href={`/insights/${feature.slug}/`} className="link-quiet">
                  {feature.title}
                </Link>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed">{feature.description}</p>
            </div>
            {rest.length > 0 ? (
              <ol className="lg:col-span-4 lg:col-start-9">
                {rest.map((article) => (
                  <li key={article.slug} className="border-t border-line py-4">
                    <p className="text-sm text-muted">
                      {article.category} · {article.readingMinutes} min
                    </p>
                    <Link href={`/insights/${article.slug}/`} className="mt-1 inline-block font-serif text-2xl tracking-[-0.03em]">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ol>
            ) : null}
          </article>
        </div>
      ) : (
        <p className="mt-12 max-w-xl border-t border-ink pt-6 text-lg">{fieldNotes.empty}</p>
      )}

      <section className="mt-20" aria-labelledby="categories-title">
        <h2 id="categories-title" className="font-serif text-2xl tracking-[-0.03em]">
          What the journal will hold
        </h2>
        <ul className="mt-6 grid gap-0 sm:grid-cols-2">
          {insightCategories.map((category, index) => (
            <li key={category} className="flex gap-4 border-t border-line py-4">
              <span className="num text-muted">0{index + 1}</span>
              <span>{category}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
