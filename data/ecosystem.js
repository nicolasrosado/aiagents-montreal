// Orbit graph nodes (ecosystem-graph section)
const INITIATIVES = [
    { name:'AI Agents Montreal',      emoji:'🤖', url:'https://www.meetup.com/ai-agent-montreal/' },
    { name:'Software Crafters MTL',   emoji:'🔧', url:'https://guild.host/software-crafters-montreal' },
    { name:'Mental Health in SW Eng', emoji:'🧠', url:'https://www.meetup.com/mental-health-in-software-engineering-montreal/' },
    { name:'AI Craftspeople Guild',   emoji:'⚒️', url:'https://aicraftspeopleguild.github.io' },
    { name:'/dev/mtl',               emoji:'🏙️', url:'https://www.dev-mtl.ca' },
    { name:'Devoxx4Kids Québec', emoji:'👾', url:'https://www.devoxx4kids.org/quebec/' },
    { name:'MenderCon',              emoji:'🔧', url:'https://mendercon.com' },
    { name:'Montréal JUG',      emoji:'☕', url:'https://www.montreal-jug.org' },
];

// Ecosystem section community cards (rendered by renderEcosystem in main.js)
const ecosystemCommunities = [
    {
        emoji: '🧠',
        name: 'Mental Health in Software Engineering',
        type: 'Meetup · Montreal',
        badges: [
            { type: 'online',     label: '🌐 Online' },
            { type: 'occasional', label: '📆 On demand' },
        ],
        desc: 'A safe community space where developers, engineers, and tech professionals can openly discuss mental health — burnout, imposter syndrome, anxiety, work-life balance — without judgment. Because building software is also a human experience.',
        event: {
            label: '📅 Next event',
            titleStatic: 'See upcoming events on Meetup',
            dateStatic:  'Events are listed directly on the Meetup group page.',
        },
        blocks: [
            {
                type: 'community-note',
                icon: '💙',
                html: '<strong>Free &amp; independent</strong> — These meetups are a personal and financial investment by the organizer. They are <strong>100% free</strong> for all attendees. Please check the waiting room chat for any announcements before the event starts.<br/><br/>We are a <strong>community of professionals</strong> — kindness, empathy, and respect are at the heart of everything we do here. <strong>Psychological safety and humility</strong> are the foundation: everyone\'s experience is valid, and vulnerability is a strength. This is a safe space to share openly. 🙏',
            },
            {
                type:    'suggest-talk',
                title:   '🎙 Want to speak or share your story?',
                desc:    'Have a topic around mental health, burnout, or wellbeing in tech? Reach out via LinkedIn.',
                btnText: 'Get in Touch ↗',
                btnUrl:  'https://www.linkedin.com/in/nicolas-rosado-a97b3393',
            },
        ],
        footer: [
            { cls: 'primary', href: 'https://www.meetup.com/mental-health-in-software-engineering-montreal/', label: '● Meetup ↗' },
            { cls: 'contact', href: 'https://www.linkedin.com/company/mental-health-in-software-engineering-montreal/', label: 'in LinkedIn ↗' },
        ],
    },
    {
        cardId: 'crafters-card',
        emoji: '🛠️',
        name: 'Software Crafters Montréal',
        type: 'Guild · 505 Members',
        badges: [
            { type: 'inperson', label: '📍 In-Person' },
            { type: 'regular',  label: '🔁 1st Wed. of month' },
        ],
        desc: 'A community for developers passionate about well-crafted software — testing, DDD, architecture, clean code, refactoring, pairing/mobbing, and legacy code. United by the Software Craftsmanship Manifesto.',
        event: {
            label:       '📅 Next event',
            containerId: 'crafters-event',
            titleId:     'crafters-event-title',
            dateId:      'crafters-event-date',
        },
        blocks: [
            {
                type: 'hosting',
                items: [
                    {
                        lang: 'FR',
                        html: 'Nous avons à cœur de créer des logiciels faciles à maintenir et de partager, d\'échanger mais aussi d\'expérimenter autour de tout ce qui s\'y rapporte. Si vous avez des sujets autour des tests, de l\'architecture, du DDD, de l\'impact de l\'IA ou encore du recrutement, n\'hésitez pas à nous contacter !<br/><br/>🔹 Proposer des sujets en tant que speaker 🎙️<br/>🔹 Accueillir l\'un de nos événements 🍕 🍺<br/>C\'est avec joie que nous prendrons du temps pour vous répondre 🙂',
                    },
                    {
                        lang: 'EN',
                        html: 'We care about building maintainable software and to share, exchange but also experiment around everything related to it. If you have topics around testing, architecture, DDD, the impact of AI or even recruitment, don\'t hesitate to reach out!<br/><br/>🔹 Propose topics as a speaker 🎙️<br/>🔹 Host one of our events 🍕 🍺<br/>We\'d be delighted to take the time to get back to you 🙂',
                    },
                ],
            },
        ],
        footer: [
            { cls: 'primary',  href: 'https://guild.host/software-crafters-montreal',                   label: '↗ Guild' },
            { cls: 'sponsor',  href: 'http://manifesto.softwarecraftsmanship.org/',                      label: '📜 Manifesto ↗' },
            { cls: 'contact',  href: 'https://www.linkedin.com/company/software-crafters-montreal/',    label: 'in LinkedIn ↗' },
            { cls: 'contact',  href: 'https://www.linkedin.com/in/nicolas-rosado-a97b3393',              label: '✉ Contact organizer' },
        ],
    },
    {
        emoji: '🤖',
        name: 'AI Agents Montreal',
        type: 'Meetup · Online · Worldwide',
        badges: [
            { type: 'online',     label: '🌐 Online' },
            { type: 'occasional', label: '📆 On demand' },
        ],
        desc: 'The community you\'re on right now! A global online meetup exploring AI agents, agentic systems, and the engineering practices around them — bringing world-class speakers to developers everywhere.',
        event: {
            label:   '📅 Next event',
            titleId: 'aiagents-eco-title',
            dateId:  'aiagents-eco-date',
        },
        blocks: [
            {
                type: 'community-note',
                icon: '💙',
                html: '<strong>Free &amp; independent</strong> — These meetups are a personal and financial investment by the organizer. They are <strong>100% free</strong> for all attendees. Please check the waiting room chat for any announcements before the event starts (speaker delays, technical issues, etc.).<br/><br/>We are a <strong>community of professionals</strong> — we ask everyone to engage with kindness, curiosity, and respect. Speakers volunteer their time and expertise; let\'s honour that with constructive and generous feedback. Our foundation is <strong>psychological safety and humility</strong> — no question is too basic, no idea too bold. 🙏',
            },
            {
                type:    'suggest-talk',
                desc:    'Got a topic around AI agents, agentic systems, or engineering practices? Reach out via LinkedIn — all speakers are contacted through this channel.',
                btnText: 'Suggest a Talk ↗',
                btnUrl:  'https://www.linkedin.com/in/nicolas-rosado-a97b3393',
            },
        ],
        footer: [
            { cls: 'primary', href: 'https://www.meetup.com/ai-agent-montreal/',                  label: '● Meetup ↗' },
            { cls: 'contact', href: 'https://www.linkedin.com/company/ai-agents-montreal/',       label: 'in LinkedIn ↗' },
            { cls: 'sponsor', href: 'https://www.youtube.com/@aiagentsmontreal',                  label: '▶ YouTube ↗' },
        ],
    },
    {
        emoji: '⚒️',
        name: 'AI Craftspeople Guild',
        type: 'Global Movement · Professional Code of Conduct',
        badges: [
            { type: 'online',     label: '🌐 Online' },
            { type: 'occasional', label: '📆 Occasional' },
        ],
        desc: 'A professional movement advocating for quality, integrity, and human-centered AI in software engineering. ACG promotes a code of conduct for engineers using AI — pushing back against half-baked outputs, snake oil tactics, and the erosion of software craft. A worship-free zone focused on real engineering standards.',
        event: {
            label:       '📅 Next event',
            titleStatic: 'See upcoming events on LinkedIn',
            dateStatic:  'Follow the ACG LinkedIn page for announcements.',
        },
        blocks: [],
        footer: [
            { cls: 'primary', href: 'https://aicraftspeopleguild.github.io',                                    label: '↗ Website' },
            { cls: 'contact', href: 'https://www.linkedin.com/company/ai-craftspeople-guild/',                  label: 'in LinkedIn ↗' },
            { cls: 'sponsor', href: 'https://aicraftspeopleguild.github.io/aicraftspeopleguild-manifesto.html', label: '📜 Sign Manifesto ↗' },
        ],
    },
    {
        emoji: '🏙️',
        name: '/dev/mtl',
        type: 'Conference · Montreal\'s Community-Driven Tech Event',
        badges: [
            { type: 'inperson', label: '📍 In-Person' },
            { type: 'regular',  label: '🔁 Annual Conference' },
        ],
        desc: 'La conférence des communautés tech de Montréal — Montreal\'s community-driven tech conference. A celebration of the local developer ecosystem, bringing together multiple communities under one roof for talks, workshops, and networking.',
        event: {
            label:       '📅 Next edition',
            titleStatic: '/dev/mtl 2026',
            dateStatic:  'Date TBA — visit dev-mtl.ca for updates',
        },
        blocks: [
            {
                type:  'sponsor',
                title: '🤝 Sponsor or host /dev/mtl?',
                descHtml: '<span class="lang-tag">EN</span> Interested in sponsoring or hosting one of Montreal\'s biggest community-driven tech events?<br/><span class="lang-tag">FR</span> Intéressé(e) par le sponsoring ou l\'accueil de la conférence ?',
                buttons: [
                    { text: 'Sponsor (EN) ↗', url: 'https://www.dev-mtl.ca/sponsorship?lang=en' },
                    { text: 'Sponsor (FR) ↗', url: 'https://www.dev-mtl.ca/sponsorship?lang=fr' },
                ],
            },
        ],
        footer: [
            { cls: 'primary', href: 'https://www.dev-mtl.ca',                                   label: '↗ Website' },
            { cls: 'contact', href: 'https://www.linkedin.com/company/dev-mtl/',                 label: 'in LinkedIn ↗' },
            { cls: 'contact', href: 'https://www.linkedin.com/in/nicolas-rosado-a97b3393',       label: '✉ Contact' },
        ],
    },
    {
        emoji: '👾',
        name: 'Devoxx4Kids Québec',
        type: 'Community · Kids &amp; Technology · Montréal',
        badges: [
            { type: 'inperson', label: '📍 In-Person' },
            { type: 'regular',  label: '🔁 Every ~3 months' },
        ],
        desc: 'Notre but est de faire découvrir l\'informatique, la robotique et l\'ingénierie à nos jeunes — introducing kids to programming, robotics, and engineering through hands-on workshops. A bilingual (FR/EN) community rooted in Montréal, part of the global Devoxx4Kids movement.',
        event: {
            label:       '📅 Next event',
            titleStatic: '~June 2026 — approximately every 3 months',
            dateStatic:  'Last event: Sat. March 21, 2026 · Follow on Bluesky or subscribe to their mailing list for the exact date.',
        },
        blocks: [],
        footer: [
            { cls: 'primary', href: 'https://www.devoxx4kids.org/quebec/',                  label: '↗ Website' },
            { cls: 'contact', href: 'https://bsky.app/profile/devoxx4kidsqc.bsky.social',  label: '🦋 Bluesky ↗' },
            { cls: 'sponsor', href: 'mailto:devoxx4kids@montreal-jug.org', noTarget: true,  label: '✉ Contact' },
        ],
    },
    {
        emoji: '☕',
        name: 'Montréal JUG',
        type: 'Community · Java · Montréal',
        badges: [
            { type: 'inperson', label: '📍 In-Person' },
            { type: 'regular',  label: '🔁 Monthly' },
        ],
        desc: 'Le Montréal Java User Group rassemble les développeurs Java et JVM de Montréal pour échanger des idées et discuter des avancées technologiques. Partenaire de Devoxx4Kids Québec — deux communautés unies par le code, le partage et la passion.',
        event: {
            label:       '📅 Next event',
            titleStatic: 'April 30, 2026 — Reactive Programming avec Spring WebFlux',
            dateHtml:    '🏠 Hosted by Web Hosting Canada · <a href="https://www.meetup.com/montreal-jug/events/314465570/" target="_blank" rel="noopener noreferrer" style="color:var(--accent)">RSVP on Meetup ↗</a>',
        },
        blocks: [
            {
                type:        'guest-speaker',
                icon:        '🎙️',
                nameHtml:    '<strong style="color:#a78bfa">Nicolas Rosado — Guest Speaker</strong>',
                talkHtml:    'Deuxième partie : <em>Pourquoi commencer par un test permet-il de réduire le stress ?</em>',
                youtubeUrl:  'https://www.youtube.com/watch?v=IzVKECIsjs4',
                youtubeLabel:'▶ Watch on YouTube ↗',
            },
            {
                type:       'sponsor',
                title:      '💰 Devenir commanditaire ?',
                titleStyle: 'color:#a78bfa',
                blockStyle: 'background:rgba(124,58,237,0.07);border-color:rgba(124,58,237,0.2)',
                descHtml:   'Soutenez le Montréal JUG et Devoxx4Kids Québec — plans de commandite disponibles.',
                buttons: [
                    { text: 'Sponsoring ↗', url: 'https://www.montreal-jug.org/sponsoring/', style: 'background:linear-gradient(135deg,#7c3aed,#9333ea)' },
                ],
            },
        ],
        footer: [
            { cls: 'primary', href: 'https://www.montreal-jug.org',               label: '↗ Website' },
            { cls: 'contact', href: 'https://www.meetup.com/montreal-jug/',        label: '● Meetup ↗' },
            { cls: 'sponsor', href: 'https://www.youtube.com/@montrealjug',        label: '▶ YouTube ↗' },
            { cls: 'contact', href: 'https://linktr.ee/devoxx4kids_montrealjug',   label: '🔗 Linktree ↗' },
        ],
    },
    {
        emoji: '🎙️',
        name: 'CraftCode Podcast',
        type: 'Podcast · Interviews · English',
        badges: [],
        desc: 'An interview-based podcast hosted by Nicolas Rosado exploring software craftsmanship, engineering excellence, and the practices behind maintainable code — from TDD and clean architecture to DDD, AI impact, and the human side of software. Each episode features a guest practitioner sharing real-world experience and hard-won lessons.',
        event: {
            label:   '🎧 Latest episode',
            titleId: 'craftcode-ep-title',
            dateId:  'craftcode-ep-date',
        },
        blocks: [],
        footer: [
            { cls: 'primary', href: 'https://youtube.com/playlist?list=PLpWOuEp7MZW91uyBJZyOf_HzBM1eEFUHx&si=gvcSRUvLaBZvtk4j', label: '▶ YouTube ↗' },
            { cls: 'sponsor', href: 'https://open.spotify.com/show/6z5HHdGHodPQSiAGzEEfjr',                                      label: '🎵 Spotify ↗' },
            { cls: 'contact', href: 'https://www.linkedin.com/company/craftcode-fr/',                                            label: 'in LinkedIn ↗' },
        ],
    },
    {
        emoji: '🔧',
        name: 'MenderCon',
        type: 'Virtual Conference · Legacy Code &amp; Modernization',
        badges: [
            { type: 'online',  label: '🌐 Online' },
            { type: 'regular', label: '🔁 Annual Conference' },
        ],
        desc: 'A full-day virtual unconference focused on modernizing and improving existing software systems — from the smallest apps to the biggest enterprise monoliths. Attendees co-create the schedule on the fly, fostering real conversations between people who love working on legacy code.',
        event: {
            label:       '📅 Next event',
            containerId: 'mendercon-event',
            titleId:     'mendercon-event-title',
            dateId:      'mendercon-event-date',
        },
        blocks: [],
        footer: [
            { cls: 'primary', href: 'https://mendercon.com', label: '↗ mendercon.com' },
            { cls: 'sponsor', href: 'https://mendercon.com', label: '🎟 Get ticket ↗', id: 'mendercon-ticket-link', style: 'display:none' },
        ],
    },
];
