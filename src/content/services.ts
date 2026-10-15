import type { ContactInterest, ContactTopic } from "@/lib/contact";

export type Service = {
  id: string;
  number: string;
  title: string;
  challenge: string;
  approach: string;
  engagement: string;
  who: string;
  work: readonly string[];
  interest: ContactInterest;
  topic: ContactTopic;
  inquire: string;
  related?: { href: string; label: string };
};

export const services: readonly Service[] = [
  {
    id: "technology",
    number: "01",
    title: "Technology consulting and implementation",
    challenge:
      "Something in the stack is slowing the organization down, and the next step is not obvious.",
    approach:
      "We learn how the work actually happens, separate the urgent problems from the noisy ones, and help put a sound fix in place.",
    engagement:
      "A focused review, a recommendation you can act on, and implementation support sized to the team you already have.",
    who: "Leaders who need senior technical judgment without hiring a large firm around it.",
    work: [
      "A clear read on the current systems and where they get in the way",
      "A recommendation with tradeoffs stated in plain language",
      "Help carrying the chosen change into daily use",
    ],
    interest: "technology",
    topic: "technology",
    inquire: "Inquire about technology consulting",
  },
  {
    id: "managed-it",
    number: "02",
    title: "Managed IT and technology support",
    challenge:
      "Day-to-day tools need an owner. Questions, upkeep, and breakage are landing on people whose job is something else.",
    approach:
      "We help decide what support should cover, then show up for that work in a way the team can rely on.",
    engagement:
      "Ongoing support for the systems you choose to include, and plain guidance when something breaks. Coverage is agreed for each engagement.",
    who: "Organizations that need steadier technology support than they can give themselves right now.",
    work: [
      "A defined scope of systems and the people who depend on them",
      "Regular upkeep and a known path when something fails",
      "Guidance the team can follow without a specialist in the room",
    ],
    interest: "technology",
    topic: "managed-it",
    inquire: "Inquire about managed IT",
  },
  {
    id: "operations",
    number: "03",
    title: "Business insights and operational advisory",
    challenge:
      "The business is busy, but it is hard to see where time, money, or attention is actually going.",
    approach:
      "We look at the operation with you, name the friction, and help choose a change that is worth the disruption.",
    engagement:
      "Working sessions, a clear read on the problem, and a practical sequence for what to do next.",
    who: "Leaders who want an outside view before they commit to a tool, a hire, or a reorganization.",
    work: [
      "Time with the people who do the work, not only the org chart",
      "A short account of where effort is lost",
      "A sequence of changes, starting with the one that matters most",
    ],
    interest: "consultation",
    topic: "operations",
    inquire: "Inquire about operational advisory",
  },
  {
    id: "digital",
    number: "04",
    title: "Digital solutions and emerging products",
    challenge:
      "There is a job to be done that off-the-shelf software only partly covers, or a product idea that needs a clearer shape.",
    approach:
      "We help define the useful version, build or select what fits, and keep the rest of the operation in view. VaultIQ is one product in this family.",
    engagement:
      "Product definition, prototyping, and implementation alongside your team. Claims stay limited to what has actually been built.",
    who: "Teams shaping a digital product, including organizations that want to talk about VaultIQ.",
    work: [
      "A tighter definition of the job the product is for",
      "A first version small enough to learn from",
      "A path into VaultIQ when document workflows are the subject",
    ],
    interest: "consultation",
    topic: "digital",
    inquire: "Inquire about digital work",
    related: { href: "/solutions/vaultiq/", label: "Read about VaultIQ" },
  },
];

export function getService(id: string) {
  return services.find((service) => service.id === id);
}
