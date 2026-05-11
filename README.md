# AI Agents Montreal — Community Website

A single-page community site showcasing the global reach of [AI Agents Montreal](https://www.meetup.com/ai-agent-montreal/) — 21 speakers, 11 countries, 5 continents.

🌐 **Live site** → [nicolasrosado.github.io/aiagents-montreal](https://nicolasrosado.github.io/aiagents-montreal/)

## Repo structure

```
/
├── index.html              # HTML shell — 369 lines, structure only
├── README.md
├── data/
│   ├── speakers.js         # const speakers — all speaker objects (bio, location, talk, links…)
│   ├── talks.js            # const talks + const talkResources (past talks, YouTube links, resources)
│   └── ecosystem.js        # const INITIATIVES (orbit graph) + const ecosystemCommunities (9 cards)
├── styles/
│   └── main.css            # All CSS
├── scripts/
│   └── main.js             # All JS logic (renderEcosystem, map, animations, data loaders…)
└── assets/
    ├── ai-agents-image.jpg # Header background image (parallax)
    ├── brain-circle.jpg    # Brain image for the Knowledge Brain Graph center (350×350px crop)
    ├── circuit-crop.jpg    # Circuit board image for the Ecosystem Circuit Graph center (500×500px crop)
    ├── wearedevelopers-logo.jpeg # WeAreDevelopers community partner logo (100×100px display)
    ├── ai-agents-montreal-logo-transparent.png # AI Agents Montreal logo (transparent variant)
    ├── ai-agents-montreal-logo-white.png       # AI Agents Montreal logo (white variant)
    └── logo-250x150.png                        # AI Agents Montreal logo — used in community partner section (250×150px)
```

**Load order** (GitHub Pages, no bundler):
1. `styles/main.css` — linked in `<head>`
2. `data/speakers.js` → `data/talks.js` → `data/ecosystem.js` — data globals, loaded before logic
3. `scripts/main.js` — renders cards from data, runs map, animations, data loaders

## Features

### 🎬 Header
- **Parallax background** — `ai-agents-image.jpg` fixed in place with dark overlay (Option D — Cinematic), grid and cyan/violet glows layered on top
- **Animated circuit board** — grid overlay and cyan/violet glows layered on the parallax background
- Live member count fetched from Meetup
- Live next event banner fetched from Meetup
- **Nav buttons** — 3-tier hierarchy: internal section links (secondary cyan, active section highlighted in primary cyan via `IntersectionObserver`) · **▶ Subscribe** (red YouTube brand, links directly to subscribe URL) · **Join on Meetup** (amber outline) · **✉ Newsletter** (orange Substack brand, links to substack.com/@nicolasrosado) · **🎙 Suggest a Talk** (secondary cyan, links to LinkedIn DM)

### 🧠 Talk Knowledge Brain Graph *(section 01 — displayed first)*
- **Orbital mind graph** — 17 talks orbiting the AI brain image
- **Desktop** — 2 concentric orbits: inner (talks 1-8, clockwise) · outer (talks 9-17, counter-clockwise)
  - Desktop sizes live in `scripts/main.js`: `BRAIN_R` (center image radius, currently 185) · `R1` (inner orbit, currently `min(W,H)*0.34`) · `R2` (outer orbit, currently `min(W,H)*0.44`)
- **Mobile (<768px)** — vertical scrollable list auto-generated from `data/talks.js` via `renderBrainMobile()`: brain image centered at top, each talk as a tappable row with animated cyan dot — zero impact on desktop
  - Mobile brain circle size: `.mg-mobile-brain` in `styles/main.css` (currently 240×240px) — change `width`/`height` there to resize
- Bright cyan pulsing dots per talk with glow halo — hover to slow, click to watch on YouTube
- Uses `assets/brain-circle.jpg` — 700×700px crop (2× retina), brain only
- Mask radius = `BRAIN_R` on desktop (currently 185px)

### 🌍 Global Speakers Map *(section 02)*
- **Leaflet.js** interactive map with dark CartoDB tiles
- 🔵 Cyan glowing markers = past speakers · 🟡 Amber glowing markers = upcoming speakers
- Click any marker for a popup with name, location, and talk title
- 21 speakers across 11 countries (19 cities)
- `map.invalidateSize()` called at 200ms and 800ms after load for reliable rendering on GitHub Pages

> ⚠️ Known fixes: (1) bare `&` in JS strings escaped as `\u0026` to prevent HTML parser truncation. (2) Incorrect SRI integrity hashes on Leaflet were silently blocking the map — SRI removed, cdnjs trusted via HTTPS. (3) CSP recalibrated to include CartoDB tile origins in `connect-src` and `img-src`.

### 👤 Speakers
- Card grid with avatar, name, LinkedIn icon link (SVG cyan), location, bio, and talk title
- UPCOMING badge (amber) on speakers not yet presented
- All 21 speakers have complete LinkedIn URLs
- **Collapsible section** — collapsed by default; toggle button pulses cyan; state persisted in `sessionStorage`

### 🎙 Talks
- Full list of all 17 past talks
- **All YouTube links updated** with individual video URLs and timestamps
- **All Meetup event links updated** with individual event pages
- **Collapsible section** — collapsed by default; toggle button pulses cyan; state persisted in `sessionStorage`

### ✍️ Articles & Resources
- **Talk Resources tab** *(default open)* — all 17 talks listed in order; 60+ links across 14 talks (GitHub repos, slide decks, tools, LinkedIn articles, books, Discord servers); talks without resources display "No resources for this talk" instead of being omitted
- **Articles tab** — dynamically fetched from Nicolas Rosado's Medium RSS feed; excludes "Formation continue"; falls back to hardcoded list
- **From the Community** — hardcoded curated articles from the community (non-Medium sources); always visible below the Medium articles; add entries to `communityArticles` in `scripts/main.js`
- **Collapsible section** — collapsed by default; toggle button pulses cyan; state persisted in `sessionStorage`

### 🔒 Privacy & Data Policy
The site is **100% read-only** — it collects, stores and sends zero personal data:

| Check | Result |
|---|---|
| HTML forms / email inputs | ✅ None |
| localStorage / sessionStorage / cookies | ✅ None |
| Analytics / tracking pixels | ✅ None |
| POST requests (data sent outbound) | ✅ None — GET only |
| iframes | ✅ None |
| Newsletter | ✅ Redirects to Substack — their privacy policy applies |
| All displayed data | ✅ 100% public (Meetup, LinkedIn, YouTube, RSS feeds) |

The newsletter links to **Substack** — the user subscribes directly on Substack's platform. No email addresses are ever handled by this site.

### 🔧 Ecosystem Circuit Graph *(section 06 — before Local Ecosystem)*
- **Orbital circuit graph** — 8 local/global community initiatives orbiting the AI circuit board image
- Circuit board image (`assets/circuit-crop.jpg`) cropped from the hero image — red/orange PCB aesthetic, **no brightness filter** (full natural luminosity)
- Nodes and dots in **orange/red** to match the circuit color palette (vs cyan for the brain graph)
- **Desktop** — single orbit, height 520px, circuit image r=155
- **Mobile (<768px)** — vertical scrollable list auto-generated from `INITIATIVES` in `data/ecosystem.js` via `renderEcoMobile()`: circuit image centered at top, each initiative as a tappable row with animated orange dot — zero impact on desktop
  - Mobile circuit circle size: same `.mg-mobile-brain` class in `styles/main.css` (shared with brain graph, currently 240×240px)
- Uses `assets/circuit-crop.jpg` — 1000×1000px crop (2× retina), circuit board with "AI" text, right portion of hero image
- Hover to slow · Click to visit each community's website

### 🌱 Local Ecosystem & Events *(section 07)*
9 community cards, rendered from `data/ecosystem.js` via `renderEcosystem()`:
- **Mental Health in SW Eng** · **Software Crafters MTL** · **AI Agents Montreal** · **AI Craftspeople Guild** · **/dev/mtl** · **Devoxx4Kids Québec** · **Montréal JUG** · **CraftCode Podcast** · **MenderCon**
- Format badges: 📍 In-Person / 🌐 Online · Frequency badges: 🔁 Regular / 📆 On demand
- Dynamic next event for AI Agents MTL (Meetup), Software Crafters MTL (Guild.host), CraftCode (RSS), MenderCon (scrape)
- **Montréal JUG** — Nicolas Rosado guest speaker highlighted · sponsoring CTA
- "Suggest a Talk" CTAs for AI Agents MTL and Mental Health · Sponsoring CTA for /dev/mtl
- Community values note: free & independent · psychological safety · humility · kindness
- To edit a card: update `data/ecosystem.js` only

### 🤝 Community Partner Event *(section 08)*
- **WeAreDevelopers World Congress North America** — 23–25 September 2026 · San José, CA
- Two logos side by side with `×` divider:
  - **AI Agents Montreal logo** (`assets/logo-250x150.png`) — links to [wearedevelopers.com/about/community](https://www.wearedevelopers.com/about/community) with "Community Partner ↗" caption in cyan
  - **WeAreDevelopers logo** (`assets/wearedevelopers-logo.jpeg`) — links to congress registration page
- CTA button links to registration page
- Discount code callout with link to Nicolas on LinkedIn
- Static HTML — no data file needed; edit directly in `index.html`

### 🔔 Stay in the Loop *(section 09)*
- YouTube Subscribe button
- Newsletter — live Substack link → [substack.com/@nicolasrosado](https://substack.com/@nicolasrosado) · no email collected by this site

## Dynamic data (fetched at page load)

Uses a **cascade of 3 CORS proxies** — if one fails, the next is tried automatically:
1. `allorigins.win` (primary)
2. `corsproxy.io` (fallback)
3. `codetabs.com` (last resort)

| Data | Source | Fallback |
|------|--------|---------|
| Meetup member count | meetup.com page scrape | `800+` |
| Next AI Agents event | meetup.com page scrape | Link to events page |
| Next Software Crafters event | guild.host API | Link to Guild page |
| Next MenderCon event | mendercon.com scrape | Link to mendercon.com |
| Medium articles | nicolas-rosado.medium.com RSS | Hardcoded 5 articles |

## Security

The site has been fully audited (May 2026) and hardened against common web vulnerabilities:

- **XSS prevention** — `sanitize()` and `sanitizeUrl()` applied to all externally-fetched data (Meetup, Guild.host, Medium RSS) before insertion into the DOM; static data uses `textContent` where possible
- **Open redirect protection** — `sanitizeUrl()` enforces `https?://` protocol on all externally-sourced URLs
- **No data collection** — no forms, no email inputs, no analytics, no localStorage/cookies. 100% read-only site
- **Reverse tabnapping** — `rel="noopener noreferrer"` on all `target="_blank"` links
- **No secrets** — no hardcoded API keys, tokens, or credentials
- **No dangerous JS** — no `eval()`, `document.write()`, `new Function()`, or `__proto__` manipulation
- **Content-Security-Policy meta tag** — restricts scripts, styles, fonts, images and connections to known trusted origins; calibrated to allow Leaflet (cdnjs) and CartoDB tiles
    - `script-src` — self, cdnjs, Google Fonts (**`unsafe-inline` removed** — no inline scripts)
    - `style-src` — self, inline, cdnjs, Google Fonts (`unsafe-inline` retained for dynamic inline styles injected by `main.js`)
    - `img-src` — self, data, blob, *.cartocdn.com, *.openstreetmap.org
    - `connect-src` — self, *.basemaps.cartocdn.com (Leaflet tiles), CORS proxies, Meetup, Medium RSS
    - `worker-src` — blob (required by Leaflet)
    - Note: `frame-ancestors` must be set via HTTP header — not supported in `<meta>` CSP
- **Newsletter** — redirects to Substack; no email addresses handled by this site
- **sessionStorage** — used only for UI toggle state (`'0'`/`'1'`); never injected into the DOM

### Audit log

| Date | Finding | Fix |
|------|---------|-----|
| May 2026 | XSS: `ev.slug` + `name` (Guild.host API) injected into `innerHTML` unsanitized | `sanitize()` + `sanitizeUrl()` applied |
| May 2026 | XSS: Meetup event title (via CORS proxy) injected into `innerHTML` unsanitized | `sanitize()` + `sanitizeUrl()` applied |
| May 2026 | CSP: `unsafe-inline` in `script-src` (sole cause: `onclick` on RSS button) | RSS section removed; `unsafe-inline` removed from `script-src` |
| May 2026 | CSP regression: `onclick="toggleResource(i)"` in dynamically generated HTML blocked by `script-src` without `unsafe-inline` | Replaced with event delegation (`addEventListener` + `closest('[data-rg]')`) on resources-list container |

> ⚠️ Known issue fixed: incorrect SRI integrity hashes on Leaflet (cdnjs) were causing the map to silently fail. SRI removed — cdnjs is trusted via HTTPS. CSP was also miscalibrated (missing CartoDB tile origins), now corrected.



## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `aiagents-montreal`) — can be **public** (required for free GitHub Pages)
2. Upload `index.html`, `README.md`, `NEW_TALK_TEMPLATE.md` to the root
3. Create a `data/` folder and upload `speakers.js`, `talks.js`, and `ecosystem.js` inside it
4. Create a `styles/` folder and upload `main.css` inside it
5. Create a `scripts/` folder and upload `main.js` inside it
6. Create an `assets/` folder and upload `ai-agents-image.jpg`, `brain-circle.jpg`, `circuit-crop.jpg` inside it
7. Go to **Settings → Pages → Source: `main` / `/ (root)`** → Save
8. Site goes live at `https://<your-username>.github.io/<repo-name>/`

> ⚠️ GitHub Pages with private repos requires a paid GitHub Team plan. Use a public repo on the free plan.

## Things to update over time

- **New talks** — fill in `NEW_TALK_TEMPLATE.md` and share with Claude; update `data/talks.js` (`talks` array + `talkResources`), `MG_TALKS` in `scripts/main.js` (+ outer orbit loop count), and talk count text in `index.html` — mobile list is auto-generated
- **Community articles** — add entries to `communityArticles` in `scripts/main.js`; always rendered in the Articles tab below the Medium feed
- **New speakers** — add to `data/speakers.js`; set `upcoming: true` for future talks, remove the flag once the talk has aired
- **Talk resources** — add links to `talkResources` in `data/talks.js` for talks currently showing "No resources for this talk" (Benedikt Stemmildt #7, Matthias Patzak #10)
- **Speaker bios** — most bios are now official (provided by speakers); 4 still using generated bios: Arthur Magne, Steven Diamante, Michael R. Larson, William Bernting — replace with official "About me" once available
- **Ecosystem cards** — edit `data/ecosystem.js` to update any community card (event dates, descriptions, links, CTAs); also update the mobile orbit list in `index.html` (`#eco-mobile-list`) if communities are added or removed
- **Devoxx4Kids next event** — update `dateStatic` in `data/ecosystem.js` (~every 3 months)
- **Montréal JUG next event** — update `titleStatic` in `data/ecosystem.js` monthly

## Organized by

[Nicolas Rosado](https://www.linkedin.com/in/nicolas-rosado-a97b3393) · [Meetup](https://www.meetup.com/ai-agent-montreal/) · [YouTube](https://www.youtube.com/@aiagentsmontreal?sub_confirmation=1) · [LinkedIn](https://www.linkedin.com/company/ai-agents-montreal) · [Newsletter](https://substack.com/@nicolasrosado)

