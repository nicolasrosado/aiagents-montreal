# AI Agents Montreal — Community Website

A single-page community site showcasing the global reach of [AI Agents Montreal](https://www.meetup.com/ai-agent-montreal/) — 19 speakers, 9 countries, 4 continents.

🌐 **Live site** → [nicolasrosado.github.io/aiagents-montreal](https://nicolasrosado.github.io/aiagents-montreal/)

## Repo structure

```
/
├── index.html              # Single-page site (self-contained)
├── README.md
├── TODO.md
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

### 🧠 Talk Knowledge Graph *(section 01 — displayed first)*
- **Orbital mind graph** — 14 talks orbiting the AI brain image (same Option D treatment as the header)
- 2 concentric orbits: inner (talks 1-7, clockwise) · outer (talks 8-14, counter-clockwise)
- Bright cyan pulsing dots per talk with glow halo — hover to slow the rotation, click to open the YouTube video
- Circuit animation (red/orange particles) in the background, same style as the header
- Uses `assets/brain-circle.jpg` — 350×350px crop centered on the brain, no "AI" text visible
- Mask radius r=175 — image fits exactly inside the circle

### 🌍 Global Speakers Map *(section 02)*
- **Leaflet.js** interactive map with dark CartoDB tiles
- 🔵 Cyan glowing markers = past speakers · 🟡 Amber glowing markers = upcoming speakers
- Click any marker for a popup with name, location, and talk title
- 19 speakers across 13 cities
- `map.invalidateSize()` called at 200ms and 800ms after load for reliable rendering on GitHub Pages

> ⚠️ Known fix applied: bare `&` characters in speaker bios were causing the HTML parser to truncate the JS script. All single `&` in JS strings are now escaped as `\u0026`.

### 👤 Speakers
- Card grid with avatar, name, LinkedIn link, location, bio, and talk title
- UPCOMING badge (amber) on speakers not yet presented

### 🎙 Talks
- Full list of all 14 past talks
- **All YouTube links updated** with individual video URLs and timestamps
- **All Meetup event links updated** with individual event pages

### ✍️ Articles & Resources
- **Articles tab** — dynamically fetched from Nicolas Rosado's Medium RSS feed; excludes "Formation continue"; falls back to hardcoded list
- **Talk Resources tab** — fully populated with 60+ links across 12 talks, sourced from YouTube comments:
    - GitHub repos, slide decks, tools, LinkedIn articles, books, Discord servers
    - Talks with no external resources (Benedikt Stemmildt, Matthias Patzak) are omitted from the list

### 🔧 Ecosystem Circuit Graph *(section 06 — before Local Ecosystem)*
- **Orbital circuit graph** — 7 local/global community initiatives orbiting the AI circuit board image
- Circuit board image (`assets/circuit-crop.jpg`) cropped from the hero image — red/orange PCB aesthetic
- Nodes and dots in **orange/red** to match the circuit color palette (vs cyan for the brain graph)
- Same beam animation as the rest of the site — faisceaux rouges continus
- Hover to slow · Click to visit each community's website

### 🌱 Local Ecosystem & Events *(section 07)*
8 community cards covering:
- **AI Agents Montreal** · **Mental Health in SW Eng** · **Software Crafters MTL** · **AI Craftspeople Guild** · **/dev/mtl** · **Devoxx4Kids Québec** · **MenderCon** · *(more to come)*
- Format badges: 📍 In-Person / 🌐 Online · Frequency badges: 🔁 Regular / 📆 On demand
- Dynamic next event for Software Crafters MTL (Guild.host) and MenderCon (scrape)
- "Suggest a Talk" CTAs for AI Agents MTL and Mental Health
- Sponsoring CTA for /dev/mtl
- Community values note: free & independent · psychological safety · humility · kindness

### 🔔 Stay in the Loop
- YouTube Subscribe button
- RSS Feed + Add to Feedly
- Newsletter — "Coming Soon" *(replace with Substack link once created)*

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
- **Clickjacking** — `frame-ancestors 'none'` in CSP blocks embedding in iframes
- **Reverse tabnapping** — `rel="noopener noreferrer"` on all 49 `target="_blank"` links
- **No secrets** — no hardcoded API keys, tokens, or credentials
- **No dangerous JS** — no `eval()`, `document.write()`, `new Function()`, or `__proto__` manipulation
- **CSP meta tag** — Content-Security-Policy restricts scripts, styles, fonts, images and connections to known trusted origins
- **SRI integrity hashes** — Leaflet loaded from cdnjs with `integrity=` + `crossorigin=anonymous`



1. Create a GitHub repository (e.g. `aiagents-montreal`) — can be **public** (required for free GitHub Pages)
2. Upload `index.html`, `README.md`, `TODO.md` to the root
3. Create an `assets/` folder and upload `ai-agents-image.jpg` inside it
4. Go to **Settings → Pages → Source: `main` / `/ (root)`** → Save
5. Site goes live at `https://<your-username>.github.io/<repo-name>/`

> ⚠️ GitHub Pages with private repos requires a paid GitHub Team plan. Use a public repo on the free plan.

## Things to update over time

- **New talks** — add to the `talks` array and populate `talkResources` with links from YouTube comments
- **Newsletter** — replace the disabled button with your Substack link once created
- **Speaker bios** — a few speakers (Arthur Magne, Steven Diamante, Michael R. Larson, William Bernting) are still using generated bios; replace with official "About me" once available
- **New speakers** — add to the `speakers` array; set `upcoming: true` for future talks, remove the flag once the talk has aired
- **Devoxx4Kids next event** — update the date (~every 3 months)

## Organized by

[Nicolas Rosado](https://www.linkedin.com/in/nicolas-rosado-a97b3393) · [Meetup](https://www.meetup.com/ai-agent-montreal/) · [YouTube](https://www.youtube.com/@aiagentsmontreal) · [LinkedIn](https://www.linkedin.com/company/ai-agents-montreal)

