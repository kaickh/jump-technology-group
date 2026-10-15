/** @vitest-environment jsdom */

import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "@/components/experiences/contact-form";

afterEach(() => {
  cleanup();
});

describe("ContactForm", () => {
  it("shows field errors and does not claim the message was sent", async () => {
    const user = userEvent.setup();
    render(<ContactForm endpoint="local" initialInterest="general" />);
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(await screen.findByText("Enter your name.")).toBeTruthy();
    expect(screen.queryByText(/on its way/)).toBeNull();
    expect(screen.queryByText(/Nothing was emailed/)).toBeNull();
  });

  it("labels a local acceptance as not emailed", async () => {
    const user = userEvent.setup();
    render(<ContactForm endpoint="local" initialInterest="technology" />);
    await user.type(screen.getByLabelText("Name"), "Ada Lovelace");
    await user.type(screen.getByLabelText("Email"), "ada@example.com");
    await user.type(screen.getByLabelText("Message"), "We need help sorting out our support.");
    await user.click(screen.getByRole("button", { name: "Send message" }));
    expect(await screen.findByText(/Nothing was emailed/)).toBeTruthy();
    expect(screen.queryByText(/on its way/)).toBeNull();
  });
});
