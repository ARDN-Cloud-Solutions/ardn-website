---
title: "How to Run a SaaS Spend Audit"
slug: "how-to-do-a-saas-spend-audit"
excerpt: "A practical, step-by-step process for auditing SaaS spend across your company — before deciding what to cut, downgrade, or restructure."
categories: "Buyer Guides"
tags: "SaaS spend audit, cost reduction, license audit, IT operations"
image_alt: "How to run a SaaS spend audit — ARDN Cloud Solutions"
---
<p>Most mid-market companies don't have a single, accurate list of what they're paying for software and who's actually using it — spend is spread across procurement records, expensed cards, and whatever IT remembers approving. A proper audit fixes that visibility gap before any cost decision gets made, and it's a more mechanical process than it sounds.</p>

<h2>Step 1: Build the inventory</h2>
<p>Pull every recurring software charge from finance/AP records, expensed card statements, and your SSO/identity provider's connected-app list — the SSO list often catches shadow-IT tools nobody formally procured. Cross-reference the three sources; the gaps between them are informative on their own.</p>

<h2>Step 2: Get license and seat counts per tool</h2>
<p>For each tool above a meaningful spend threshold, pull the current licensed seat count and the license tier each user is on. This is usually available in the vendor's own admin console (Salesforce Setup, HubSpot settings, etc.).</p>

<h2>Step 3: Pull usage data, not assumptions</h2>
<p>Seat count tells you what you're paying for; login and feature-usage data tells you what you're actually using. Export last-login dates and, where available, feature-level usage per seat. This step is what turns "we have 400 licenses" into "120 of those haven't logged in this quarter."</p>

<h2>Step 4: Classify every seat</h2>
<table>
  <thead>
    <tr><th>Classification</th><th>Signal</th><th>Action</th></tr>
  </thead>
  <tbody>
    <tr><td>Dormant</td><td>No login in 60-90+ days</td><td>Freeze, then reclaim</td></tr>
    <tr><td>Over-licensed</td><td>Active, but only using basic features</td><td>Downgrade tier</td></tr>
    <tr><td>Light/narrow user</td><td>Active, but touches one narrow workflow repeatedly</td><td>Candidate for flat-fee portal</td></tr>
    <tr><td>Core user</td><td>Active, using full feature set daily</td><td>Keep full seat</td></tr>
  </tbody>
</table>

<h2>Step 5: Quantify and prioritize</h2>
<p>Multiply seat count by per-seat cost for each category to see where the real money sits. Dormant and over-licensed seats are usually the fastest win; light/narrow users are where the bigger structural savings live, because that group's cost keeps growing with headcount indefinitely unless the model changes.</p>

<h2>Step 6: Act on the biggest lever first</h2>
<p>Reclaim dormant seats and downgrade over-licensed ones immediately — low risk, fast payoff. For light/narrow users, evaluate moving them to a <a href="https://ardncloudsolutions.com/custom-portal-development">custom flat-fee portal</a> synced to your core system, which is the move that stops the bill from scaling with headcount rather than just trimming today's number. See <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">reducing CRM licensing costs</a> for the CRM-specific version of this same audit, and <a href="https://ardncloudsolutions.com/blog/cfo-guide-software-cost-reduction">a CFO's guide to cutting software costs</a> for how this fits a broader cost strategy.</p>

<h2>Frequently asked questions</h2>

<h3>How often should a SaaS spend audit be repeated?</h3>
<p>Quarterly is a reasonable cadence for manual audits; some tools (like <a href="https://ardncloudsolutions.com/license-guard">License Guard</a> for Salesforce) automate the dormant/duplicate detection continuously so the audit doesn't fully reset to zero each quarter.</p>

<h3>What's the biggest blind spot in most audits?</h3>
<p>Shadow IT — tools expensed on individual cards or approved informally that never entered a central procurement record. The SSO connected-app list is usually the best single source for catching these.</p>

<h3>Do we need special software to run this audit?</h3>
<p>No — a spreadsheet and access to each vendor's admin console and your identity provider is enough for a first pass. Dedicated SaaS-management tools can automate parts of this at scale, but they're not required to get started.</p>
