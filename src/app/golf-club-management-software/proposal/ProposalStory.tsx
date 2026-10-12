import { Check, Minus } from "lucide-react";

/**
 * Why a managed platform, and how it is built and kept working: the part of
 * the proposal that is about Ardn rather than one app. Same guardrails as the
 * rest of the page: no client, vendor or partner names, and no Club Steward
 * pricing. The four ways to run club software are named by kind only.
 */

const WAYS = [
  { key: "build", name: "Build it yourself", sub: "Your team, on rented cloud servers" },
  { key: "platform", name: "Build on a platform", sub: "A CRM or app platform, customised" },
  { key: "boxed", name: "Off-the-shelf club software", sub: "One product per job, connected by you" },
  { key: "managed", name: "Club Steward, managed", sub: "One platform, run for you by Ardn" },
] as const;

type Way = (typeof WAYS)[number]["key"];

/** `true` is the column that carries the burden for the club; text says how. */
const ROWS: { job: string; cells: Record<Way, { text: string; good?: boolean }> }[] = [
  {
    job: "Who builds the club's workflows",
    cells: {
      build: { text: "Your developers" },
      platform: { text: "Your team or a partner, within the platform's limits" },
      boxed: { text: "Each vendor, the same for every customer" },
      managed: { text: "Ardn, for multi-club operators, set per club in settings", good: true },
    },
  },
  {
    job: "Who keeps the systems in step",
    cells: {
      build: { text: "You" },
      platform: { text: "You, through connectors and add-ons" },
      boxed: { text: "You, between every pair of products" },
      managed: { text: "Nothing to sync: one member record across every app", good: true },
    },
  },
  {
    job: "Who tests a change before it reaches a club",
    cells: {
      build: { text: "Your team" },
      platform: { text: "Your team, again after each platform release" },
      boxed: { text: "Each vendor tests its product; the joins between them are yours" },
      managed: { text: "Ardn, with automated checks run on every release", good: true },
    },
  },
  {
    job: "Who hosts, secures and upgrades it",
    cells: {
      build: { text: "You" },
      platform: { text: "The platform hosts; you re-check your build on its schedule" },
      boxed: { text: "Each vendor, on its own schedule" },
      managed: { text: "Ardn", good: true },
    },
  },
  {
    job: "Where AI fits",
    cells: {
      build: { text: "Whatever you build and wire in" },
      platform: { text: "Added on top of your data model" },
      boxed: { text: "Varies by product, inside each one" },
      managed: { text: "Built into the apps, on the one record", good: true },
    },
  },
];

const ERAS = [
  {
    name: "Waterfall",
    body: "Requirements, then design, then build, then test, each handed to the next team. Months pass before anyone at the club sees the result.",
  },
  {
    name: "Agile",
    body: "Shorter cycles and earlier demos, but the same handoffs between people who write, build and test. Work still waits in queues.",
  },
  {
    name: "AI-led",
    body: "The requirement is written once and AI does the building and the first round of testing. People spend their time judging the result with the club, not passing it along.",
    now: true,
  },
];

const KEPT_WORKING = [
  {
    title: "Checked on every release",
    body: "Automated tests sign in as the real roles, through the real screens, and must pass before a change ships. A defect that slips through becomes a new test, so it cannot come back.",
  },
  {
    title: "Found before the club calls",
    body: "We watch for errors and slow screens ourselves, so most problems are fixed before a member or a manager notices them.",
  },
  {
    title: "Nothing switched off early",
    body: "Each system stays on until its replacement has run at the club and been signed off. Moving is club by club, never all at once.",
  },
  {
    title: "Your team moves up, not out",
    body: "Hours spent re-keying, reconciling and chasing tickets go back to members, events and the course. The work changes; the people stay.",
  },
];

export default function ProposalStory() {
  return (
    <>
      <section className="gc-section" id="why-managed">
        <div className="container">
          <div className="gc-head">
            <p className="gc-kicker">Four ways to run club software</p>
            <h2 className="gc-h2">Who carries the work, in each model</h2>
            <p className="gc-sub">
              Most of what a club spends on systems is not the licences. It is the people and time that build, connect,
              test and support them. This is where that work lands in each way of running it.
            </p>
          </div>
          <div className="cp-ptable-scroll" tabIndex={0} role="region" aria-label="Four ways to run club software">
            <table className="cp-ways">
              <caption className="cp-sr">Who carries each job in four ways of running club software</caption>
              <thead>
                <tr>
                  <th scope="col">The job</th>
                  {WAYS.map((w) => (
                    <th key={w.key} scope="col" className={w.key === "managed" ? "cp-ways-us" : undefined}>
                      <span className="cp-ways-name">{w.name}</span>
                      <span className="cp-ways-sub">{w.sub}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.job}>
                    <th scope="row">{r.job}</th>
                    {WAYS.map((w) => {
                      const c = r.cells[w.key];
                      return (
                        <td key={w.key} className={w.key === "managed" ? "cp-ways-us" : undefined}>
                          {c.good ? (
                            <Check size={15} aria-hidden="true" className="cp-ways-mark" />
                          ) : (
                            <Minus size={15} aria-hidden="true" className="cp-ways-mark cp-ways-mark-off" />
                          )}
                          {c.text}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="gc-section gc-canvas" id="how-built">
        <div className="container">
          <div className="gc-head">
            <p className="gc-kicker">How it is built and kept working</p>
            <h2 className="gc-h2">AI does the building. People judge the result.</h2>
            <p className="gc-sub">
              AI is only as useful as the platform under it. Club Steward keeps one record, one set of permissions and
              logic that can be read and tested, so AI can build on it safely.
            </p>
          </div>
          <ol className="cp-eras" role="list">
            {ERAS.map((e) => (
              <li key={e.name} className={e.now ? "cp-era cp-era-now" : "cp-era"}>
                <b>{e.name}</b>
                <span>{e.body}</span>
              </li>
            ))}
          </ol>
          <ul className="cp-kept" role="list">
            {KEPT_WORKING.map((k) => (
              <li key={k.title}>
                <h3>{k.title}</h3>
                <p>{k.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
