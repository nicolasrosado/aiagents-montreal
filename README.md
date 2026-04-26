# AI Agents Montreal — Community Website

A single-page community site showcasing the global reach of [AI Agents Montreal](https://www.meetup.com/ai-agent-montreal/) — 19 speakers, 9 countries, 4 continents.

🌐 **Live site** → [nicolasrosado.github.io/aiagents-montreal](https://nicolasrosado.github.io/aiagents-montreal/)

## Repo structure

```
/
├── index.html              # Single-page site (self-contained)
├── README.md
└── assets/
    └── ai-agents-image.jpg # Header background image (parallax + circuit animation)
```

## Features

### 🎬 Header
- **Parallax background** — `ai-agents-image.jpg` fixed in place with dark overlay (Option D — Cinematic), grid and cyan/violet glows layered on top
- **Animated circuit board** — red/orange particle flow (Option B) on orthogonal rails inspired by the PCB in the hero image; responsive canvas, 60fps, auto-rebuilds on resize
- Live member count fetched from Meetup
- Live next event banner fetched from Meetup
- "🎙 Suggest a Talk" CTA → LinkedIn

### 🌍 Global Speakers Map
- Interactive Leaflet dark map (CartoDB tiles)
- 🔵 Cyan markers = past speakers · 🟡 Amber markers = upcoming speakers
- Popup with name, location, and talk title per marker
- 19 speakers across 13 cities
- `map.invalidateSize()` on load to fix GitHub Pages rendering

### 👤 Speakers
- Card grid with avatar, name, LinkedIn link, location, bio, and talk title
- UPCOMING badge (amber) on speakers not yet presented

### 🎙 Talks
- Full list of all 14 past talks
- YouTube and Meetup links per talk *(update YouTube links once videos are published)*

### ✍️ Articles & Resources
- **Articles tab** — dynamically fetched from Nicolas Rosado's Medium RSS feed; excludes "Formation continue"; falls back to hardcoded list
- **Talk Resources tab** — placeholder for links from YouTube comments (slides, GitHub, tools); fill in the `talkResources` array in `index.html`

### 🌱 Local Ecosystem & Events
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

## Deploy to GitHub Pages

1. Create a GitHub repository (e.g. `aiagents-montreal`) — can be **public** (required for free GitHub Pages)
2. Upload `index.html`, `README.md`, `TODO.md` to the root
3. Create an `assets/` folder and upload `ai-agents-image.jpg` inside it
4. Go to **Settings → Pages → Source: `main` / `/ (root)`** → Save
5. Site goes live at `https://<your-username>.github.io/<repo-name>/`

> ⚠️ GitHub Pages with private repos requires a paid GitHub Team plan. Use a public repo on the free plan.

## Things to update over time

- **YouTube links** — replace `https://www.youtube.com/@aiagentsmontreal` in the `talks` array with individual video URLs as they are published
- **Talk Resources** — fill the `talkResources` array with links from YouTube video comments (slides, GitHub, tools)
- **Newsletter** — replace the disabled button with your Substack link once created
- **Speaker bios** — replace generated bios with the official "About me" from each Meetup event description
- **New speakers** — add to the `speakers` array; set `upcoming: true` for future talks, remove the flag once the talk has aired
- **Devoxx4Kids next event** — update the date (~every 3 months)

## Organized by

[Nicolas Rosado](https://www.linkedin.com/in/nicolas-rosado-a97b3393) · [Meetup](https://www.meetup.com/ai-agent-montreal/) · [YouTube](https://www.youtube.com/@aiagentsmontreal) · [LinkedIn](https://www.linkedin.com/company/ai-agents-montreal)

