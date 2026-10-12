// Standard proposal sections written by Deep. {client}, {locations} and {label} are filled per proposal.

export type AiProduct = { title: string; body: string; tags: string[]; icon: string };
export const AI_PRODUCTS: AiProduct[] = [
  {
    "title": "Active error management",
    "body": "Every error any user hits reaches Ardn the moment it happens, with the steps that caused it. Triage starts before anyone calls.",
    "tags": [
      "Real-time alerts",
      "Root cause"
    ],
    "icon": "M12 3l9 16H3zM12 10v4M12 17v.5"
  },
  {
    "title": "Guided workflows",
    "body": "Staff are walked through each task step by step, from quoting a membership to closing out an event, so new hires get it right the first time.",
    "tags": [
      "Sales",
      "Events",
      "Billing"
    ],
    "icon": "M4 6h10M4 12h16M4 18h7M17 4l3 2-3 2"
  },
  {
    "title": "NPS and member sentiment",
    "body": "NPS and satisfaction are measured from surveys and service cases, then reported by club, region and member.",
    "tags": [
      "NPS",
      "Satisfaction"
    ],
    "icon": "M4 19V11M10 19V5M16 19v-6M22 19H2"
  },
  {
    "title": "Plain-English search",
    "body": "Staff ask for what they need, like members who joined last year and have not booked a tee time, and get the list.",
    "tags": [
      "Search",
      "Saved views"
    ],
    "icon": "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM16 16l5 5"
  },
  {
    "title": "Member Health scoring",
    "body": "Each member gets a health score from usage and engagement, so clubs can act before a resignation, not after.",
    "tags": [
      "Retention",
      "Engagement"
    ],
    "icon": "M3 12h4l3-7 4 14 3-7h4"
  },
  {
    "title": "Automatic onboarding and tasks",
    "body": "Onboarding starts itself with day 2, 5 and 10 follow-ups, and tasks are created for staff automatically.",
    "tags": [
      "Onboarding",
      "My Tasks"
    ],
    "icon": "M5 12l4 4 10-10"
  }
];

export const WHY_MODELS: [string, string][] = [["IaaS", "Rented servers and storage"], ["PaaS", "A platform to build your own app on"], ["SaaS", "Off-the-shelf software, per seat"], ["Ardn", "Managed platform plus the team behind it"]];

/** cells: Y = your team, V = vendor; Ardn always handles it. */
export const WHY_LAYERS: [string, string, string, string, string][] = [
  [
    "Servers, storage and hosting",
    "Infrastructure",
    "V",
    "V",
    "V"
  ],
  [
    "Security patches and uptime",
    "Operating the platform",
    "Y",
    "V",
    "V"
  ],
  [
    "The application",
    "Every module you switch on",
    "Y",
    "Y",
    "V"
  ],
  [
    "Setup for {locations}",
    "Plans, rules, pricing, permissions",
    "Y",
    "Y",
    "Y"
  ],
  [
    "Data migration",
    "the systems that retire",
    "Y",
    "Y",
    "Y"
  ],
  [
    "Integrations",
    "the systems that stay",
    "Y",
    "Y",
    "Y"
  ],
  [
    "Spotting and fixing errors",
    "Alerted the moment a user hits one",
    "Y",
    "Y",
    "Y"
  ],
  [
    "Changes and new features",
    "Built to {client}’s needs, not a vendor roadmap",
    "Y",
    "Y",
    "V"
  ],
  [
    "People who know your {label}s",
    "A named team, not a ticket queue",
    "Y",
    "Y",
    "Y"
  ]
];

export const WHY_POINTS: { title: string; body: string }[] = [
  {
    "title": "One accountable partner",
    "body": "Infrastructure, software, integrations and support come from one team, so nothing falls between vendors."
  },
  {
    "title": "People, not just a product",
    "body": "Ardn engineers and support staff work on Club Steward for {client} every day, and know how your {label}s run."
  },
  {
    "title": "Your team stays focused",
    "body": "{client} keeps tier 1 help in the {label}s. Everything behind it is ours to run, fix and improve."
  }
];

export const AI_STEPS: { n: string; title: string; body: string }[] = [
  {
    "n": "1 · Detect",
    "title": "Notified with the user",
    "body": "Built-in error tracking alerts our team the same moment the user sees the problem. Nobody has to file a ticket first."
  },
  {
    "n": "2 · Triage",
    "title": "Triage starts immediately",
    "body": "We see who was affected, at which {label}, and the steps that led to the error, so work begins before anyone calls."
  },
  {
    "n": "3 · Resolve",
    "title": "Root cause, not a workaround",
    "body": "With the full context captured, we trace the root cause and fix it for every {label} at once."
  }
];

export const AI_COMPARE: { k: string; them: string; us: string }[] = [
  {
    "k": "Finding out",
    "them": "Staff notice, then open a ticket with the vendor.",
    "us": "We are alerted the moment it happens, for any user."
  },
  {
    "k": "Details",
    "them": "Support asks for screenshots and steps to reproduce.",
    "us": "The steps, user and club are captured automatically."
  },
  {
    "k": "Triage",
    "them": "Waits in a vendor queue shared with every other customer.",
    "us": "Starts immediately with our own team."
  },
  {
    "k": "Fix",
    "them": "Often a workaround until the next vendor release.",
    "us": "Root cause found and fixed once, for every {label}."
  }
];

export function fill(s: string, client: string, locations: number, label: string) {
  return s
    .replace(/\{client\}/g, client)
    .replace(/\{locations\}/g, `${locations} ${label}${locations === 1 ? "" : "s"}`)
    .replace(/\{label\}/g, label);
}
