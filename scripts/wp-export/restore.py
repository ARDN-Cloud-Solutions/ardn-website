"""Restore the posts / case studies / categories cut on 2026-09-28 (2026-10-09).

The cut content was never committed, but a local production build from
2026-09-25 still had Next's fetch cache: the exact WP REST responses
(/wp/v2/posts?_embed, /wp/v2/case-studies, /wp/v2/categories) every page was
rendered from. This script reads those, trims each item to the same shape
process.py wrote (so the blog components don't change), and appends them to
src/content/*.json at their original id / slug / dates.

  OLD_NEXT=~/Documents/website/ardn-website/.next python3 scripts/wp-export/restore.py

Needs Pillow. Read-only on OLD_NEXT.

Safety: the old WordPress host was compromised (ClickFix injection). Every
restored HTML string goes through sanitize(): no <script>/<iframe>/<style>/
<object>/<embed>/<form>, no on*= handlers, no javascript:/data: URLs, no links
or images on unknown hosts.

Images: the CMS is gone, so images come from (in order) public/media, git
history of public/media, or the Wayback Machine (ardncloudsolutions.com/
wp-content/uploads, the pre-headless host), and are re-encoded to WebP under
public/media. Content images that can't be recovered are removed with their
<figure>. A featured image that can't be recovered is regenerated as the
site's standard title card (scripts/lib/og-image.mjs), which is what every
2026 post used anyway.
"""
import base64, html, io, json, os, re, subprocess, sys, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OLD_NEXT = os.path.expanduser(os.environ.get("OLD_NEXT", "~/Documents/website/ardn-website/.next"))
OUT = os.path.join(ROOT, "src/content")
MEDIA = os.path.join(ROOT, "public/media")
WORK = os.environ.get("RESTORE_WORK") or __import__("tempfile").mkdtemp(prefix="ardn-restore-")
os.makedirs(WORK, exist_ok=True)

from PIL import Image  # noqa: E402

SITE = "https://ardncloudsolutions.com"
OWN_HOSTS = r"(?:cms\.|www\.)?ardncloudsolutions\.com|ardncloudsolutions-com-120168\.hostingersite\.com|darkslateblue-cat-374844\.hostingersite\.com"
OWN = re.compile(rf"https?://(?:{OWN_HOSTS})", re.I)
# External hosts restored content may link to. Anything else is unlinked.
ALLOWED_LINK_HOSTS = re.compile(r"^(?:[\w-]+\.)*(?:salesforce\.com|force\.com|instagram\.com|linkedin\.com|youtube\.com)$", re.I)

# Old pages that no longer exist (retired products). Links to them are
# unwrapped to plain text rather than pointed somewhere else.
REMOVED_PATHS = {"/salesforce-payments", "/salesforce-transacts", "/ai-powered-support", "/payment-processing", "/salesforce-billing"}

# ── Load the WP REST responses from the old build's fetch cache ─────────────

def load_fetch_cache():
    posts, cs, cats = {}, {}, {}
    d = os.path.join(OLD_NEXT, "cache/fetch-cache")
    for f in os.listdir(d):
        try:
            data = json.load(open(os.path.join(d, f)))["data"]
            body = data["body"]
            try: body = json.loads(base64.b64decode(body))
            except Exception: body = json.loads(body)
        except Exception:
            continue
        for it in body if isinstance(body, list) else [body]:
            if not isinstance(it, dict) or "id" not in it: continue
            kind = it.get("type") or it.get("taxonomy")
            target = {"post": posts, "case-studies": cs, "category": cats}.get(kind)
            if target is None: continue
            prev = target.get(it["slug"])
            if prev is None or len(json.dumps(it)) > len(json.dumps(prev)):  # prefer the _embed variant
                target[it["slug"]] = it
    return posts, cs, cats

# ── Image recovery ──────────────────────────────────────────────────────────

def norm(name):
    """Image family key: basename without extension, size suffix, -scaled/-min/-1."""
    b = os.path.basename(urllib.parse.unquote(name)).lower()
    b = re.sub(r"\.\w+$", "", b)
    for _ in range(3):
        b = re.sub(r"-\d+x\d+$", "", b); b = re.sub(r"-(?:scaled|min|\d)$", "", b)
    return b

