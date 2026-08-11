---
title: "Salesforce Voice: Where Per-Minute Costs Stack on Seats"
slug: "salesforce-service-cloud-voice-cost"
excerpt: "Salesforce Voice (formerly Service Cloud Voice) bills a per-user seat plus metered telephony minutes on top. How the two meters interact."
categories: "Salesforce Cost Optimization"
tags: "Salesforce, Service Cloud Voice, Salesforce Voice, telephony, cost reduction"
image_alt: "Salesforce Voice per-seat and per-minute telephony costs explained — ARDN Cloud Solutions"
---
<p>Salesforce Voice (the product long known as Service Cloud Voice) is licensed on two separate meters at once: a per-user monthly seat, and metered telephony consumption stacked on top of it. Contact centers that budget only for the seat price are the ones most likely to get an unpleasant invoice the month call volume runs over.</p>

<h2>How the two meters actually work</h2>
<ul>
  <li><strong>The seat covers the agent console, not the minutes.</strong> Voice with Amazon Connect bundles a set number of minutes into the per-user seat price; Voice with Partner Telephony (bring-your-own-carrier) charges the seat alone and bills minutes separately through whichever carrier the org already uses.</li>
  <li><strong>Bundled minutes are an allowance, not a cap that quietly resets.</strong> Salesforce's own billing documentation describes overage as billed for the month it happens <em>and every month for the rest of the annual term</em> once the org exceeds its purchased annual minute maximum — a cliff that's easy to hit during a seasonal call spike and expensive to walk back down from mid-year.</li>
  <li><strong>Phone numbers are billed separately, per day.</strong> DID and toll-free numbers carry their own per-day charge on top of per-second call charges, so a contact center's number inventory is its own recurring line item independent of agent seats.</li>
  <li><strong>Einstein Conversation Insights is a separate per-user product.</strong> Call transcription, sentiment, and coaching analytics don't come bundled with the Voice seat — they're licensed and billed on their own meter, whether or not the org uses Service Cloud Voice at all.</li>
</ul>

<h2>Why this catches contact centers off guard</h2>
<p>Seat-based CRM pricing is a familiar budgeting exercise: multiply headcount by list price. Telephony consumption doesn't behave the same way — call volume moves with customer demand, seasonality, and campaign timing, not headcount, so a fixed per-user forecast can miss the actual monthly bill by a wide margin once minutes, DID fees, and overage combine.</p>

<h2>Salesforce Voice vs. a narrower custom telephony layer</h2>
<table>
  <thead>
    <tr><th></th><th>Salesforce Voice</th><th>Custom-built call/portal layer</th></tr>
  </thead>
  <tbody>
    <tr><td>Base cost</td><td>Per-user seat (varies by bundled-minute tier)</td><td>Flat monthly fee, independent of seat count</td></tr>
    <tr><td>Call volume cost</td><td>Metered minutes; overage persists for the rest of the annual term</td><td>Scoped to the org's actual telephony provider contract, no Salesforce-side overage cliff</td></tr>
    <tr><td>Best fit</td><td>Contact centers that want the full native Salesforce console and reporting</td><td>Teams that need call logging, click-to-dial, or a lighter agent view without licensing every seat at the Voice rate</td></tr>
    <tr><td>Phone numbers</td><td>Per-day DID/toll-free fees inside the Salesforce bill</td><td>Managed directly with the telephony provider</td></tr>
  </tbody>
</table>

<h2>Where the fix actually lives</h2>
<p>The useful audit isn't "cancel Voice" — for a contact center that genuinely needs the native console and Amazon Connect integration, it's real infrastructure. The opportunity is usually a subset of users licensed at the full Voice seat rate who only need call logging or basic click-to-dial against Salesforce records, not the full agent console. A <a href="https://ardncloudsolutions.com/custom-portal-development">custom-built portal</a> that reads and writes to Salesforce via API can carry that lighter workflow on one flat monthly fee instead of a per-user Voice license. See <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">how to reduce CRM licensing costs</a> for the general pattern, and <a href="https://ardncloudsolutions.com/blog/salesforce-license-audit-checklist">how to run a Salesforce license audit</a> for finding these seats before the next renewal.</p>

<h2>Frequently asked questions</h2>

<h3>Is Salesforce Voice the same product as Service Cloud Voice?</h3>
<p>Yes — Service Cloud Voice is the product's earlier name; it's currently marketed as Salesforce Voice, with the same per-user-plus-telephony licensing structure.</p>

<h3>Does bring-your-own-telephony avoid the per-minute Salesforce charge?</h3>
<p>It changes who bills the minutes, not whether they're billed — Partner Telephony (BYOT) charges the Salesforce seat alone and routes minute billing through the org's own carrier contract instead of Amazon Connect.</p>

<h3>What happens if a contact center exceeds its annual minute allowance?</h3>
<p>Per Salesforce's own billing documentation, overage is charged for the month it occurs and continues to be billed each subsequent month for the remainder of the annual term — so a one-time volume spike can have a longer-than-expected cost tail.</p>
