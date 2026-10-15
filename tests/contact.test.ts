import { describe, expect, it, vi } from "vitest";
import { contactEmail, parseContactBody, submitContact } from "@/lib/contact";

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "Analytical Engines",
  interest: "technology",
  message: "We need a clearer plan for the systems we already have.",
  timing: "Thursday afternoon",
  topic: "managed-it",
  website: "",
};

describe("parseContactBody", () => {
  it("accepts a complete inquiry", () => {
    const result = parseContactBody(valid);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.email).toBe("ada@example.com");
      expect(result.value.topic).toBe("managed-it");
    }
  });

  it("rejects unknown fields", () => {
    const result = parseContactBody({ ...valid, extra: "no" });
    expect(result.ok).toBe(false);
  });

  it("rejects a filled honeypot without echoing the message", () => {
    const result = parseContactBody({ ...valid, website: "https://spam.example" });
    expect(result.ok).toBe(false);
    if (!result.ok) expect(result.form).toBeTruthy();
  });

  it("requires a real email and a message", () => {
    const result = parseContactBody({ ...valid, email: "not-an-email", message: "short" });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.fields.email).toBeTruthy();
      expect(result.fields.message).toBeTruthy();
    }
  });

  it("keeps the email subject on one line", () => {
    const result = parseContactBody({ ...valid, name: "Ada\nLovelace\rBcc: bad@example.com" });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const email = contactEmail(result.value);
    expect(email.subject).not.toMatch(/[\r\n]/);
    expect(result.value.name).not.toMatch(/[\r\n]/);
  });
});

describe("submitContact", () => {
  it("stays local when the endpoint is local", async () => {
    const fetchImpl = vi.fn();
    const result = await submitContact(valid, { endpoint: "local", fetchImpl });
    expect(result).toEqual({ status: "local" });
    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it("reports sent only when the service says the message was sent", async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true, mode: "sent" }),
    });
    const result = await submitContact(valid, {
      endpoint: "https://example.com/api/contact",
      fetchImpl,
    });
    expect(result.status).toBe("sent");
  });

  it("does not treat a vague success payload as sent", async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    });
    const result = await submitContact(valid, {
      endpoint: "https://example.com/api/contact",
      fetchImpl,
    });
    expect(result.status).toBe("error");
  });
});
