"""One-time migration off WordPress (2026-09-28).

Reads the raw REST export in src/content/wp/*.json, keeps only the posts and
case studies that still match what Ardn sells, downloads their media into
public/media/, rewrites every cms.ardncloudsolutions.com URL to local paths,
and writes trimmed src/content/{posts,case-studies,categories}.json.
Cut slugs are written to src/content/redirects.json (301s in next.config.ts).
"""
import html, json, os, re, sys, urllib.request, urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
RAW = os.environ.get("WP_RAW", os.path.join(ROOT, "src/content/wp"))  # raw REST export (not committed)
OUT = os.path.join(ROOT, "src/content")
MEDIA = os.path.join(ROOT, "public/media")
CMS = re.compile(r"https?://(?:cms\.ardncloudsolutions\.com|darkslateblue-cat-374844\.hostingersite\.com)")

# Kept by title (case-insensitive substring). Everything else is cut + redirected.
KEEP_POSTS = [
    # Pillars
    "How to Increase Salesforce ROI Without Adding Complexity",
    "Salesforce Audit: When to Run It",
    "Salesforce Implementation Cost: The Complete Pricing Guide",
    # License Guard
    "License Guard Is Now on AppExchange",
    "License Guard: Eliminate License Waste",
    "License Sprawl is Real",
    "5 Salesforce Reports Every Admin Should Build",
    "How to Stop Wasting Money on Unused Salesforce Licenses",
    "How to Find and Remove Inactive Salesforce Users",
    # Storefronts
    "The Best Native Salesforce eCommerce Solutions",
    "The Hidden Costs of Using Non-Native E-Commerce Platforms",
    "Migrating from WooCommerce",
    "How to Run E-Commerce Inside Salesforce in 72 Hours",
    "Leveraging Storefronts for Nonprofit E-Commerce",
    # Club Steward / membership / nonprofit
    "Country Club Management Software",
    "Gym Membership Software",
    "Escaping Per-Member Fees in Chapter Management",
    "Cutting Association Management Software Costs",
    "A Member Portal That Doesn",
    "Donor Database Per-Seat Costs",
    "Salesforce Nonprofit Cloud Costs Beyond the Discount",
    # Custom software / AI-first / build vs buy
    "Technical Signs Your CRM or Portal Locks You In",
    "Data Ownership: SaaS CRM vs. a Custom-Built Portal",
    "TCO: SaaS Add-Ons vs. Custom-Built Software",
    "Guide to Cutting Software Costs",
    "How to Run a SaaS Spend Audit",
    "Guide to Consolidating Shadow SaaS",
    "Custom Portal vs. No-Code Tools",
    "Custom Portal vs. Full CRM Migration",
    "Per-Seat vs. Flat-Fee Software Pricing",
    "API Integration Costs vs. Paying for Middleware Seats",
    "SaaS Seat Sprawl",
    "Build vs. Buy: CRM Portal for Light Users",
    "When Shopify Plus App Fees Outgrow a Custom Build",
    "HubSpot vs. Salesforce: True Cost for Mid-Market",
    "Patient Portal Software: Per-Seat Cost vs. Custom Build",
    "Rolling Out a Flat-Fee Staff Portal for Hotels",
    # CRM cost pillar
    "7 Ways to Cut CRM Licensing Costs",
    "A Salesforce License Audit Checklist",
    "How to Negotiate Your Salesforce Renewal",
    "Which CRM Users You",
    "The Hidden Cost of Manual CRM User Provisioning",
    "Salesforce Einstein and Agentforce Add-On Costs",
]
CUT_CASE_STUDY = re.compile(r"-success-story(-\d+)?$|^(airline|timeshare)-success-story$")

def title(p): return html.unescape(re.sub("<[^>]+>", "", p["title"]["rendered"]))

downloaded = {}
def local(url):
    """Download a cms media URL once; return its /media/... path."""
    clean = url.split("?")[0].split("#")[0]
    m = re.search(r"/wp-content/uploads/(.+)$", clean)
    if not m: return None
    rel = urllib.parse.unquote(m.group(1))
    if rel in downloaded: return downloaded[rel]
    dest = os.path.join(MEDIA, rel)
    if not os.path.exists(dest):
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        src = "https://cms.ardncloudsolutions.com/wp-content/uploads/" + urllib.parse.quote(rel)
        try:
            req = urllib.request.Request(src, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=60) as r, open(dest, "wb") as f: f.write(r.read())
        except Exception as e:
            print("  media FAIL", rel, e, file=sys.stderr); downloaded[rel] = None; return None
    downloaded[rel] = "/media/" + rel
    return downloaded[rel]

def rewrite_html(s):
    s = re.sub(r'\s(srcset|sizes)="[^"]*"', "", s)
    def media(m):
        loc = local(m.group(0)); return loc or m.group(0)
    s = re.sub(r"https?://(?:cms\.ardncloudsolutions\.com|darkslateblue-cat-374844\.hostingersite\.com)/wp-content/uploads/[^\"'\s)<>]+", media, s)
    return CMS.sub("https://ardncloudsolutions.com", s)

