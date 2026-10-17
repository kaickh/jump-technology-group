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
  offers: [
    {
      kicker: "Consulting",
      title: "Technology consulting",
      body: "Senior judgment when a system is slowing the organization down.",
      href: "/services/#technology",
    },
    {
      kicker: "Support",
      title: "Managed IT",
      body: "A known owner for the tools people rely on every day.",
      href: "/services/#managed-it",
    },
    {
      kicker: "Advisory",
      title: "Business advisory",
      body: "A clearer read on where time and attention are actually going.",
      href: "/services/#operations",
    },
  ],
} as const;

export const flagship = {
  kicker: "Flagship product",
  titleLead: "Documents people can actually ",
  titlePop: "find",
  titleEnd: ".",
} as const;

export const practice = {
  titleLead: "Start with the ",
  titlePop: "work",
  titleEnd: " in front of you.",
  note: "Four ways in. Each one is a conversation, not a package with a fixed promise.",
  labels: {
    technology: "Technology",
    "managed-it": "Managed IT",
    operations: "Advisory",
    digital: "Digital products",
  },
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
