"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "@/components/experiences/contact-form";
import { isContactInterest, isContactTopic } from "@/lib/contact";
import { getContactEndpoint } from "@/lib/site";

export function ContactFormGate() {
  const params = useSearchParams();
  const interestParam = params.get("interest") ?? "";
  const topicParam = params.get("topic") ?? "";

  return (
    <ContactForm
      endpoint={getContactEndpoint()}
      initialInterest={isContactInterest(interestParam) ? interestParam : "general"}
      initialTopic={isContactTopic(topicParam) ? topicParam : undefined}
    />
  );
}
