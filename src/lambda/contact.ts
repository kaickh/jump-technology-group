import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { contactEmail, parseContactBody, type SanitizedContact } from "../lib/contact";

export type ContactEvent = {
  body?: string | null;
  isBase64Encoded?: boolean;
  requestContext?: { http?: { method?: string } };
};

export type ContactResponse = {
  statusCode: number;
  headers: Record<string, string>;
  body: string;
};

type SendEmail = (message: { to: string; from: string; replyTo: string; subject: string; text: string }) => Promise<void>;

type HandlerEnv = {
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
  CONTACT_DELIVERY?: string;
};

const MAX_RAW_CHARS = 8000;

function response(statusCode: number, body: unknown): ContactResponse {
  return {
    statusCode,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
    body: JSON.stringify(body),
  };
}

export function createContactHandler(deps: { env: HandlerEnv; send: SendEmail }) {
  return async function handler(event: ContactEvent): Promise<ContactResponse> {
    const method = event.requestContext?.http?.method ?? "POST";
    if (method !== "POST") {
      return response(405, { ok: false, error: "method_not_allowed" });
    }

    const rawBody = event.body
      ? event.isBase64Encoded
        ? Buffer.from(event.body, "base64").toString("utf8")
        : event.body
      : "";

    if (!rawBody || rawBody.length > MAX_RAW_CHARS) {
      return response(413, { ok: false, error: "payload_too_large" });
    }

    let json: unknown;
    try {
      json = JSON.parse(rawBody);
    } catch {
      return response(400, { ok: false, error: "invalid_json" });
    }

    const parsed = parseContactBody(json);
    if (!parsed.ok) {
      console.error("contact_rejected", { fieldCount: Object.keys(parsed.fields).length, hasForm: Boolean(parsed.form) });
      return response(400, { ok: false, error: "invalid", fields: parsed.fields, form: parsed.form });
    }

    if (deps.env.CONTACT_DELIVERY === "local") {
      return response(200, { ok: true, mode: "local" });
    }

    const to = deps.env.CONTACT_TO;
    const from = deps.env.CONTACT_FROM;
    if (!to || !from) {
      console.error("contact_misconfigured");
      return response(500, { ok: false, error: "misconfigured" });
    }

    const email = contactEmail(parsed.value);
    try {
      await deps.send({
        to,
        from,
        replyTo: parsed.value.email,
        subject: email.subject,
        text: email.text,
      });
    } catch (error) {
      const name = error instanceof Error ? error.name : "Error";
      console.error("contact_send_failed", { errorName: name });
      return response(502, { ok: false, error: "send_failed" });
    }

    return response(200, { ok: true, mode: "sent" });
  };
}

const ses = new SESClient({});

async function sendWithSes(message: {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
}) {
  await ses.send(
    new SendEmailCommand({
      Source: message.from,
      Destination: { ToAddresses: [message.to] },
      ReplyToAddresses: [message.replyTo],
      Message: {
        Subject: { Data: message.subject, Charset: "UTF-8" },
        Body: { Text: { Data: message.text, Charset: "UTF-8" } },
      },
    }),
  );
}

export const handler = createContactHandler({
  env: {
    CONTACT_TO: process.env.CONTACT_TO,
    CONTACT_FROM: process.env.CONTACT_FROM,
    CONTACT_DELIVERY: process.env.CONTACT_DELIVERY,
  },
  send: sendWithSes,
});

export type { SanitizedContact };
