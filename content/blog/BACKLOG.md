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
- [x] nonprofit-donor-database-per-seat-cost

## Verticals — e-commerce / retail (new, seed for next batch)
- [ ] ecommerce-cs-seat-cost | Cutting Customer-Service Seat Costs for E-Commerce Brands | how-to | ecommerce support seat cost | /custom-portal-development — HOLD: as scoped, this is a near-duplicate of the seasonal-agent-seat / escalation-contact angle already published in `zendesk-freshdesk-agent-seat-cost`. Only publish with a genuinely distinct mechanic — e.g. order/ticket-volume-based pricing tiers (Gorgias-style) rather than pure per-seat, or BFCM-specific seasonal spike math — not a vertical relabel of the same argument.
- [ ] shopify-plus-app-fee-stacking | When Shopify Plus App Fees Add Up to More Than a Custom Build | comparison | shopify app fees | /custom-ecommerce-development

## Verticals — wellness / med spa (new, seed for next batch)
- [x] med-spa-scheduling-portal-cost
- [x] healthcare-referral-portal-cost

## Buyer questions — round 3 (added 2026-07-27)
- [x] api-integration-vs-middleware-cost
- [x] crm-contract-renewal-red-flags

## Salesforce cost — round 2 (added 2026-07-28, all rounds above exhausted)
- [x] salesforce-sandbox-license-cost
- [x] salesforce-cpq-license-cost
- [x] salesforce-shield-cost
- [x] crm-user-provisioning-deprovisioning-cost

## HubSpot cost — round 2 (added 2026-07-28, round 1 exhausted)
- [x] hubspot-operations-hub-cost
- [x] hubspot-enterprise-seat-cost-breakdown
- [x] hubspot-content-hub-seat-cost

## Salesforce cost — round 3 (added 2026-07-29, round 2 exhausted)
- [x] salesforce-marketing-cloud-account-engagement-cost
- [x] salesforce-nonprofit-cloud-cost
- [x] salesforce-field-service-lightning-cost

## HubSpot cost — round 3 (added 2026-07-29, round 2 exhausted)
- [x] hubspot-vs-salesforce-tco-mid-market
- [x] hubspot-sales-hub-starter-to-pro-jump

## Verticals — logistics / field service (new, seed for next batch)
- [x] field-service-dispatch-software-seat-cost
- [x] logistics-tms-per-user-cost

## Verticals — real estate / property management (new, seed for next batch)
- [x] property-management-software-per-unit-cost
- [x] real-estate-crm-agent-seat-cost

## Comparisons — round 2 (added 2026-07-29)
- [x] shopify-plus-app-fee-stacking

## Salesforce cost — round 4 (added 2026-07-30, round 3 exhausted)
- [x] salesforce-omnistudio-cost
- [x] salesforce-data-cloud-cost
- [x] salesforce-einstein-ai-addon-cost

## HubSpot cost — round 4 (added 2026-07-30, round 3 exhausted)
- [x] hubspot-service-hub-ticket-tier-cost
- [x] hubspot-app-marketplace-addon-stacking

## Verticals — construction / trades (new, seed for next batch)
- [x] construction-project-management-software-seat-cost
- [x] gc-subcontractor-portal-cost

## Verticals — education / training (new, seed for next batch)
- [x] lms-per-learner-cost
- [x] school-district-sis-per-student-cost

## Buyer questions — round 4 (added 2026-07-30, prior rounds exhausted)
- [ ] vendor-lock-in-crm-portal-warning-signs | Vendor Lock-In Warning Signs in CRM and Portal Contracts | education | vendor lock-in crm | /rfp-questions-for-crm-portal-vendor — HOLD 2026-07-31: as scoped this overlaps heavily with the exit/lock-in clauses already covered in `crm-contract-renewal-red-flags` and `rfp-questions-for-crm-portal-vendor`. Only publish with a genuinely distinct angle — e.g. technical/architectural lock-in signals in the product itself (proprietary data schemas, non-portable customizations/workflows, API access restrictions) rather than contract-clause red flags, which are already well covered.
- [ ] data-ownership-saas-vs-custom-portal | Who Actually Owns Your Data: SaaS Contracts vs. a Custom-Built Portal | comparison | data ownership saas | /custom-portal-development — HOLD 2026-07-31: `rfp-questions-for-crm-portal-vendor` already asks "who owns portal-generated data" and export-format questions directly, and `total-cost-of-ownership-saas-vs-custom` already covers vendor-dependency risk. Needs a narrower, distinct angle (e.g. compliance/data-residency ownership, or infra-control specifics) before publishing, not a relabeled comparison of ground already covered.

