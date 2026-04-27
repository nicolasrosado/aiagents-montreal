    const speakers = [
        {
            name: "Arthur Magne",
            location: "Bordeaux, France 🇫🇷",
            lat: 44.8378, lng: -0.5792,
            bio: "CPO \u0026 co-founder at Packmind. Developer passionate about knowledge sharing, craft practices, and coding standards in teams. Builds AI-powered tools that capture team decisions and feed them to coding agents.",
            talk: "How to Trust AI Coding at Scale with Packmind",
            linkedin: "https://www.linkedin.com/in/arthur-magne/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Steven Diamante",
            location: "Raleigh, USA 🇺🇸",
            lat: 35.7796, lng: -78.6382,
            bio: "Technical coach at Artium AI. Guides developers to adopt technical practices to confidently tackle any codebase. Organizer of the Raleigh Software Craftsmanship Community.",
            talk: "Software Craftsmanship for Coding Agents: Taming the Dragon",
            linkedin: "https://www.linkedin.com/in/stevendiamante/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/events/311544422/"
        },
        {
            name: "Michael R. Larson",
            location: "Los Angeles, USA 🇺🇸",
            lat: 34.0522, lng: -118.2437,
            bio: "Software engineer and practitioner focused on safely modernizing legacy systems using AI-assisted TDD techniques.",
            talk: "Refactoring Legacy Code Safely with AI + TDD",
            linkedin: "https://www.linkedin.com/in/michael-r-larson-77124b27",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "William Bernting",
            location: "Göteborg, Sweden 🇸🇪",
            lat: 57.7089, lng: 11.9746,
            bio: "AI-Enabled Coder, public speaker and freelancer in software engineering with 15 years of experience. Advocates for TDD + Claude Code + git worktrees as a practical AI-assisted development workflow.",
            talk: "Zero Lines, Zero Bugs",
            linkedin: "https://www.linkedin.com/in/williambernting/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/events/312482727/"
        },
        {
            name: "Carl Lapierre",
            location: "Montréal, Canada 🇨🇦",
            lat: 45.5017, lng: -73.5673,
            bio: "Lead AI Engineer driving innovation through intelligent systems across healthcare, manufacturing, and mining. With over a decade of experience in software development, he leads high-impact AI initiatives focused on agentic systems, building solutions that enhance decision-making, automation, and adaptability in complex environments. At Osedea, he is currently spearheading next-generation AI projects, including the integration of autonomous agents into manufacturing ERPs.",
            talk: "How to Instrument, Govern, and Debug Agents Before They Go Rogue",
            linkedin: "https://www.linkedin.com/in/carllapierre/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Duncan Brown",
            location: "London, UK 🇬🇧",
            lat: 51.5074, lng: -0.1278,
            bio: "CTO for Digital Prevention Services at the UK National Health Service. His previous role was Head of Software Engineering at the Incubator for AI (ai.gov.uk). Before that he worked in startups in edtech and publishing.",
            talk: "Team Dynamics After AI",
            linkedin: "https://www.linkedin.com/in/duncanjbrownduncanjbrown",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Benedikt Stemmildt",
            location: "Hamburg, Germany 🇩🇪",
            lat: 53.5753, lng: 10.0153,
            bio: "Founder of hackers\u0026wizards, a consultancy helping teams adopt agentic software engineering practices. With 20+ years in enterprise software (including CTO roles at companies like OTTO and Breuninger), he now focuses on transforming how development teams work with AI. He's also Program Chair for code.talks Hamburg.",
            talk: "Agents Across the SDLC: From Refinement to Retro",
            linkedin: "https://www.linkedin.com/in/benedikt-stemmildt",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Leandro Damasio",
            location: "São Paulo, Brazil 🇧🇷",
            lat: -23.5505, lng: -46.6333,
            bio: "AI Engineer working with LLMs, RAG systems, and agent-based workflows in real-world, often regulated environments. His focus is on building reliable AI systems by combining software engineering discipline, observability, and clear operational boundaries for agents.",
            talk: "How AI Coding Agents Really Read Code (Inside the Runtime)",
            linkedin: "https://br.linkedin.com/in/ldamasio",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Alex Bunardzic",
            location: "Vancouver, Canada 🇨🇦",
            lat: 49.2827, lng: -123.1207,
            bio: "Alex has been doing software development since 1990. His professional passion is bringing soft into software — software must be soft, malleable, pliable. That quality enables the flexibility of business operations. In order to make sure that software we are building is flexible, we must evolve it one step at a time, verified by automated testing.",
            talk: "Approximation Before Precision",
            linkedin: "https://www.linkedin.com/in/alexbunardzic/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Matthias Patzak",
            location: "Munich, Germany 🇩🇪",
            lat: 48.1351, lng: 11.582,
            bio: "AWS Executive in Residence and former CTO who helps organizations optimize their people, processes, and technology through cloud transformation. Having worked with hundreds of companies, he specializes in Agile, DevOps, and modernization strategies, with current focus on agentic AI. He's co-author of \"All Hands on Tech\" and frequent industry speaker.",
            talk: "New Organizational Models for the Age of AI Agents",
            linkedin: "https://www.linkedin.com/in/matthias-patzak/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Alessandro Di Gioia",
            location: "London, UK 🇬🇧",
            lat: 51.52, lng: -0.09,
            bio: "25+ years in software, co-author of \"Agile Technical Practices Distilled\" (rated Best TDD Book of All Time). Conference regular at NDC London, DDD Europe, DevOps Days. Specializes in TDD, legacy refactoring, and mob programming. Co-Creator of nWave.ai — believes in agentic AI to democratise software development.",
            talk: "From Spaghetti to Ravioli: AI-Guided Refactoring with nWave",
            linkedin: "https://www.linkedin.com/in/alessandro-di-gioia",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Michele Brissoni",
            location: "Bratislava, Slovakia 🇸🇰",
            lat: 48.1486, lng: 17.1077,
            bio: "30+ years in software, founder of the SW Craftsmanship Dojo\u00ae and passionate former F1 neuroscientist. Hosts \"The Forge of Unicorns\". Co-Creator of nWave.ai — believes AI can be a disciplined peer, not a magic wand.",
            talk: "From Spaghetti to Ravioli: AI-Guided Refactoring with nWave",
            linkedin: "https://www.linkedin.com/in/michelebrissoni/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Adam Tornhill",
            location: "Stockholm, Sweden 🇸🇪",
            lat: 59.3293, lng: 18.0686,
            bio: "Programmer who combines degrees in engineering and psychology. Founder of CodeScene, where he designs tools for software analysis. Author of the best-selling \"Your Code as a Crime Scene\" and three more technical books. His other interests include music, retro computers, and martial arts.",
            talk: "Agentic AI Coding: Best Practice Patterns for Speed with Quality",
            linkedin: "https://www.linkedin.com/in/adam-tornhill-71759b48",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/"
        },
        {
            name: "Paul Hammond",
            location: "Manchester, UK 🇬🇧",
            lat: 53.4808, lng: -2.2426,
            bio: "Contract product engineer based in Manchester, UK. He's spent over two decades building software at organisations including the BBC, Sky, Electronic Arts, and Equal Experts, specialising in TypeScript, TDD, and functional programming. Long-time advocate of Extreme Programming practices, delivering TDD workshops to development teams. He maintains an open-source Claude Code framework that encodes these practices into agent workflows.",
            talk: "XP Practices Are the Missing Piece for AI-Assisted Development",
            linkedin: "https://www.linkedin.com/in/paul-hammond-bb5b78251/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/events/313704055/"
        },
        {
            name: "Edgar Kussberg",
            location: "Zug, Switzerland 🇨🇭",
            lat: 47.1661, lng: 8.5154,
            bio: "Director of Product for AI \u0026 Development Experience (IDE, MCP \u0026 CLI) at Sonar, focusing on AI-powered code quality and remediation in modern development workflows. Works at the intersection of software engineering and agentic systems. Previously led AI product initiatives at Snyk, driving innovation in developer-first security.",
            talk: "AC/DC — Agent-Centric Development Cycle",
            linkedin: "https://www.linkedin.com/in/kussberg/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/events/313880985/"
        },
        {
            name: "Antony Marcano",
            location: "London, UK 🇬🇧",
            lat: 51.515, lng: -0.11,
            bio: "Co-founder of RiverGlide, agile coaching \u0026 consultancy firm. Creator of the Screenplay Pattern. Nearly 25 years in software development — practitioner, coach, trainer, and keynote speaker in XP, TDD, BDD, and Software Craftsmanship. Referenced in multiple agile books; former Technical Editor at Better Software Magazine. Guest lecturer at Oxford University on TDD and ATDD.",
            talk: "Upcoming talk — May 2026",
            linkedin: "https://www.linkedin.com/in/antonymarcano/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/",
            upcoming: true
        },
        {
            name: "Dragan Stepanović",
            location: "Berlin, Germany 🇩🇪",
            lat: 52.52, lng: 13.405,
            bio: "Staff Engineer with deep expertise in distributed systems and software design. Advocates for Systems Thinking, Lean, Theory of Constraints, and XP applied to AI-assisted development teams. Based in Berlin.",
            talk: "LLM-assisted Coding: A Systems Perspective",
            linkedin: "https://www.linkedin.com/in/dstepanovic",
            youtube: "https://www.youtube.com/watch?v=eEA0gJnWLh0",
            meetup: "https://www.meetup.com/ai-agent-montreal/events/313980249/",
            upcoming: false
        },
        {
            name: "Fabrice Monnier",
            location: "Bretagne, France 🇫🇷",
            lat: 48.1173, lng: -1.6778,
            bio: "Software engineer and consultant specializing in spec-driven development. Explores how to structure AI-assisted workflows using frameworks like BMAD, OpenSpec and SpecKit — in solo and team contexts.",
            talk: "Spec-Driven Development: From BMAD to Custom Skills",
            linkedin: "https://www.linkedin.com/in/fabrice-monnier-cloud-data-devops",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/",
            upcoming: true
        },
        {
            name: "Margaret-Anne Storey",
            location: "Victoria, Canada 🇨🇦",
            lat: 48.4284, lng: -123.3656,
            bio: "Professor at the University of Victoria and Canada Research Chair in Human and Social Aspects of Software Engineering. Pioneer researcher on developer experience, AI in software engineering, and the emerging concept of Triple Debt (technical, cognitive, and intent debt).",
            talk: "Cognitive and Intent Debt in Practice",
            linkedin: "https://www.linkedin.com/in/margaret-anne-storey",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/",
            upcoming: true
        },
        {
            name: "Soma Bini",
            location: "Paris, France 🇫🇷",
            lat: 48.8566, lng: 2.3522,
            bio: "Software engineer and practitioner of spec-driven, agent-assisted development. Demonstrates how to build production-ready applications end-to-end using AI agents — from design and architecture to CI/CD deployment.",
            talk: "From Specs to Production: Building Software with AI Agents End to End",
            linkedin: "https://www.linkedin.com/in/soma-bini",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/",
            upcoming: true
        },
        {
            name: "Javier Lopez",
            location: "Madrid, Spain 🇪🇸",
            lat: 40.4168, lng: -3.7038,
            bio: "Javier is an expert software engineer, architect, and technical blogger who strongly advocates for Evolutionary Design, Continuous Integration, and Lean software principles. Through his software philosophy, he explores the intersection of technical excellence, team dynamics, and system architecture. He believes that software development is a continuous learning exercise where the ultimate goal is not to write code fast, but to safely and efficiently solve real customer problems.",
            talk: "The Great AI Spec-Driven Illusion: Why Developers Must Remain Architects",
            linkedin: "https://www.linkedin.com/in/javierlopezfernandez/",
            youtube: "https://www.youtube.com/@aiagentsmontreal",
            meetup: "https://www.meetup.com/ai-agent-montreal/events/314512826/",
            upcoming: true
        }
    ];
