---
title: "Field Service Lightning Licensing Costs Explained"
slug: "salesforce-field-service-lightning-cost"
excerpt: "Field Service Lightning bills per dispatcher, per mobile technician, and per scheduling-optimization add-on. Where that adds up for growing teams."
categories: "Salesforce Cost Optimization"
tags: "Salesforce, Field Service Lightning, field service, cost reduction, custom software"
image_alt: "Field Service Lightning licensing costs for growing teams — ARDN Cloud Solutions"
---
<p>Field Service Lightning (now often marketed as Salesforce Field Service) layers three separate license types on top of a standard Salesforce org — dispatcher, mobile technician, and contractor — each priced differently, with scheduling optimization sold as a further add-on. Teams that scoped a pilot for a handful of technicians often find the per-technician math doesn't stay flat as the crew grows.</p>

<h2>Where the field service bill comes from</h2>
<ul>
  <li><strong>Dispatcher licenses.</strong> The console users who assign and manage work orders carry a full Service Cloud-tier cost, separate from the technicians they're scheduling.</li>
  <li><strong>Mobile technician licenses.</strong> Each field technician using the mobile app to view work orders, capture signatures, and update job status needs their own license — a cost that scales linearly with crew size, including seasonal and contract technicians.</li>
  <li><strong>Scheduling optimization add-on.</strong> The automated, rules-based scheduling engine that actually optimizes routes and technician assignment is typically priced as an additional per-user add-on on top of the base Field Service license.</li>
  <li><strong>Contractor/partner technician access.</strong> Subcontracted technicians who need work-order visibility but aren't full employees often require a separate, still-billed license tier rather than free guest access.</li>
</ul>

<h2>Why growing field teams feel this first</h2>
<p>A field service org that starts with five technicians and scales to fifty hasn't changed its workflow — it's just added headcount, much of it seasonal or contractor-based. Because every one of those additions is a licensed seat, field service cost tends to scale in lockstep with crew size in a way that back-office CRM seat growth usually doesn't, since back-office headcount grows more slowly than field crews during a busy season.</p>

<h2>Salesforce Field Service vs. a custom dispatch tool</h2>
<table>
  <thead>
    <tr><th></th><th>Salesforce Field Service Lightning</th><th>Custom-built dispatch &amp; technician app</th></tr>
  </thead>
  <tbody>
    <tr><td>Cost driver</td><td>Per dispatcher + per technician + scheduling add-on</td><td>Flat monthly fee, no per-technician billing</td></tr>
    <tr><td>Best fit</td><td>Deep native integration with existing Salesforce Service Cloud case data</td><td>Standalone dispatch, mobile work-order, and technician workflows</td></tr>
    <tr><td>Seasonal scaling</td><td>Cost rises with every seasonal technician added</td><td>No per-technician penalty for seasonal crew growth</td></tr>
  </tbody>
</table>

<h2>Where the fix actually lives</h2>
<p>Field Service Lightning is a strong fit when work orders need to stay tightly wired to existing Salesforce Service Cloud case history and account data. It's a weaker fit when the core need is simply getting technicians a mobile app for job status, signatures, and routing — work a <a href="https://ardncloudsolutions.com/custom-software-development">custom-built application</a> can deliver on a flat fee regardless of crew size, still syncing back to Salesforce where that record matters. See <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">how to reduce CRM licensing costs</a> for the seat-based version of this pattern, and <a href="https://cms.ardncloudsolutions.com/field-service-dispatch-software-seat-cost/">field service dispatch software per-seat costs</a> for how this compares to standalone (non-Salesforce) dispatch platforms.</p>

<h2>Frequently asked questions</h2>

<h3>Can seasonal technicians be added and removed to control cost?</h3>
<p>Yes, most editions support adding and deactivating licenses as crew size changes seasonally — but that requires someone actively managing the roster every season, which many teams don't do consistently.</p>

<h3>Is the scheduling optimization add-on required?</h3>
<p>No — teams can run Field Service with manual dispatch and skip the optimization engine, though that shifts scheduling effort back onto the dispatcher rather than automating it.</p>

<h3>Does moving technician workflows off Salesforce lose the case history link?</h3>
<p>Not necessarily — a custom-built technician app can still read and write work-order status back into Salesforce as the system of record, so case history stays intact even though the day-to-day technician app lives outside the platform.</p>