## Salesforce cost — round 5 (added 2026-07-31, round 4 exhausted)
- [ ] salesforce-marketing-cloud-send-credit-cost | Salesforce Marketing Cloud Engagement: Where Send-Credit Costs Come From | education | salesforce marketing cloud pricing | /reduce-crm-licensing-costs
- [ ] salesforce-health-cloud-cost | Salesforce Health Cloud Licensing Costs Beyond the Core CRM | education | salesforce health cloud cost | /custom-software-development
- [ ] salesforce-commerce-cloud-gmv-pricing | Salesforce Commerce Cloud: How GMV-Based Pricing Actually Works | education | salesforce commerce cloud pricing | /compare/salesforce-commerce-cloud-alternatives

## HubSpot cost — round 5 (added 2026-07-31, round 4 exhausted)
- [ ] hubspot-cms-hub-cost | HubSpot CMS Hub: Seats, Page Views, and Where the Cost Comes From | education | hubspot cms hub pricing | /custom-software-development
- [ ] hubspot-breeze-ai-credit-cost | HubSpot Breeze AI Credits: What Actually Consumes Them | education | hubspot ai pricing | /reduce-crm-licensing-costs

## Verticals — automotive / manufacturing (new, seed for next batch)
- [ ] automotive-dealership-dms-seat-cost | Dealership Management System (DMS) Per-Seat Costs Explained | education | dealership management system cost | /custom-portal-development
- [ ] manufacturing-erp-per-user-cost | Manufacturing ERP Per-User Licensing Costs Explained | education | manufacturing erp cost | /custom-software-development

## Verticals — fitness / veterinary (new, seed for next batch)
- [ ] gym-membership-software-per-location-cost | Gym and Studio Membership Software: Per-Location and Per-Seat Costs | education | gym membership software cost | /custom-portal-development
- [ ] veterinary-practice-management-software-cost | Veterinary Practice Management Software Per-Seat Costs Explained | education | veterinary practice management software cost | /custom-software-development

## Process note (2026-07-31)
Published 9 posts this batch: all 3 Salesforce-cost-round-4 seeds
(`salesforce-omnistudio-cost`, `salesforce-data-cloud-cost`,
`salesforce-einstein-ai-addon-cost`), both HubSpot-cost-round-4 seeds
(`hubspot-service-hub-ticket-tier-cost`, `hubspot-app-marketplace-addon-stacking`),
both construction-vertical seeds (`construction-project-management-software-seat-cost`,
`gc-subcontractor-portal-cost`), and both education-vertical seeds
(`lms-per-learner-cost`, `school-district-sis-per-student-cost`) — a clean
9-post batch, roughly 5 Salesforce/HubSpot to 4 verticals, close to the 50/50
weighting guideline. Confirmed distinctness before writing: e.g.
`hubspot-service-hub-ticket-tier-cost` (tier jump forced by ticket-pipeline
limits, parallel to the already-published `hubspot-sales-hub-starter-to-pro-jump`
mechanic) is distinct from the already-published `hubspot-service-hub-cost-reduction`
(seat optimization for light/occasional agents, no tier-jump angle);
`construction-project-management-software-seat-cost` (internal PM/office/field
staff seats) vs. `gc-subcontractor-portal-cost` (external subcontractor access,
capped free-tier mechanic) follows the same internal-vs-external-portal
distinction already validated for insurance (`insurance-ams-per-seat-costs` vs.
`insurance-client-portal-cost`); `lms-per-learner-cost` (course-delivery,
active-learner billing) vs. `school-district-sis-per-student-cost` (enrollment
records/compliance, per-student billing) are distinct software categories with
distinct buyers despite both being K-12-adjacent. Researched real public
pricing mechanics (via web search) for the less-familiar products — OmniStudio,
Data Cloud's consumption-credit model, Agentforce's three overlapping pricing
mechanisms, HubSpot Service Hub's pipeline limits by tier, and construction/LMS/SIS
category pricing norms — before writing, to avoid asserting a pricing model that
doesn't actually hold for a given product; keep the site's existing convention
of describing pricing mechanisms rather than citing specific dollar figures.

Held, not published this batch: `vendor-lock-in-crm-portal-warning-signs` and
`data-ownership-saas-vs-custom-portal` — both would substantially overlap
existing coverage in `crm-contract-renewal-red-flags`, `rfp-questions-for-crm-portal-vendor`,
and `total-cost-of-ownership-saas-vs-custom` (exit terms, data ownership
questions, vendor-dependency risk are all already addressed there); see hold
notes above for the narrower angle each would need. Also still held from prior
notes (no new information to resolve either): `hotel-staff-portal-flat-fee`
(needs rollout-guide reframe, held since 2026-07-27), `accounting-firm-client-portal-seat-cost`
(needs a trust-accounting/tax-season angle, held since 2026-07-28),
`ecommerce-cs-seat-cost` (needs a volume-tier or BFCM-specific mechanic, held
since 2026-07-29).