def wayback_index():
    path = os.path.join(WORK, "cdx.json")
    if not os.path.exists(path):
        url = ("https://web.archive.org/cdx/search/cdx?url=ardncloudsolutions.com/wp-content/uploads/*"
               "&output=json&filter=statuscode:200&collapse=urlkey&fl=original,timestamp")
        with urllib.request.urlopen(url, timeout=180) as r: open(path, "wb").write(r.read())
    idx = {}
    for orig, ts in json.load(open(path))[1:]:
        idx.setdefault(norm(orig.split("?")[0]), []).append(("wayback", f"https://web.archive.org/web/{ts}id_/{orig}"))
    return idx

def git_index():
    out = subprocess.run(["git", "-C", ROOT, "log", "--all", "--format=%H", "--name-only", "--", "public/media"],
                         capture_output=True, text=True).stdout
    idx, commit = {}, None
    for line in out.splitlines():
        if re.fullmatch(r"[0-9a-f]{40}", line): commit = line
        elif line.startswith("public/media/"): idx.setdefault(norm(line), []).append(("git", f"{commit}:{line}"))
    return idx

def disk_index():
    idx = {}
    for dp, _, fs in os.walk(MEDIA):
        for f in fs: idx.setdefault(norm(f), []).append(("disk", os.path.join(dp, f)))
    return idx

SOURCES = {}
for ix in (disk_index(), git_index(), wayback_index()):
    for k, v in ix.items(): SOURCES.setdefault(k, []).extend(v)

_img_cache = {}
def fetch_family(name):
    """Largest decodable image in this file's family, or None."""
    key = norm(name)
    if key in _img_cache: return _img_cache[key]
    best = None
    for kind, ref in SOURCES.get(key, []):
        try:
            if kind == "disk": raw = open(ref, "rb").read()
            elif kind == "git":
                c, p = ref.split(":", 1)
                raw = subprocess.run(["git", "-C", ROOT, "show", f"{c}:{p}"], capture_output=True).stdout
                if not raw: raw = subprocess.run(["git", "-C", ROOT, "show", f"{c}^:{p}"], capture_output=True).stdout
            else:
                req = urllib.request.Request(ref, headers={"User-Agent": "Mozilla/5.0"})
                with urllib.request.urlopen(req, timeout=60) as r: raw = r.read()
            im = Image.open(io.BytesIO(raw)); im.load()  # decoding proves it's an image, not a parked page
            if best is None or im.width * im.height > best.width * best.height: best = im
        except Exception:
            continue
    _img_cache[key] = best
    return best

def webp_rel(rel):
    return re.sub(r"\.\w+$", "", urllib.parse.unquote(rel)) + ".webp"

def save_webp(im, rel, width=None):
    """Write public/media/<rel>.webp (resized to width if smaller); return (url, w, h)."""
    rel = webp_rel(rel)
    dest = os.path.join(MEDIA, rel)
    im2 = im
    if width and width < im.width:
        im2 = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    if not os.path.exists(dest):
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        if im2.mode not in ("RGB", "RGBA"): im2 = im2.convert("RGBA" if "A" in im2.getbands() or im2.mode == "P" else "RGB")
        im2.save(dest, "WEBP", quality=82, method=6)
    w, h = Image.open(dest).size
    return "/media/" + rel, w, h

def uploads_rel(url):
    m = re.search(r"/wp-content/uploads/([^?#\"']+)", url)
    return urllib.parse.unquote(m.group(1)) if m else None

def recover(url, width=None):
    rel = uploads_rel(url)
    if not rel: return None
    sz = re.search(r"-(\d+)x(\d+)\.\w+$", rel)
    im = fetch_family(rel)
    if im is None: return None
    return save_webp(im, rel, width or (int(sz.group(1)) if sz else None))

OG_RENDER = os.path.join(WORK, "og-render.mjs")
open(OG_RENDER, "w").write(
    'import { generateOgImage } from "%s/scripts/lib/og-image.mjs";\n'
    'import { writeFile } from "node:fs/promises";\n'
    'const [title, eyebrow, out] = process.argv.slice(2);\n'
    'const { buffer } = await generateOgImage({ title, eyebrow });\n'
    'await writeFile(out, buffer);\n' % ROOT)

