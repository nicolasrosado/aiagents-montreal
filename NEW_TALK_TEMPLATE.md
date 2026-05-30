# 🎙 New Talk — Template

Copy this file, fill in all fields, and share it with Claude to update the site.

---

## Speaker

> ⚠️ **Claude: ask this first before anything else** — "Is this speaker already listed on the site as `upcoming: true`?" If yes, look them up in `data/speakers.js`, pre-fill all fields below with their existing data, display them to the user for confirmation, and skip asking for those fields.

- **Upcoming → Past:** Was this speaker previously listed as `upcoming: true`? (yes/no)
- **Full name:**
- **LinkedIn URL:** https://www.linkedin.com/in/
- **Location (City, Country + flag emoji):** e.g. Berlin, Germany 🇩🇪
- **Latitude / Longitude:** (for the World Map marker — use maps.google.com to find)
- **Short bio (2-3 sentences):**

---

## Talk

> ⚠️ **Claude: ask the fields below one at a time**, in order. Wait for the user's answer before asking the next. Display the list of upcoming questions upfront so the user knows what's coming, then ask #1.

Upcoming questions (display this list first, then ask one by one):
1. Quel est le titre du talk ?
2. Quelle est l'URL de l'événement Meetup ?
3. Quelle est l'URL YouTube (avec timestamp si applicable) ?
4. Y a-t-il des ressources à ajouter ? (liens depuis les commentaires YouTube ou slides — répond "aucune" si non)

- **Talk title:**
- **Meetup event URL:** https://www.meetup.com/ai-agent-montreal/events/
- **YouTube video URL (with timestamp if applicable):** https://www.youtube.com/watch?v=
- **Talk number** (next in sequence — currently 21): #

---

## Talk Resources *(optional — from YouTube comments or slides)*

> ⚠️ **Claude: ask for resources as question #4 in the one-by-one sequence above**, even if this section is left blank. Do not skip this step.

Add as many as needed. Leave blank or write "none" if no resources.

```
- title: ""
  url: ""
  type: ""   # github | slides | article | tool | book | linkedin | discord | video | other
```

---

## World Map

- **Marker type:** past *(cyan)* or upcoming *(amber)*
- **Popup text override:** *(leave blank to use talk title)*

---

## Checklist (Claude will handle these)

- [ ] Add speaker to `speakers` array
- [ ] Add talk to `talks` array (with YouTube URL + Meetup link)
- [ ] Add talk to Knowledge Brain Graph orbit (desktop — `MG_TALKS` in `scripts/main.js`, update outer orbit loop count)
- [ ] Brain Graph mobile list — auto-generated from `talks` array in `data/talks.js` (no HTML edit needed)
- [ ] Add resources to `talkResources` object
- [ ] Add map marker (lat/lng)
- [ ] If previously `upcoming: true` → flip to past (remove flag, update talk/YouTube)
- [ ] Update speaker count in header if needed
- [ ] Update talk count in Brain Graph description (`index.html` — "N talks orbiting the AI brain")
- [ ] Update README — all of the following:
  - "Full list of all N past talks" (Talks section)
  - OG title description: "N Talks · 21 Speakers · 5 Continents"
  - Outer orbit range: "outer (talks 9-N, counter-clockwise)"
  - Talk Resources link count: "N links across N talks" (add new talk's resource count)
  - Talk number in `NEW_TALK_TEMPLATE.md` (next in sequence)

---

## Notes / context

*(Anything else — e.g. co-speaker, special formatting, quote to highlight, etc.)*
