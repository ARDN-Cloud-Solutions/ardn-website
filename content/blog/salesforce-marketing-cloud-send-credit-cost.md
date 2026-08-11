---
title: "Salesforce Marketing Cloud Send-Credit Costs Explained"
slug: "salesforce-marketing-cloud-send-credit-cost"
excerpt: "Marketing Cloud Engagement bills on contact tiers and send credits, not seats. Where that meter actually runs, and what drives overage."
categories: "Salesforce Cost Optimization"
tags: "Salesforce, Marketing Cloud, send credits, email marketing, cost reduction"
image_alt: "Salesforce Marketing Cloud send-credit costs explained — ARDN Cloud Solutions"
---
<p>Marketing Cloud Engagement doesn't price like the rest of the Salesforce ecosystem. Sales and Service Cloud bill per named user; Marketing Cloud Engagement bundles a contact allowance and a pool of send credits — email, SMS, push, and increasingly Data 360 credits — into each edition, then charges overage once you exceed either. That's a different cost-reduction problem than a per-seat license, and it catches teams off guard when a campaign push or a database-growth spurt runs the meter faster than headcount ever would.</p>

<h2>What actually drives the bill</h2>
<ul>
  <li><strong>Contact volume, not user count.</strong> Every edition caps how many marketing contacts you can hold before triggering a tier increase — a growing subscriber list moves the bill even if the marketing team hasn't added a single new user.</li>
  <li><strong>Send credits by channel.</strong> Email, SMS, and push each draw from their own allowance; a heavier send cadence in one channel — more frequency, more journeys, more re-engagement campaigns — burns that channel's credits faster regardless of list size.</li>
  <li><strong>Overage once allowances are exhausted.</strong> Exceeding the bundled contact or send allowance triggers additional charges outside the base subscription, and a seasonal campaign push (a holiday send calendar, a product launch) can spike usage well past a typical month's baseline.</li>
  <li><strong>Data 360 credits riding along.</strong> Newer packaging bundles data-platform credits into the same allowance pool that email and mobile sends draw from, so AI-driven personalization and journey features can quietly compete with core sends for the same budget.</li>
</ul>

<h2>Why the seat-based playbook doesn't transfer</h2>
<p>The standard Salesforce cost-reduction move — audit who's logged in, reclaim dormant licenses, move light users to a portal — targets per-user billing. Marketing Cloud Engagement isn't counting logins; it's counting contacts and credits consumed. Reducing the number of marketers with platform access does nothing to a bill driven by list size and send volume, which is why this deserves its own audit separate from the rest of a Salesforce license review.</p>

<h2>Where the spend actually needs scrutiny</h2>
<table>
  <thead>
    <tr><th>Cost driver</th><th>Common overspend pattern</th></tr>
  </thead>
  <tbody>
    <tr><td>Contact allowance</td><td>Stale, unengaged, or duplicate contacts counted against the tier long after they stopped opening anything</td></tr>
    <tr><td>Send credits</td><td>Sending every segment every campaign instead of targeting the subset likely to engage</td></tr>
    <tr><td>Seasonal spikes</td><td>Holiday or launch calendars planned without checking remaining allowance first</td></tr>
    <tr><td>Data 360 credits</td><td>AI personalization features left running against full volume after a pilot ends</td></tr>
  </tbody>
</table>

<h2>Where a custom-built layer fits instead</h2>
<p>Not every send needs to go through the full Marketing Cloud Engagement pipeline. For a narrow, well-defined notification — a transactional status update, a single triggered reminder tied to one workflow — a <a href="https://ardncloudsolutions.com/custom-software-development">custom-built notification layer</a> reading from your existing systems can handle that specific case on a flat monthly fee, without routing it through consumption-priced contact and send allowances it doesn't need. See <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">how to reduce CRM licensing costs</a> for the seat-based version of this same over-provisioning pattern, and <a href="https://ardncloudsolutions.com/blog/salesforce-data-cloud-cost">Salesforce Data Cloud's consumption-credit model</a> for a closely related mechanic — both bill by activity rather than by user.</p>

<h2>Frequently asked questions</h2>

<h3>Does reducing Marketing Cloud user count lower this bill?</h3>
<p>Not directly. Contact volume and send credits are the meter here, not named users — a smaller marketing team can still be sitting on a large, stale contact database driving tier cost.</p>

<h3>Is Marketing Cloud Engagement the same product as Marketing Cloud Account Engagement (Pardot)?</h3>
<p>No — they're separate products with separate pricing models. Account Engagement is priced by edition and contact tier for B2B lead-nurture use cases; Engagement is the consumer-scale, credit-based platform this article covers.</p>

<h3>Can we forecast send-credit consumption before a campaign push?</h3>
<p>Salesforce provides usage-reporting tools inside the platform to check remaining allowance before a major send — worth checking ahead of any seasonal calendar, since overage rates apply once you're past it.</p>
