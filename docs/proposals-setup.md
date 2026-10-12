# Client proposals on the Ardn website

Private proposal pages at ardncloudsolutions.com/proposals/<client>, created
and managed at ardncloudsolutions.com/proposals/admin (Ardn emails only).

## Where things live
- Pages: ardncloudsolutions.com/proposals/<client>, deployed from GitHub main by Vercel.
- Data (sign-ins, every tracked event, the proposals themselves): Supabase project
  "ardn-website" in the ARDN Cloud Solutions org. Tables are listed in
  supabase/migrations/20261012000200_proposals_store.sql.
- Settings on Vercel: SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, PROPOSALS_DB_KEY,
  PROPOSALS_SECRET, PROPOSALS_NOTIFY_EMAIL, plus the SMTP_* mail settings.

## Make a proposal
1. Admin → Proposals → "New proposal": client name and product.
2. Fill the editor: headline, big numbers, standard sections (with examples),
   demo videos, pricing (core + add-ons per location), their systems
   (sunset or keep, estimate, which module replaces it), phases, gaps,
   next steps, optional fit-gap rows.
3. Set Status to Live and add the client's email domain, then Save.
4. Send them ardncloudsolutions.com/proposals/<client>.
"Duplicate" copies an existing proposal as a starting point.

## See what they did
Admin → Activity: opens, time on page, videos, every scenario tried and every
number typed. You also get an email whenever someone opens a proposal.
