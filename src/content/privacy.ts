export const privacy = {
  title: "Privacy notice",
  description:
    "How Jump Technology Group handles messages sent through this website.",
  review:
    "This notice matches the contact form as built. It has not been reviewed by counsel. It is not legal advice, and it should be reviewed before the site is launched.",
  sections: [
    {
      id: "who",
      title: "Who this notice covers",
      paragraphs: [
        "Jump Technology Group operates this website. Privacy questions can be sent to support@jumptechgroup.com.",
        "The site is a business inquiry site. It is not directed at children.",
      ],
    },
    {
      id: "collect",
      title: "What the form collects",
      paragraphs: [
        "If you write through the contact form, you provide your name, email address, an area of interest, and a message. Company and preferred timing are optional. A hidden field exists to catch automated submissions. Leave it blank.",
        "The form does not ask for account passwords, payment details, or government identifiers. Please do not include secrets in the message.",
      ],
    },
    {
      id: "local",
      title: "Local and preview builds",
      paragraphs: [
        "When the site is built with the contact endpoint set to local, the page checks the form on your device and does not email it. The confirmation on that build says so. A local confirmation is not delivery to Jump.",
      ],
    },
    {
      id: "send",
      title: "When the contact service is connected",
      paragraphs: [
        "A production build sends the form to a private endpoint. The message is validated, then emailed to support@jumptechgroup.com through Amazon Simple Email Service. The reply-to address is the email you entered.",
        "The current design does not store the message in a database. The copy Jump keeps is the email in that mailbox. Server logs are not meant to include the message body.",
        "The endpoint limits the size of a submission and how frequently it can be called. That is abuse protection, not a profile of you.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and analytics",
      paragraphs: [
        "This site does not set advertising or analytics cookies, and it does not embed third-party trackers.",
      ],
    },
    {
      id: "choices",
      title: "Your message",
      paragraphs: [
        "You can email support@jumptechgroup.com to ask about a message you sent. Because the message lives in email rather than a separate archive, that is also how a deletion request would be handled.",
      ],
    },
    {
      id: "changes",
      title: "Changes",
      paragraphs: [
        "If the contact path changes, this notice should change with it, and counsel should review it again before launch.",
      ],
    },
  ],
} as const;
