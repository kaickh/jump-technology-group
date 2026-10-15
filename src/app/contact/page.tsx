import { Suspense } from "react";
import { ContactForm } from "@/components/experiences/contact-form";
import { ContactFormGate } from "@/components/experiences/contact-form-gate";
import { site } from "@/content/site";
import { getContactEndpoint } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Write to Jump Technology Group or request a conversation. A request does not reserve a time.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <div className="frame grid gap-14 pb-24 pt-12 sm:pt-16 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="text-sm text-muted">Contact</p>
        <h1 className="mt-4 max-w-[12ch] font-serif text-[clamp(2.8rem,5vw,4.4rem)] leading-[0.98] tracking-[-0.035em]">
          Tell us what you&apos;re working on.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed">
          General questions, technology consulting, VaultIQ, and consultation requests all come to the same place.
        </p>
        <p className="mt-8 font-serif text-2xl tracking-[-0.03em]">
          <a className="link-quiet" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
          A consultation request is a message, not a confirmed meeting. There is no scheduling calendar on this site yet. Suggest a time if you have one, and we will reply by email.
        </p>
      </div>
      <div className="lg:col-span-6 lg:col-start-7">
        <Suspense fallback={<ContactForm endpoint={getContactEndpoint()} initialInterest="general" />}>
          <ContactFormGate />
        </Suspense>
      </div>
    </div>
  );
}
