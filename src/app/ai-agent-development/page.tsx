import { Metadata } from "next";
import { ClipboardCheck, FlaskConical, Hammer, History, KeyRound, Lock, Server, ShieldCheck, UserCheck, UserRound } from "lucide-react";
import AiConsultingPage from "@/components/ai-consulting/AiConsultingPage";
import { hubJsonLd } from "@/components/ai-consulting/jsonld";
import { CALL, FAQ_SYSTEMS, THEME, TRUST } from "@/components/ai-consulting/shared";
import type { AiConsultingContent } from "@/components/ai-consulting/types";

// National page for "AI agent development company" (Google Keyword Planner,
// 2026-10: 100–1K US searches, low competition). Built on the AI consulting
// kit. Examples are Ardn's own launched products only (Club Steward, Rx-Dr);
// no client names, no prices.

const URL = "https://ardncloudsolutions.com/ai-agent-development";
const TITLE = "AI Agent Development Company | Ardn";
const DESC =
  "Ardn is an AI agent development company: agents that answer from your own data, act in your CRM or ERP and sort inquiries, with human approval built in.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords: [
    "AI agent development company",
    "AI agent development",
    "AI agent development services",
    "custom AI agents",
    "AI agents for business",
    "AI customer service agent",
    "AI document processing",
  ],
  alternates: { canonical: URL, languages: { "en-US": URL, "x-default": URL } },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: "Ardn Cloud Solutions",
    images: [{ url: "/images/ardn-share.jpg", width: 1200, height: 630, alt: "Ardn, an AI agent development company" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, site: "@ardn_cloud_sol", images: ["/images/ardn-share.jpg"] },
};

const FAQS: AiConsultingContent["faqs"] = [
  {
    q: "What does an AI agent development company do?",
    a: "It designs, builds and connects AI agents that do real work inside your business: answering customers and staff from your own records, taking actions in your CRM or ERP, sorting inquiries and reading documents. Ardn also runs the agents after launch as a managed service, so they keep working as your data, systems and the underlying models change.",
  },
  {
    q: "What is the difference between an AI agent and a chatbot?",
    a: "A chatbot answers questions. An agent can also act: look up a member's balance, open a case, update a record, route an inquiry to the right team or pull the data out of a document. Because agents can act, we build them with clear permissions, human approval for sensitive steps and a log of everything they do.",
  },
  {
    q: "How do you keep an AI agent from doing something it shouldn't?",
    a: "Each agent gets only the permissions its job needs. Sensitive actions, such as anything involving money, medical decisions or account changes, wait for a person to approve them. Every answer and action is logged, and the agent hands off to a person when it isn't sure. In Rx-Dr, for example, AI helps with document reading and clinician triage but never approves a prescription.",
  },
  {
    q: "Who owns our data and the agent?",
    a: "You do. The agent reads from your systems only under the permissions you grant, you own the data and the IP of what we build for you, and if you ever leave you get a full data export and documentation.",
  },
  FAQ_SYSTEMS,
  {
    q: "How do we start, and how long does a first agent take?",
    a: "Start with a free 30-minute call. We pick one job worth handing to an agent, run a short assessment, and give you a fixed quote for a pilot. The pilot runs on your real data with your team, and the agent goes into everyday use only when it has earned it. Timing depends on the scope and your systems, and we state it in the quote.",
  },
];

