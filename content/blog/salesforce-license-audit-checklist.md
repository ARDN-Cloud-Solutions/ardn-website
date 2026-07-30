---
title: "A Salesforce License Audit Checklist for RevOps"
slug: "salesforce-license-audit-checklist"
excerpt: "A step-by-step checklist for auditing Salesforce license spend — find dormant seats, wrong tiers, and light users before your next renewal."
categories: "CRM Cost Reduction"
tags: "Salesforce, license audit, RevOps, cost reduction, custom portals"
image_alt: "Salesforce license audit checklist for RevOps teams — ARDN Cloud Solutions"
---
<p>Most Salesforce license audits happen once a year, right before renewal, under time pressure — which is exactly when it's easiest to miss money. A proper audit isn't a single question ("are we using all our seats?"); it's a short sequence of checks that surface dormant seats, mismatched tiers, and users who never needed a full license in the first place. Here's the checklist RevOps teams can run in an afternoon.</p>

<h2>Before you start: pull three reports</h2>
<ul>
  <li><strong>User list with last-login dates</strong> — Setup → Users, or a report on the User object filtered by LastLoginDate.</li>
  <li><strong>License usage by type</strong> — Setup → Company Information shows how many of each license type you own vs. have assigned.</li>
  <li><strong>Permission set / profile assignments</strong> — so you can see who's on a full Sales or Service Cloud profile vs. a limited one.</li>
</ul>

<h2>The audit checklist</h2>

<h3>1. Flag dormant accounts</h3>
<p>Anyone with no login in 60–90 days is a candidate for deactivation. Cross-check against HR/offboarding records — a large share of dormant seats are simply former employees whose accounts were never removed. Tools like <a href="https://ardncloudsolutions.com/license-guard">License Guard</a> automate this scan continuously on Salesforce, so it doesn't rely on someone remembering to run a report before renewal.</p>

<h3>2. Separate dormant from light</h3>
<p>Dormant means "not logging in." Light means "logging in, but only touching one or two things." Both cost you money, but they need different fixes — dormant seats get reclaimed, light users get right-sized or moved off the platform entirely.</p>

<h3>3. Check license type against actual usage</h3>
<p>For every active user, ask: does their day-to-day work require full Sales/Service Cloud, or would a Platform license, a login-based license, or no Salesforce seat at all cover it? It's common to find staff on full Enterprise seats who only ever update a status field or check an order.</p>

<h3>4. Count integration and "just in case" seats</h3>
<p>Test accounts, integration users left over from old projects, and seats provisioned "for when they need it" all quietly bill every month. List every seat and require a name and a reason next to each one.</p>

<h3>5. Identify external users on internal licenses</h3>
<p>Partners, vendors, and customers sometimes end up on internal seats because it was the fastest way to get them access at the time. That's usually the most expensive way to grant limited external access — flag every external user for a licensing review.</p>

<h3>6. Total the reclaimable spend</h3>
<p>Add up dormant seats × your per-seat rate for a year-one reclaim number, then separately estimate what moving light and external users off per-seat licenses would save going forward. These are two different pools of savings — one-time reclaim vs. structural reduction.</p>

<table>
  <thead>
    <tr><th>Finding</th><th>Typical share of an org</th><th>Fix</th></tr>
  </thead>
  <tbody>
    <tr><td>Dormant (90+ days, no login)</td><td>~22–34% of paid seats, per License Guard's published benchmark</td><td>Deactivate / reclaim</td></tr>
    <tr><td>Wrong tier for the job</td><td>Varies by org</td><td>Right-size to Platform or login-based license</td></tr>
    <tr><td>Light, structurally low-usage</td><td>Often the majority of non-power users</td><td>Move to a flat-fee custom portal</td></tr>
    <tr><td>External on internal seat</td><td>Common in partner/vendor programs</td><td>Move to portal or external license</td></tr>
  </tbody>
</table>

<h2>What the audit doesn't fix</h2>
<p>An audit is a snapshot — seats drift back into dormancy every quarter as people change roles or leave. Continuous monitoring (License Guard is a free app built for this) keeps the list clean between audits. And for the light-user pool the audit surfaces, right-sizing tiers only goes so far, since even the cheapest per-seat tier still bills per person. The durable fix for that group is a <a href="https://ardncloudsolutions.com/custom-portal-development">custom portal</a> on a flat monthly fee, wired into Salesforce, that costs the same regardless of headcount. See the full framework in <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">how to cut CRM licensing costs</a>.</p>

<p>Once you've run the audit, bring the numbers to your renewal conversation — see our guide on <a href="/blog/salesforce-renewal-negotiation-guide">how to negotiate your Salesforce renewal</a>, and use the same audit method described in <a href="/blog/how-to-identify-light-crm-users">how to tell which CRM users you're overpaying for</a> to prioritize which light users to move first.</p>

<h2>Frequently asked questions</h2>

<h3>How often should we run this audit?</h3>
<p>At minimum, 60–90 days before every renewal, so there's time to act on the findings. Many RevOps teams also run a lighter monthly check for new dormant accounts, especially after headcount changes.</p>

<h3>Do we need special tooling to run this audit?</h3>
<p>No — everything above can be pulled from standard Salesforce reports. Free tools like License Guard just automate the dormant-seat scan so it runs continuously instead of once a year.</p>

<h3>What's the single biggest finding audits tend to miss?</h3>
<p>The light-user pool. Dormant seats are easy to spot and reclaim; light users who are technically active but only need a fraction of a full seat are harder to see in a login report alone, and they're usually the largest structural cost.</p>
