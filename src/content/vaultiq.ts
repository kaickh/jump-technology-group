export const vaultiq = {
  name: "VaultIQ",
  status: "In development",
  summary:
    "An emerging Jump Technology Group product for turning scattered documents into records people can file and find.",
  challengeTitle: "The operational challenge",
  challenge:
    "Important information still arrives as paper, scans, and loose files. The record exists, but the people who need it have to hunt for it, ask someone who remembers, or start over.",
  mattersTitle: "Why it matters",
  matters:
    "When a document is hard to find, ordinary work slows down. Decisions wait. The same file gets recreated. A calmer record is not a software feature. It is how the next task starts without a search.",
  introTitle: "Introducing VaultIQ",
  intro:
    "VaultIQ is being built inside Jump Technology Group to help capture documents, organize them into usable records, and retrieve them when the work calls for them. It is not a launched platform, and this page does not describe a live demo.",
  stagesIntro:
    "These three stages describe the intended direction. They will be checked against the product before they are treated as shipped capabilities.",
  stages: [
    {
      id: "capture",
      number: "01",
      title: "Capture",
      body: "A document enters as paper, a scan, or an unstructured file, and becomes something the system can hold.",
    },
    {
      id: "organize",
      number: "02",
      title: "Organize",
      body: "The file is sorted into a record with a place, so it is no longer a pile that only one person understands.",
    },
    {
      id: "retrieve",
      number: "03",
      title: "Retrieve",
      body: "The person who needs the record can get back to it without reconstructing the history of where it went.",
    },
  ],
  useCasesTitle: "Possible situations",
  useCasesNote:
    "Illustrative situations, not customer stories. No organization listed here is a client.",
  useCases: [
    "A team that still passes paperwork around to find a single record.",
    "An office receiving a mix of paper and attachments, with no shared place to file them.",
    "A group preparing to move documents into a system people can search.",
  ],
  statusTitle: "Where VaultIQ stands",
  statusPoints: [
    "It is an emerging product of Jump Technology Group, not a separate company.",
    "It is not generally available, and this site does not offer a live product demo.",
    "Capture, organize, and retrieve describe the direction of the work. They are not a feature list you can buy today.",
    "A conversation is open if document workflows are the problem in front of you.",
  ],
  action: { href: "/contact/?interest=vaultiq&topic=vaultiq", label: "Request a VaultIQ conversation" },
} as const;
