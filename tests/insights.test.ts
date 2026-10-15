import { describe, expect, it } from "vitest";
import { publishedArticles, relatedArticles, type Article } from "@/content/insights";

const draft: Article = {
  slug: "unreviewed-note",
  title: "An unreviewed note",
  description: "This draft must not be published.",
  category: "Product Thinking",
  publishedAt: "2026-01-01",
  readingMinutes: 4,
  status: "draft",
  content: [{ type: "p", text: "Draft only." }],
};

const published: Article = {
  slug: "a-real-note",
  title: "A real note",
  description: "Published.",
  category: "Product Thinking",
  publishedAt: "2026-02-01",
  readingMinutes: 5,
  status: "published",
  content: [{ type: "p", text: "Public." }],
};

describe("publishedArticles", () => {
  it("hides drafts", () => {
    expect(publishedArticles([draft, published]).map((article) => article.slug)).toEqual(["a-real-note"]);
  });

  it("ships with no published essays", () => {
    expect(publishedArticles()).toEqual([]);
  });

  it("does not recommend a draft", () => {
    expect(relatedArticles(published, [draft, published])).toEqual([]);
  });
});
