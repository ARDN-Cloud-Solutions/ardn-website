---
title: "How to Find and Remove Inactive Salesforce Users"
slug: "salesforce-inactive-user-cleanup"
excerpt: "A step-by-step process for finding dormant Salesforce seats, safely removing them, and stopping them from piling up again."
categories: "CRM Cost Reduction"
tags: "Salesforce, inactive users, license audit, cost reduction"
image_alt: "How to find and remove inactive Salesforce users — ARDN Cloud Solutions"
---
<p>Every Salesforce org accumulates dormant seats over time — someone changes roles, leaves the company, or was only ever added for a short-term project. Each one keeps billing at full price until someone notices. Finding and safely removing them is one of the fastest, lowest-risk ways to cut a Salesforce bill.</p>

<h2>Why inactive seats pile up</h2>
<p>Dormant licenses aren't usually a single mistake — they're the accumulation of normal business activity nobody circles back to clean up:</p>
<ul>
  <li><strong>Departures.</strong> IT deactivates the login for security, but the license itself often isn't freed up in the same step.</li>
  <li><strong>Role changes.</strong> Someone moves to a team that doesn't touch Salesforce, but their seat and permission set stay exactly as they were.</li>
  <li><strong>Project-based access.</strong> Contractors or cross-functional staff get added for a launch or migration, then never removed once it wraps.</li>
  <li><strong>Duplicate accounts.</strong> Re-provisioning after a name change, email change, or SSO migration sometimes leaves the old account active alongside the new one.</li>
</ul>

<h2>How to find them</h2>

<h3>1. Pull last-login data</h3>
<p>Setup → Users gives you a last-login column for every user in the org. Sort by it and flag anyone who hasn't logged in for 60–90 days as a candidate — the exact threshold depends on your business (a seasonal role might legitimately go quiet for months).</p>

<h3>2. Cross-check against HR records</h3>
<p>Last login alone misses people who are still employed but simply don't need Salesforce anymore after a role change. A quick reconciliation against your current org chart or HRIS export catches those.</p>

<h3>3. Check login history, not just last login</h3>
<p>A single stale "last login" date can hide a pattern — someone who logs in once a quarter to run one report is a very different case from someone who hasn't touched the system in a year. Login history (Setup → Login History) shows the pattern, not just the most recent point.</p>

<h3>4. Automate the scan if you're doing this regularly</h3>
<p>Doing this by hand once is manageable; doing it every quarter is tedious enough that it stops happening. Our <a href="https://ardncloudsolutions.com/license-guard">License Guard</a> app automates the dormant-seat scan on Salesforce so the audit runs itself instead of depending on someone remembering to do it.</p>

<h2>Removing vs. freezing a seat</h2>
<table>
  <thead>
    <tr><th>Action</th><th>What it does</th><th>When to use it</th></tr>
  </thead>
  <tbody>
    <tr><td>Deactivate the user</td><td>Blocks login, frees the license, keeps records/ownership intact</td><td>Departures, confirmed non-users</td></tr>
    <tr><td>Freeze the user</td><td>Blocks login but keeps the license assigned and billing</td><td>Short-term leave where they'll be back soon</td></tr>
    <tr><td>Reassign ownership first</td><td>Moves records/opportunities to an active user before deactivation</td><td>Anyone who owns open records</td></tr>
</tbody>
</table>
<p>Deactivating without reassigning ownership first is the most common way this goes wrong — records can end up orphaned or hard to find. Reassign ownership, confirm nothing depends on that user's automation (approval processes, assignment rules), then deactivate.</p>

<h2>Preventing seats from going dormant again</h2>
<p>A one-time cleanup gets you back to your real seat count, but it doesn't stay clean on its own. Tie license changes to your existing offboarding checklist (deactivate on the employee's last day, not "sometime after"), and put a recurring quarterly scan on the calendar — or automate it — so the next audit isn't a surprise project.</p>

<p>Cleanup gets you back to what you should be paying for right now — it doesn't change the fact that per-seat pricing keeps scaling with headcount as you grow. For that structural fix, see the full framework in <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">how to cut CRM licensing costs</a>, which covers moving light, occasional users to a flat-fee portal instead of a Salesforce seat entirely. The audit process pairs well with our <a href="https://cms.ardncloudsolutions.com/salesforce-license-audit-checklist/">full Salesforce license audit checklist</a> if you haven't run one yet.</p>

<h2>Frequently asked questions</h2>

<h3>Does deactivating a user delete their data?</h3>
<p>No. Deactivation blocks login and frees the license; the user's records, activity history, and anything they own stay in Salesforce. Reassign ownership of open records before deactivating so nothing becomes hard to find.</p>

<h3>What's a reasonable inactivity threshold before flagging a user?</h3>
<p>There's no single universal number — it depends on the role. 60–90 days with no login is a common starting point for most business roles, but check login history (not just the last date) before deciding, since some legitimate roles log in infrequently by design.</p>

<h3>Can we reclaim the license immediately after deactivating?</h3>
<p>Yes, in most cases the license is freed up as soon as the user is deactivated, and it's available to reassign to someone else or simply drop at renewal if you don't need it.</p>
