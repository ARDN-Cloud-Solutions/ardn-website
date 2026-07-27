# Blog content backlog — cost-reduction content engine

The daily content engine pulls unchecked topics from this list, writes full
posts (frontmatter + HTML) into `content/blog/`, runs the QA gate, and
publishes. Mark a topic `[x]` when its post is published. Add new distinct,
high-intent angles at the bottom as they're discovered — never publish a
near-duplicate of an existing post.

**Rules for the engine**
- Only publish genuinely distinct, high-intent topics. If nothing distinct
  remains, publish fewer (or none) that day and log that the backlog is thin —
  do NOT pad with near-duplicates.
- Weight roughly: half Salesforce/HubSpot per-seat cost, half spread across
  verticals + comparisons + buyer questions.
- Every post: honest (no fabricated stats/clients/metrics), >=2 internal
  money-page links, a sibling-post link, FAQ section, on-brand featured image.
- Cite only publicly verifiable pricing, labeled illustrative.

## Salesforce cost
- [x] how-to-identify-light-crm-users
- [x] ways-to-cut-crm-licensing-costs
- [x] salesforce-platform-license-vs-custom-portal
- [x] salesforce-license-audit-checklist
- [x] salesforce-experience-cloud-cost-explained
- [x] salesforce-inactive-user-cleanup
- [x] salesforce-renewal-negotiation-guide
- [ ] salesforce-partner-community-cost | The Real Cost of Salesforce Partner Communities | education | partner community license cost | /custom-portal-development — SKIPPED 2026-07-27: too close to salesforce-experience-cloud-cost-explained (Partner Community is a legacy Experience Cloud license type; same login/member pricing mechanism). Needs a materially different angle (e.g. migrating off the legacy SKU specifically) before it clears the distinctness bar, or drop it.
- [x] salesforce-flow-vs-custom-app-cost

## HubSpot cost
- [x] cut-hubspot-seat-costs
- [x] hubspot-seat-cost-vs-custom-portal
- [x] hubspot-paid-vs-free-seats
- [x] hubspot-service-hub-cost-reduction
- [x] hubspot-marketing-hub-contact-tier-cost

## Comparisons
- [x] custom-portal-vs-nocode-tool
- [x] build-vs-buy-crm-portal
- [x] custom-portal-vs-crm-migration
- [x] zendesk-freshdesk-agent-seat-cost

## Buyer questions (Ops / RevOps / CFO / IT)
- [x] saas-seat-sprawl-mid-market
- [x] per-seat-vs-flat-fee-pricing
- [x] cfo-guide-software-cost-reduction
- [ ] how-to-do-a-saas-spend-audit | How to Run a SaaS Spend Audit | how-to | saas spend audit | /reduce-crm-licensing-costs
- [ ] shadow-it-mid-market-cost | Shadow IT: The Hidden Per-Seat Cost Mid-Market Companies Don't Track | education | shadow it cost | /custom-software-development

## Verticals — insurance
- [x] insurance-ams-per-seat-costs
- [ ] insurance-client-portal-cost | A Client Portal for Insurance Without Per-Seat Fees | how-to | insurance client portal | /ai-for-insurance — reframe as an implementation/scoping guide (what screens/modules to include, integration approach, timeline, compliance) rather than the cost-case already made in insurance-ams-per-seat-costs, or it'll read as a near-duplicate.

## Verticals — hospitality
- [x] hospitality-software-per-seat-costs
- [ ] hotel-staff-portal-flat-fee | A Flat-Fee Staff Portal for Hotels | how-to | hotel staff portal | /ai-for-hospitality — SKIPPED 2026-07-27: hospitality-software-per-seat-costs already pitches "the fix: a purpose-built staff portal" as its closing section. Reframe as a concrete implementation/rollout guide (screens, integration points, seasonal onboarding flow) before publishing, or it's a near-duplicate.

## Verticals — membership / associations / chapters
- [x] association-ams-cost-reduction
- [x] chapter-management-per-member-fees
- [ ] member-portal-flat-fee | A Member Portal That Doesn't Bill Per Member | how-to | member portal cost | /membership-management

## Verticals — professional services / agencies
- [ ] agency-client-portal-per-seat-cost | Why Agencies Overpay for Client-Facing Software Seats | education | agency client portal cost | /custom-portal-development
- [ ] professional-services-psa-license-cost | PSA Tool License Costs for Professional Services Firms | education | psa license cost | /custom-software-development

## Buyer questions — round 2 (added 2026-07-27)
- [ ] rfp-questions-for-crm-portal-vendor | RFP Questions to Ask Before Buying a CRM Portal Add-On | how-to | crm portal rfp questions | /custom-portal-development
- [ ] total-cost-of-ownership-saas-vs-custom | Total Cost of Ownership: SaaS Add-Ons vs. Custom-Built Software | education | tco saas vs custom software | /compare/custom-software-vs-saas
- [ ] it-directors-guide-shadow-saas | An IT Director's Guide to Finding and Consolidating Shadow SaaS | how-to | shadow saas consolidation | /custom-software-development

## Verticals — professional services / agencies (round 2)
- [ ] law-firm-client-portal-cost | Client Portal Costs for Law Firms Without Per-Seat Practice Management Fees | how-to | law firm client portal | /custom-portal-development
- [ ] accounting-firm-client-portal-seat-cost | Why Accounting Firms Overpay for Client Portal Seats | education | accounting firm client portal cost | /custom-portal-development

## Verticals — healthcare / wellness (new, seed for next batch)
- [ ] healthcare-patient-portal-per-seat-cost | Patient Portal Software: Per-Seat Costs vs. a Custom Build | comparison | patient portal cost | /custom-portal-development
- [ ] medical-practice-management-license-cost | Practice Management Software License Costs Explained | education | practice management software cost | /custom-software-development

## Verticals — nonprofit (new, seed for next batch)
- [ ] nonprofit-donor-database-per-seat-cost | Donor Database Per-Seat Costs for Growing Nonprofits | education | nonprofit donor database cost | /custom-portal-development
