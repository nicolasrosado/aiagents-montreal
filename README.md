# AI Agents Montreal — Community Website

A single-page community site showcasing the global reach of [AI Agents Montreal](https://www.meetup.com/ai-agent-montreal/) — 19 speakers, 9 countries, 4 continents.

## Repo structure

```
/
├── index.html        # Single-page site (self-contained)
└── assets/
    └── ai-agents-image.jpg      # Header background image (parallax + circuit animation)
```

## Features

### 🎬 Header
- Parallax background image (fixed, dark overlay)
- Animated circuit board — red/orange particle flow on orthogonal rails, responsive canvas
- Live member count fetched from Meetup (via CORS proxy)
- Live next event banner fetched from Meetup
- "🎙 Suggest a Talk" CTA → LinkedIn

### 🌍 Global Speakers Map
- Interactive Leaflet map (dark CartoDB tiles)
- Cyan markers = past speakers · Amber markers = upcoming speakers
- Popup with name, location, and talk title per marker
- 19 speakers across 13 cities

### 👤 Speakers
- Card grid with avatar, name, LinkedIn link, location, bio, and talk title
- UPCOMING badge on speakers not yet presented

### 🎙 Talks
- Full list of all 14 past talks
- YouTube and Meetup links per talk (update YouTube links once videos are published)

### ✍️ Articles & Resources
- **Articles tab** — dynamically fetched from Nicolas Rosado's Medium RSS feed via CORS proxy; falls back to hardcoded list if unavailable. Excludes "Formation continue".
- **Talk Resources tab** — placeholder for links from YouTube video comments (slides, GitHub repos, tools); fill in the `talkResources` array in `index.html`

### 🌱 Local Ecosystem & Events
Community cards for 8 local/global events with:
- Format badges (📍 In-Person / 🌐 Online) and frequency badges (🔁 Regular / 📆 On demand)
- Dynamic next event for Software Crafters MTL (Guild.host API) and MenderCon (scrape via CORS proxy)
- "Suggest a Talk" / "Get in Touch" CTAs for AI Agents MTL and Mental Health meetups
- Sponsoring CTA for /dev/mtl
- Community values note (free & independent, psychological safety, humility, kindness) on AI Agents and Mental Health cards

### 🔔 Stay in the Loop
- YouTube Subscribe button (opens subscription confirmation)
- RSS Feed link + Add to Feedly button
- Newsletter — "Coming Soon" (replace with Substack link once created)

## Dynamic data (fetched at page load)

| Data | Source | Fallback |
|------|--------|---------|
| Meetup member count | corsproxy.io → meetup.com | `800+` |
| Next AI Agents event | corsproxy.io → meetup.com | Link to events page |
| Next Software Crafters event | guild.host API | Link to Guild page |
| Next MenderCon event | corsproxy.io → mendercon.com | Link to mendercon.com |
| Medium articles | corsproxy.io → RSS feed | Hardcoded 5 articles |

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `aiagents-montreal`)
2. Upload `index.html` to the root of the repo
3. Create an `assets/` folder and upload `ai-agents-image.jpg` inside it
4. Go to **Settings → Pages**
5. Under **Source**, select `main` branch and `/ (root)` folder
6. Click **Save** — your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Things to update over time

- **YouTube links** — replace `https://www.youtube.com/@aiagentsmontreal` in the `talks` array with individual video URLs as they are published
- **Talk Resources** — fill the `talkResources` array with links from YouTube video comments (slides, GitHub, tools)
- **Newsletter** — replace the disabled button with a link to your Substack once created
- **Speaker bios** — replace generated bios with the official "About me" from each Meetup event description
- **New speakers** — add to the `speakers` array; set `upcoming: true` for future talks, remove the flag once the talk has aired
- **Devoxx4Kids next event** — update the date (~every 3 months)

## Organized by

[Nicolas Rosado](https://www.linkedin.com/in/nicolas-rosado-a97b3393) · [Meetup](https://www.meetup.com/ai-agent-montreal/) · [YouTube](https://www.youtube.com/@aiagentsmontreal) · [LinkedIn](https://www.linkedin.com/company/ai-agents-montreal)
