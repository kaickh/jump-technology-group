import { describe, expect, it, vi } from "vitest";
import { createContactHandler, type ContactEvent } from "@/lambda/contact";

const payload = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  interest: "general",
  message: "We would like to talk about managed support.",
  website: "",
};

function event(body: unknown): ContactEvent {
  return {
    body: JSON.stringify(body),
    requestContext: { http: { method: "POST" } },
  };
}

describe("contact handler", () => {
  it("sends mail and reports sent", async () => {
    const send = vi.fn().mockResolvedValue(undefined);
    const handler = createContactHandler({
      env: { CONTACT_TO: "support@jumptechgroup.com", CONTACT_FROM: "support@jumptechgroup.com" },
      send,
    });
    const response = await handler(event(payload));
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({ ok: true, mode: "sent" });
    expect(send).toHaveBeenCalledOnce();
    expect(send.mock.calls[0][0].text).toContain(payload.message);
    expect(send.mock.calls[0][0].to).toBe("support@jumptechgroup.com");
  });

  it("does not send when delivery is local", async () => {
    const send = vi.fn();
    const handler = createContactHandler({
      env: { CONTACT_DELIVERY: "local", CONTACT_TO: "support@jumptechgroup.com", CONTACT_FROM: "a@b.com" },
      send,
    });
    const response = await handler(event(payload));
    expect(JSON.parse(response.body).mode).toBe("local");
    expect(send).not.toHaveBeenCalled();
  });

  it("reports a send failure without the message body", async () => {
    const error = new Error("The mailbox rejected it");
    error.name = "MessageRejected";
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    const handler = createContactHandler({
      env: { CONTACT_TO: "support@jumptechgroup.com", CONTACT_FROM: "support@jumptechgroup.com" },
      send: vi.fn().mockRejectedValue(error),
    });
    const response = await handler(event(payload));
    expect(response.statusCode).toBe(502);
    expect(response.body).not.toContain(payload.message);
    expect(consoleError.mock.calls.flat().join(" ")).not.toContain(payload.message);
    consoleError.mockRestore();
  });
});
