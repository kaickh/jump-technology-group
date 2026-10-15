export const contactInterests = [
  { id: "general", label: "General inquiry" },
  { id: "technology", label: "Technology consulting" },
  { id: "vaultiq", label: "VaultIQ" },
  { id: "consultation", label: "Consultation request" },
] as const;

export const contactTopics = [
  { id: "technology", label: "Technology consulting and implementation" },
  { id: "managed-it", label: "Managed IT and technology support" },
  { id: "operations", label: "Business insights and operational advisory" },
  { id: "digital", label: "Digital solutions and emerging products" },
  { id: "vaultiq", label: "VaultIQ" },
] as const;

export type ContactInterest = (typeof contactInterests)[number]["id"];
export type ContactTopic = (typeof contactTopics)[number]["id"];

export type ContactInput = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  interest?: unknown;
  message?: unknown;
  timing?: unknown;
  topic?: unknown;
  website?: unknown;
};

export type SanitizedContact = {
  name: string;
  email: string;
  company?: string;
  interest: ContactInterest;
  message: string;
  timing?: string;
  topic?: ContactTopic;
};

export type FieldName = keyof ContactInput;
export type FieldErrors = Partial<Record<FieldName, string>>;

export type ParseResult =
  | { ok: true; value: SanitizedContact }
  | { ok: false; fields: FieldErrors; form?: string };

const ALLOWED_KEYS = new Set([
  "name",
  "email",
  "company",
  "interest",
  "message",
  "timing",
  "topic",
  "website",
]);

const INTERESTS = new Set<string>(contactInterests.map((item) => item.id));
const TOPICS = new Set<string>(contactTopics.map((item) => item.id));

const MAX_BODY_CHARS = 8000;

export function isContactInterest(value: string): value is ContactInterest {
  return INTERESTS.has(value);
}

export function isContactTopic(value: string): value is ContactTopic {
  return TOPICS.has(value);
}

export function interestLabel(id: ContactInterest) {
  return contactInterests.find((item) => item.id === id)?.label ?? id;
}

export function topicLabel(id: ContactTopic) {
  return contactTopics.find((item) => item.id === id)?.label ?? id;
}

