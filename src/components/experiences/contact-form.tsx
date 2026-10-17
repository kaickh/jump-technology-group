"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";
import {
  contactInterests,
  topicLabel,
  type ContactInterest,
  type ContactTopic,
  type FieldErrors,
  type SubmitResult,
  submitContact,
} from "@/lib/contact";

type ContactFormProps = {
  endpoint: string;
  initialInterest: ContactInterest;
  initialTopic?: ContactTopic;
};

const fieldOrder = ["name", "email", "company", "interest", "message", "timing"] as const;

export function ContactForm({ endpoint, initialInterest, initialTopic }: ContactFormProps) {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [formKey, setFormKey] = useState(0);
  const local = !endpoint || endpoint === "local";
  const invalid = result?.status === "invalid" ? result : null;
  const fields: FieldErrors = invalid?.fields ?? {};

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setPending(true);
    const next = await submitContact(
      {
        name: data.get("name"),
        email: data.get("email"),
        company: data.get("company"),
        interest: data.get("interest"),
        message: data.get("message"),
        timing: data.get("timing"),
        topic: data.get("topic"),
        website: data.get("website"),
      },
      { endpoint },
    );
    setPending(false);
    setResult(next);
    if (next.status === "invalid") {
      const first = fieldOrder.find((name) => next.fields[name]);
      if (first) document.getElementById(`field-${first}`)?.focus();
    }
  }

  if (result?.status === "sent" || result?.status === "local") {
    return (
      <div role="status" className="border-t border-line pt-6">
        {result.status === "sent" ? (
          <p className="font-serif text-3xl font-semibold leading-tight tracking-[-0.03em]">Your message is on its way.</p>
        ) : (
          <p className="font-serif text-3xl font-semibold leading-tight tracking-[-0.03em]">Checked on this page only.</p>
        )}
        <p className="mt-4 max-w-md leading-relaxed text-muted">
          {result.status === "sent"
            ? "We'll reply at the email you gave us. A consultation request does not reserve a time."
            : `Nothing was emailed. To reach the studio, write to ${site.email}.`}
        </p>
        <button
          type="button"
          className="link-strong mt-8 cursor-pointer border-0 bg-transparent p-0"
          onClick={() => {
            setResult(null);
            setFormKey((value) => value + 1);
          }}
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form key={formKey} noValidate onSubmit={onSubmit} className="grid gap-5">
      {local ? (
        <p className="text-sm leading-relaxed text-muted">
          This preview checks your message on this page and does not email it.
        </p>
      ) : null}
      {initialTopic ? (
        <p className="text-sm text-muted">
          About <span className="text-ink">{topicLabel(initialTopic)}</span>
        </p>
      ) : null}
      <div className="honeypot" aria-hidden="true" inert>
        <label htmlFor="field-website">Website</label>
        <input id="field-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {initialTopic ? <input type="hidden" name="topic" value={initialTopic} /> : null}
      <Field label="Name" name="name" error={fields.name} autoComplete="name" />
      <Field label="Email" name="email" type="email" error={fields.email} autoComplete="email" />
      <Field label="Company" name="company" error={fields.company} autoComplete="organization" optional />
      <div>
        <label htmlFor="field-interest" className="mb-2 block text-sm">
          Area of interest
        </label>
        <select
          id="field-interest"
          name="interest"
          className="field"
          defaultValue={initialInterest}
          aria-invalid={fields.interest ? true : undefined}
          aria-describedby={fields.interest ? "error-interest" : undefined}
        >
          {contactInterests.map((interest) => (
            <option key={interest.id} value={interest.id}>
              {interest.label}
            </option>
          ))}
        </select>
        {fields.interest ? (
          <p id="error-interest" className="field-error mt-2">
            {fields.interest}
          </p>
        ) : null}
      </div>
      <Field label="Message" name="message" error={fields.message} multiline />
      <Field
        label="Preferred timing"
        name="timing"
        error={fields.timing}
        optional
        hint="For a consultation request. We reply by email. This does not book a time."
      />
      {invalid?.form || result?.status === "error" ? (
        <p role="alert" className="field-error">
          {invalid?.form || (result?.status === "error" ? result.form : "")}
        </p>
      ) : null}
      <div aria-live="polite">
        <button
          type="submit"
          className="btn btn-primary disabled:opacity-60"
          disabled={pending}
        >
          {pending ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  optional,
  hint,
  type = "text",
  autoComplete,
  multiline,
}: {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  hint?: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
}) {
  const id = `field-${name}`;
  const errorId = `error-${name}`;
  const hintId = `hint-${name}`;
  const describedBy = [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") || undefined;
  const labelText = optional ? `${label} (optional)` : label;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm">
        {labelText}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          rows={6}
          className="field min-h-36 resize-y"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          className="field"
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
        />
      )}
      {hint ? (
        <p id={hintId} className="mt-2 text-sm text-muted">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="field-error mt-2">
          {error}
        </p>
      ) : null}
    </div>
  );
}
