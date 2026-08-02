---
title: "Salesforce OmniStudio Licensing Costs Explained"
slug: "salesforce-omnistudio-cost"
excerpt: "OmniStudio (formerly Vlocity) licenses FlexCards, OmniScripts, and DataRaptors separately from Sales or Service Cloud. Where that bill comes from."
categories: "Salesforce Cost Optimization"
tags: "Salesforce, OmniStudio, Vlocity, Industries Cloud, cost reduction"
image_alt: "Salesforce OmniStudio licensing costs explained — ARDN Cloud Solutions"
---
<p>OmniStudio — the low-code toolkit Salesforce picked up through its Vlocity acquisition, built around FlexCards, OmniScripts, DataRaptors, and Integration Procedures — is the go-to way insurance, healthcare, communications, and public-sector orgs build guided processes and industry-specific screens on the platform. It's also its own licensing layer, distinct from whatever Sales or Service Cloud seats the same users already carry.</p>

<h2>Why OmniStudio is a separate cost, not a bundled feature</h2>
<ul>
  <li><strong>Tied to Industries Cloud editions.</strong> OmniStudio ships as part of Salesforce's industry-specific clouds (Financial Services Cloud, Health Cloud, Communications Cloud, and others) — orgs not already on one of those editions typically add it as a distinct license.</li>
  <li><strong>Build cost on top of license cost.</strong> FlexCards and OmniScripts are low-code, not no-code — configuring guided processes, data mappings, and integration procedures for real workflows usually means a build project (internal admin time or a partner engagement) before the license pays off.</li>
  <li><strong>Per-user licensing for every builder and runtime user.</strong> Admins configuring OmniScripts and the agents or self-service users running them both typically need licensed access, so the cost scales with both sides of the workflow.</li>
  <li><strong>Version and migration churn.</strong> Salesforce has been consolidating OmniStudio's underlying architecture; orgs on older Vlocity-era implementations sometimes face a migration project to stay current, adding cost outside the normal license renewal cycle.</li>
</ul>

<h2>Where native OmniStudio still earns its keep</h2>
<p>For carriers, health plans, and telecoms already standardized on one of Salesforce's Industries Cloud editions, OmniStudio's guided processes and data-mapping tools are genuinely purpose-built for that vertical's workflows — the reusable component library is real leverage if you're building many similar guided flows across product lines.</p>

<h2>Native OmniStudio vs. a custom-built guided workflow</h2>
<table>
  <thead>
    <tr><th></th><th>Salesforce OmniStudio</th><th>Custom-built workflow tool</th></tr>
  </thead>
  <tbody>
    <tr><td>Licensing</td><td>Per-user, tied to Industries Cloud edition</td><td>Flat monthly fee, independent of user count</td></tr>
    <tr><td>Build effort</td><td>Low-code, still requires configuration/admin time</td><td>Built to your exact process from the start</td></tr>
    <tr><td>Best fit</td><td>Orgs already standardized on an Industries Cloud edition</td><td>A specific guided process or intake flow that doesn't need the full Industries Cloud stack</td></tr>
    <tr><td>Salesforce data</td><td>Native</td><td>Synced via API — Salesforce stays system of record</td></tr>
  </tbody>
</table>

<h2>Where the fix actually lives</h2>
<p>The honest comparison isn't OmniStudio vs. nothing — it's whether the specific guided process you need justifies standing up (or staying on) a full Industries Cloud edition, versus a <a href="https://ardncloudsolutions.com/custom-software-development">custom-built guided workflow</a> that reads and writes to Salesforce via API for the teams that only need one or two specific flows. See <a href="https://ardncloudsolutions.com/reduce-crm-licensing-costs">how to reduce CRM licensing costs</a> for the general pattern, and <a href="/blog/insurance-client-portal-cost">a client portal for insurance without per-seat fees</a> for a concrete example of the vertical this often shows up in.</p>

<h2>Frequently asked questions</h2>

<h3>Is OmniStudio included free with Financial Services Cloud or Health Cloud?</h3>
<p>It typically ships as part of those Industries Cloud editions rather than billed as a separate add-on, but confirm current packaging directly with Salesforce, since edition composition changes.</p>

<h3>Do end users (policyholders, patients) need an OmniStudio license to use a FlexCard-based self-service flow?</h3>
<p>Often not directly — many OmniStudio-built flows are exposed through Experience Cloud sites for external users, which carries its own separate licensing model worth checking against your actual external user count.</p>

<h3>Does moving off OmniStudio mean leaving Salesforce entirely?</h3>
<p>No — a custom-built guided workflow can sit alongside Salesforce, reading and writing data via API, while Salesforce stays the system of record for accounts, policies, or cases.</p>