function oneLine(value: string, max: number) {
  return value.replace(/[\u0000-\u001F\u007F]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function asOptionalString(value: unknown) {
  if (value == null) return "";
  if (typeof value !== "string") return null;
  return value;
}

export function parseContactBody(input: unknown): ParseResult {
  if (input == null || typeof input !== "object" || Array.isArray(input)) {
    return { ok: false, fields: {}, form: "Send the form fields as a single object." };
  }

  const record = input as Record<string, unknown>;
  const unknownKey = Object.keys(record).find((key) => !ALLOWED_KEYS.has(key));
  if (unknownKey) {
    return { ok: false, fields: {}, form: "This form only accepts the listed fields." };
  }

  const serialized = JSON.stringify(record);
  if (serialized.length > MAX_BODY_CHARS) {
    return { ok: false, fields: {}, form: "That message is too long to send." };
  }

  const website = asOptionalString(record.website);
  if (website === null) {
    return { ok: false, fields: { website: "Leave the extra field blank." } };
  }
  if (website.trim() !== "") {
    return { ok: false, fields: {}, form: "The message could not be sent." };
  }

  const fields: FieldErrors = {};

  const nameRaw = asOptionalString(record.name);
  const emailRaw = asOptionalString(record.email);
  const companyRaw = asOptionalString(record.company);
  const messageRaw = asOptionalString(record.message);
  const timingRaw = asOptionalString(record.timing);
  const interestRaw = asOptionalString(record.interest);
  const topicRaw = asOptionalString(record.topic);

  if (nameRaw === null) fields.name = "Enter your name as text.";
  if (emailRaw === null) fields.email = "Enter your email as text.";
  if (companyRaw === null) fields.company = "Enter the company as text, or leave it blank.";
  if (messageRaw === null) fields.message = "Enter your message as text.";
  if (timingRaw === null) fields.timing = "Enter a timing note as text, or leave it blank.";
  if (interestRaw === null) fields.interest = "Choose an area of interest.";
  if (topicRaw === null) fields.topic = "That topic is not recognized.";

  const name = nameRaw ? oneLine(nameRaw, 120) : "";
  const email = emailRaw ? oneLine(emailRaw, 254).toLowerCase() : "";
  const company = companyRaw ? oneLine(companyRaw, 160) : "";
  const message = typeof messageRaw === "string" ? messageRaw.replace(/\u0000/g, "").trim() : "";
  const timing = timingRaw ? oneLine(timingRaw, 160) : "";
  const interest = interestRaw ? oneLine(interestRaw, 40) : "";
  const topic = topicRaw ? oneLine(topicRaw, 40) : "";

  if (!fields.name && name.length < 1) fields.name = "Enter your name.";
  if (!fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fields.email = "Enter a valid email address.";
  }
  if (!fields.message && message.length < 8) {
    fields.message = "Add a short message so we know what you need.";
  }
  if (!fields.message && message.length > 4000) {
    fields.message = "Keep the message under 4,000 characters.";
  }
  if (!fields.interest && !isContactInterest(interest)) {
    fields.interest = "Choose an area of interest.";
  }
  if (!fields.topic && topic !== "" && !isContactTopic(topic)) {
    fields.topic = "That topic is not recognized.";
  }

  if (Object.keys(fields).length > 0) {
    return { ok: false, fields };
  }

  const value: SanitizedContact = {
    name,
    email,
    interest: interest as ContactInterest,
    message,
  };
  if (company) value.company = company;
  if (timing) value.timing = timing;
  if (topic) value.topic = topic as ContactTopic;
  return { ok: true, value };
}

export function contactEmail(value: SanitizedContact) {
  const subject = oneLine(`Jump inquiry: ${interestLabel(value.interest)}`, 120);
  const lines = [
    `Name: ${value.name}`,
    `Email: ${value.email}`,
    value.company ? `Company: ${value.company}` : "Company: (not provided)",
    `Interest: ${interestLabel(value.interest)}`,
    value.topic ? `Topic: ${topicLabel(value.topic)}` : undefined,
    value.timing ? `Preferred timing: ${value.timing}` : "Preferred timing: (not provided)",
    "",
    value.message,
    "",
    "A consultation request does not reserve a time.",
  ].filter((line): line is string => line !== undefined);

  return { subject, text: lines.join("\n") };
}

export type SubmitResult =
  | { status: "invalid"; fields: FieldErrors; form?: string }
  | { status: "local" }
  | { status: "sent" }
  | { status: "error"; form?: string };

type SubmitOptions = {
  endpoint: string;
  fetchImpl?: typeof fetch;
};

export async function submitContact(input: ContactInput, options: SubmitOptions): Promise<SubmitResult> {
  const parsed = parseContactBody(input);
  if (!parsed.ok) {
    return { status: "invalid", fields: parsed.fields, form: parsed.form };
  }

  if (!options.endpoint || options.endpoint === "local") {
    return { status: "local" };
  }

  const fetchImpl = options.fetchImpl ?? fetch;
  try {
    const response = await fetchImpl(options.endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...parsed.value, website: "" }),
    });
    const body = (await response.json().catch(() => null)) as { ok?: boolean; mode?: string } | null;
    if (response.ok && body?.ok === true && body.mode === "sent") return { status: "sent" };
    if (response.ok && body?.ok === true && body.mode === "local") return { status: "local" };
    if (!response.ok && body && typeof body === "object" && "fields" in body) {
      const fields = (body as { fields?: FieldErrors }).fields;
      if (fields && typeof fields === "object") {
        return { status: "invalid", fields };
      }
    }
    return { status: "error", form: "We couldn't send that. You can try again, or email us directly." };
  } catch {
    return { status: "error", form: "We couldn't send that. You can try again, or email us directly." };
  }
}