Seeded 9 new angles above (3 Salesforce round 5, 2 HubSpot round 5, 4 new
verticals — automotive/manufacturing, fitness/veterinary) so the next batch
has full-weighting depth without repeating angles already covered. Remaining
unchecked inventory after this batch: the 5 held items above plus the 9 new
round-5/new-vertical seeds — enough distinct depth for at least one more full
batch.

## Process note (2026-07-30)
Published 10 posts this batch: all 5 remaining Salesforce/HubSpot round-3 seeds
(`salesforce-marketing-cloud-account-engagement-cost`,
`salesforce-nonprofit-cloud-cost`, `salesforce-field-service-lightning-cost`,
`hubspot-vs-salesforce-tco-mid-market`, `hubspot-sales-hub-starter-to-pro-jump`),
all 4 new-vertical seeds (`field-service-dispatch-software-seat-cost`,
`logistics-tms-per-user-cost`, `property-management-software-per-unit-cost`,
`real-estate-crm-agent-seat-cost`), and `shopify-plus-app-fee-stacking`. That's
a clean 50/50 split (5 Salesforce/HubSpot, 5 verticals/comparisons) per the
weighting guideline. Confirmed each topic distinct from existing posts before
writing — e.g. `salesforce-field-service-lightning-cost` (Salesforce-native
FSL add-on mechanic) vs. `field-service-dispatch-software-seat-cost`
(standalone, non-Salesforce trades dispatch SaaS) vs. `logistics-tms-per-user-cost`
(freight/carrier TMS) are three distinct software categories despite
adjacent-sounding names; `salesforce-nonprofit-cloud-cost` (free-license-ceiling
mechanic) is distinct from the already-published
`nonprofit-donor-database-per-seat-cost` (general donor DB per-seat pattern).

Not published this batch, still held from prior notes (no new information to
resolve either): `hotel-staff-portal-flat-fee` (needs rollout-guide reframe,
held since 2026-07-27), `accounting-firm-client-portal-seat-cost` (needs a
trust-accounting/tax-season angle distinct from the two published law-firm/
agency portal posts, held since 2026-07-28), `ecommerce-cs-seat-cost` (needs a
volume-tier or BFCM-specific mechanic distinct from
`zendesk-freshdesk-agent-seat-cost`, held since 2026-07-29).

Seeded 9 new angles above (3 Salesforce, 2 HubSpot, 2 construction/trades
verticals, 2 education verticals) plus 2 general buyer-question angles, so the
next batch has full-weighting depth. Remaining unchecked inventory after this
batch: the 3 held posts above, 9 new round-4 seeds, and 2 buyer-question
seeds — enough distinct depth for at least one more full batch.

## Process note (2026-07-29)
Published 11 posts this batch, rebalancing back toward the SF/HubSpot weighting
per the 2026-07-28 note: all 4 Salesforce-cost-round-2 and all 3 HubSpot-cost-
round-2 seeds (7 total), plus 4 genuinely distinct new angles —
`api-integration-vs-middleware-cost` (general comparison, not vertical),
`nonprofit-donor-database-per-seat-cost` (new vertical), and two wellness/
healthcare angles confirmed distinct from existing published posts before
writing: `med-spa-scheduling-portal-cost` (new wellness vertical, scheduling/
treatment-rules angle, distinct from any existing post) and
`healthcare-referral-portal-cost` (cross-organization referral coordination,
distinct from the patient-self-service angle in
`healthcare-patient-portal-per-seat-cost` and the internal-ops angle in
`medical-practice-management-license-cost`).

Skipped/held this batch: `ecommerce-cs-seat-cost` — as scoped in the backlog
it reduces to the same seasonal-agent-seat argument already published in
`zendesk-freshdesk-agent-seat-cost` with an e-commerce label on top; held
pending a genuinely distinct mechanic (see note above). `shopify-plus-app-fee-
stacking` held simply for scope/pacing, not a quality concern — clean to
publish next batch. `hotel-staff-portal-flat-fee` (held since 2026-07-27) and
`accounting-firm-client-portal-seat-cost` (held since 2026-07-28) remain held
per their existing notes — no new information this run to resolve either.

Seeded 7 new angles above (3 Salesforce, 2 HubSpot, 2 logistics/real-estate
verticals) so the next batch has full-weighting depth without repeating
angles already covered. Remaining unchecked inventory after this batch:
`ecommerce-cs-seat-cost` (held), `shopify-plus-app-fee-stacking`,
`hotel-staff-portal-flat-fee` (held), `accounting-firm-client-portal-seat-cost`
(held), plus the 7 new seeds — enough distinct depth for at least one more
full batch, with two verticals (logistics, real estate) opened up for the
batch after that.

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