def og_card(slug, title, eyebrow, date):
    rel = f"{date[:4]}/{date[5:7]}/{slug}-og.png"
    dest = os.path.join(MEDIA, webp_rel(rel))
    if not os.path.exists(dest):
        tmp = os.path.join(WORK, slug + "-og.webp")
        subprocess.run(["node", OG_RENDER, title, eyebrow, tmp], check=True, cwd=ROOT,
                       env={**os.environ, "CHROME_BIN": os.environ.get("CHROME_BIN", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")})
        im = Image.open(tmp); im.load()
    else:
        im = Image.open(dest); im.load()
    return im, rel

# ── HTML clean-up ───────────────────────────────────────────────────────────

POST_SLUGS = set()      # filled in below: every slug that will exist under /blog
report = {"img_ok": set(), "img_dropped": set(), "feat_ok": [], "feat_card": [], "links_unwrapped": set(), "links_external_dropped": set()}

def sanitize(s):
    s = re.sub(r"<(script|iframe|style|object|embed|form|noscript|template|svg)\b.*?</\1\s*>", "", s, flags=re.I | re.S)
    s = re.sub(r"<(script|iframe|style|object|embed|form|noscript|template|svg|link|meta|base|input|button)\b[^>]*>", "", s, flags=re.I)
    s = re.sub(r"""\s+on[a-z]+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)""", "", s, flags=re.I)
    s = re.sub(r"""\s(href|src|action|formaction|xlink:href)\s*=\s*(["'])\s*(?:javascript|vbscript|data):[^"']*\2""", "", s, flags=re.I)
    s = re.sub(r"<!--.*?-->", lambda m: m.group(0) if re.fullmatch(r"<!-- /?wp:[^>]*-->", m.group(0)) else "", s, flags=re.S)
    return s

def local_path(url):
    """Own-site absolute URL → site-relative path, with post links under /blog/."""
    path = OWN.sub("", url) or "/"
    path = html.unescape(path)
    p, _, rest = path.partition("?")
    if p.startswith("/wp-content/"): return None
    p = re.sub(r"(?<=.)/+$", "", p) or "/"
    if p.count("/") == 1 and p[1:] in POST_SLUGS: p = "/blog" + p
    q = re.sub(r"(?:^|&)utm_[^&]*", "", rest).strip("&")
    return p + ("?" + html.escape(q) if q else "")

def rewrite_links(s):
    def anchor(m):
        tag, inner = m.group(1), m.group(2)
        hm = re.search(r'\shref=(["\'])(.*?)\1', tag)
        if not hm: return m.group(0)
        href = hm.group(2)
        if OWN.match(href) or href.startswith("/"):
            new = local_path(href) if OWN.match(href) else href
            base = (new or "").split("?")[0].split("#")[0]
            if new is None or base in REMOVED_PATHS:
                report["links_unwrapped"].add(href); return inner
            return tag.replace(hm.group(0), f' href="{new}"') + inner + "</a>"
        host = urllib.parse.urlparse(href).hostname or ""
        if href.startswith(("mailto:", "tel:", "#")) or ALLOWED_LINK_HOSTS.match(host):
            return m.group(0)
        report["links_external_dropped"].add(href); return inner
    return re.sub(r"(<a\b[^>]*>)(.*?)</a>", anchor, s, flags=re.I | re.S)

def rewrite_images(s):
    s = re.sub(r'\s(srcset|sizes)="[^"]*"', "", s)
    def img(m):
        tag = m.group(0)
        sm = re.search(r'\ssrc="([^"]+)"', tag)
        got = recover(sm.group(1)) if sm else None
        if not got:
            report["img_dropped"].add(sm.group(1) if sm else tag); return "\x00DROP\x00"
        report["img_ok"].add(sm.group(1))
        return tag.replace(sm.group(0), f' src="{got[0]}"')
    s = re.sub(r"<img\b[^>]*>", img, s, flags=re.I)
    # Drop the wrappers a removed image leaves behind.
    s = re.sub(r"<a\b[^>]*>\s*\x00DROP\x00\s*</a>", "\x00DROP\x00", s, flags=re.I)
    s = re.sub(r"<figure\b[^>]*>\s*\x00DROP\x00\s*(?:<figcaption\b.*?</figcaption>)?\s*</figure>", "", s, flags=re.I | re.S)
    s = re.sub(r"<p\b[^>]*>\s*\x00DROP\x00\s*</p>", "", s, flags=re.I)
    s = s.replace("\x00DROP\x00", "")
    return s

# Legal: no named youth/community-org brands. Retired product: ReplyCX.
GUARD = [
    (re.compile(r"\bYMCAs\b"), "community centers"), (re.compile(r"\bYMCA\b"), "community nonprofit"),
    (re.compile(r"\bJCCs\b"), "community centers"), (re.compile(r"\bJCC\b"), "community center"),
    (re.compile(r"Boys (?:&amp;|&|and) Girls Clubs?", re.I), "community nonprofits"),
]
def guard(s):
    for rx, rep in GUARD: s = rx.sub(rep, s)
    if re.search(r"reply\s?cx", s, re.I): sys.exit("ReplyCX mention found; handle by hand")
    return s

def clean_html(s):
    s = guard(rewrite_images(rewrite_links(sanitize(s))))
    # Leftover hostnames in plain text / mailto: (e.g. contactus@<staging host>).
    return re.sub(r"(?:cms\.)?ardncloudsolutions-com-120168\.hostingersite\.com|darkslateblue-cat-374844\.hostingersite\.com|cms\.ardncloudsolutions\.com",
                  "ardncloudsolutions.com", s, flags=re.I)

def clean_text(s):
    s = OWN.sub(SITE, s)
    return guard(s)

def fix_schema_urls(v, slug, img):
    if isinstance(v, str):
        if uploads_rel(v):
            got = recover(v)
            return got[0] if got else (img or "")
        v = re.sub(rf"https?://(?:{OWN_HOSTS})/{re.escape(slug)}/?(?=#|$)", f"{SITE}/blog/{slug}", v)
        v = OWN.sub(SITE, v)
        # Yoast stamped the CMS hostname as the site name (same fix as process.py's dump()).
        if re.fullmatch(r"(?:cms\.)?ardncloudsolutions\.com", v): return "ARDN Cloud Solutions"
        v = re.sub(r"\s[-–|]\s(?:cms\.)?ardncloudsolutions\.com$", " | ARDN Cloud Solutions", v)
        return v.replace("cms.ardncloudsolutions.com", "ardncloudsolutions.com")
    if isinstance(v, list): return [fix_schema_urls(x, slug, img) for x in v]
    if isinstance(v, dict): return {k: fix_schema_urls(x, slug, img) for k, x in v.items()}
    return v

def featured(p, title, eyebrow):
    out = []
    for fm in p.get("_embedded", {}).get("wp:featuredmedia", []):
        if not fm.get("source_url"): continue
        src = recover(fm["source_url"], width=None)
        sizes = {}
        if src:
            report["feat_ok"].append(p["slug"])
            for k in ("medium", "medium_large", "large", "full"):
                s = (fm.get("media_details") or {}).get("sizes", {}).get(k)
                if s:
                    got = recover(s["source_url"])
                    if got: sizes[k] = {"source_url": got[0], "width": got[1], "height": got[2]}
            # The hero picks large → medium_large → medium → full; with only a
            # thumbnail-sized medium it would upscale that, so use full instead.
            if "large" not in sizes and "medium_large" not in sizes: sizes.pop("medium", None)
            out.append({"source_url": src[0], "alt_text": clean_text(fm.get("alt_text", "")), "media_details": {"sizes": sizes}})
    if out: return out
    im, rel = og_card(p["slug"], title, eyebrow, p["date"])
    report["feat_card"].append(p["slug"])
    full = save_webp(im, rel)
    sizes = {"full": {"source_url": full[0], "width": full[1], "height": full[2]}}
    for k, w in (("medium", 300), ("medium_large", 768), ("large", 1024)):
        h = round(630 * w / 1200)
        got = save_webp(im, re.sub(r"\.\w+$", f"-{w}x{h}.png", rel), w)
        sizes[k] = {"source_url": got[0], "width": got[1], "height": got[2]}
    return [{"source_url": full[0], "alt_text": f"{title} | ARDN Cloud Solutions", "media_details": {"sizes": sizes}}]

def trim(p):
    title = html.unescape(re.sub("<[^>]+>", "", p["title"]["rendered"]))
    emb = p.get("_embedded", {})
    terms = [[{k: t[k] for k in ("id", "name", "slug", "taxonomy")} for t in grp] for grp in emb.get("wp:term", []) if isinstance(grp, list)]
    cats = [t for grp in terms for t in grp if t["taxonomy"] == "category"]
    fm = featured(p, title, html.unescape(cats[0]["name"]) if cats else "Ardn Cloud Solutions")
    y = p.get("yoast_head_json") or {}
    yoast = {k: y[k] for k in ("title", "description", "og_title", "og_description", "schema") if k in y}
    for k in ("title", "og_title"):
        if k in yoast: yoast[k] = re.sub(r"\s[-–|]\s(?:cms\.)?ardncloudsolutions\.com\s*$", " | ARDN Cloud Solutions", yoast[k])
    yoast = fix_schema_urls(yoast, p["slug"], fm[0]["source_url"] if fm else None)
    s = json.dumps(yoast, ensure_ascii=False).replace('"name": "cms.ardncloudsolutions.com"', '"name": "ARDN Cloud Solutions"')
    yoast = json.loads(guard(s))
    return {
        "id": p["id"], "slug": p["slug"], "date": p["date"], "modified": p["modified"],
        "title": {"rendered": guard(p["title"]["rendered"])},
        "excerpt": {"rendered": clean_html((p.get("excerpt") or {}).get("rendered", ""))},
        "content": {"rendered": clean_html(p["content"]["rendered"])},
        "categories": p.get("categories", []),
        "case-study-categories": p.get("case-study-categories", []),
        "meta": {"faq_schema": (p.get("meta") or {}).get("faq_schema", "")},
        "yoast_head_json": yoast,
        "_embedded": {"wp:featuredmedia": fm, "wp:term": terms},
    }

# ── Main ────────────────────────────────────────────────────────────────────

def dump(name, data):
    open(f"{OUT}/{name}", "w").write(json.dumps(data, ensure_ascii=False, indent=1))

if __name__ == "__main__":
    raw_posts, raw_cs, raw_cats = load_fetch_cache()
    redirects = json.load(open(f"{OUT}/redirects.json"))
    posts = json.load(open(f"{OUT}/posts.json"))
    case_studies = json.load(open(f"{OUT}/case-studies.json"))
    categories = json.load(open(f"{OUT}/categories.json"))
    cs_cats = json.load(open(f"{OUT}/case-study-categories.json"))

    have = {p["slug"] for p in posts}
    todo = [s for s in redirects["blog"] if s in raw_posts and s not in have]
    missing = [s for s in redirects["blog"] if s not in raw_posts]
    POST_SLUGS.update(have | set(todo))
    taken_ids = {p["id"] for p in posts}

    restored = []
    for s in todo:
        e = trim(raw_posts[s])
        if e["id"] in taken_ids: sys.exit(f"id collision {e['id']} ({s})")
        taken_ids.add(e["id"]); restored.append(e)
    posts = sorted(posts + restored, key=lambda p: p["date"], reverse=True)

    # Case studies: the cut ones were the older Salesforce "success story"
    # variants; they join the Salesforce bucket the kept Salesforce ones use.
    sf_bucket = next(c["id"] for c in cs_cats if c["slug"] == "salesforce")
    cs_todo = [s for s in redirects["caseStudies"] if s in raw_cs and s not in {c["slug"] for c in case_studies}]
    for s in cs_todo:
        e = trim(raw_cs[s]); e["case-study-categories"] = [sf_bucket]
        for g in e["_embedded"]["wp:term"]:
            g[:] = [t for t in g if t["taxonomy"] != "case-study-categories"]
        case_studies.append(e)
    for c in cs_cats:
        c["count"] = sum(1 for x in case_studies if c["id"] in x["case-study-categories"])

    # Categories: every category a post uses comes back, with counts.
    by_id = {c["id"]: c for c in categories}
    for c in raw_cats.values():
        if c["id"] not in by_id:
            by_id[c["id"]] = {"id": c["id"], "name": html.unescape(c["name"]), "slug": c["slug"], "count": 0, "description": c.get("description", "")}
    for c in by_id.values(): c["count"] = sum(1 for p in posts if c["id"] in p["categories"])
    categories = sorted((c for c in by_id.values() if c["count"]), key=lambda c: c["name"].lower())
    cat_slugs = {c["slug"] for c in categories}

    restored_slugs = [p["slug"] for p in restored]
    redirects["blog"] = {k: v for k, v in redirects["blog"].items() if k not in POST_SLUGS}
    redirects["caseStudies"] = {k: v for k, v in redirects["caseStudies"].items() if k not in set(cs_todo)}
    redirects["categories"] = {k: v for k, v in redirects["categories"].items() if k not in cat_slugs}
    redirects["restoredRootPosts"] = sorted(set(redirects.get("restoredRootPosts", [])) | set(restored_slugs))

    dump("posts.json", posts); dump("case-studies.json", case_studies)
    dump("categories.json", categories); dump("case-study-categories.json", cs_cats)
    dump("redirects.json", redirects)

    print(f"posts restored {len(restored)} (missing from cache: {missing}); case studies {len(cs_todo)}; "
          f"categories now {len(categories)}")
    print(f"content images: {len(report['img_ok'])} recovered, {len(report['img_dropped'])} dropped")
    print(f"featured: {len(report['feat_ok'])} recovered, {len(report['feat_card'])} regenerated title cards")
    json.dump({k: sorted(v) if isinstance(v, set) else v for k, v in report.items()}, open(os.path.join(WORK, "report.json"), "w"), indent=1)
