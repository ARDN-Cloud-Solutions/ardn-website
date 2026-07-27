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
- [x] salesforce-partner-community-cost — published with a partner-network-growth angle (turnover, seasonal partners, cost scaling with network size) distinct from the general login/member pricing mechanics already covered in salesforce-experience-cloud-cost-explained; flagged here as a borderline call for editorial review, not a clean SKIP.
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
- [x] how-to-do-a-saas-spend-audit
- [ ] shadow-it-mid-market-cost | Shadow IT: The Hidden Per-Seat Cost Mid-Market Companies Don't Track | education | shadow it cost | /custom-software-development

## Verticals — insurance
- [x] insurance-ams-per-seat-costs
- [x] insurance-client-portal-cost — published, scoped to policyholder self-service specifically (documents, COIs, claim status) rather than the internal-seat audit already covered in insurance-ams-per-seat-costs.

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

## Verticals — e-commerce / retail (new, seed for next batch)
- [ ] ecommerce-cs-seat-cost | Cutting Customer-Service Seat Costs for E-Commerce Brands | how-to | ecommerce support seat cost | /custom-portal-development
- [ ] shopify-plus-app-fee-stacking | When Shopify Plus App Fees Add Up to More Than a Custom Build | comparison | shopify app fees | /custom-ecommerce-development

## Verticals — wellness / med spa (new, seed for next batch)
- [ ] med-spa-scheduling-portal-cost | A Flat-Fee Scheduling Portal for Med Spas and Wellness Clinics | how-to | med spa scheduling software cost | /custom-portal-development
- [ ] healthcare-referral-portal-cost | Cutting Per-Seat Costs for Healthcare Referral Coordination | education | healthcare referral portal | /custom-portal-development

## Buyer questions — round 3 (added 2026-07-27)
- [ ] api-integration-vs-middleware-cost | API Integration Costs vs. Paying for Middleware Seats | comparison | integration platform cost | /custom-software-development
- [ ] crm-contract-renewal-red-flags | Red Flags to Check Before Signing Your Next CRM Renewal | education | crm renewal red flags | /savings-calculator

## Process note (2026-07-27)
Two concurrent runs of this engine independently picked nearly the same 7
next-in-line topics from the backlog within minutes of each other (see git
history around this date). Both wrote and QA-passed their own versions;
whichever run's `--publish` call landed last on a given slug is the version
that stayed live, and that run's file is what's committed here. No content
was lost — the losing versions are recoverable from git history on the
`backup-mine` branch — but future runs should be aware the backlog's
strict top-to-bottom order makes this collision likely if two runs
overlap in time.
