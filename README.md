# ARDN Cloud Solutions

> Company website for [ARDN Cloud Solutions](https://ardncloudsolutions.com) — built with **Next.js 16**, powered by **WordPress** as a headless CMS, hosted on **Vercel**.

---

## Quick Start

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd ardn-cloud-solutions

# 2. Install dependencies
npm install

# 3. Create .env file (see Environment Variables below)
cp .env.example .env

# 4. Start dev server
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## Environment Variables

Create a `.env` file in the project root:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx          # Gmail App Password (not your login password)
CONTACT_RECEIVER_EMAIL=contactus@ardncloudsolutions.com
NEXT_PUBLIC_WP_API_URL=https://cms.ardncloudsolutions.com/
NEXT_PUBLIC_BASE_URL=https://ardncloudsolutions.com
```

> **Note:** For `SMTP_PASS`, generate a Gmail App Password at [Google Account → App Passwords](https://myaccount.google.com/apppasswords).

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Lint + build for production |
| `npm run start` | Serve the production build |
| `npm run lint` | Check code quality with ESLint |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS v4 + custom ARDN Design System |
| Animations | Framer Motion, GSAP |
| Icons | Lucide React |
| Email | Nodemailer (Gmail SMTP) |
| CMS | WordPress (headless, REST API) |
| Hosting | Vercel (deploys from GitHub `main`) |

---

## Project Structure

```
src/
├── app/                    # Pages — each folder = one URL route
│   ├── layout.tsx          # Root layout (header, footer, fonts, analytics)
│   ├── page.tsx            # Home page (/)
│   ├── globals.css         # Global styles
│   ├── ardn-design.css     # ARDN Design System (editorial CSS)
│   ├── sitemap.ts          # Auto-generated /sitemap.xml
│   ├── robots.ts           # Auto-generated /robots.txt
│   ├── api/                # API routes
│   │   ├── contact/        #   POST /api/contact — sends email
│   │   └── case-studies/   #   GET /api/case-studies — proxies WordPress
│   ├── blog/               # Blog (data from WordPress)
│   ├── case-studies/       # Case studies (data from WordPress)
│   ├── about-ardn/         # About page
│   ├── our-products/       # Products overview
│   ├── storefronts/        # Product: Storefronts
│   ├── salesforce-payments/ # Product: Payments
│   ├── license-guard/      # Product: License Guard
│   ├── ai-powered-support/ # Product: AI Support
│   ├── membership-management/ # Product: Membership
│   ├── ai-forge/           # Product: AI Forge
│   ├── savings-calculator/ # Interactive calculator
│   ├── contact-us/         # Contact form
│   ├── career/             # Careers page
│   ├── privacy-policy/     # Privacy policy
│   ├── buyers-guide/       # SEO landing pages (7 guides)
│   └── compare/            # Comparison pages
│
├── components/             # Reusable components
│   ├── layout/             #   Header.tsx, Footer.tsx
│   ├── ui/                 #   Button, Badge, Modal, TypingText
│   ├── common/             #   Testimonials, ContactSection, HeroHeader
│   ├── home/               #   Home page sections
│   ├── products/           #   Product page sections
│   ├── blog/               #   Blog cards, pagination, sidebar
│   ├── case-studies/       #   Case study cards, grid, sidebar
│   ├── contact/            #   Contact form & hero
│   ├── ai-app/             #   AI App page sections
│   └── buyers-guide/       #   Guide hero & sidebar
│
└── lib/
    └── wordpress/          # WordPress API integration
        ├── api.ts          #   Blog post & category fetching
        ├── case-studies.ts #   Case study fetching
        ├── types.ts        #   TypeScript interfaces
        └── utils.ts        #   Helpers (excerpt, images, dates)
```

---

## Workflow

### How the Architecture Works

```
WordPress CMS                        Next.js Frontend
(cms.ardncloudsolutions.com)         (ardncloudsolutions.com)
┌──────────────────────┐             ┌──────────────────────┐
│  Write blog posts    │── REST API ─▶│  Fetch & display     │
│  Upload images       │  /wp-json/  │  posts with design   │
│  Manage case studies │◀────────────│  Handle contact form │
│  Yoast SEO           │             │  Static pages        │
└──────────────────────┘             └──────────────────────┘
```

- **Blog posts & case studies** are written in WordPress, fetched by Next.js via REST API
- **Static pages** (products, about, contact, etc.) are coded in Next.js
- **Contact form** sends emails via Nodemailer (server-side API route)
- **Sitemap** auto-includes WordPress posts + static pages

### Page File Pattern

Every page follows this pattern:

```
src/app/<page-name>/
├── page.tsx              # SEO metadata (title, description, OG tags)
└── <PageName>Content.tsx # Page UI and content
```

- `page.tsx` = server component → exports `metadata` for SEO
- `*Content.tsx` = the visual content (can be `"use client"` for interactivity)

### Adding a New Page

1. Create folder: `src/app/your-page/`
2. Add `page.tsx` with metadata
3. Add `YourPageContent.tsx` with UI
4. Add to `sitemap.ts` → `staticRoutes` array
5. Add to `Header.tsx` navigation (if needed)

### Adding a New Blog Post

1. Log into **https://cms.ardncloudsolutions.com/wp-admin**
2. Go to **Posts → Add New Post**
3. Fill in: title, content, excerpt, featured image, category, slug
4. Set Yoast SEO fields (SEO title, meta description)
5. Click **Publish**
6. Post appears on the site within ~60 seconds

### Adding a New Case Study

1. Log into WordPress admin
2. Go to **Case Studies → Add New**
3. Fill in: title, content, featured image, category, slug
4. Click **Publish**

---

## 10. Deployment Process

The site is hosted on Vercel (project `ardn-website`, team `dpatel-4104s-projects`)
and deploys from GitHub. Nothing to upload.

1. Open a pull request against `main`. Vercel builds a preview of the branch
   (its URL is behind Vercel login; use `vercel curl <url>` to check it).
2. Merge. Vercel builds `main` and puts it live at https://ardncloudsolutions.com
   within a few minutes. A failed build never replaces the live site.
3. Environment variables (SMTP, Supabase, see `.env.example`) live in the
   Vercel project settings; a change there needs a redeploy to take effect.

DNS is at Cloudflare: apex `A 76.76.21.21`, `www` CNAME `cname.vercel-dns.com`,
both DNS-only. `www` redirects to the apex.

> **Why `--webpack`:** Next.js 16 builds with Turbopack by default; the
> webpack build was adopted for the previous host and works unchanged on
> Vercel. Output is identical.

---

## Useful Links

- **Live site:** https://ardncloudsolutions.com
- **WordPress CMS:** https://cms.ardncloudsolutions.com/wp-admin
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS Docs:** https://tailwindcss.com/docs
