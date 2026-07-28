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
- [x] shadow-it-mid-market-cost
- [x] rfp-questions-for-crm-portal-vendor
- [x] total-cost-of-ownership-saas-vs-custom
- [x] it-directors-guide-shadow-saas
- [x] crm-contract-renewal-red-flags

## Verticals — insurance
- [x] insurance-ams-per-seat-costs
- [x] insurance-client-portal-cost — published, scoped to policyholder self-service specifically (documents, COIs, claim status) rather than the internal-seat audit already covered in insurance-ams-per-seat-costs.

## Verticals — hospitality
- [x] hospitality-software-per-seat-costs
- [ ] hotel-staff-portal-flat-fee | A Flat-Fee Staff Portal for Hotels | how-to | hotel staff portal | /ai-for-hospitality — SKIPPED 2026-07-27: hospitality-software-per-seat-costs already pitches "the fix: a purpose-built staff portal" as its closing section. Reframe as a concrete implementation/rollout guide (screens, integration points, seasonal onboarding flow) before publishing, or it's a near-duplicate.

## Verticals — membership / associations / chapters
- [x] association-ams-cost-reduction
- [x] chapter-management-per-member-fees
- [x] member-portal-flat-fee

## Verticals — professional services / agencies
- [x] agency-client-portal-per-seat-cost
- [x] professional-services-psa-license-cost

## Buyer questions — round 2 (added 2026-07-27)
(all published — see round-1 checkmarks above)

## Verticals — professional services / agencies (round 2)
- [x] law-firm-client-portal-cost
- [ ] accounting-firm-client-portal-seat-cost | Why Accounting Firms Overpay for Client Portal Seats | education | accounting firm client portal cost | /custom-portal-development — hold until it can be scoped with a genuinely distinct angle (trust-accounting / tax-season document exchange specifics) from law-firm-client-portal-cost and agency-client-portal-per-seat-cost, both published 2026-07-28; three near-identical "vertical X overpays for client portal seats" posts in close succession risks reading as templated.

## Verticals — healthcare / wellness (new, seed for next batch)
- [x] healthcare-patient-portal-per-seat-cost
- [x] medical-practice-management-license-cost

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
- [x] crm-contract-renewal-red-flags

## Salesforce cost — round 2 (added 2026-07-28, all rounds above exhausted)
- [ ] salesforce-sandbox-license-cost | Salesforce Sandbox and Dev License Costs Nobody Budgets For | education | salesforce sandbox license cost | /reduce-crm-licensing-costs
- [ ] salesforce-cpq-license-cost | Salesforce CPQ License Costs vs. a Custom Quoting Tool | comparison | salesforce cpq cost | /custom-software-development
- [ ] salesforce-shield-cost | Salesforce Shield Pricing and When You Don't Actually Need It | education | salesforce shield cost | /custom-software-development
- [ ] crm-user-provisioning-deprovisioning-cost | The Hidden Cost of Manual CRM User Provisioning and Deprovisioning | education | crm user provisioning cost | /license-guard

## HubSpot cost — round 2 (added 2026-07-28, round 1 exhausted)
- [ ] hubspot-operations-hub-cost | Is HubSpot Operations Hub Worth Its Per-Seat Price Tag? | education | hubspot operations hub cost | /custom-software-development
- [ ] hubspot-enterprise-seat-cost-breakdown | What You're Actually Paying for in a HubSpot Enterprise Seat | education | hubspot enterprise seat cost | /reduce-crm-licensing-costs
- [ ] hubspot-content-hub-seat-cost | HubSpot Content Hub Seat Costs for Marketing Teams | education | hubspot content hub cost | /custom-software-development

## Process note (2026-07-28)
This run's Salesforce-cost and HubSpot-cost sections were both fully
exhausted (checked off in prior batches) — every unchecked topic left in the
backlog was a vertical, comparison, or buyer-question angle, so this batch
published 100% outside the "half SF/HubSpot" weighting guideline by
necessity, not by choice. Four new Salesforce-cost and three new HubSpot-cost
angles were seeded above (round 2) so the next batch can rebalance toward
that weighting.

Skipped/held this batch: `accounting-firm-client-portal-seat-cost` (would
have been a third near-identical "vertical X overpays for client portal
seats" post alongside `law-firm-client-portal-cost` and
`agency-client-portal-per-seat-cost`, both published this run — held for a
more distinct angle). `hotel-staff-portal-flat-fee` remains held per the
2026-07-27 note pending a genuine rollout-guide reframe. Remaining unchecked
inventory after this batch: `nonprofit-donor-database-per-seat-cost`,
`ecommerce-cs-seat-cost`, `shopify-plus-app-fee-stacking`,
`med-spa-scheduling-portal-cost`, `healthcare-referral-portal-cost`,
`api-integration-vs-middleware-cost`, plus the 7 Salesforce/HubSpot seeds
above — enough distinct depth for at least one more full batch.

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
