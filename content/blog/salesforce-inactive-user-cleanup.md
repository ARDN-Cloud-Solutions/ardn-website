---
title: "How to Find and Remove Inactive Salesforce Users"
slug: "salesforce-inactive-user-cleanup"
excerpt: "A step-by-step process for finding dormant Salesforce licenses, freezing them safely, and stopping them from creeping back."
categories: "Salesforce Cost Optimization"
tags: "Salesforce, inactive users, license audit, cost reduction, License Guard"
image_alt: "How to find and remove inactive Salesforce users — ARDN Cloud Solutions"
---
<p>Every Salesforce org accumulates dormant licenses: people who changed roles, contractors whose project ended, employees who left without an offboarding ticket ever reaching IT. None of them log in anymore, and all of them are still billed at full price until someone notices. This is the cleanup process, start to finish.</p>

<h2>Step 1: Pull last-login data</h2>
<p>Setup → Users gives you a Last Login column, and the <em>Login History</em> and <em>Identity Verification History</em> reports go deeper if you need date ranges. Export the full user list with last-login timestamps rather than eyeballing the UI — you want a spreadsheet you can sort and filter.</p>

<h2>Step 2: Set a dormancy threshold and flag accounts</h2>
<p>60–90 days with zero logins is a reasonable default for most orgs — long enough to not catch someone back from parental leave, short enough to catch role changes and departures promptly. Flag anything past that threshold, and cross-reference against your HR system if you have one; a name that's already termed in HR but still active in Salesforce is the highest-priority fix.</p>

<h2>Step 3: Don't just delete — freeze first</h2>
<p>Deactivating a user in Salesforce can break record ownership, approval chains, and automation tied to that user ID. Freeze the user first (Setup → Users → Freeze), which blocks login immediately without releasing the license or disturbing ownership. Confirm nothing breaks for a business cycle, then deactivate and reassign records as needed.</p>

<h2>Step 4: Reclaim or downgrade the license</h2>
<p>Once a seat is confirmed dormant, either remove the license entirely (if headcount actually shrank) or hold it in a pool for the next hire rather than buying a fresh one at renewal. Either way, get the freed seat off the active bill — this is the step that's easy to skip and expensive to forget.</p>

<h2>Step 5: Stop it from recurring</h2>
<p>A one-time cleanup fixes today's bill; it doesn't stop the same drift happening again in six months. Two things prevent recurrence: tying Salesforce deactivation to your HR/identity offboarding workflow so it's automatic, and running a scheduled scan instead of an annual fire drill. <a href="https://ardncloudsolutions.com/license-guard">License Guard</a> runs this scan continuously and flags dormant and duplicate seats as they appear, so cleanup stops being a quarterly project.</p>

<table>
  <thead>
    <tr><th>Approach</th><th>Frequency</th><th>Effort</th></tr>
  </thead>
  <tbody>
    <tr><td>Manual export + review</td><td>Ad hoc / annual</td><td>Hours, repeated each time</td></tr>
    <tr><td>Scheduled report + calendar reminder</td><td>Quarterly</td><td>Lower, still manual</td></tr>
    <tr><td>Continuous automated scan (License Guard)</td><td>Ongoing</td><td>Set up once, runs itself</td></tr>
  </tbody>
</table>

<h2>What this doesn't fix</h2>
<p>Inactive-user cleanup recovers seats you're already paying for and shouldn't be — it's a maintenance task, not a structural fix. If a large share of your licensed users are active but only doing a handful of narrow tasks (checking a status, submitting a form, pulling a report), the fix is different: move them to a <a href="https://ardncloudsolutions.com/custom-portal-development">flat-fee custom portal</a> synced to Salesforce instead of a per-seat license. See the full breakdown in <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">how to reduce CRM licensing costs</a>, and pair this cleanup with a broader look at <a href="https://ardncloudsolutions.com/blog/how-to-identify-light-crm-users">how to identify your light CRM users</a>.</p>

<h2>Frequently asked questions</h2>

<h3>Will freezing a user break their existing records or workflows?</h3>
<p>No — freezing blocks login only. Ownership, record history, and automation tied to that user ID stay intact, which is why it's the safer first step before deactivating.</p>

<h3>How often should we run this cleanup?</h3>
<p>Quarterly at minimum if done manually; continuously if automated. Seat drift happens between every hiring and departure cycle, so an annual review misses months of avoidable spend.</p>

<h3>What if a "dormant" user turns out to still need access occasionally?</h3>
<p>That's usually a sign they need a lighter-weight tool, not a full seat — a custom portal for occasional access costs nothing extra per person and doesn't require reactivating a full license for infrequent use.</p>
