# AI Agents Montreal — Community Website

A single-page community site showcasing the global reach of [AI Agents Montreal](https://www.meetup.com/ai-agent-montreal/) — 21 speakers, 10 countries, 4 continents.

🌐 **Live site** → [nicolasrosado.github.io/aiagents-montreal](https://nicolasrosado.github.io/aiagents-montreal/)

## Repo structure

```
/
├── index.html              # Single-page site (self-contained)
├── README.md
└── assets/
    ├── ai-agents-image.jpg # Header background image (parallax + circuit animation)
    ├── brain-circle.jpg    # Brain image for the Knowledge Brain Graph center (350×350px crop)
    └── circuit-crop.jpg    # Circuit board image for the Ecosystem Circuit Graph center (500×500px crop)
```

## Features

### 🎬 Header
- **Parallax background** — `ai-agents-image.jpg` fixed in place with dark overlay (Option D — Cinematic), grid and cyan/violet glows layered on top
- **Animated circuit board** — red/orange particle flow (Option B) on orthogonal rails inspired by the PCB in the hero image; speed reduced ~60% for a smoother, more subtle effect; responsive canvas, auto-rebuilds on resize
- Live member count fetched from Meetup
- Live next event banner fetched from Meetup
- "🎙 Suggest a Talk" CTA → LinkedIn

### 🧠 Talk Knowledge Brain Graph *(section 01 — displayed first)*
- **Orbital mind graph** — 15 talks orbiting the AI brain image
- **Desktop** — 2 concentric orbits: inner (talks 1-8, clockwise) · outer (talks 9-15, counter-clockwise)
- **Mobile (<768px)** — vertical scrollable list: brain image centered at top, each talk as a tappable row with animated cyan dot — zero impact on desktop
- Bright cyan pulsing dots per talk with glow halo — hover to slow, click to watch on YouTube
- Circuit beam animation (red/orange faisceaux continus) in background
- Uses `assets/brain-circle.jpg` — 350×350px crop, brain only, no "AI" text
- Mask radius r=175 on desktop

### 🌍 Global Speakers Map *(section 02)*
- **Leaflet.js** interactive map with dark CartoDB tiles
- 🔵 Cyan glowing markers = past speakers · 🟡 Amber glowing markers = upcoming speakers
- Click any marker for a popup with name, location, and talk title
- 21 speakers across 10 countries (19 cities)
- `map.invalidateSize()` called at 200ms and 800ms after load for reliable rendering on GitHub Pages

> ⚠️ Known fixes: (1) bare `&` in JS strings escaped as `\u0026` to prevent HTML parser truncation. (2) Incorrect SRI integrity hashes on Leaflet were silently blocking the map — SRI removed, cdnjs trusted via HTTPS. (3) CSP recalibrated to include CartoDB tile origins in `connect-src` and `img-src`.

### 👤 Speakers
- Card grid with avatar, name, LinkedIn icon link (SVG cyan), location, bio, and talk title
- UPCOMING badge (amber) on speakers not yet presented
- All 21 speakers have complete LinkedIn URLs

### 🎙 Talks
- Full list of all 15 past talks
- **All YouTube links updated** with individual video URLs and timestamps
- **All Meetup event links updated** with individual event pages

### ✍️ Articles & Resources
- **Talk Resources tab** *(default open)* — 60+ links across 12 talks: GitHub repos, slide decks, tools, LinkedIn articles, books, Discord servers
- **Articles tab** — dynamically fetched from Nicolas Rosado's Medium RSS feed; excludes "Formation continue"; falls back to hardcoded list

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

When a newsletter is eventually added, it will redirect to **Substack** — the user subscribes directly on Substack's platform. No email addresses are ever handled by this site.

### 🔧 Ecosystem Circuit Graph *(section 06 — before Local Ecosystem)*
- **Orbital circuit graph** — 8 local/global community initiatives orbiting the AI circuit board image
- Circuit board image (`assets/circuit-crop.jpg`) cropped from the hero image — red/orange PCB aesthetic, **no brightness filter** (full natural luminosity)
- Nodes and dots in **orange/red** to match the circuit color palette (vs cyan for the brain graph)
- **Desktop** — single orbit, height 520px, circuit image r=155
- **Mobile (<768px)** — vertical scrollable list: circuit image centered at top, each initiative as a tappable row with animated orange dot — zero impact on desktop
- Same beam animation as the rest of the site — faisceaux rouges continus
- Hover to slow · Click to visit each community's website

### 🌱 Local Ecosystem & Events *(section 07)*
8 community cards covering:
- **AI Agents Montreal** · **Mental Health in SW Eng** · **Software Crafters MTL** · **AI Craftspeople Guild** · **/dev/mtl** · **Devoxx4Kids Québec** · **Montréal JUG** · **MenderCon**
- Format badges: 📍 In-Person / 🌐 Online · Frequency badges: 🔁 Regular / 📆 On demand
- Dynamic next event for Software Crafters MTL (Guild.host) and MenderCon (scrape)
- **Montréal JUG** — next event April 30 2026 · Nicolas Rosado guest speaker highlighted · sponsoring CTA
- "Suggest a Talk" CTAs for AI Agents MTL and Mental Health
- Sponsoring CTA for /dev/mtl
- Community values note: free & independent · psychological safety · humility · kindness

### 🔔 Stay in the Loop *(section 08)*
- YouTube Subscribe button
- RSS Feed + Add to Feedly
- Newsletter — "Coming Soon" *(will redirect to Substack — no email collected by this site)*

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

The site has been audited and hardened against common web vulnerabilities:

- **XSS prevention** — `sanitize()` and `sanitizeUrl()` helper functions applied to all fetched data before insertion into the DOM; RSS descriptions use `textContent` instead of `innerHTML`
- **Open redirect protection** — `sanitizeUrl()` enforces `https?://` protocol on all externally-sourced URLs
- **No data collection** — no forms, no email inputs, no analytics, no localStorage/cookies. 100% read-only site
- **Reverse tabnapping** — `rel="noopener noreferrer"` on all `target="_blank"` links
- **No secrets** — no hardcoded API keys, tokens, or credentials
- **No dangerous JS** — no `eval()`, `document.write()`, `new Function()`, or `__proto__` manipulation
- **Content-Security-Policy meta tag** — restricts scripts, styles, fonts, images and connections to known trusted origins; calibrated to allow Leaflet (cdnjs) and CartoDB tiles
    - `script-src` — self, inline, cdnjs, Google Fonts
    - `style-src` — self, inline, cdnjs, Google Fonts
    - `img-src` — self, data, blob, *.cartocdn.com, *.openstreetmap.org
    - `connect-src` — self, *.basemaps.cartocdn.com (Leaflet tiles), CORS proxies, Meetup, Medium RSS
    - `worker-src` — blob (required by Leaflet)
    - Note: `frame-ancestors` must be set via HTTP header — not supported in `<meta>` CSP
- **Newsletter** — redirects to Substack; no email addresses handled by this site

> ⚠️ Known issue fixed: incorrect SRI integrity hashes on Leaflet (cdnjs) were causing the map to silently fail. SRI removed — cdnjs is trusted via HTTPS. CSP was also miscalibrated (missing CartoDB tile origins), now corrected.



## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `aiagents-montreal`) — can be **public** (required for free GitHub Pages)
2. Upload `index.html`, `README.md`, `NEW_TALK_TEMPLATE.md` to the root
3. Create an `assets/` folder and upload `ai-agents-image.jpg`, `brain-circle.jpg`, `circuit-crop.jpg` inside it
4. Go to **Settings → Pages → Source: `main` / `/ (root)`** → Save
5. Site goes live at `https://<your-username>.github.io/<repo-name>/`

> ⚠️ GitHub Pages with private repos requires a paid GitHub Team plan. Use a public repo on the free plan.

## Things to update over time

- **New talks** — fill in `NEW_TALK_TEMPLATE.md` and share with Claude; update `talks` array, `talkResources`, Knowledge Brain Graph orbit count, and mobile list
- **Newsletter** — replace the disabled button with your Substack link once created
- **Speaker bios** — a few speakers (Arthur Magne, Steven Diamante, Michael R. Larson, William Bernting) are still using generated bios; replace with official "About me" once available
- **New speakers** — add to the `speakers` array; set `upcoming: true` for future talks, remove the flag once the talk has aired
- **Devoxx4Kids next event** — update the date (~every 3 months)
- **Montréal JUG next event** — update monthly

## Organized by

[Nicolas Rosado](https://www.linkedin.com/in/nicolas-rosado-a97b3393) · [Meetup](https://www.meetup.com/ai-agent-montreal/) · [YouTube](https://www.youtube.com/@aiagentsmontreal) · [LinkedIn](https://www.linkedin.com/company/ai-agents-montreal)