const CONTENT: AiConsultingContent = {
  slug: "ai-agent-development",
  theme: THEME,
  hero: {
    eyebrow: "AI agent development company · US team",
    title: "AI agents that answer, act and",
    titleEm: "hand off to your team when it matters.",
    lede: "As an AI agent development company, Ardn builds agents that answer customers and staff from your own data, take actions in your CRM or ERP, sort inquiries and read documents, then runs them for you with human approval where it counts.",
    primaryCta: { label: "Book a free 30-min call", href: CALL },
    secondaryCta: { label: "See real examples", href: "#proof" },
    proof: ["Built on your own data", "Human approval for sensitive actions", "Run for you after launch"],
    shot: {
      src: "/images/golf/service-console.webp",
      alt: "Club Steward service dashboard showing chats answered by the AI assistant, chats handed to a person and cases",
      url: "Club Steward · Service dashboard",
    },
    caption: "Club Steward, built and launched by Ardn. Sample data.",
  },
  trust: TRUST,
  intro: {
    kicker: "What AI agents do",
    title: "What AI agents do for a business",
    sub: "An AI agent is software that reads, decides within limits you set, and acts. The best first agents take over a repetitive job your team does every day.",
    items: [
      { label: "Answer from your own data", text: "Customers and staff get answers from your records, documents and policies, not the open internet." },
      { label: "Take actions in your CRM or ERP", text: "Look up an account, open a case, update a record or start a workflow in the systems you already run." },
      { label: "Triage inquiries", text: "Sort every incoming message by topic and urgency and route it to the right person or team." },
      { label: "Process documents", text: "Read forms, invoices and applications, check them and put the data where it belongs." },
    ],
  },
  offer: {
    kicker: "Guardrails",
    title: "AI agents with guardrails built in",
    sub: "An agent that can act needs limits. These come standard in every agent we build.",
    items: [
      { icon: UserCheck, title: "Human approval for sensitive actions", body: "Anything involving money, health decisions or account changes waits for a person to approve it." },
      { icon: History, title: "Every answer and action logged", body: "See what the agent said and did, and why, with a full history you can review and correct." },
      { icon: Lock, title: "Your data stays yours", body: "The agent works inside your systems under the permissions you grant. You own the data, with a full export any time." },
      { icon: KeyRound, title: "Least-privilege permissions", body: "Each agent can reach only the records and actions its job needs, nothing more." },
      { icon: UserRound, title: "A clear hand-off to a person", body: "When the agent isn't sure, or someone asks for a human, the conversation goes to your team with the context attached." },
      { icon: ShieldCheck, title: "Monitored and kept up to date", body: "We watch accuracy, apply model and security updates and adjust the agent as your business changes." },
    ],
  },
  steps: {
    kicker: "How we build and run AI agents",
    title: "Assessment, pilot, build, then managed for you.",
    sub: "Each phase has an agreed scope and a fixed quote before work starts. The agent goes into everyday use only after it proves itself on your real work.",
    items: [
      { icon: ClipboardCheck, title: "Assessment", body: "We pick the job worth handing to an agent, map the data and systems it needs, and set the rules for what it may and may not do." },
      { icon: FlaskConical, title: "Pilot", body: "A working agent on your real data with a small group of your people, measured against how the work is done today." },
      { icon: Hammer, title: "Build", body: "We connect it to your CRM, ERP and documents, add approvals and logging, and launch it to your team or customers." },
      { icon: Server, title: "Managed", body: "A flat monthly managed service: hosting, monitoring, model updates, support and ongoing improvements." },
    ],
  },
  proof: {
    kicker: "Real examples",
    title: "AI agents we built and run in our own products",
    sub: "These run in production in platforms built and launched by Ardn, and are run by the same team you'd work with.",
    items: [
      {
        name: "Member-service assistant (Club Steward)",
        industry: "Golf & country clubs",
        outcome: "Answers members first with their own dues, bookings and balance, then hands off to a person or opens a case.",
        image: "/images/golf/service-console.webp",
        imageAlt: "Club Steward service dashboard with chats answered by the assistant and chats handed to a person",
        href: "/golf-club-management-software",
        caseStudyHref: "/case-studies/club-steward-multi-club-golf-platform",
      },
      {
        name: "AI inquiry sorting (Club Steward)",
        industry: "Golf & country clubs",
        outcome: "Sorts every incoming inquiry by topic and routes it to the right team; staff can see and correct each sort.",
        image: "/images/golf/service-cases.webp",
        imageAlt: "Club Steward service cases list with subject, team, status and priority",
        href: "/golf-club-management-software",
        caseStudyHref: "/case-studies/club-steward-multi-club-golf-platform",
      },
      {
        name: "Rx-Dr (built and launched by Ardn)",
        industry: "White-label telehealth",
        outcome: "AI helps with document reading and clinician triage. It never approves a prescription; a licensed clinician decides.",
        image: "/media/case-studies/rx-dr/white-label.webp",
        imageAlt: "Rx-Dr white-label telehealth platform",
        href: "/glp-1-ecommerce",
        caseStudyHref: "/case-studies/rx-dr-white-label-telehealth-platform",
      },
    ],
  },
  why: {
    kicker: "Why Ardn for AI agent development",
    title: "An agent is only as good as what it's connected to.",
    sub: "Most agent projects stall on integrations, permissions and who looks after it after launch. We handle all three.",
    cols: ["Chatbot add-on", "DIY agent framework"],
    ours: "Ardn",
    rows: [
      { feature: "Answers from", cells: ["A help-center page", "Whatever you wire up"], ours: "Your own records and documents" },
      { feature: "Can take actions", cells: ["Rarely", "Yes, if you build it"], ours: "In your CRM, ERP and tools" },
      { feature: "Approvals and logging", cells: ["Basic", "Up to you"], ours: "Built in from day one" },
      { feature: "After launch", cells: ["Vendor roadmap", "Your engineers"], ours: "Run as a managed service" },
    ],
  },
  faqs: FAQS,
  related: {
    kicker: "Related services",
    title: "Related services",
    links: [
      { label: "AI consulting company: AI strategy consulting and implementation", href: "/ai-consulting" },
      { label: "AI development company: custom AI apps, built and run", href: "/ai-app-development" },
      { label: "Custom software development company, Orlando, Florida", href: "/custom-software-development" },
      { label: "Everything we've launched", href: "/work" },
    ],
  },
  form: {
    heading: "Tell us which job an agent should take on",
    sub: "A sentence or two is plenty. We'll reply within 4 business hours to set up your free 30-minute call.",
    submitLabel: "Request my free call",
    messageLabel: "Which questions, inquiries or documents eat your team's day?",
  },
  final: {
    title: "Put your first AI agent",
    titleEm: "to work, safely.",
    lede: "Book a free 30-minute call. We'll pick the first job worth handing to an agent and follow up with a fixed quote for a pilot.",
    cta: { label: "Book a free 30-min call", href: CALL },
  },
};

export default function Page() {
  const jsonLd = hubJsonLd(CONTENT, {
    path: "/ai-agent-development",
    name: "AI Agent Development Company",
    serviceType: ["AI agent development", "AI agents", "AI implementation"],
    description: DESC,
    image: "/images/golf/service-console.webp",
    crumb: "AI Agent Development",
    catalogName: "AI agent development services",
    catalogItems: [
      "AI agent assessment",
      "AI agent pilot",
      "AI agent build and integration",
      "Managed AI agent service",
      "Customer and member service agents",
      "Inquiry triage agents",
      "Document processing agents",
    ],
  });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AiConsultingPage content={CONTENT} />
    </>
  );
}
