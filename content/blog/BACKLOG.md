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
- [x] hotel-staff-portal-flat-fee | Rolling Out a Flat-Fee Staff Portal for Hotels | how-to | hotel staff portal rollout | /custom-portal-development — published 2026-08-03 as a concrete rollout/implementation guide (screens, PMS integration direction, phased go-live sequence, seasonal-hire onboarding), resolving the hold with a genuinely distinct angle from the cost argument in `hospitality-software-per-seat-costs`.

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
(stale duplicate removed 2026-08-10 — this topic was already resolved and published under the retitled `accounting-firm-client-portal-seat-cost` post; see the "Verticals — professional services (resolved 2026-08-04)" section below for its checklist entry.)

## Verticals — healthcare / wellness (new, seed for next batch)
- [x] healthcare-patient-portal-per-seat-cost
- [x] medical-practice-management-license-cost

## Verticals — nonprofit (new, seed for next batch)
- [x] nonprofit-donor-database-per-seat-cost

## Verticals — e-commerce / retail (new, seed for next batch)
- [x] ecommerce-cs-seat-cost | Ecommerce Helpdesk Costs: Ticket Tiers, Not Seats | comparison | ecommerce support ticket pricing | /custom-portal-development — published 2026-08-03 with the Gorgias-style ticket-volume-tier mechanic (unlimited seats, billed by monthly ticket count, BFCM-spike and AI-agent double-billing angles), resolving the hold with a genuinely distinct mechanic from `zendesk-freshdesk-agent-seat-cost`'s per-agent-seat model.
(stale duplicate removed 2026-08-10 — already published; see the checked `shopify-plus-app-fee-stacking` entry under "Comparisons — round 2" below.)

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
- [x] vendor-lock-in-crm-portal-warning-signs — resolved 2026-08-08 with the technical/architectural angle flagged in the hold note: proprietary automation runtimes (Salesforce Flow/Apex, HubSpot workflows), non-standard data schemas, non-exportable configuration objects, and API rate limits that throttle bulk migration — distinct from the contract-clause coverage in `crm-contract-renewal-red-flags` and `rfp-questions-for-crm-portal-vendor`.
- [x] data-ownership-saas-vs-custom-portal — resolved 2026-08-08 with the compliance/data-residency angle flagged in the hold note: what HIPAA/GDPR/SOC 2 actually govern (handling obligations, not data location or export guarantees), subprocessor-chain disclosure, and the genuine infra-control difference in a custom build — distinct from the RFP-question and vendor-dependency coverage already published.

## Salesforce cost — round 5 (added 2026-07-31, round 4 exhausted)
- [x] salesforce-marketing-cloud-send-credit-cost | Salesforce Marketing Cloud Engagement: Where Send-Credit Costs Come From | education | salesforce marketing cloud pricing | /reduce-crm-licensing-costs
- [x] salesforce-health-cloud-cost | Salesforce Health Cloud Licensing Costs Beyond the Core CRM | education | salesforce health cloud cost | /custom-software-development
- [x] salesforce-commerce-cloud-gmv-pricing | Salesforce Commerce Cloud: How GMV-Based Pricing Actually Works | education | salesforce commerce cloud pricing | /compare/salesforce-commerce-cloud-alternatives

## HubSpot cost — round 5 (added 2026-07-31, round 4 exhausted)
- [x] hubspot-cms-hub-cost | HubSpot CMS Hub: What Forces the Pro Tier Jump | education | hubspot cms hub pricing | /custom-software-development — published scoped to the feature-gated tier cliff (HubDB, memberships, adaptive testing, multi-site/SSO), distinct from the seat-and-contact-tier angle already covered in `hubspot-content-hub-seat-cost`; mirrors the seat-cost/tier-jump pairing already validated for Service Hub.
- [x] hubspot-breeze-ai-credit-cost | HubSpot Breeze AI Credits: What Actually Consumes Them | education | hubspot ai pricing | /reduce-crm-licensing-costs

## Verticals — automotive / manufacturing (new, seed for next batch)
- [x] automotive-dealership-dms-seat-cost | Dealership Management System (DMS) Per-Seat Costs Explained | education | dealership management system cost | /custom-portal-development
- [x] manufacturing-erp-per-user-cost | Manufacturing ERP Per-User Licensing Costs Explained | education | manufacturing erp cost | /custom-software-development

## Verticals — fitness / veterinary (new, seed for next batch)
- [x] gym-membership-software-per-location-cost | Gym and Studio Membership Software: Per-Location and Per-Seat Costs | education | gym membership software cost | /custom-portal-development
- [x] veterinary-practice-management-software-cost | Veterinary Practice Management Software Per-Seat Costs Explained | education | veterinary practice management software cost | /custom-software-development

## Salesforce cost — round 6 (added 2026-08-03, round 5 exhausted)
- [x] salesforce-service-cloud-voice-cost | Salesforce Service Cloud Voice: Where the Per-Minute and Per-Seat Costs Stack | education | salesforce service cloud voice cost | /reduce-crm-licensing-costs
- [x] salesforce-loyalty-management-cost | Salesforce Loyalty Management Licensing Costs Explained | education | salesforce loyalty management cost | /custom-software-development
- [x] salesforce-manufacturing-cloud-cost | Salesforce Manufacturing Cloud: Licensing Beyond Standard Sales Cloud | education | salesforce manufacturing cloud cost | /custom-portal-development

