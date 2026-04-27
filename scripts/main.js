    // ── MAP ───────────────────────────────────────────────────────────────────

    let map;

    function initMap() {
        if (map) return;
        const mapEl = document.getElementById('map');
        if (!mapEl) return;

        map = L.map('map', { zoomControl: true, scrollWheelZoom: false }).setView([30, 0], 2);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '\u0026copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors \u0026copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        function makeIcon(upcoming) {
            const color = upcoming ? '#f59e0b' : '#00e5ff';
            const glow = upcoming
                ? 'rgba(245,158,11,0.7), 0 0 20px rgba(245,158,11,0.3)'
                : 'rgba(0,229,255,0.7), 0 0 20px rgba(0,229,255,0.3)';
            return L.divIcon({
                className: '',
                html: '<div style="width:14px;height:14px;background:' + color + ';border-radius:50%;border:2px solid #0a0a0f;box-shadow:0 0 10px ' + glow + ';"></div>',
                iconSize: [14, 14],
                iconAnchor: [7, 7]
            });
        }

        const coordMap = {};
        speakers.forEach(function(s) {
            const key = s.lat.toFixed(2) + ',' + s.lng.toFixed(2);
            if (!coordMap[key]) coordMap[key] = [];
            coordMap[key].push(s);
        });

        Object.keys(coordMap).forEach(function(key) {
            const group = coordMap[key];
            const parts = key.split(',');
            const lat = parseFloat(parts[0]);
            const lng = parseFloat(parts[1]);
            const isUpcoming = group.every(function(s) { return s.upcoming; });
            const names = group.map(function(s) { return s.name; }).join(' + ');
            const locs = group.map(function(s) { return s.location; })
                .filter(function(v, i, a) { return a.indexOf(v) === i; }).join(', ');
            const talksList = group.map(function(s) {
                return '<div class="popup-talk">' + (s.upcoming ? '🔜' : '🎙') + ' ' + s.talk + '</div>';
            }).join('');

            const marker = L.marker([lat, lng], { icon: makeIcon(isUpcoming) }).addTo(map);
            marker.bindPopup(
                '<div class="popup-name">' + names + '</div>' +
                '<div class="popup-location">' + locs + '</div>' +
                talksList,
                { maxWidth: 280 }
            );
        });

        setTimeout(function() { map.invalidateSize(); }, 200);
        setTimeout(function() { map.invalidateSize(); }, 800);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMap);
    } else {
        initMap();
    }
    window.addEventListener('load', initMap);

    // ── SPEAKERS GRID ──────────────────────────────────────────────────────────

    const grid = document.getElementById('speakers-grid');
    speakers.forEach(s => {
        const initials = s.name.split(' ').map(w => w[0]).slice(0, 2).join('');
        grid.innerHTML += `
    <div class="speaker-card">
      <div class="speaker-header">
        <div class="speaker-avatar" style="${s.upcoming ? 'background:linear-gradient(135deg,#f59e0b,#d97706)' : ''}">${initials}</div>
        <div>
          <div class="speaker-name">${s.linkedin ? `<a href="${sanitizeUrl(s.linkedin)}" target="_blank" style="color:inherit;text-decoration:none;display:inline-flex;align-items:center;gap:0.3rem;" rel="noopener noreferrer">${s.name} <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#00e5ff" style="flex-shrink:0;opacity:0.8"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>` : s.name}${s.upcoming ? ' <span style="font-size:0.6rem;background:rgba(245,158,11,0.15);color:#f59e0b;border:1px solid rgba(245,158,11,0.3);padding:0.1rem 0.4rem;border-radius:2px;font-family:var(--font-mono);font-weight:400;vertical-align:middle;letter-spacing:0.08em">UPCOMING</span>' : ''}</div>
          <div class="speaker-location">${s.location}</div>
        </div>
      </div>
      <div class="speaker-bio">${s.bio}</div>
      <div class="speaker-talk">🎙 ${s.talk}</div>
    </div>
  `;
    });

    // ── TALKS LIST ──────────────────────────────────────────────────────────────

    const list = document.getElementById('talks-list');
    talks.forEach(t => {
        list.innerHTML += `
        <div class="talk-item">
          <div class="talk-number">${String(t.n).padStart(2, '0')}</div>
          <div>
            <div class="talk-title">${t.title}</div>
            <div class="talk-speaker">${t.speaker}</div>
          </div>
          <div class="talk-links">
            <a href="${t.yt}" target="_blank" class="talk-link yt" rel="noopener noreferrer">▶ YouTube</a>
            <a href="${t.meetup}" target="_blank" class="talk-link meetup" rel="noopener noreferrer">● Meetup</a>
          </div>
        </div>
      `;
    });
    // ── DYNAMIC: Software Crafters MTL via Guild.host ──────────────────────────

    async function loadCraftersEvent() {
        const titleEl = document.getElementById('crafters-event-title');
        const dateEl = document.getElementById('crafters-event-date');
        try {
            // Guild.host exposes a public JSON feed for each guild's upcoming events
            const res = await fetchWithProxy('https://guild.host/api/guilds/software-crafters-montreal/events?type=upcoming\u0026limit=1');
            if (!res.ok) throw new Error('guild api error');
            const data = await res.json();
            const events = data?.events || data?.data || data;
            const ev = Array.isArray(events) ? events[0] : null;
            if (ev) {
                const name = ev.name || ev.title || 'Upcoming event';
                const dateRaw = ev.startAt || ev.start_at || ev.date || ev.startsAt;
                const dateStr = dateRaw
                    ? new Date(dateRaw).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })
                    : '';
                const mode = ev.isInPerson ? 'In-Person' : ev.isVirtual ? 'Virtual' : '';
                const attendees = ev.attendeeCount || ev.attendees_count || '';
                titleEl.innerHTML = `<a href="https://guild.host/events/${ev.slug || ''}" target="_blank" style="color:inherit;text-decoration:none;" rel="noopener noreferrer">${name} ↗</a>`;
                dateEl.textContent = [dateStr, mode, attendees ? `${attendees} attending` : ''].filter(Boolean).join(' · ');
            } else {
                throw new Error('no event');
            }
        } catch (e) {
            // Fallback: show known event with link
            titleEl.innerHTML = `<a href="https://guild.host/software-crafters-montreal/events" target="_blank" style="color:inherit;text-decoration:none;" rel="noopener noreferrer">See upcoming events on Guild.host ↗</a>`;
            dateEl.textContent = 'Click to view the latest events';
        }
    }

    // ── DYNAMIC: MenderCon via homepage ────────────────────────────────────────

    async function loadMenderConEvent() {
        const titleEl = document.getElementById('mendercon-event-title');
        const dateEl = document.getElementById('mendercon-event-date');
        const ticketEl = document.getElementById('mendercon-ticket-link');
        try {
            // Use a CORS proxy to fetch MenderCon homepage and parse the event info
            const res = await fetchWithProxy('https://mendercon.com');
            if (!res.ok) throw new Error('fetch error');
            const html = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Extract h1 (usually "MenderCon YYYY") and nearby date text
            const h1 = doc.querySelector('h1');
            const eventName = h1 ? h1.textContent.trim() : null;

            // Look for a date-like string near the top of the page
            const bodyText = doc.body ? doc.body.innerText || doc.body.textContent : '';
            const dateMatch = bodyText.match(/(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}/i);
            const dateStr = dateMatch ? dateMatch[0] : null;

            // Look for Eventbrite ticket link
            const ticketAnchor = [...doc.querySelectorAll('a')].find(a =>
                a.href && a.href.includes('eventbrite.com')
            );

            if (eventName) {
                titleEl.textContent = eventName;
                dateEl.textContent = dateStr
                    ? `${dateStr} · Virtual (Gather)`
                    : 'Date TBA — check mendercon.com';
                if (ticketAnchor) {
                    ticketEl.href = ticketAnchor.href;
                    ticketEl.style.display = 'inline-flex';
                }
            } else {
                throw new Error('parse failed');
            }
        } catch (e) {
            // Fallback to last known data
            titleEl.textContent = 'MenderCon — see mendercon.com for next edition';
            dateEl.innerHTML = `<a href="https://mendercon.com" target="_blank" style="color:var(--accent);text-decoration:none;" rel="noopener noreferrer">mendercon.com ↗</a>`;
        }
    }


    // ── XSS SANITIZER ────────────────────────────────────────────────────────────
    function sanitize(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '\u0026amp;')
            .replace(/</g, '\u0026lt;')
            .replace(/>/g, '\u0026gt;')
            .replace(/"/g, '\u0026quot;')
            .replace(/'/g, '\u0026#x27;');
    }
    function sanitizeUrl(url) {
        if (!url) return '#';
        const u = String(url).trim();
        // Only allow http/https URLs
        if (!/^https?:\/\//i.test(u)) return '#';
        return u;
    }

    // ── CORS PROXY CASCADE — tries multiple proxies for reliability ───────────────
    async function fetchWithProxy(url) {
        const proxies = [
            u => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
            u => `https://corsproxy.io/?${encodeURIComponent(u)}`,
            u => `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(u)}`,
        ];
        for (const proxy of proxies) {
            try {
                const res = await fetch(proxy(url), {signal: AbortSignal.timeout(6000)});
                if (res.ok) return res;
            } catch (e) { /* try next */
            }
        }
        throw new Error('All proxies failed');
    }

    async function loadMeetupData() {
        const memberEl = document.getElementById('member-count');
        const banner = document.getElementById('next-event-banner');
        const linkEl = document.getElementById('next-event-link');
        const dateEl = document.getElementById('next-event-date');

        try {
            const res = await fetchWithProxy('https://www.meetup.com/ai-agent-montreal/');
            if (!res.ok) throw new Error('fetch error');
            const html = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const bodyText = doc.body ? doc.body.textContent : '';

            // ── Member count ──
            const memberMatch = bodyText.match(/([\d,]+)\s+[Mm]embers?/);
            if (memberMatch) {
                const count = parseInt(memberMatch[1].replace(/,/g, ''), 10);
                animateCount(memberEl, count);
            } else {
                memberEl.textContent = '800+';
            }

            // ── Next event: look for event links and titles in the DOM ──
            // Meetup renders upcoming events as anchors containing event paths
            const eventAnchors = [...doc.querySelectorAll('a[href*="/events/"]')]
                .filter(a => {
                    const href = a.href || a.getAttribute('href') || '';
                    return href.match(/\/ai-agent-montreal\/events\/\d+/) ||
                        href.match(/meetup\.com\/ai-agent-montreal\/events\/\d+/);
                });

            if (eventAnchors.length > 0) {
                const a = eventAnchors[0];
                const rawHref = a.getAttribute('href') || '';
                const fullUrl = rawHref.startsWith('http') ? rawHref : 'https://www.meetup.com' + rawHref;

                // Get title: try the anchor text, or a nearby heading
                let title = (a.textContent || '').trim().replace(/\s+/g, ' ');
                if (!title || title.length < 5) {
                    const heading = a.querySelector('h2, h3, h1, [class*="title"], [class*="name"]');
                    title = heading ? heading.textContent.trim() : 'Upcoming event';
                }
                if (title.length > 80) title = title.slice(0, 77) + '…';

                // Look for a date near the anchor
                const parentText = (a.parentElement ? a.parentElement.textContent : '') +
                    (a.parentElement?.parentElement ? a.parentElement.parentElement.textContent : '');
                const dateMatch = parentText.match(
                    /(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*,?\s+(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2}/i
                );
                const dateStr = dateMatch ? dateMatch[0] : '';

                linkEl.textContent = title;
                linkEl.href = fullUrl;
                if (dateStr) dateEl.textContent = dateStr;
                banner.style.display = 'inline-flex';
                // Populate ecosystem card too
                _updateAIAgentsEcoCard(title, fullUrl, dateStr);
            } else {
                // Fallback: just show a "see upcoming events" link
                linkEl.textContent = 'See upcoming events ↗';
                linkEl.href = 'https://www.meetup.com/ai-agent-montreal/events/';
                dateEl.textContent = '';
                banner.style.display = 'inline-flex';
                _updateAIAgentsEcoCard('See upcoming events', 'https://www.meetup.com/ai-agent-montreal/events/', '');
            }

        } catch (e) {
            memberEl.textContent = '800+';
            linkEl.textContent = 'See upcoming events ↗';
            linkEl.href = 'https://www.meetup.com/ai-agent-montreal/events/';
            dateEl.textContent = '';
            banner.style.display = 'inline-flex';
            _updateAIAgentsEcoCard('See upcoming events', 'https://www.meetup.com/ai-agent-montreal/events/', '');
        }
    }

    function _updateAIAgentsEcoCard(title, url, date) {
        const t = document.getElementById('aiagents-eco-title');
        const d = document.getElementById('aiagents-eco-date');
        if (t) t.innerHTML = `<a href="${url}" target="_blank" style="color:inherit;text-decoration:none;" rel="noopener noreferrer">${title} ↗</a>`;
        if (d && date) d.textContent = date;
    }

    function animateCount(el, target) {
        const duration = 1200;
        const start = performance.now();
        const startVal = Math.max(0, target - 50);

        function step(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic
            const current = Math.round(startVal + (target - startVal) * eased);
            el.textContent = current.toLocaleString();
            if (progress < 1) requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    // ── ARTICLES TABS ────────────────────────────────────────────────────────────

    document.querySelectorAll('.art-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.art-tab').forEach(t => t.classList.remove('art-tab--active'));
            tab.classList.add('art-tab--active');
            const target = tab.dataset.tab;
            document.getElementById('tab-articles').style.display = target === 'articles' ? 'block' : 'none';
            document.getElementById('tab-resources').style.display = target === 'resources' ? 'block' : 'none';
        });
    });

    // ── MEDIUM RSS FETCH ──────────────────────────────────────────────────────────

    const EXCLUDED_SLUGS = ['formation-continue']; // slugs to exclude

    async function loadMediumArticles() {
        const container = document.getElementById('medium-articles');
        try {
            const rssUrl = 'https://nicolas-rosado.medium.com/feed';
            const res = await fetchWithProxy(rssUrl);
            if (!res.ok) throw new Error('fetch error');
            const text = await res.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, 'text/xml');
            const items = [...xml.querySelectorAll('item')];

            const articles = items
                .map(item => {
                    const title = item.querySelector('title')?.textContent || '';
                    const link = item.querySelector('link')?.textContent?.trim() ||
                        item.getElementsByTagName('link')[0]?.nextSibling?.nodeValue?.trim() || '';
                    const pubDate = item.querySelector('pubDate')?.textContent || '';
                    const desc = item.querySelector('description')?.textContent || '';

                    // Extract plain text excerpt from HTML description
                    const tempDiv = document.createElement('div');
                    tempDiv.textContent = desc;
                    const excerpt = (tempDiv.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 160);

                    // Derive slug from link to check exclusions
                    const slug = link.split('/').pop()?.split('?')[0] || '';
                    const isExcluded = EXCLUDED_SLUGS.some(s => slug.includes(s));

                    const date = pubDate ? new Date(pubDate).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'short', day: 'numeric'
                    }) : '';

                    return {title, link, date, excerpt, isExcluded};
                })
                .filter(a => !a.isExcluded && a.title && a.link);

            if (articles.length === 0) throw new Error('no articles');

            container.innerHTML = articles.map(a => `
      <a href="${a.link}" target="_blank" class="article-card" rel="noopener noreferrer">
        <div class="article-date">${a.date}</div>
        <div class="article-title">${a.title}</div>
        ${a.excerpt ? `<div class="article-excerpt">${a.excerpt}…</div>` : ''}
        <div class="article-readmore">Read on Medium ↗</div>
      </a>
    `).join('');

        } catch (e) {
            // Fallback: hardcoded articles (excluding Formation continue)
            const fallback = [
                {
                    date: 'Feb 17, 2025',
                    title: 'Feedback after five episodes of my podcast 🎙️',
                    link: 'https://nicolas-rosado.medium.com/feedback-after-five-episodes-of-my-podcast-%EF%B8%8F-d7d8d94cfc41',
                    excerpt: 'An open letter to the me of December 2024 from the me of February 2025 — lessons learned after five podcast episodes.'
                },
                {
                    date: 'Feb 17, 2025',
                    title: 'How to tackle developer imposter syndrome thanks to your Reticular Activating System (RAS)',
                    link: 'https://nicolas-rosado.medium.com/how-to-tackle-developer-imposter-syndrome-thanks-to-your-reticular-activating-system-ras-2f38d6dd8d6c',
                    excerpt: 'If you feel like you don\'t know anything despite your experience, your brain\'s RAS might be the key to changing that.'
                },
                {
                    date: 'Dec 3, 2024',
                    title: 'Property Based Testing (PBT) in Java',
                    link: 'https://nicolas-rosado.medium.com/property-based-testing-pbt-in-java-5faccc2ef6f7',
                    excerpt: 'Most developers know classic unit tests but few know property based testing. A clear guide to this powerful testing method.'
                },
                {
                    date: 'Dec 2, 2024',
                    title: 'My Journey On How I Started My Podcast (And Why You Should Overcome Your Fears)',
                    link: 'https://nicolas-rosado.medium.com/my-journey-on-how-i-started-my-podcast-and-why-you-should-overcome-your-fears-c6bca3a5478e',
                    excerpt: 'How I went from fear to action and launched my podcast — and why you should too.'
                },
                {
                    date: 'Jan 17, 2022',
                    title: 'How being a twin girls father has improved my work as a lead developer',
                    link: 'https://nicolas-rosado.medium.com/how-being-a-twin-girls-father-has-improved-my-work-as-a-lead-developer-df5e1b708b02',
                    excerpt: 'Becoming a father of twin girls taught me lessons that made me a better lead developer than any book or course.'
                },
            ];
            container.innerHTML = fallback.map(a => `
      <a href="${a.link}" target="_blank" class="article-card" rel="noopener noreferrer">
        <div class="article-date">${a.date}</div>
        <div class="article-title">${a.title}</div>
        <div class="article-excerpt">${a.excerpt}</div>
        <div class="article-readmore">Read on Medium ↗</div>
      </a>
    `).join('');
        }
    }

    function renderResources() {
        const container = document.getElementById('resources-list');
        if (talkResources.length === 0) {
            container.innerHTML = `<div class="resources-placeholder">
      🔗 Talk resources (slides, GitHub repos, tools) will appear here soon.<br/>
      They are pinned in the comments of each YouTube video.
    </div>`;
            return;
        }
        container.innerHTML = talkResources.map((t, i) => `
    <div class="resource-group" id="rg-${i}">
      <div class="resource-group-header" onclick="toggleResource(${i})">
        <span>${t.talk}</span>
        <span class="resource-group-speaker">${t.speaker}</span>
        <span class="resource-toggle">▼</span>
      </div>
      <div class="resource-links">
        ${t.links.map(l => `          <a href="${sanitizeUrl(l.url)}" target="_blank" class="resource-link" rel="noopener noreferrer">
            <span class="resource-link-label">${l.label}</span>
            ${l.url}
          </a>
        `).join('')}
      </div>
    </div>
  `).join('');
    }

    function toggleResource(i) {
        document.getElementById('rg-' + i)?.classList.toggle('open');
    }

    // ── DYNAMIC: CraftCode Podcast — title/date from Anchor RSS, link → YouTube ───

    async function loadCraftCodeEpisode() {
        const titleEl = document.getElementById('craftcode-ep-title');
        const dateEl = document.getElementById('craftcode-ep-date');

        const YT_PLAYLIST = 'https://youtube.com/playlist?list=PLpWOuEp7MZW91uyBJZyOf_HzBM1eEFUHx\u0026si=gvcSRUvLaBZvtk4j';

        try {
            const RSS_URL = 'https://anchor.fm/s/ff024d88/podcast/rss';
            const res = await fetchWithProxy(RSS_URL);
            if (!res.ok) throw new Error('fetch error');
            const text = await res.text();
            const xml = new DOMParser().parseFromString(text, 'text/xml');

            const item = xml.querySelector('item');
            if (!item) throw new Error('no item');

            const title = item.querySelector('title')?.textContent?.trim() || 'Latest episode';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const date = pubDate ? new Date(pubDate).toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric'
            }) : '';

            // Always link to YouTube — RSS is only used for title \u0026 date metadata
            titleEl.innerHTML = `<a href="${YT_PLAYLIST}" target="_blank" style="color:inherit;text-decoration:none;" rel="noopener noreferrer">${title} ↗</a>`;
            dateEl.textContent = date ? `${date} · Watch on YouTube` : 'Watch on YouTube';
        } catch (e) {
            titleEl.innerHTML = `<a href="${YT_PLAYLIST}" target="_blank" style="color:inherit;text-decoration:none;" rel="noopener noreferrer">See all episodes on YouTube ↗</a>`;
            dateEl.textContent = 'Also available on Spotify';
        }
    }

    loadMediumArticles();
    renderResources();
    loadCraftCodeEpisode();


    // ── CIRCUIT BEAM ANIMATION ────────────────────────────────────────────────────

    (function () {
        const canvas = document.getElementById('circuit-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let rails = [];
        let beams  = [];
        let raf;

        function resize() {
            const w = canvas.parentElement ? canvas.parentElement.offsetWidth : window.innerWidth;
            const h = canvas.parentElement ? canvas.parentElement.offsetHeight : window.innerHeight;
            canvas.width  = w || window.innerWidth;
            canvas.height = h || 500;
        }

        function buildRails() {
            const W = canvas.width, H = canvas.height;
            if (!W || !H) return;

            rails = [
                [{x:0,y:H*.22},{x:W*.12,y:H*.22},{x:W*.12,y:H*.44},{x:W*.28,y:H*.44},{x:W*.28,y:H*.18},{x:W*.55,y:H*.18},{x:W*.55,y:H*.38},{x:W*.72,y:H*.38},{x:W*.72,y:H*.12},{x:W,y:H*.12}],
                [{x:W,y:H*.30},{x:W*.88,y:H*.30},{x:W*.88,y:H*.58},{x:W*.68,y:H*.58},{x:W*.68,y:H*.28},{x:W*.48,y:H*.28},{x:W*.48,y:H*.62},{x:W*.32,y:H*.62},{x:W*.32,y:H*.35},{x:W*.15,y:H*.35},{x:W*.15,y:H*.72},{x:0,y:H*.72}],
                [{x:W*.20,y:0},{x:W*.20,y:H*.25},{x:W*.38,y:H*.25},{x:W*.38,y:H*.68},{x:W*.52,y:H*.68},{x:W*.52,y:H*.15},{x:W*.65,y:H*.15},{x:W*.65,y:H*.50},{x:W*.82,y:H*.50},{x:W*.82,y:H}],
            ];

            beams = rails.map(function(rail, ri) {
                return {
                    rail:   rail,
                    pos:    ri / rails.length,
                    speed:  0.0018 + ri * 0.00036,   // x3 vs previous
                    length: 0.18 + ri * 0.04,
                    width:  3 + ri * 0.8,
                };
            });
        }

        function ptOn(rail, t) {
            t = ((t % 1) + 1) % 1;
            const n = rail.length - 1;
            const seg = Math.min(Math.floor(t * n), n - 1);
            const f = t * n - seg;
            return {
                x: rail[seg].x + (rail[seg + 1].x - rail[seg].x) * f,
                y: rail[seg].y + (rail[seg + 1].y - rail[seg].y) * f,
            };
        }

        function drawRail(rail) {
            ctx.beginPath();
            ctx.moveTo(rail[0].x, rail[0].y);
            for (let i = 1; i < rail.length; i++) ctx.lineTo(rail[i].x, rail[i].y);
            ctx.strokeStyle = 'rgba(120,15,5,0.18)';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            rail.forEach(function(p, i) {
                if (i === 0 || i === rail.length - 1) return;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(160,30,8,0.28)';
                ctx.fill();
            });
        }

        function drawBeam(b) {
            b.pos = (b.pos + b.speed) % 1;
            const steps = 80;
            for (let i = 0; i < steps; i++) {
                const t    = ((b.pos - i / steps * b.length) + 1) % 1;
                const pt   = ptOn(b.rail, t);
                const frac = i / steps;
                let r, g, bv, alpha;
                if (frac < 0.08) {
                    r=255; g=240; bv=180; alpha=1.0;
                } else if (frac < 0.2) {
                    const f=(frac-0.08)/0.12;
                    r=255; g=Math.round(240-(240-120)*f); bv=Math.round(180*(1-f)); alpha=0.95-f*0.1;
                } else if (frac < 0.5) {
                    const f=(frac-0.2)/0.3;
                    r=255; g=Math.round(120*(1-f)); bv=0; alpha=0.85-f*0.35;
                } else {
                    const f=(frac-0.5)/0.5;
                    r=Math.round(200*(1-f*0.5)); g=0; bv=0; alpha=(0.5-f*0.5)*0.8;
                }
                const size = b.width * (1 - frac * 0.7);
                // Halo
                if (frac < 0.3) {
                    const haloSize = size * 3;
                    const hGrd = ctx.createRadialGradient(pt.x,pt.y,0,pt.x,pt.y,haloSize);
                    const hAlpha = alpha * 0.25 * (1 - frac / 0.3);
                    hGrd.addColorStop(0, 'rgba('+r+','+g+','+bv+','+hAlpha+')');
                    hGrd.addColorStop(1, 'rgba('+r+','+g+','+bv+',0)');
                    ctx.beginPath(); ctx.arc(pt.x,pt.y,haloSize,0,Math.PI*2);
                    ctx.fillStyle = hGrd; ctx.fill();
                }
                ctx.beginPath(); ctx.arc(pt.x,pt.y,size,0,Math.PI*2);
                ctx.fillStyle = 'rgba('+r+','+g+','+bv+','+alpha+')';
                ctx.fill();
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            rails.forEach(drawRail);
            beams.forEach(drawBeam);
            raf = requestAnimationFrame(animate);
        }

        function start() {
            resize();
            buildRails();
            if (canvas.width > 0 && canvas.height > 0) {
                animate();
            } else {
                setTimeout(start, 100);
            }
        }

        window.addEventListener('resize', function() { resize(); buildRails(); });

        if (document.readyState === 'complete') {
            setTimeout(start, 50);
        } else {
            window.addEventListener('load', function() { setTimeout(start, 50); });
        }
    })();

    loadMeetupData();
    loadCraftersEvent();
    loadMenderConEvent();

    // ── TALK KNOWLEDGE GRAPH ──────────────────────────────────────────────────────

    (function() {
        var container = document.getElementById('mindgraph-container');
        if (!container) return;

        var mgSvg    = document.getElementById('mg-svg');
        var mgCanvas = document.getElementById('mg-circuit');
        var mgHit    = document.getElementById('mg-hit');
        var NS       = 'http://www.w3.org/2000/svg';

        function mgEl(tag, attrs, p) {
            attrs = attrs || {};
            var e = document.createElementNS(NS, tag);
            Object.keys(attrs).forEach(function(k){ e.setAttribute(k, attrs[k]); });
            if (p) p.appendChild(e);
            return e;
        }

        var W  = container.offsetWidth;
        var H  = container.offsetHeight;
        var CX = W/2, CY = H/2;
        var R1 = Math.min(W,H) * 0.26;
        var R2 = Math.min(W,H) * 0.39;
        var BRAIN_R = 175;
        var FONT_SIZE = '9px';

        mgCanvas.width = W; mgCanvas.height = H;
        mgHit.width    = W; mgHit.height    = H;

        var mgCtx = mgCanvas.getContext('2d');

        var MG_TALKS = [
            { t:"How to Trust AI Coding at Scale",          yt:"https://www.youtube.com/watch?v=Ie27sg1FQik\u0026t=1989s" },
            { t:"Software Craftsmanship for Coding Agents", yt:"https://www.youtube.com/watch?v=nd2fXYHK4vc\u0026t=5s" },
            { t:"Refactoring Legacy Code Safely",           yt:"https://www.youtube.com/watch?v=nDu0zA_QiwU\u0026t=2773s" },
            { t:"Zero Lines, Zero Bugs",                    yt:"https://www.youtube.com/watch?v=c6EsmTs4dAY\u0026t=154s" },
            { t:"Instrument, Govern \u0026 Debug Agents",   yt:"https://www.youtube.com/watch?v=BQfBNesA_7A\u0026t=551s" },
            { t:"Team Dynamics After AI",                   yt:"https://www.youtube.com/watch?v=9coYgxFwHuU\u0026t=423s" },
            { t:"Agents Across the SDLC",                   yt:"https://www.youtube.com/watch?v=CZjImpmUR7Y\u0026t=1605s" },
            { t:"How AI Agents Really Read Code",           yt:"https://www.youtube.com/watch?v=YXx4YQnu7Cs" },
            { t:"Approximation Before Precision",           yt:"https://www.youtube.com/watch?v=82Tah-yrcFY\u0026t=327s" },
            { t:"New Organizational Models for AI",         yt:"https://www.youtube.com/watch?v=McozJv6ThiQ\u0026t=3030s" },
            { t:"From Spaghetti to Ravioli",                yt:"https://www.youtube.com/watch?v=Zdobci6tWeM\u0026t=9s" },
            { t:"Agentic AI Coding: Best Practices",        yt:"https://www.youtube.com/watch?v=AQWyhqzGHaU\u0026t=982s" },
            { t:"XP Practices: The Missing Piece",          yt:"https://www.youtube.com/watch?v=M58tOdNHbxM\u0026t=4956s" },
            { t:"AC/DC \u2014 Agent-Centric Dev Cycle",     yt:"https://www.youtube.com/watch?v=YXXFjebvfNc\u0026t=9s" },
            { t:"LLM-assisted Coding: A Systems Perspective", yt:"https://www.youtube.com/watch?v=eEA0gJnWLh0" },
        ];

        // Brain image — uses assets/ai-agents-image.jpg (already in repo)
        document.getElementById('mg-bmc').setAttribute('cx', CX);
        document.getElementById('mg-bmc').setAttribute('cy', CY);
        document.getElementById('mg-bmc').setAttribute('r', BRAIN_R);
        mgEl('image', { href:'assets/brain-circle.jpg', x:CX-BRAIN_R, y:CY-BRAIN_R,
            width:BRAIN_R*2, height:BRAIN_R*2, mask:'url(#mg-bm)',
            preserveAspectRatio:'none',
            style:'' }, mgSvg);
        mgEl('circle', { cx:CX,cy:CY,r:BRAIN_R,fill:'url(#mg-grid)',mask:'url(#mg-bm)',style:'pointer-events:none;opacity:0.5' }, mgSvg);
        mgEl('circle', { cx:CX,cy:CY,r:BRAIN_R,fill:'url(#mg-bd)',mask:'url(#mg-bm)',style:'pointer-events:none' }, mgSvg);
        mgEl('circle', { cx:CX,cy:CY,r:BRAIN_R,fill:'url(#mg-cg)',mask:'url(#mg-bm)',style:'pointer-events:none' }, mgSvg);
        mgEl('circle', { cx:CX,cy:CY,r:BRAIN_R,fill:'url(#mg-vg)',mask:'url(#mg-bm)',style:'pointer-events:none' }, mgSvg);


        // Circuit rails — beam style
        var mgRails = [
            [{x:0,y:H*.18},{x:W*.10,y:H*.18},{x:W*.10,y:H*.40},{x:W*.28,y:H*.40},{x:W*.28,y:H*.12},{x:W*.55,y:H*.12},{x:W*.55,y:H*.38},{x:W*.78,y:H*.38},{x:W*.78,y:H*.08},{x:W,y:H*.08}],
            [{x:W,y:H*.72},{x:W*.85,y:H*.72},{x:W*.85,y:H*.52},{x:W*.60,y:H*.52},{x:W*.60,y:H*.82},{x:W*.35,y:H*.82},{x:W*.35,y:H*.60},{x:W*.12,y:H*.60},{x:W*.12,y:H*.90},{x:0,y:H*.90}],
            [{x:W*.22,y:0},{x:W*.22,y:H*.28},{x:W*.42,y:H*.28},{x:W*.42,y:H*.72},{x:W*.60,y:H*.72},{x:W*.60,y:H*.15},{x:W*.80,y:H*.15},{x:W*.80,y:H}],
        ];
        var mgBeams = mgRails.map(function(rail, ri) {
            return { rail:rail, pos:ri/mgRails.length, speed:0.0018+ri*0.00036, length:0.18+ri*0.04, width:3+ri*0.8 };
        });
        function mgPtOn(rail, t) {
            t=((t%1)+1)%1;
            var n=rail.length-1, seg=Math.min(Math.floor(t*n),n-1), f=t*n-seg;
            return { x:rail[seg].x+(rail[seg+1].x-rail[seg].x)*f, y:rail[seg].y+(rail[seg+1].y-rail[seg].y)*f };
        }
        function mgDrawBeam(b) {
            b.pos=(b.pos+b.speed)%1;
            var steps=80;
            for(var i=0;i<steps;i++){
                var t=((b.pos-i/steps*b.length)+1)%1;
                var pt=mgPtOn(b.rail,t);
                var frac=i/steps;
                var r,g,bv,alpha;
                if(frac<0.08){r=255;g=240;bv=180;alpha=1.0;}
                else if(frac<0.2){var f=(frac-0.08)/0.12;r=255;g=Math.round(240-(240-120)*f);bv=Math.round(180*(1-f));alpha=0.95-f*0.1;}
                else if(frac<0.5){var f=(frac-0.2)/0.3;r=255;g=Math.round(120*(1-f));bv=0;alpha=0.85-f*0.35;}
                else{var f=(frac-0.5)/0.5;r=Math.round(200*(1-f*0.5));g=0;bv=0;alpha=(0.5-f*0.5)*0.8;}
                var size=b.width*(1-frac*0.7);
                if(frac<0.3){
                    var haloSize=size*3;
                    var hGrd=mgCtx.createRadialGradient(pt.x,pt.y,0,pt.x,pt.y,haloSize);
                    var hAlpha=alpha*0.25*(1-frac/0.3);
                    hGrd.addColorStop(0,'rgba('+r+','+g+','+bv+','+hAlpha+')');
                    hGrd.addColorStop(1,'rgba('+r+','+g+','+bv+',0)');
                    mgCtx.beginPath();mgCtx.arc(pt.x,pt.y,haloSize,0,Math.PI*2);
                    mgCtx.fillStyle=hGrd;mgCtx.fill();
                }
                mgCtx.beginPath();mgCtx.arc(pt.x,pt.y,size,0,Math.PI*2);
                mgCtx.fillStyle='rgba('+r+','+g+','+bv+','+alpha+')';
                mgCtx.fill();
            }
        }

        var mgBaseAngle = 0;
        var mgHovered   = -1;
        var mgPositions = MG_TALKS.map(function() { return {x:0,y:0,w:0}; });
        var INNER_SPD   = 0.00042;
        var OUTER_SPD   = 0.00055;

        mgHit.addEventListener('mousemove', function(e) {
            var rect=mgHit.getBoundingClientRect(), mx=e.clientX-rect.left, my=e.clientY-rect.top;
            mgHovered=-1;
            mgPositions.forEach(function(pos,i){
                if(Math.abs(mx-pos.x)<pos.w/2+8 && Math.abs(my-pos.y)<12) mgHovered=i;
            });
            mgHit.style.cursor = mgHovered>=0?'pointer':'default';
        });
        mgHit.addEventListener('click', function(){
            if(mgHovered>=0) window.open(MG_TALKS[mgHovered].yt,'_blank');
        });

        function drawOrbNode(i, x, y) {
            var isHov=mgHovered===i, text=MG_TALKS[i].t;
            mgCtx.font='9px Space Mono, monospace';
            var tw=mgCtx.measureText(text).width;
            mgPositions[i]={x:x,y:y,w:tw};
            // Halo
            var gr=mgCtx.createRadialGradient(x,y,0,x,y,isHov?30:21);
            gr.addColorStop(0,isHov?'rgba(0,229,255,0.35)':'rgba(0,229,255,0.22)');
            gr.addColorStop(1,'rgba(0,229,255,0)');
            mgCtx.beginPath();mgCtx.arc(x,y,isHov?30:21,0,Math.PI*2);
            mgCtx.fillStyle=gr;mgCtx.fill();
            // Dot
            mgCtx.beginPath();mgCtx.arc(x,y,isHov?6:4.5,0,Math.PI*2);
            mgCtx.fillStyle=isHov?'rgba(0,229,255,1)':'rgba(0,229,255,0.85)';
            mgCtx.shadowColor='rgba(0,229,255,0.9)';mgCtx.shadowBlur=isHov?18:12;
            mgCtx.fill();mgCtx.shadowBlur=0;
            // Highlight
            mgCtx.beginPath();mgCtx.arc(x-1,y-1,isHov?2:1.5,0,Math.PI*2);
            mgCtx.fillStyle='rgba(255,255,255,0.7)';mgCtx.fill();
            // Label
            mgCtx.save();mgCtx.textAlign='center';mgCtx.textBaseline='middle';
            mgCtx.font='9px Space Mono, monospace';
            if(isHov){mgCtx.shadowColor='rgba(0,229,255,0.8)';mgCtx.shadowBlur=16;}
            mgCtx.fillStyle=isHov?'#ffffff':'rgba(185,195,220,0.78)';
            mgCtx.fillText(text,x,y-14);
            mgCtx.restore();
        }

        function mgAnimate() {
            var mult=mgHovered>=0?0.08:1;
            mgBaseAngle+=INNER_SPD*mult;
            mgCtx.clearRect(0,0,W,H);
            mgCtx.font='9px Space Mono, monospace';
            // Orbit rings
            [R1,R2].forEach(function(r){
                mgCtx.beginPath();mgCtx.arc(CX,CY,r,0,Math.PI*2);
                mgCtx.strokeStyle='rgba(0,229,255,0.05)';mgCtx.lineWidth=1;
                mgCtx.setLineDash([3,9]);mgCtx.stroke();mgCtx.setLineDash([]);
            });
            // Circuit rails
            mgRails.forEach(function(rail){
                mgCtx.beginPath();mgCtx.moveTo(rail[0].x,rail[0].y);
                rail.forEach(function(p){mgCtx.lineTo(p.x,p.y);});
                mgCtx.strokeStyle='rgba(120,15,5,0.18)';mgCtx.lineWidth=1.5;mgCtx.stroke();
                rail.forEach(function(p,i){
                    if(i===0||i===rail.length-1)return;
                    mgCtx.beginPath();mgCtx.arc(p.x,p.y,2.5,0,Math.PI*2);
                    mgCtx.fillStyle='rgba(160,30,8,0.28)';mgCtx.fill();
                });
            });
            mgBeams.forEach(mgDrawBeam);
            // Inner orbit (0-7, 8 talks, clockwise)
            for(var i=0;i<8;i++){
                var a=mgBaseAngle+(i/8)*Math.PI*2;
                drawOrbNode(i,CX+Math.cos(a)*R1,CY+Math.sin(a)*R1);
            }
            // Outer orbit (8-14, 7 talks, counter-clockwise)
            var outerA=-(mgBaseAngle*(OUTER_SPD/INNER_SPD));
            for(var j=0;j<7;j++){
                var a2=outerA+(j/7)*Math.PI*2;
                drawOrbNode(8+j,CX+Math.cos(a2)*R2,CY+Math.sin(a2)*R2);
            }
            requestAnimationFrame(mgAnimate);
        }
        mgAnimate();
    })();

    // ── ECOSYSTEM CIRCUIT GRAPH ───────────────────────────────────────────────────

    (function() {
        var container = document.getElementById('ecograph-container');
        if (!container) return;

        var ecoSvg    = document.getElementById('eco-svg');
        var ecoCanvas = document.getElementById('eco-circuit');
        var ecoHit    = document.getElementById('eco-hit');
        var NS        = 'http://www.w3.org/2000/svg';

        function ecoEl(tag, attrs, p) {
            var e = document.createElementNS(NS, tag);
            Object.keys(attrs || {}).forEach(function(k){ e.setAttribute(k, attrs[k]); });
            if (p) p.appendChild(e);
            return e;
        }

        var W  = container.offsetWidth;
        var H  = container.offsetHeight;
        var CX = W/2, CY = H/2;
        var R1 = Math.min(W,H) * 0.30;
        var ECO_BRAIN_R = 155;
        var ECO_FONT = '10px';

        ecoCanvas.width = W; ecoCanvas.height = H;
        ecoHit.width    = W; ecoHit.height    = H;

        var ecoCtx = ecoCanvas.getContext('2d');

        var INITIATIVES = [
            { name:'AI Agents Montreal',      emoji:'\uD83E\uDD16', url:'https://www.meetup.com/ai-agent-montreal/' },
            { name:'Software Crafters MTL',   emoji:'\uD83D\uDD27', url:'https://guild.host/software-crafters-montreal' },
            { name:'Mental Health in SW Eng', emoji:'\uD83E\uDDE0', url:'https://www.meetup.com/mental-health-in-software-engineering-montreal/' },
            { name:'AI Craftspeople Guild',   emoji:'\u2692\uFE0F', url:'https://aicraftspeopleguild.github.io' },
            { name:'/dev/mtl',               emoji:'\uD83C\uDFD9\uFE0F', url:'https://www.dev-mtl.ca' },
            { name:'Devoxx4Kids Qu\u00e9bec', emoji:'\uD83D\uDC7E', url:'https://www.devoxx4kids.org/quebec/' },
            { name:'MenderCon',              emoji:'\uD83D\uDD27', url:'https://mendercon.com' },
            { name:'Montr\u00e9al JUG',      emoji:'\u2615', url:'https://www.montreal-jug.org' },
        ];

        // Circuit image center
        document.getElementById('eco-cmc').setAttribute('cx', CX);
        document.getElementById('eco-cmc').setAttribute('cy', CY);
        document.getElementById('eco-cmc').setAttribute('r', ECO_BRAIN_R);
        document.getElementById('eco-cmc').setAttribute('r', ECO_BRAIN_R);
        ecoEl('image', { href:'assets/circuit-crop.jpg', x:CX-ECO_BRAIN_R, y:CY-ECO_BRAIN_R,
            width:ECO_BRAIN_R*2, height:ECO_BRAIN_R*2, mask:'url(#eco-cm)',
            preserveAspectRatio:'none', style:'' }, ecoSvg);
        ecoEl('circle', { cx:CX,cy:CY,r:ECO_BRAIN_R,fill:'url(#eco-grid)',mask:'url(#eco-cm)',style:'pointer-events:none;opacity:0.4' }, ecoSvg);
        ecoEl('circle', { cx:CX,cy:CY,r:ECO_BRAIN_R,fill:'url(#eco-cd)',mask:'url(#eco-cm)',style:'pointer-events:none' }, ecoSvg);
        ecoEl('circle', { cx:CX,cy:CY,r:ECO_BRAIN_R,fill:'url(#eco-rg)',mask:'url(#eco-cm)',style:'pointer-events:none' }, ecoSvg);

        var ecoRails = [
            [{x:0,y:H*.18},{x:W*.10,y:H*.18},{x:W*.10,y:H*.40},{x:W*.28,y:H*.40},{x:W*.28,y:H*.12},{x:W*.55,y:H*.12},{x:W*.55,y:H*.38},{x:W*.78,y:H*.38},{x:W*.78,y:H*.08},{x:W,y:H*.08}],
            [{x:W,y:H*.72},{x:W*.85,y:H*.72},{x:W*.85,y:H*.52},{x:W*.60,y:H*.52},{x:W*.60,y:H*.82},{x:W*.35,y:H*.82},{x:W*.35,y:H*.60},{x:W*.12,y:H*.60},{x:W*.12,y:H*.90},{x:0,y:H*.90}],
            [{x:W*.22,y:0},{x:W*.22,y:H*.28},{x:W*.42,y:H*.28},{x:W*.42,y:H*.72},{x:W*.60,y:H*.72},{x:W*.60,y:H*.15},{x:W*.80,y:H*.15},{x:W*.80,y:H}],
        ];
        var ecoBeams = ecoRails.map(function(rail, ri) {
            return { rail:rail, pos:ri/ecoRails.length, speed:0.0018+ri*0.00036, length:0.18+ri*0.04, width:3+ri*0.8 };
        });
        function ecoPtOn(rail, t) {
            t=((t%1)+1)%1;
            var n=rail.length-1, seg=Math.min(Math.floor(t*n),n-1), f=t*n-seg;
            return { x:rail[seg].x+(rail[seg+1].x-rail[seg].x)*f, y:rail[seg].y+(rail[seg+1].y-rail[seg].y)*f };
        }
        function ecoDrawBeam(b) {
            b.pos=(b.pos+b.speed)%1;
            var steps=80;
            for(var i=0;i<steps;i++){
                var t=((b.pos-i/steps*b.length)+1)%1, pt=ecoPtOn(b.rail,t), frac=i/steps;
                var r,g,bv,alpha;
                if(frac<0.08){r=255;g=240;bv=180;alpha=1.0;}
                else if(frac<0.2){var ff=(frac-0.08)/0.12;r=255;g=Math.round(240-(240-120)*ff);bv=Math.round(180*(1-ff));alpha=0.95-ff*0.1;}
                else if(frac<0.5){var ff=(frac-0.2)/0.3;r=255;g=Math.round(120*(1-ff));bv=0;alpha=0.85-ff*0.35;}
                else{var ff=(frac-0.5)/0.5;r=Math.round(200*(1-ff*0.5));g=0;bv=0;alpha=(0.5-ff*0.5)*0.8;}
                var size=b.width*(1-frac*0.7);
                if(frac<0.3){
                    var hs=size*3,hG=ecoCtx.createRadialGradient(pt.x,pt.y,0,pt.x,pt.y,hs),hA=alpha*0.25*(1-frac/0.3);
                    hG.addColorStop(0,'rgba('+r+','+g+','+bv+','+hA+')');hG.addColorStop(1,'rgba('+r+','+g+','+bv+',0)');
                    ecoCtx.beginPath();ecoCtx.arc(pt.x,pt.y,hs,0,Math.PI*2);ecoCtx.fillStyle=hG;ecoCtx.fill();
                }
                ecoCtx.beginPath();ecoCtx.arc(pt.x,pt.y,size,0,Math.PI*2);
                ecoCtx.fillStyle='rgba('+r+','+g+','+bv+','+alpha+')';ecoCtx.fill();
            }
        }

        var ECO_SPEED=0.00035, ecoBaseAngle=0, ecoHovered=-1;
        var ecoPositions=INITIATIVES.map(function(){ return {x:0,y:0,w:0}; });

        ecoHit.addEventListener('mousemove', function(e) {
            var rect=ecoHit.getBoundingClientRect(), mx=e.clientX-rect.left, my=e.clientY-rect.top;
            ecoHovered=-1;
            ecoPositions.forEach(function(pos,i){
                if(Math.abs(mx-pos.x)<pos.w/2+10 && Math.abs(my-pos.y)<16) ecoHovered=i;
            });
            ecoHit.style.cursor=ecoHovered>=0?'pointer':'default';
        });
        ecoHit.addEventListener('click', function(){
            if(ecoHovered>=0) window.open(INITIATIVES[ecoHovered].url,'_blank','noopener noreferrer');
        });

        function ecoDrawNode(i, x, y) {
            var isHov=ecoHovered===i, init=INITIATIVES[i];
            ecoCtx.font=ECO_FONT+' Space Mono, monospace';
            var label=init.emoji+' '+init.name, tw=ecoCtx.measureText(label).width;
            ecoPositions[i]={x:x,y:y,w:tw};
            var gr=ecoCtx.createRadialGradient(x,y,0,x,y,isHov?35:24);
            gr.addColorStop(0,isHov?'rgba(255,100,20,0.45)':'rgba(220,60,10,0.28)');
            gr.addColorStop(1,'rgba(255,80,10,0)');
            ecoCtx.beginPath();ecoCtx.arc(x,y,isHov?35:24,0,Math.PI*2);ecoCtx.fillStyle=gr;ecoCtx.fill();
            ecoCtx.beginPath();ecoCtx.arc(x,y,isHov?6:4.5,0,Math.PI*2);
            ecoCtx.fillStyle=isHov?'rgba(255,160,50,1)':'rgba(220,80,20,0.90)';
            ecoCtx.shadowColor='rgba(255,100,20,0.9)';ecoCtx.shadowBlur=isHov?20:12;
            ecoCtx.fill();ecoCtx.shadowBlur=0;
            ecoCtx.beginPath();ecoCtx.arc(x-1,y-1,isHov?2:1.5,0,Math.PI*2);
            ecoCtx.fillStyle='rgba(255,255,255,0.8)';ecoCtx.fill();
            ecoCtx.save();ecoCtx.textAlign='center';ecoCtx.textBaseline='middle';
            ecoCtx.font=isHov?'bold '+ECO_FONT+' Space Mono, monospace':ECO_FONT+' Space Mono, monospace';
            if(isHov){ecoCtx.shadowColor='rgba(255,120,30,0.9)';ecoCtx.shadowBlur=14;}
            ecoCtx.fillStyle=isHov?'#ffb060':'rgba(220,180,150,0.82)';
            ecoCtx.fillText(label,x,y-16);
            ecoCtx.restore();
        }

        function ecoAnimate() {
            var mult=ecoHovered>=0?0.06:1;
            ecoBaseAngle+=ECO_SPEED*mult;
            ecoCtx.clearRect(0,0,W,H);
            ecoCtx.beginPath();ecoCtx.arc(CX,CY,R1,0,Math.PI*2);
            ecoCtx.strokeStyle='rgba(200,50,10,0.12)';ecoCtx.lineWidth=1;
            ecoCtx.setLineDash([3,9]);ecoCtx.stroke();ecoCtx.setLineDash([]);
            ecoRails.forEach(function(rail){
                ecoCtx.beginPath();ecoCtx.moveTo(rail[0].x,rail[0].y);
                rail.forEach(function(p){ecoCtx.lineTo(p.x,p.y);});
                ecoCtx.strokeStyle='rgba(120,15,5,0.18)';ecoCtx.lineWidth=1.5;ecoCtx.stroke();
                rail.forEach(function(p,i){
                    if(i===0||i===rail.length-1)return;
                    ecoCtx.beginPath();ecoCtx.arc(p.x,p.y,2.5,0,Math.PI*2);
                    ecoCtx.fillStyle='rgba(160,30,8,0.28)';ecoCtx.fill();
                });
            });
            ecoBeams.forEach(ecoDrawBeam);
            for(var i=0;i<INITIATIVES.length;i++){
                var angle=ecoBaseAngle+(i/INITIATIVES.length)*Math.PI*2;
                ecoDrawNode(i,CX+Math.cos(angle)*R1,CY+Math.sin(angle)*R1);
            }
            requestAnimationFrame(ecoAnimate);
        }
        ecoAnimate();
    })();
