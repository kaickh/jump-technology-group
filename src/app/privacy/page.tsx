import { privacy } from "@/content/privacy";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: privacy.description,
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <article className="pb-24">
      <div className="bg-sage">
        <div className="frame py-8">
          <p className="max-w-3xl text-sm leading-relaxed">{privacy.review}</p>
        </div>
      </div>
      <div className="frame pt-12 sm:pt-16">
        <h1 className="font-serif text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.95] tracking-[-0.04em]">{privacy.title}</h1>
        <div className="mt-12 grid gap-12">
          {privacy.sections.map((section) => (
            <section key={section.id} id={section.id} className="max-w-2xl border-t border-line pt-6">
              <h2 className="font-serif text-2xl tracking-[-0.03em]">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-relaxed">
                  {paragraph.includes(site.email) ? (
                    <EmailText text={paragraph} email={site.email} />
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}

function EmailText({ text, email }: { text: string; email: string }) {
  const [before, after] = text.split(email);
  return (
    <>
      {before}
      <a className="link-strong" href={`mailto:${email}`}>
        {email}
      </a>
      {after}
    </>
  );
}