## HubSpot cost — round 6 (added 2026-08-03, round 5 exhausted)
- [x] hubspot-payments-transaction-fee-cost | HubSpot Payments: What the Per-Transaction Fee Actually Costs | education | hubspot payments fee | /reduce-crm-licensing-costs
- [x] hubspot-commerce-hub-cost | HubSpot Revenue Hub: Seats, Fees, and Where They Overlap | education | hubspot revenue hub pricing | /custom-software-development — published under the Revenue Hub name (Commerce Hub was renamed mid-2026); reframed around the new per-seat CPQ requirement layered onto the historical transaction-fee-only billing.

## Verticals — restaurant / self-storage / home services (new, seed for next batch)
- [x] restaurant-pos-labor-software-per-location-cost | Restaurant POS and Labor Software: Per-Location and Per-Terminal Costs | education | restaurant pos software cost | /custom-portal-development
- [x] self-storage-facility-management-software-cost | Self-Storage Facility Management Software: Per-Unit and Per-Facility Costs | education | self storage software cost | /custom-software-development
- [ ] home-services-field-service-software-seat-cost | HVAC, Plumbing, and Electrical Field Service Software Seat Costs | education | home services field service software cost | /custom-portal-development — SKIP confirmed 2026-08-04: read the published `field-service-dispatch-software-seat-cost` before writing this — it already explicitly names the HVAC/plumbing/electrical/home-services segment and the same vendor set (ServiceTitan/Jobber/Housecall Pro) with the same per-technician/per-dispatcher-seat mechanic. There is no distinct angle left to scope here; drop this line unless a genuinely different mechanic (e.g. flat-rate pricebook licensing, technician-commission tracking) surfaces.