def rewrite_any(v):
    if isinstance(v, str): return rewrite_html(v) if CMS.search(v) else v
    if isinstance(v, list): return [rewrite_any(x) for x in v]
    if isinstance(v, dict): return {k: rewrite_any(x) for k, x in v.items()}
    return v

def media_obj(fm):
    sizes = {}
    for k in ("medium", "medium_large", "large", "full"):
        s = (fm.get("media_details") or {}).get("sizes", {}).get(k)
        if s:
            loc = local(s["source_url"])
            if loc: sizes[k] = {"source_url": loc, "width": s["width"], "height": s["height"]}
    return {"source_url": local(fm["source_url"]) or "", "alt_text": fm.get("alt_text", ""), "media_details": {"sizes": sizes}}

def trim(p, kind):
    emb = p.get("_embedded", {})
    fm = [media_obj(m) for m in emb.get("wp:featuredmedia", []) if m.get("source_url")]
    terms = [[{k: t[k] for k in ("id", "name", "slug", "taxonomy")} for t in grp] for grp in emb.get("wp:term", []) if isinstance(grp, list)]
    y = p.get("yoast_head_json") or {}
    yoast = {k: y[k] for k in ("title", "description", "og_title", "og_description", "schema") if k in y}
    if "title" in yoast: yoast["title"] = re.sub(r"\s*[-|]\s*cms\.ardncloudsolutions\.com\s*$", " | ARDN Cloud Solutions", yoast["title"])
    return {
        "id": p["id"], "slug": p["slug"], "date": p["date"], "modified": p["modified"],
        "title": {"rendered": p["title"]["rendered"]},
        "excerpt": {"rendered": rewrite_html((p.get("excerpt") or {}).get("rendered", ""))},
        "content": {"rendered": rewrite_html(p["content"]["rendered"])},
        "categories": p.get("categories", []),
        "case-study-categories": p.get("case-study-categories", []),
        "meta": {"faq_schema": (p.get("meta") or {}).get("faq_schema", "")},
        "yoast_head_json": rewrite_any(yoast),
        "_embedded": {"wp:featuredmedia": fm, "wp:term": terms},
    }

posts = json.load(open(f"{RAW}/posts.json"))
keep, cut = [], []
for p in posts:
    (keep if any(k.lower() in title(p).lower() for k in KEEP_POSTS) else cut).append(p)
missing = [k for k in KEEP_POSTS if not any(k.lower() in title(p).lower() for p in keep)]
if missing: sys.exit(f"KEEP entries matched nothing: {missing}")

cases = json.load(open(f"{RAW}/case-studies.json"))
keep_cs = [c for c in cases if not CUT_CASE_STUDY.search(c["slug"])]
cut_cs = [c for c in cases if CUT_CASE_STUDY.search(c["slug"])]

print(f"posts: keep {len(keep)} / cut {len(cut)};  case studies: keep {len(keep_cs)} / cut {len(cut_cs)}")
out_posts = sorted((trim(p, "post") for p in keep), key=lambda p: p["date"], reverse=True)
out_cs = sorted((trim(c, "case") for c in keep_cs), key=lambda p: p["date"], reverse=True)
used = {c for p in out_posts for c in p["categories"]}
cats = []
for c in json.load(open(f"{RAW}/categories.json")):
    n = sum(1 for p in out_posts if c["id"] in p["categories"])
    if n: cats.append({"id": c["id"], "name": html.unescape(c["name"]), "slug": c["slug"], "count": n, "description": c.get("description", "")})
cs_cats = []
for c in json.load(open(f"{RAW}/case-study-categories.json")):
    n = sum(1 for p in out_cs if c["id"] in p["case-study-categories"])
    if n: cs_cats.append({"id": c["id"], "name": html.unescape(c["name"]), "slug": c["slug"], "taxonomy": "case-study-categories", "count": n})
kept_cat_slugs = {c["slug"] for c in cats}
all_cat_slugs = {c["slug"] for c in json.load(open(f"{RAW}/categories.json"))}

def dump(name, data):
    s = json.dumps(data, ensure_ascii=False, indent=1)
    # Yoast stamped the CMS hostname as the site name in titles and schema.
    s = re.sub(r"\s[-\u2013|]\s(?:cms\.)?ardncloudsolutions\.com(?=\\?\")", " | ARDN Cloud Solutions", s)
    s = s.replace('"name":"cms.ardncloudsolutions.com"', '"name":"ARDN Cloud Solutions"').replace('\\"name\\":\\"cms.ardncloudsolutions.com\\"', '\\"name\\":\\"ARDN Cloud Solutions\\"')
    open(f"{OUT}/{name}", "w").write(s.replace("cms.ardncloudsolutions.com", "ardncloudsolutions.com"))
dump("posts.json", out_posts); dump("case-studies.json", out_cs)
dump("categories.json", cats); dump("case-study-categories.json", cs_cats)
dump("redirects.json", {
    "blog": sorted(p["slug"] for p in cut),
    "caseStudies": sorted(c["slug"] for c in cut_cs),
    "categories": sorted(all_cat_slugs - kept_cat_slugs),
})
left = [f for f in os.listdir(OUT) if f.endswith(".json") and CMS.search(open(f"{OUT}/{f}").read())]
print("files still mentioning cms:", left or "none", "| media files:", sum(1 for v in downloaded.values() if v))
