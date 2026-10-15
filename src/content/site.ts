export const site = {
  name: "Jump Technology Group",
  shortName: "Jump",
  email: "support@jumptechgroup.com",
  founder: "Dwalu Khasu",
  founderRole: "Founder",
  description:
    "Jump Technology Group helps organizations with technology consulting, managed IT, and practical business advice.",
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services/", label: "Services" },
  { href: "/about/", label: "About" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
] as const;
