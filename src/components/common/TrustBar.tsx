import { MapPin, Shield, Clock, Award, KeyRound } from "lucide-react";

/**
 * Trust signal strip — small, thin, dark bar with 4 social-proof signals.
 * Mounted under the hero on product pages and lead-magnet landing pages.
 *
 * CRO rationale: a single horizontal trust strip lifts conversion on
 * existing traffic without competing with the hero's primary CTA. Each
 * signal is calibrated to a specific buyer concern:
 *   - "US-based team" → credibility without limiting reach to one city.
 *   - "30+ yrs building software" → depth/experience, technology-broad
 *     (not Salesforce-specific, so we don't read as a one-stack shop).
 *   - "4-hour response SLA" → reduces "will they ghost me?" friction.
 *   - "No lock-in — cancel in 30 days" → concrete risk reversal.
 *   - "You own the IP & your data" → answers the #1 custom-software
 *     procurement objection; recurs in every page FAQ, now in the strip too.
 */
export default function TrustBar() {
  const items = [
    { Icon: MapPin, text: "US-based team" },
    { Icon: Award, text: "30+ yrs building software" },
    { Icon: Clock, text: "4-hour response SLA" },
    { Icon: KeyRound, text: "You own the IP & your data" },
    { Icon: Shield, text: "No lock-in — cancel in 30 days" },
  ];

  return (
    <aside
      aria-label="Trust signals"
      className="bg-[#12152e] text-white"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="container">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3 text-[13px] font-medium">
          {items.map(({ Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon
                size={14}
                strokeWidth={2}
                className="text-[#6b5dff] flex-shrink-0"
                aria-hidden
              />
              <span className="opacity-95">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
