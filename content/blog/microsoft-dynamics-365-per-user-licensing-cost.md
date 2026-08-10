---
title: "Microsoft Dynamics 365: Per-User Licensing Costs"
slug: "microsoft-dynamics-365-per-user-licensing-cost"
excerpt: "Dynamics 365's base-and-attach model discounts extra apps for licensed users, which quietly rewards stacking more modules onto the same seats."
categories: "Microsoft Dynamics Cost Optimization"
tags: "Microsoft Dynamics 365, CRM licensing, per-user pricing, base and attach, custom software"
image_alt: "Microsoft Dynamics 365 per-user licensing costs explained — ARDN Cloud Solutions"
---
<p>Microsoft Dynamics 365's CRM-side apps — Sales, Customer Service, and the rest — license per user per month across a tiered structure, similar in shape to Salesforce or HubSpot. What's different is the "base-and-attach" pricing model: your first Dynamics app for a given user is licensed at full tier price, and each additional Dynamics app attached to that same user is discounted to a flat attach rate. That structure quietly rewards buying more modules for users you've already licensed, which is a different upsell lever than the seat-tier jumps or feature gates covered elsewhere on this site.</p>

<h2>How the per-user model actually works</h2>
<ul>
  <li><strong>Tiered per-user pricing by capability level.</strong> Reported Dynamics 365 Sales tiers run from around $8/user/month for a light Team Member license up to roughly $65 for Sales Professional, $105 for Sales Enterprise, and $150 for Sales Premium (which adds Copilot and conversation intelligence), billed annually.</li>
  <li><strong>Base-and-attach discounting.</strong> The first Dynamics app a user is licensed for is priced at its full tier rate; each additional qualifying Dynamics app attached to that same user is reportedly discounted to around $30/user/month — a mechanic designed to encourage expanding module footprint on users already on the platform rather than adding new seats.</li>
  <li><strong>Team Member licenses gate most write access.</strong> The $8/month tier covers light, read-mostly usage; anyone who needs to create or edit records meaningfully needs a full Professional-tier-or-above license, which is where the real per-user cost lives.</li>
  <li><strong>Premium features sit behind the top tier.</strong> AI-assisted selling and conversation intelligence are bundled only into the Premium tier, so unlocking them means moving every relevant user up the full tier ladder, not adding a smaller add-on.</li>
</ul>

<h2>Where the licensed platform still earns its keep</h2>
<p>Deep integration with the Microsoft 365 and Power Platform ecosystem — Outlook, Teams, Power BI, Power Automate — is Dynamics 365's real differentiator, and that integration work reflects genuine platform engineering that a custom build shouldn't try to replicate. The core sales-pipeline and case-management data model built on that ecosystem is usually not where the savings opportunity lives.</p>

<h2>Where the per-user math changes</h2>
<table>
  <thead>
    <tr><th></th><th>Dynamics 365 CRM apps</th><th>Custom-built portal on flat fee</th></tr>
  </thead>
  <tbody>
    <tr><td>Pricing</td><td>Per user, tiered, with base-and-attach module discounting</td><td>Flat monthly fee, independent of user count</td></tr>
    <tr><td>Light/occasional users</td><td>Still require a Team Member seat to view records</td><td>No per-seat cost for occasional access</td></tr>
    <tr><td>Best fit</td><td>Full pipeline and case-management workflows tied to Microsoft 365</td><td>Self-service portals, light reporting, and workflows outside the core CRM</td></tr>
    <tr><td>Adding a module</td><td>Discounted attach rate, but still a new per-user line item</td><td>One build, one fee, no per-module stacking</td></tr>
  </tbody>
</table>

<h2>Where the fix actually lives</h2>
<p>The light-user and self-service workload sitting around a Dynamics 365 deployment — status lookups, request forms, reporting dashboards for people who don't need full edit access — doesn't need a Team Member or Professional seat at all. A <a href="https://ardncloudsolutions.com/custom-portal-development">custom-built portal</a> synced to Dynamics via API can carry that workload on one flat monthly fee instead of licensing every occasional user. See <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">how to reduce per-seat CRM licensing costs</a> and the <a href="https://ardncloudsolutions.com/compare/salesforce-seat-cost-vs-custom-portal">seat-cost-vs-custom-portal comparison</a> for the same pattern applied to another major CRM.</p>

<p>Model the numbers for your own user count with the <a href="https://ardncloudsolutions.com/savings-calculator">savings calculator</a>, and see <a href="https://cms.ardncloudsolutions.com/hubspot-vs-salesforce-tco-mid-market/">HubSpot vs. Salesforce true cost of ownership</a> for how another CRM pair compares.</p>

<h2>Frequently asked questions</h2>

<h3>Does a custom portal replace Dynamics 365 entirely?</h3>
<p>No — it's built to sync with Dynamics via API. The core sales pipeline, case management, and Microsoft 365 integration stay in Dynamics; the portal covers light-user and self-service access that doesn't need a full per-user license.</p>

<h3>What is the "base-and-attach" model, exactly?</h3>
<p>It's Microsoft's discounting structure for users licensed across multiple Dynamics 365 apps: the first app for a user is billed at full tier price, and each additional app attached to that same user is billed at a lower flat rate — an incentive to expand module footprint on existing licensed users.</p>

<h3>Do occasional or read-only users need a paid license?</h3>
<p>Generally yes — Microsoft's Team Member tier covers light, mostly-read usage at a lower per-user rate, but anyone creating or editing records meaningfully needs a Professional-tier-or-above license, which is the more expensive part of the per-user bill.</p>
