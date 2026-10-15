import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedArticle, publishedArticles, relatedArticles } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

type ArticleParams = { slug: string };

export function generateStaticParams() {
  const notes = publishedArticles();
  // Static export requires at least one param. This slug is not an article.
  if (notes.length === 0) return [{ slug: "_placeholder" }];
  return notes.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<ArticleParams> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) {
    return {
      title: "Page not found",
      robots: { index: false, follow: false },
    };
  }
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}/`,
  });
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(iso));
}

export default async function ArticlePage({ params }: { params: Promise<ArticleParams> }) {
  const { slug } = await params;
  const article = getPublishedArticle(slug);
  if (!article) {
    return (
      <div className="frame py-24">
        <p className="num text-muted">404</p>
        <h1 className="mt-4 max-w-[12ch] font-serif text-[clamp(2.8rem,6vw,4.6rem)] leading-[0.96] tracking-[-0.035em]">
          This page is not on the site.
        </h1>
        <p className="mt-6 max-w-md text-lg">There is no published note at this address.</p>
        <p className="mt-8">
          <Link className="link-strong" href="/insights/">
            Back to Field Notes
          </Link>
        </p>
      </div>
    );
  }
  const related = relatedArticles(article);

  return (
    <article className="frame pb-24 pt-12 sm:pt-16">
      <p className="text-sm text-muted">
        <Link href="/insights/" className="link-quiet">
          Field Notes
        </Link>
      </p>
      <h1 className="mt-6 max-w-[16ch] font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[0.98] tracking-[-0.035em]">
        {article.title}
      </h1>
      <p className="mt-6 text-sm text-muted">
        {article.category} · {formatDate(article.publishedAt)} · {article.readingMinutes} min read
      </p>
      <div className="prose-jump mt-10 text-lg leading-relaxed">
        {article.content.map((block, index) =>
          block.type === "h2" ? <h2 key={index}>{block.text}</h2> : <p key={index}>{block.text}</p>,
        )}
      </div>
      {related.length > 0 ? (
        <aside className="mt-16 border-t border-line pt-8">
          <h2 className="font-serif text-2xl tracking-[-0.03em]">Further notes</h2>
          <ul className="mt-4 grid gap-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/insights/${item.slug}/`} className="link-quiet">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}
    </article>
  );
}
