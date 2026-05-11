# 🎙 New Talk — Template

Copy this file, fill in all fields, and share it with Claude to update the site.

---

## Speaker

- **Full name:**
- **LinkedIn URL:** https://www.linkedin.com/in/
- **Location (City, Country + flag emoji):** e.g. Berlin, Germany 🇩🇪
- **Latitude / Longitude:** (for the World Map marker — use maps.google.com to find)
- **Short bio (2-3 sentences):**
- **Upcoming → Past:** Was this speaker previously listed as `upcoming: true`? (yes/no)

---

## Talk

- **Talk title:**
- **Meetup event URL:** https://www.meetup.com/ai-agent-montreal/events/
- **YouTube video URL (with timestamp if applicable):** https://www.youtube.com/watch?v=
- **Talk number** (next in sequence — currently 17): #

---

## Talk Resources *(optional — from YouTube comments or slides)*

> ⚠️ **Claude: always ask for resources before proceeding**, even if this section is left blank. Do not skip this step.

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
- [ ] Update README — talk count in "Full list of all N past talks" + talk number in `NEW_TALK_TEMPLATE.md`

---

## Notes / context

*(Anything else — e.g. co-speaker, special formatting, quote to highlight, etc.)*
