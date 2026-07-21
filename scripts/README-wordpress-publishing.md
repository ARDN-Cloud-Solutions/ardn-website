# Headless WordPress publishing

Automated blog publishing to `cms.ardncloudsolutions.com` via the WordPress
REST API. Lets a scheduled Claude Code run publish/update posts with no manual
copy-paste.

## One-time setup (grants access)

1. **Network egress** — the Claude Code environment must allow outbound HTTPS to
   `cms.ardncloudsolutions.com:443`. Set this in the environment's network policy
   (Claude Code on the web → environment settings). Without it, the run cannot
   reach WordPress at all.

2. **WordPress Application Password** — in `cms.ardncloudsolutions.com/wp-admin`,
   go to **Users → Profile → Application Passwords**, add one named
   `claude-agent`, and copy the generated value. The account (`claudeuser`)
   needs the **Editor** role to publish. Application passwords are revocable and
   scoped, so use one instead of the real admin password.

3. **Environment secrets** — add these to the environment (NOT prefixed
   `NEXT_PUBLIC_`, so they never reach the browser bundle):

   ```
   WP_API_URL       = https://cms.ardncloudsolutions.com
   WP_USERNAME      = claudeuser
   WP_APP_PASSWORD  = <application password from step 2>
   ```

## Writing posts

Add Markdown files under `content/blog/`. Each file is frontmatter + an HTML
body:

```
---
title: "Your Post Title"
slug: "your-post-slug"
excerpt: "One-sentence summary for listings and meta description."
categories: "CRM Cost Reduction"
tags: "Salesforce, CRM licensing, cost reduction"
---
<p>HTML body. Use <h2>/<h3>, tables, and an FAQ section for GEO/SEO.</p>
```

- `title` and `slug` are required.
- `categories` / `tags` are comma-separated names; the publisher creates any
  that don't exist yet.

## Publishing

```bash
# Dry run (default — nothing is written). Verifies parsing and shows what would post.
node scripts/publish-to-wordpress.mjs

# Publish (or update) every post in content/blog/
node scripts/publish-to-wordpress.mjs --publish

# Push as drafts for human review first
node scripts/publish-to-wordpress.mjs --draft

# Single file
node scripts/publish-to-wordpress.mjs --file content/blog/your-post.md --draft
```

**Idempotent:** posts are matched by slug, so re-running updates the existing
post instead of creating a duplicate. Safe to run on a schedule.

## Guardrails

- No fabricated stats, client names, or metrics. Cite only publicly verifiable
  pricing, labeled illustrative, and link to the on-site savings calculator for
  real numbers.
- Every post should link back to the money pages it supports
  (`/reduce-crm-licensing-costs`, `/custom-portal-development`,
  `/savings-calculator`).
