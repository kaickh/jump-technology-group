export const insightCategories = [
  "Technology & Infrastructure",
  "Business Operations",
  "Digital Transformation",
  "Product Thinking",
  "From the Founder",
] as const;

export type InsightCategory = (typeof insightCategories)[number];
export type ArticleStatus = "draft" | "published";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: InsightCategory;
  publishedAt: string;
  readingMinutes: number;
  status: ArticleStatus;
  content: readonly ArticleBlock[];
};

export const fieldNotes = {
  title: "Field Notes",
  description:
    "A journal from Jump Technology Group. Essays on technology, operations, and product judgment are published when they are ready.",
  lede: "Field Notes is where Jump will publish short, considered writing. Technical perspectives, operational ideas, and notes from the founder belong here. Case studies do not, unless a client has agreed to be named.",
  empty:
    "No notes have been published. Drafts stay in the repository and are not listed on this page.",
} as const;

/**
 * Published essays only. Do not add placeholder articles to this list.
 * A draft may live here with status "draft" and will not be rendered.
 */
export const articles: readonly Article[] = [];

export function publishedArticles(list: readonly Article[] = articles) {
  return list
    .filter((article) => article.status === "published")
    .slice()
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPublishedArticle(slug: string) {
  return publishedArticles().find((article) => article.slug === slug);
}

export function relatedArticles(current: Article, list: readonly Article[] = articles, limit = 2) {
  return publishedArticles(list)
    .filter((article) => article.slug !== current.slug)
    .sort((a, b) => {
      const categoryScore =
        Number(b.category === current.category) - Number(a.category === current.category);
      if (categoryScore !== 0) return categoryScore;
      return a.publishedAt < b.publishedAt ? 1 : -1;
    })
    .slice(0, limit);
}
