---
title: "HubSpot Payments: What the Transaction Fee Really Costs"
slug: "hubspot-payments-transaction-fee-cost"
excerpt: "HubSpot Payments bills a processing fee plus a separate platform fee on top, with cards uncapped and ACH capped. Where the two layers actually come from."
categories: "HubSpot Cost Optimization"
tags: "HubSpot, HubSpot Payments, payment processing, transaction fees, cost reduction"
image_alt: "HubSpot Payments transaction and platform fee structure explained — ARDN Cloud Solutions"
---
<p>HubSpot Payments isn't priced with a single processing rate — it's two fees stacked on the same transaction. A processing fee (which varies by payment method) and a separate platform fee (which varies by which processor is behind the transaction) both apply, and the gap between them is easy to miss until a business is moving meaningful volume through it.</p>

<h2>How the two-layer fee structure works</h2>
<ul>
  <li><strong>Cards are billed a processing percentage with no ceiling.</strong> Card transactions carry a percentage-based processing fee on every dollar processed, uncapped regardless of transaction size.</li>
  <li><strong>ACH/bank transfers carry a lower rate and a hard cap.</strong> Bank-debit transactions are billed at a lower percentage than cards, capped at a fixed dollar amount per transaction — for a large invoice, that cap is the difference between a modest flat fee and a card fee that scales with the invoice total.</li>
  <li><strong>A platform fee applies on top of processing, and it depends on which processor is used.</strong> Native HubSpot Payments carries a lower platform-fee rate than routing payments through Stripe inside HubSpot — Stripe's platform fee is described as uncapped across all transactions, on top of whatever HubSpot's own processing terms already charge.</li>
  <li><strong>Native HubSpot Payments is geo-gated.</strong> It's available to businesses located and operating in the US, UK, or Canada with a bank account in one of those countries; businesses outside that footprint are routed to Stripe by default, which carries the higher platform-fee tier.</li>
</ul>

<h2>Why the two-fee structure is easy to underbudget</h2>
<p>A business that quotes "HubSpot's processing fee" from memory is usually pricing only the first layer. The platform fee is a second, separate line that scales with total processed volume the same way the processing fee does — for a business doing meaningful monthly payment volume through HubSpot, that second layer compounds into a real cost that a seat-based HubSpot budget doesn't account for at all.</p>

<h2>Card vs. ACH: the practical difference</h2>
<table>
  <thead>
    <tr><th></th><th>Card payments</th><th>ACH / bank transfer</th></tr>
  </thead>
  <tbody>
    <tr><td>Processing fee</td><td>Percentage of transaction, uncapped</td><td>Lower percentage, capped per transaction</td></tr>
    <tr><td>Best for</td><td>Smaller transactions, faster settlement</td><td>Larger invoices, where the cap keeps the fee from scaling with size</td></tr>
    <tr><td>Platform fee</td><td>Applies on top regardless of method</td><td>Applies on top regardless of method</td></tr>
  </tbody>
</table>

<h2>Where the fix actually lives</h2>
<p>For a business collecting meaningful payment volume, the practical move is routing large invoices to ACH wherever the customer relationship allows it, since the capped fee structure avoids the percentage scaling that applies to cards. Beyond that, a <a href="https://ardncloudsolutions.com/custom-software-development">custom-built billing layer</a> that connects directly to a merchant processor can carry high-volume invoicing on a flat monthly fee instead of a percentage that scales with revenue, while HubSpot stays the CRM system of record. See <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">how to reduce CRM licensing costs</a> for the general pattern, and <a href="https://ardncloudsolutions.com/blog/hubspot-commerce-hub-cost">HubSpot Revenue Hub's seat-plus-transaction pricing</a> for how the two layers interact with CPQ seats.</p>

<h2>Frequently asked questions</h2>

<h3>Is HubSpot's platform fee the same regardless of which processor is used?</h3>
<p>No — native HubSpot Payments and Stripe-through-HubSpot carry different platform-fee rates, with Stripe's routed through HubSpot generally the higher of the two.</p>

<h3>Can any business use native HubSpot Payments?</h3>
<p>No — it's limited to businesses located and operating in the US, UK, or Canada with a bank account in one of those countries; businesses outside that footprint use Stripe instead.</p>

<h3>Does ACH avoid the platform fee entirely?</h3>
<p>No — the platform fee applies on top of processing regardless of payment method; ACH's advantage is a lower, capped processing rate, not an exemption from the platform fee.</p>
