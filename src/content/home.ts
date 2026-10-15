export const hero = {
  number: "01",
  label: "Introduction",
  headlineLead: "Make your next",
  headlineTail: "move a ",
  headlineEm: "better",
  headlineEnd: " one.",
  support:
    "Jump Technology Group helps organizations with technology consulting, managed IT, and practical business advice.",
  primary: { href: "/contact/", label: "Let's talk" },
  secondary: { href: "/services/", label: "See our services" },
} as const;

export const discovery = {
  title: "What are you looking to move forward?",
  options: [
    {
      id: "technology",
      prompt: "I need help with technology.",
      body: "Consulting and implementation when a system is hard to change, poorly understood, or in the way of the work. Managed support belongs in this conversation too, when the tools need a steadier owner.",
      action: "See technology services",
      href: "/services/#technology",
    },
    {
      id: "operations",
      prompt: "I want to improve how my business operates.",
      body: "Advisory on how work moves through the organization: where time is lost, what should be simpler, and which changes are worth making before another tool is bought.",
      action: "See operational advisory",
      href: "/services/#operations",
    },
    {
      id: "vaultiq",
      prompt: "I want to explore VaultIQ.",
      body: "VaultIQ is an emerging product for turning documents into records people can find and use. It is still in development. A conversation is the right next step if document workflows are the problem you are trying to move.",
      action: "Read about VaultIQ",
      href: "/solutions/vaultiq/",
    },
  ],
} as const;

export const approach = {
  number: "04",
  label: "A way of working",
  title: "How an engagement tends to move",
  note: "A point of view on the work, not a formal methodology.",
  steps: [
    {
      title: "Understand the work",
      body: "Sit with the way the organization actually operates before recommending a change.",
    },
    {
      title: "Find the friction",
      body: "Name the few places where effort, confusion, or delay collects.",
    },
    {
      title: "Build the right solution",
      body: "Choose a fix that fits the people and the systems already in the room.",
    },
    {
      title: "Improve over time",
      body: "Stay close enough to see whether it worked, and adjust.",
    },
  ],
} as const;

export const founderIntro = {
  number: "05",
  label: "Founder",
  name: "Dwalu Khasu",
  role: "Founder, Jump Technology Group",
  body: "Dwalu previously worked at Airbnb and Meta. Jump is his practice for helping other organizations make their next technology and operational decisions with more clarity.",
  note: "Airbnb and Meta are part of his professional background. They are not clients or endorsers of Jump.",
  action: { href: "/about/", label: "About the practice" },
  portraitLabel: "Portrait of Dwalu Khasu forthcoming.",
} as const;

export const fieldNotesPreview = {
  kicker: "Journal",
  title: "Field Notes",
  body: "Short essays on technology, operations, and the judgment behind a product decision. Notes appear here when they are ready to publish.",
  empty: "Nothing is posted yet. This space will not be filled with placeholders.",
  action: { href: "/insights/", label: "Visit Field Notes" },
} as const;

export const closing = {
  title: "Tell us what you're working on.",
  body: "A note is enough. If you would like a conversation, ask for one. We will reply by email. Sending a request does not reserve a time.",
  action: { href: "/contact/", label: "Let's talk" },
} as const;
