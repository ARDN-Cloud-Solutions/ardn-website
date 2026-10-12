# Proposal calculator: where the page posts and what we keep

The Invited proposal page (and any later client proposal page) sends every
calculator change to the website, which emails the team and writes it to the
database. This is the contract between the page and the site.

## URL

    POST https://ardncloudsolutions.com/api/proposal
    Content-Type: application/json

Use the apex domain, not `www` (www redirects with a 308, and browsers do not
replay a POST across a redirect). The endpoint answers CORS preflights, so a
page on any origin, including claude.ai, may call it.

Local: `POST http://localhost:3000/api/proposal` with `npm run dev`.

## Body

```json
{
  "reason": "calculator",
  "page": "https://…/the page that posted",
  "website": "",
  "calculator": {
    "client": "Invited",
    "person": "name@invitedclubs.com",
    "scenario": "base",
    "discount": 25,
    "supportPerDollar": 1.5,
    "clubs": 140,
    "fee": 4500,
    "systems": [
      { "name": "Oracle tee-time", "group": "Golf", "retire": true,  "qty": 140,  "unit": "courses", "license": 1200000, "support": 800000 },
      { "name": "Microsoft 365",   "group": "Office", "retire": false, "qty": 3000, "unit": "seats",   "license": 400000,  "support": 0 }
    ],
    "totals": { "takenOut": 12000000, "kept": 400000, "todayPerClub": 120000, "afterPerClub": 74000, "net": 4440000 }
  }
}
```

| Field | Meaning | Rules |
|---|---|---|
| `reason` | must be `"calculator"` | |
| `page` | URL of the page posting | text, ≤200 chars |
| `website` | honeypot; leave empty | a filled value is silently dropped as a bot |
| `client` | who the proposal is for | text, ≤120 |
| `person` | who is viewing: the sign-in email, or the name typed | text, ≤120 |
| `scenario` | preset chosen, or `""` when changed by hand | text, ≤40 |
| `discount` | % off list price | number 0–1,000,000 |
| `supportPerDollar` | support cost per license dollar | number |
| `clubs` | number of clubs | number |
| `fee` | Ardn's fee per club per month | whole dollars, or `null` until entered |
| `systems[]` | one row per system, at most 80 | `name` ≤120, `group` ≤80, `retire` boolean (default true), `qty` number or null, `unit` ≤40, `license` and `support` whole dollars a year |
| `totals` | the computed results at that moment | `takenOut`, `kept`, `todayPerClub`, `afterPerClub`, `net`, whole dollars |

Money and counts must be JSON numbers, not strings. Post the whole state each
time; the server keeps every post, so the latest row per person is their
current view and the earlier rows are the history.

## Answers

| Status | Body | Meaning |
|---|---|---|
| 200 | `{"ok":true,"stored":true}` | kept in the database (and emailed, unless email failed) |
| 200 | `{"ok":true,"stored":false}` | emailed only; database not configured or write failed (logged) |
| 400 | `{"error":"…"}` | a field failed validation; the message names it |
| 413 | | body over 60 KB |
| 429 | | more than 20 posts from one address in 10 minutes |
| 502 | | neither stored nor emailed |

## Where it lands

Supabase project "Ardn AI Website & CRM":

- `proposal_calculator_submissions`: one row per post (person, scenario, discount, support multiplier, clubs, fee, the five totals, counts of systems and retired systems, user agent, time).
- `proposal_calculator_systems`: the system rows of each post.

Latest entry per person:

```sql
select distinct on (person) person, created_at, clubs, fee_per_club_month, taken_out_year, net_year
from proposal_calculator_submissions
where client = 'Invited'
order by person, created_at desc;
```

The site needs `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` (see `.env.example`).
The tables are closed to that key; the only way in is the database function
`proposal_calculator_submit()`.

## Test it

`scripts/proposal/post-calculator-test.sh [base-url]` posts the sample above
and prints the answer. Default base URL is `https://ardncloudsolutions.com`;
pass `http://localhost:3000` for a dev server. The sample uses the person
`test@invitedclubs.com`, so it is easy to delete afterwards:

```sql
delete from proposal_calculator_submissions where person = 'test@invitedclubs.com';
```
