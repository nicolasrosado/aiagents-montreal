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
- **Talk number** (next in sequence — currently 15): #

---

## Talk Resources *(optional — from YouTube comments or slides)*

Add as many as needed. Remove section if none.

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
- [ ] Add talk to Knowledge Brain Graph orbit
- [ ] Add resources to `talkResources` object
- [ ] Add map marker (lat/lng)
- [ ] If previously `upcoming: true` → flip to past (remove flag, update talk/YouTube)
- [ ] Update speaker count in header if needed

---

## Notes / context

*(Anything else — e.g. co-speaker, special formatting, quote to highlight, etc.)*