## Verticals — professional services (resolved 2026-08-04)
- [x] accounting-firm-client-portal-seat-cost | Why Accounting Firm Client Portals Bill in Different Ways | comparison | accounting firm client portal cost | /custom-portal-development — resolved a hold in place since 2026-07-28 with a genuinely distinct angle: contrasting the three pricing mechanics actually used in this vertical (SafeSend's per-return volume pricing, Suralink/Liscio/TaxDome's per-staff-seat pricing with typically-unlimited client guest access, and Canopy's hybrid per-seat-plus-per-client-record pricing) rather than repeating the generic "vertical X overpays for portal seats" framing already used for law-firm-client-portal-cost and agency-client-portal-per-seat-cost.

## Verticals — salons/spas/dental, apartment leasing (added 2026-08-04, resolved 2026-08-08)
- [x] salon-spa-software-per-provider-cost — published with the booth-rental/independent-contractor billing angle (per-booked-staff-member pricing applies identically to W-2 employees and booth-renting contractors, despite very different revenue economics), distinct from the treatment-rules/employee-model angle already published in med-spa-scheduling-portal-cost.
- [x] dental-practice-management-software-per-provider-cost — published scoped to multi-location DSO chair/location scaling (per-location base fees compounding across a growing portfolio, dental-specific 837D clearinghouse routing) vs. the general per-provider/medical-clearinghouse angle in medical-practice-management-license-cost.
- [x] apartment-leasing-software-per-unit-cost — published scoped to the leasing/resident-portal side (applications, resident communication, maintenance requests, per-unit pricing with minimum-fee floors that penalize small portfolios) vs. the owner/PM-operations side in property-management-software-per-unit-cost.

## Verticals — country club / private club (published 2026-08-08, backfilled here for backlog hygiene)
- [x] country-club-management-software-cost | Country Club Management Software: The Opaque-Pricing Problem | comparison | country club software cost | /custom-portal-development — published 2026-08-08 with the custom-quote-only, module-stacking mechanic (Jonas/Clubessential-tier suites publish no rate card; membership billing, tee-time booking, dining/POS, and mobile app are separately negotiated modules) — a genuinely new membership-adjacent vertical distinct from the association/chapter posts. Note: this line was omitted from the checklist when originally published (only covered in that day's process-note prose) — added now so the backlog accurately reflects published inventory.

## Salesforce cost — round 7 (added 2026-08-08, round 6 exhausted)
- [x] salesforce-mulesoft-integration-cost | Salesforce MuleSoft: How Integration Pricing Actually Works | education | salesforce mulesoft cost | /custom-software-development — published with the compute/vCore-based pricing mechanic (integration throughput and complexity, not headcount) as the distinguishing angle vs. the generic iPaaS/middleware coverage already published in api-integration-vs-middleware-cost.
- [x] salesforce-net-zero-cloud-cost | Salesforce Net Zero Cloud: Edition Pricing Explained | education | salesforce net zero cloud cost | /custom-software-development — published 2026-08-08 (second batch same day) with the flat per-org edition-tier mechanic (bundled CRM license count per tier, e.g. reported Starter/Growth editions bundling a small fixed number of licenses each) as the distinguishing angle — genuinely different from every other Salesforce post published so far, all of which describe per-seat, consumption-credit, or GMV/percentage-of-revenue pricing rather than a bundled-license edition tier. Reported dollar figures are third-party estimates (no official public rate card found); described the mechanic rather than asserting the specific numbers as confirmed pricing.
- [x] salesforce-government-cloud-cost | Salesforce Government Cloud Plus: The Premium Explained | education | salesforce government cloud cost | /reduce-crm-licensing-costs — published 2026-08-08 (second batch same day) with the percentage-surcharge-on-existing-spend mechanic (reported ~15% premium on net spend for compatible products hosted in the dedicated FedRAMP-authorized instance) — distinct from every other Salesforce post, none of which use a surcharge-on-other-spend model. Direct fetches to salesforce.com and a third-party explainer were blocked by network egress this run; relied on WebSearch-aggregated summaries and flagged the percentage as reported/illustrative, not an official published rate.

## HubSpot cost — round 7 (added 2026-08-08, round 6 exhausted)
- [x] hubspot-custom-objects-enterprise-cost | HubSpot Custom Objects: Why They Force an Enterprise Jump | education | hubspot custom objects cost | /custom-portal-development — published with the feature-gate angle (custom objects are Enterprise-only across every Hub, with no standalone Professional add-on to unlock them), distinct from the seat-utilization angle in cut-hubspot-seat-costs and the CMS-specific tier-cliff angle in hubspot-cms-hub-cost.
- [x] hubspot-reporting-data-add-on-cost | HubSpot's Reporting Add-On: A Second Fee on Top | education | hubspot reporting cost | /reduce-crm-licensing-costs — published 2026-08-08 (second batch same day): confirmed via research that a standalone Reporting Add-On (reported ~$200/mo, available regardless of Hub tier) genuinely exists separately from the custom report builder bundled into Professional-and-up — the distinct angle the hold note called for (unified cross-Hub dashboards vs. the bundled single-object/funnel builder), not a relabeling of hubspot-enterprise-seat-cost-breakdown's passing mention.

## Verticals — senior living, chiropractic/PT, car wash (added 2026-08-08, resolved same day)
- [x] senior-living-management-software-per-bed-cost | Senior Living Software: Per-Bed and Per-Facility Costs | education | senior living software cost | /custom-portal-development — published with the per-bed-plus-growth-clause mechanic (PointClickCare/MatrixCare; base fee scales with bed count, contractual growth clauses raise the rate as occupancy/beds increase, per-facility fees for portfolio operators, separate per-connection interface fees) — a genuinely new vertical, distinct from every other healthcare post published (patient portal, practice management, referral portal all use different mechanics).
- [x] chiropractic-pt-practice-management-software-cost | Chiropractic & PT Software: Visit-Based Pricing Costs | education | chiropractic software cost | /custom-software-development — published scoped to the mechanic distinction the hold note asked for: mainstream chiropractic platforms bill flat per-provider (like medical-practice-management-license-cost's general mechanic), but PT-specific platforms often bill by visit-volume tier or as a percentage of collections (4–6%, bundled RCM) — a genuinely different, revenue-linked mechanic not covered anywhere else on the site.
- [x] car-wash-membership-software-cost | Car Wash Membership Software: What It Actually Costs | comparison | car wash software cost | /custom-portal-development — published under a narrower, retitled scope (dropped "equipment rental" from the original seed title/slug — research found no substantiated pricing mechanic pairing car wash and equipment-rental software together, and forcing the combination would have been a padded, ungrounded angle). Scoped instead to the mechanic actually found in research: some car wash membership platforms take a revenue share of recurring membership dues rather than a flat per-location fee — distinct from gym-membership-software-per-location-cost's base-fee-plus-member-tier mechanic despite both being recurring-membership verticals.

## Verticals — daycare/childcare, HOA/community association, landscaping, funeral homes (added 2026-08-08, resolved 2026-08-10)
- [x] daycare-childcare-management-software-per-child-cost | Daycare Software: Per-Child Pricing Costs Explained | education | daycare software cost | /custom-portal-development — published with the per-child, continuously-recalculating billing mechanic (Brightwheel base+per-child add-on, Lillio/HiMama's transparent $8-12/child/mo rate) driven by weekly enrollment churn — distinct from school-district-sis-per-student-cost's annual, enrollment-locked district contract model.
- [x] hoa-community-association-management-software-cost | HOA Software: The Per-Unit Minimum-Fee Problem | education | HOA software cost | /custom-portal-development — published with the minimum-fee-floor mechanic (AppFolio's ~$0.80/unit with a ~$280/mo minimum that penalizes communities under ~200 units; PayHOA's tiered bands) plus the volunteer-board/assessment-governance buyer distinction — distinct from apartment-leasing-software-per-unit-cost's landlord-tenant leasing workflow and property-management-software-per-unit-cost's professional-PM-portfolio angle.
- [x] landscaping-lawn-care-field-service-software-cost | Landscaping Software: Per-Crew Seasonal Scaling Cost | education | landscaping software cost | /custom-software-development — published with the per-crew/per-user mechanic (Aspire's $39/mo/crew entry tier scaling to $300-500/user/mo at full platform; Service Autopilot up to ~$499/mo) and the seasonal-crew-scaling angle (spring ramp-up multiplies license count) — distinct from field-service-dispatch-software-seat-cost's stable year-round per-technician HVAC/plumbing/electrical workforce.
- [x] funeral-home-management-software-cost | Funeral Home Software: Per-Case Pricing Costs | education | funeral home software cost | /custom-software-development — published with the base-plus-per-case mechanic (Halcyon ~$295/mo base plus a case fee at volume) and the uncontrollable-volume angle (case count driven by regional mortality trends, not a business lever) — distinct from every other visit/ticket-volume-billed post (chiropractic-pt, ecommerce-cs) where the business can influence volume.

## Process note (2026-08-08 — batch 2)
Second content-engine run on 2026-08-08. The prior same-day batch (see the
process note immediately below) had already exhausted every ready-to-write
item in the backlog except one confirmed skip
(`home-services-field-service-software-seat-cost`) and 6 unresearched seeds.
Cloned the repo fresh this run (`ARDN-Cloud-Solutions/ardn-website` — not
pre-attached to the session, added via GitHub repo access and cloned to
`/workspace/ardn-website`), ran `npm ci` clean, then researched all 6
remaining seeds via WebSearch before writing anything, consistent with this
backlog's convention of not rubber-stamping seeds.

Published 6 posts this batch, roughly 3 Salesforce/HubSpot to 3 verticals —
back to the 50/50 weighting guideline after several batches skewed toward
verticals while the SF/HubSpot list was thin:

- `salesforce-net-zero-cloud-cost` — confirmed a genuinely distinct mechanic
  (flat per-org edition tiers with a bundled CRM license count, e.g. reported
  Starter/Growth editions) unlike any other Salesforce post published so far
  (per-seat, consumption-credit, and GMV/revenue-share mechanics are all
  already covered elsewhere).
- `salesforce-government-cloud-cost` — confirmed the mechanic the seed note
  asked for: a reported ~15% surcharge on net spend for compatible products
  hosted in the dedicated FedRAMP instance, not a standalone price list —
  distinct from every other Salesforce post.
- `hubspot-reporting-data-add-on-cost` — confirmed a standalone Reporting
  Add-On (reported ~$200/mo, available regardless of Hub tier) genuinely
  exists separately from the bundled custom report builder in Professional
  and up, resolving the hold with the distinct angle its note called for.
- `senior-living-management-software-per-bed-cost` — new vertical
  (PointClickCare/MatrixCare), per-bed-plus-growth-clause mechanic.
- `chiropractic-pt-practice-management-software-cost` — resolved with the
  angle its hold note asked for: PT-specific platforms' visit-volume-tier and
  percentage-of-collections (4-6%) billing is a genuinely different,
  revenue-linked mechanic from the flat per-provider pricing already covered
  in `medical-practice-management-license-cost` and mainstream chiropractic
  platforms.
- `car-wash-membership-software-cost` — published under a narrower, retitled
  scope. The original seed (`car-wash-equipment-rental-software-cost`) paired
  car wash software with equipment-rental software; research found no
  substantiated pricing mechanic connecting the two, so writing it as scoped
  would have forced an ungrounded combination. Retitled and rescoped to the
  mechanic research actually supported: some car wash membership platforms
  take a revenue share of recurring membership dues rather than a flat
  per-location fee, distinct from `gym-membership-software-per-location-cost`'s
  base-fee-plus-member-tier mechanic despite both being recurring-membership
  verticals.

Also backfilled a checklist line for `country-club-management-software-cost`
(published in the prior same-day batch but only recorded in that batch's
process-note prose, not as its own checklist item) so the backlog's checked
items accurately reflect everything actually published.

Direct fetches to `salesforce.com` and one third-party Salesforce-pricing
explainer were blocked by network egress this run (consistent with prior
runs' experience with `mulesoft.com`, `hubspot.com`, `vagaro.com`); relied on
WebSearch-aggregated summaries for the Net Zero Cloud edition figures and the
Government Cloud Plus surcharge percentage, and wrote both posts to describe
the pricing mechanic with the specific figures flagged as reported/illustrative
rather than confirmed official pricing, consistent with the site's existing
convention.

Remaining unchecked inventory after this batch: `home-services-field-service-
software-seat-cost` (confirmed skip, no distinct angle without a new
mechanic) and 4 new vertical seeds opened above (daycare/childcare, HOA/
community association, landscaping/lawn care, funeral homes) — all seeds,
not yet researched or vetted for distinctness. The Salesforce/HubSpot product
list is now genuinely exhausted of mainstream SKUs across 7 rounds; future
batches should treat any further Salesforce/HubSpot angle as requiring real
primary research into an increasingly obscure product, and should lean on
new verticals as the primary source of fresh, distinct topics going forward.

## Process note (2026-08-08)
Published 8 posts this batch. Resolved both long-held items from the 2026-07-30
buyer-questions round-4 backlog with the exact reframes their hold notes called
for: `vendor-lock-in-crm-portal-warning-signs` (technical/architectural lock-in
signals — non-portable automation runtimes, non-standard schemas, non-exportable
config objects, API rate limits — instead of contract clauses already covered
elsewhere) and `data-ownership-saas-vs-custom-portal` (what HIPAA/GDPR/SOC 2
actually govern vs. what they don't, subprocessor-chain disclosure, and genuine
infra-control differences, instead of a relabeled RFP-question comparison).
Also resolved all 3 salons/dental/apartment-leasing seeds from 2026-08-04 with
the specific distinct angles their seed notes called for (booth-rental billing
quirk, DSO location-scaling, leasing/resident-portal side) — confirmed each
against the relevant existing post before writing, no overlap found. Opened two
new Salesforce/HubSpot angles not previously seeded — `salesforce-mulesoft-
integration-cost` (compute/vCore pricing, distinct from the generic iPaaS post)
and `hubspot-custom-objects-enterprise-cost` (feature-gate-forced tier jump,
distinct from seat-utilization and CMS-tier-cliff posts) — plus a new vertical,
`country-club-management-software-cost` (opaque custom-quote-only pricing for
Jonas/Clubessential-tier private club software, a genuinely new membership-
adjacent vertical distinct from the association/chapter posts already published).

Researched real public pricing mechanics via web search before writing (MuleSoft's
vCore/compute-based licensing vs. newer usage-based Anypoint packaging; HubSpot's
consistent Enterprise-only gating of custom objects across every Hub with no
add-on unlock; dental DSO vendors' location-base-fee-plus-provider-count hybrid
model and the 837D dental clearinghouse format distinct from medical 837P;
AppFolio's per-unit-plus-minimum-fee resident-portal pricing; salon platforms'
identical per-booked-staff billing for employees and booth-rental contractors
despite very different revenue economics; Jonas/Clubessential's custom-quote-
only, no-published-rate-card club software market). Flagged several pricing
figures throughout this research as third-party-estimated rather than confirmed
against live vendor pricing pages (direct fetches to mulesoft.com, hubspot.com,
vagaro.com were blocked by network egress in this run) — wrote posts to describe
pricing mechanics and structural quirks rather than assert unverified dollar
figures, consistent with the site's existing convention.

The Salesforce/HubSpot product list remains thin after 7 rounds — the two new
angles opened this batch (MuleSoft, custom objects) required going slightly
outside the core CRM-hub product list into adjacent products (integration
platform) and cross-cutting features (data modeling) rather than another CRM
cloud/hub SKU. Seeded 2 more Salesforce and 1 more HubSpot angle above but
flagged all three as unresearched seeds needing primary-source verification
before writing, not confirmed-viable topics — future batches should prioritize
new verticals (senior living, chiropractic/PT, car wash seeded above) over
continuing to mine Salesforce/HubSpot, which is now genuinely running out of
mainstream, well-documented SKUs. This batch's weighting was 2 Salesforce/
HubSpot to 6 verticals/comparisons/buyer-questions — intentionally weighted
away from the 50/50 guideline given the thinning product list, consistent with
the direction set in the 2026-08-04 process note.

Remaining unchecked inventory after this batch: `home-services-field-service-
software-seat-cost` (confirmed SKIP, kept unchecked per its note — no distinct
angle without a new mechanic), 3 unresearched Salesforce/HubSpot seeds, and 3
unresearched new-vertical seeds (senior living, chiropractic/PT, car wash) —
enough raw seed material for at least one more batch, but all seeds need
primary research and a distinctness check before writing, not a rubber-stamp
publish.

## Process note (2026-08-04)
Published 8 posts this batch: all 3 Salesforce-round-6 seeds
(`salesforce-service-cloud-voice-cost`, `salesforce-loyalty-management-cost`,
`salesforce-manufacturing-cloud-cost`), both HubSpot-round-6 seeds
(`hubspot-payments-transaction-fee-cost`, `hubspot-commerce-hub-cost` —
published as Revenue Hub, confirming via web research that HubSpot renamed
Commerce Hub to Revenue Hub in 2026 and added a new per-seat CPQ requirement
on top of the historical transaction-fee-only model), both restaurant/
self-storage vertical seeds, and the long-held `accounting-firm-client-
portal-seat-cost` (resolved with a genuinely distinct three-mechanic
comparison angle — see note above). Roughly 5 Salesforce/HubSpot to 3
verticals/comparisons.

Did not write `home-services-field-service-software-seat-cost` as scoped:
read the published `field-service-dispatch-software-seat-cost` first and
confirmed it already explicitly covers HVAC/plumbing/electrical with the
same vendor set and mechanic — publishing the home-services post as scoped
would have been a near-duplicate. Marked as a confirmed skip rather than a
hold, since no new distinct angle is apparent without a different mechanic.

Researched real public pricing mechanics via web search before writing
(Salesforce Voice's dual per-user-seat-plus-metered-minutes structure and
annual-overage-cliff billing behavior; Loyalty Management's per-org
tiered-edition model with a bundled internal-user permission-set pool, not
per-member billing; Manufacturing Cloud's premium-edition-replaces-base-seat
structure with Channel Revenue Management for rebates as a separate
per-org/year add-on; HubSpot Payments' two-layer processing-fee-plus-
platform-fee structure with cards uncapped vs. ACH capped; the Commerce
Hub → Revenue Hub rename and its new CPQ seat requirement; restaurant POS's
per-terminal/per-location model vs. labor-scheduling tools' per-location
model with employee-count as a tier-gate rather than a linear seat charge;
self-storage's per-facility banded pricing plus a separate tenant-insurance
revenue-share layer; and the three genuinely distinct pricing mechanics in
the accounting-firm client-portal space). Flagged several conflicting or
unofficial figures during research and wrote posts to describe pricing
mechanics rather than assert unverified dollar amounts, consistent with the
site's existing convention.

Incidentally noticed two pre-existing issues while re-running the publisher
across all posts (unrelated to this batch's new content, not fixed this run
since fixing already-published posts is outside this engine's scope):
`member-portal-flat-fee` failed to update with a WordPress
`term_exists`/400 error on its category taxonomy term; `salesforce-omnistudio-
cost` was skipped by the QA gate for having only 1 internal money-page link
(needs a second money-page link added). Both existed before this run's edits
— worth a maintenance pass to fix the taxonomy conflict and add a money link,
but out of scope for the content-engine run itself.

Remaining unchecked inventory after this batch: `vendor-lock-in-crm-portal-
warning-signs` and `data-ownership-saas-vs-custom-portal` (both still held,
same narrow-angle notes as before, no new information this run), plus 3 new
seeds opened above (salon/spa, dental, apartment leasing). The Salesforce/
HubSpot product list is now quite thin — round 6 covered most of the
remaining well-known clouds/hubs: future batches should lean further into
new verticals rather than mining deeper into obscure Salesforce/HubSpot
SKUs, which are starting to require genuine primary research per product
rather than being readily distinguishable from what's already published.

## Process note (2026-08-03)
Published 11 posts this batch: all 3 Salesforce-cost-round-5 seeds
(`salesforce-marketing-cloud-send-credit-cost`, `salesforce-health-cloud-cost`,
`salesforce-commerce-cloud-gmv-pricing`), both HubSpot-cost-round-5 seeds
(`hubspot-cms-hub-cost`, `hubspot-breeze-ai-credit-cost`), all 4 new-vertical
seeds (`automotive-dealership-dms-seat-cost`, `manufacturing-erp-per-user-cost`,
`gym-membership-software-per-location-cost`,
`veterinary-practice-management-software-cost`), and — after resolving their
held reframes — `ecommerce-cs-seat-cost` and `hotel-staff-portal-flat-fee`.
Roughly 5 Salesforce/HubSpot to 6 verticals/comparisons, close to the 50/50
weighting guideline.

Resolved two long-held items with genuinely distinct reframes rather than
publishing them as originally scoped: `ecommerce-cs-seat-cost` was rewritten
around ticket-volume-tier pricing (unlimited seats, billed by monthly ticket
count, with BFCM-spike and AI-agent double-billing angles) instead of the
per-agent-seat mechanic already covered in `zendesk-freshdesk-agent-seat-cost`
— published as a direct seat-based-vs-ticket-based comparison, distinct enough
to earn a "Comparisons" category. `hotel-staff-portal-flat-fee` was rewritten
as a concrete rollout/implementation guide (screens, PMS integration
direction, phased go-live sequence, seasonal-hire onboarding) rather than
repeating the cost argument already made in
`hospitality-software-per-seat-costs`.

Also confirmed `hubspot-cms-hub-cost` is a real product (CMS Hub, now
packaged as part of Content Hub) that already has a published seat/contact-
tier post (`hubspot-content-hub-seat-cost`) — reframed it around the
feature-gated Professional/Enterprise tier cliff (HubDB, memberships,
adaptive testing, multi-site/SSO) instead, following the same seat-cost/
tier-jump pairing already validated for Service Hub in this backlog.
Researched real public pricing mechanics via web search before writing the
less-familiar products/verticals (Marketing Cloud Engagement's contact +
send-credit model, Health Cloud's premium per-user tier, Commerce Cloud's
GMV revenue-share model — including confirming no specific percentage is
officially published, so none is asserted as fact — HubSpot CMS/Content Hub's
current tier structure, Breeze AI's outcome-based agent pricing introduced
April 2026, and DMS/manufacturing-ERP/gym-software/veterinary-PM vendor
landscapes) to avoid asserting a pricing mechanism that doesn't actually
hold. Kept the site's existing convention of describing pricing mechanisms
rather than citing specific dollar figures as fact, given how much publicly
"reported" pricing for these products turned out to be third-party estimate
rather than official rate cards.

Still held, no new information to resolve either: `accounting-firm-client-
portal-seat-cost` (needs a trust-accounting/tax-season angle, held since
2026-07-28), `vendor-lock-in-crm-portal-warning-signs` (needs a technical/
architectural lock-in angle, held since 2026-07-31), `data-ownership-saas-
vs-custom-portal` (needs a narrower compliance/data-residency angle, held
since 2026-07-31).

Seeded 8 new angles above (3 Salesforce round 6, 2 HubSpot round 6, 3 new
verticals — restaurant/self-storage/home-services) so the next batch has
full-weighting depth. Flagged `home-services-field-service-software-seat-cost`
for a distinctness check against the already-published
`field-service-dispatch-software-seat-cost` before writing, since the two
could easily overlap depending on how the earlier post was scoped. Remaining
unchecked inventory after this batch: the 3 held items above plus the 8 new
round-6/vertical seeds — enough distinct depth for at least one more full
batch, though the topic space is visibly thinning: most remaining unchecked
items either need a genuine reframe to clear (the 3 held) or are seeds not
yet vetted against the full published list. Future batches should keep
opening new verticals (restaurant, self-storage, home services are seeded;
consider salons/spas, apartment leasing, or dental/dermatology practice
groups after that) rather than mining the existing Salesforce/HubSpot
product list much further, since the more obscure Salesforce clouds and
HubSpot features are starting to run out.

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

## CRM/ITSM platforms beyond Salesforce/HubSpot (added 2026-08-10, resolved same day)
- [x] microsoft-dynamics-365-per-user-licensing-cost | Microsoft Dynamics 365: Per-User Licensing Costs | education | microsoft dynamics 365 cost | /reduce-crm-licensing-costs — published with the base-and-attach mechanic (first Dynamics app at full tier price, each additional app on the same user discounted to a flat attach rate) — a genuinely different upsell lever than any Salesforce/HubSpot seat-tier-jump or feature-gate mechanic already covered.
- [x] servicenow-itsm-per-agent-licensing-cost | ServiceNow ITSM: Per-Fulfiller Licensing Costs | education | servicenow itsm cost | /custom-portal-development — published with the fulfiller-based (not per-requester) licensing mechanic plus the April 2026 three-tier overhaul (Foundation/Advanced/Prime) and AI-bundled-with-consumption-overage angle — a hybrid seat-plus-consumption mechanic distinct from every pure-per-seat or pure-consumption post already published.
- [x] zoho-crm-per-user-pricing-tiers | Zoho CRM: Per-User Pricing and Bundle Stacking | comparison | zoho crm pricing | /reduce-crm-licensing-costs — published with the Zoho One company-wide-per-employee bundle angle (prices against total headcount regardless of actual CRM usage) contrasted with the standard 4-tier per-CRM-user ladder — a distinct pricing unit (per-employee vs. per-CRM-user) not seen in any other CRM post on the site.

## Salesforce/HubSpot rounds — status check (2026-08-10)
Confirmed via research this run: the mainstream Salesforce and HubSpot SKU
list remains exhausted after 7+ rounds (see prior process notes). Rather than
force a further reach into obscure SKUs, this run treated "cutting per-seat
CRM licensing costs" broadly enough to cover other major per-seat CRM/ITSM
platforms buyers in this market actually evaluate (Microsoft Dynamics 365,
ServiceNow, Zoho) — each with a genuinely distinct pricing mechanic, not a
relabeled Salesforce/HubSpot post. Future batches should keep leaning on this
category (Pipedrive, Freshsales, NetSuite CRM are seeded below) alongside new
verticals, rather than forcing further Salesforce/HubSpot SKU posts.

## CRM/ITSM platforms — round 2 (new, seed for next batch, added 2026-08-10)
- [ ] pipedrive-per-user-pricing-tiers | Pipedrive CRM: Per-User Pricing and AI Credit Add-Ons | education | pipedrive pricing | /reduce-crm-licensing-costs — new, not yet researched; confirm current tier pricing and whether AI credits or automation are gated/metered separately from the per-seat price, and that the mechanic is genuinely distinct from Zoho's tier ladder and HubSpot's feature-gate pattern before writing.
- [ ] freshworks-freshsales-per-user-cost | Freshsales / Freshworks CRM Suite: Per-User Bundle Costs | education | freshsales pricing | /custom-portal-development — new, not yet researched; confirm whether Freshworks' cross-suite bundling (sales, support, IT) creates a distinct per-user mechanic from Zoho One's company-wide bundle, or if it's too similar to skip.
- [ ] netsuite-crm-per-user-cost | Oracle NetSuite CRM: Per-User Costs Inside an ERP Bundle | education | netsuite crm cost | /custom-software-development — new, not yet researched; confirm NetSuite's module-based/per-user licensing mechanic within a broader ERP suite (distinct buyer: finance/ops evaluating CRM as one module of a larger ERP decision, not a standalone CRM buy) before writing.

## Verticals — dance/martial arts studios, auto repair, pest control, campgrounds (new, seed for next batch, added 2026-08-10)
- [ ] dance-studio-class-management-software-cost | Dance Studio Class Management Software: Per-Student and Per-Family Costs | education | dance studio software cost | /custom-portal-development — new vertical, not yet researched; confirm real vendor/pricing-mechanic info (e.g. Jackrabbit Class/Dance) before writing. Note: the site has an existing `/signup-dance-studio` page, so this post can link there in addition to the standard money pages — check whether that page is stable enough to link before publishing. Confirm distinctness from gym-membership-software-per-location-cost (per-location/per-member, not per-student/family).
- [ ] martial-arts-gym-studio-software-cost | Martial Arts and Studio Management Software Costs | education | martial arts studio software cost | /custom-portal-development — new vertical, not yet researched; confirm real vendor/pricing info (e.g. Zen Planner) before writing — likely overlaps heavily with gym-membership-software-per-location-cost; only write if a genuinely distinct mechanic surfaces (e.g. per-program/belt-rank billing), otherwise skip and drop this line.
- [ ] auto-repair-shop-management-software-cost | Independent Auto Repair Shop Software: Per-Bay and Per-User Costs | education | auto repair shop software cost | /custom-software-development — new vertical, not yet researched; confirm real vendor/pricing-mechanic info (e.g. Shop-Ware, Tekmetric) before writing — check distinctness from automotive-dealership-dms-seat-cost (independent repair shops vs. franchised dealerships, likely a different per-bay/per-technician mechanic rather than dealership-wide DMS seats).
- [ ] pest-control-field-service-software-cost | Pest Control Field Service Software: Per-Technician and Per-Route Costs | education | pest control software cost | /custom-portal-development — new vertical, not yet researched; confirm real vendor/pricing-mechanic info (e.g. PestPac, FieldRoutes) before writing — check distinctness from field-service-dispatch-software-seat-cost and landscaping-lawn-care-field-service-software-cost (both published); only write if a genuinely different mechanic surfaces (e.g. chemical-application compliance billing, route-density pricing), otherwise skip.
- [ ] campground-rv-park-management-software-cost | Campground and RV Park Management Software: Per-Site Costs | education | campground software cost | /custom-software-development — new vertical, not yet researched; confirm real vendor/pricing-mechanic info (e.g. Newbook, CampLife) before writing — likely a genuinely new per-site pricing unit distinct from every per-seat/per-unit/per-bed vertical published so far.

## Process note (2026-08-10)
Cloned the repo fresh this run (not pre-attached to the session; added via
GitHub repo access to `ARDN-Cloud-Solutions/ardn-website` and cloned to
`/workspace/ardn-website`), ran `npm ci` clean. Found the backlog's unchecked
inventory was mostly stale: two lines (`accounting-firm-client-portal-seat-
cost`, `shopify-plus-app-fee-stacking`) were leftover duplicates of topics
already published under the same slug earlier in the file — removed those
two stale lines rather than re-writing already-published content. One item
(`home-services-field-service-software-seat-cost`) remains a confirmed skip
with no distinct angle. That left exactly 4 genuinely fresh, unresearched
vertical seeds (daycare/childcare, HOA/community association, landscaping/
lawn care, funeral homes) — researched all 4 via WebSearch before writing,
confirmed each has a real, distinct pricing mechanic and buyer pain point,
and published all 4.

That's only 4 posts, and all vertical (no Salesforce/HubSpot angle left to
pair them with per the prior process note's confirmed exhaustion after 7
rounds). Rather than pad with a weak SF/HubSpot SKU or a near-duplicate
vertical to hit a target count, extended the definition of "cutting per-seat
CRM licensing costs" to cover three other major per-seat CRM/ITSM platforms
mid-market buyers actually evaluate against Salesforce and HubSpot —
Microsoft Dynamics 365, ServiceNow ITSM, and Zoho CRM — researched each via
WebSearch and confirmed each has a genuinely distinct pricing mechanic (base-
and-attach module discounting, fulfiller-based-plus-AI-consumption hybrid,
and per-employee company-wide bundling, respectively) not already covered by
any Salesforce or HubSpot post. Published all 3, bringing this batch to 7
posts total (4 verticals + 3 CRM/ITSM platforms), restoring something close
to the 50/50 weighting the engine targets without writing a single
near-duplicate.

Seeded 3 new CRM/ITSM platform angles (Pipedrive, Freshsales/Freshworks,
NetSuite CRM) and 5 new vertical seeds (dance studio, martial arts studio —
flagged as a likely-skip pending a distinct mechanic, auto repair shop, pest
control — flagged as needing a distinct mechanic check against landscaping/
field-service, and campgrounds/RV parks) for the next batch, each with an
explicit note on what needs confirming before writing. Remaining unchecked
inventory after this batch: those 8 new seeds, `nonprofit-donor-database-
per-seat-cost`/`ecommerce-cs-seat-cost`/`med-spa-scheduling-portal-cost`/
`healthcare-referral-portal-cost`/`api-integration-vs-middleware-cost` (all
already show as checked above but are listed as still-open in the 2026-07-27
note below — that note predates several since-published posts and is now
stale; treat the checkbox state above as authoritative), and
`home-services-field-service-software-seat-cost` (confirmed skip, no distinct
angle without a new mechanic).

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
