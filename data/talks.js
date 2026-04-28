    const talks = [
        { n: 1, title: "How to Trust AI Coding at Scale with Packmind", speaker: "Arthur Magne", yt: "https://www.youtube.com/watch?v=Ie27sg1FQik&t=1989s", meetup: "https://www.meetup.com/ai-agent-montreal/events/311354376/" },
        { n: 2, title: "Software Craftsmanship for Coding Agents: Taming the Dragon", speaker: "Steven Diamante", yt: "https://www.youtube.com/watch?v=nd2fXYHK4vc&t=5s", meetup: "https://www.meetup.com/ai-agent-montreal/events/311544422/" },
        { n: 3, title: "Refactoring Legacy Code Safely with AI + TDD", speaker: "Michael R. Larson", yt: "https://www.youtube.com/watch?v=nDu0zA_QiwU&t=2773s", meetup: "https://www.meetup.com/ai-agent-montreal/events/312274490/" },
        { n: 4, title: "Zero Lines, Zero Bugs", speaker: "William Bernting", yt: "https://www.youtube.com/watch?v=c6EsmTs4dAY&t=154s", meetup: "https://www.meetup.com/ai-agent-montreal/events/312482727/" },
        { n: 5, title: "How to Instrument, Govern, and Debug Agents Before They Go Rogue", speaker: "Carl Lapierre", yt: "https://www.youtube.com/watch?v=BQfBNesA_7A&t=551s", meetup: "https://www.meetup.com/ai-agent-montreal/events/312375599/" },
        { n: 6, title: "Team Dynamics After AI", speaker: "Duncan Brown", yt: "https://www.youtube.com/watch?v=9coYgxFwHuU&t=423s", meetup: "https://www.meetup.com/ai-agent-montreal/events/312852942/" },
        { n: 7, title: "Agents Across the SDLC: From Refinement to Retro", speaker: "Benedikt Stemmildt", yt: "https://www.youtube.com/watch?v=CZjImpmUR7Y&t=1605s", meetup: "https://www.meetup.com/ai-agent-montreal/events/312948414/" },
        { n: 8, title: "How AI Coding Agents Really Read Code (Inside the Runtime)", speaker: "Leandro Damasio", yt: "https://www.youtube.com/watch?v=YXx4YQnu7Cs", meetup: "https://www.meetup.com/ai-agent-montreal/events/312979153/" },
        { n: 9, title: "Approximation Before Precision", speaker: "Alex Bunardzic", yt: "https://www.youtube.com/watch?v=82Tah-yrcFY&t=327s", meetup: "https://www.meetup.com/ai-agent-montreal/events/313397780/" },
        { n: 10, title: "New Organizational Models for the Age of AI Agents", speaker: "Matthias Patzak", yt: "https://www.youtube.com/watch?v=McozJv6ThiQ&t=3030s", meetup: "https://www.meetup.com/ai-agent-montreal/events/313420496/" },
        { n: 11, title: "From Spaghetti to Ravioli: AI-Guided Refactoring with nWave", speaker: "Alessandro Di Gioia & Michele Brissoni", yt: "https://www.youtube.com/watch?v=Zdobci6tWeM&t=9s", meetup: "https://www.meetup.com/ai-agent-montreal/events/313651906/" },
        { n: 12, title: "Agentic AI Coding: Best Practice Patterns for Speed with Quality", speaker: "Adam Tornhill", yt: "https://www.youtube.com/watch?v=AQWyhqzGHaU&t=982s", meetup: "https://www.meetup.com/ai-agent-montreal/events/313610408/" },
        { n: 13, title: "XP Practices Are the Missing Piece for AI-Assisted Development", speaker: "Paul Hammond", yt: "https://www.youtube.com/watch?v=M58tOdNHbxM&t=4956s", meetup: "https://www.meetup.com/ai-agent-montreal/events/313704055/" },
        { n: 14, title: "AC/DC — Agent-Centric Development Cycle", speaker: "Edgar Kussberg", yt: "https://www.youtube.com/watch?v=YXXFjebvfNc&t=9s", meetup: "https://www.meetup.com/ai-agent-montreal/events/313880985/" },
        { n: 15, title: "LLM-assisted Coding: A Systems Perspective", speaker: "Dragan Stepanović", yt: "https://www.youtube.com/watch?v=eEA0gJnWLh0", meetup: "https://www.meetup.com/ai-agent-montreal/events/313980249/" }
    ];

    // ── TALK RESOURCES (to be filled with YouTube comment links) ─────────────────

    const talkResources = [
        {
            talk: "How to Trust AI Coding at Scale with Packmind",
            speaker: "Arthur Magne",
            links: [
                { label: "Packmind website", url: "https://packmindhub.github.io/packmind/" },
                { label: "Du Vibe Coding Au Context Engineering (YouTube)", url: "https://www.youtube.com/watch?v=zYsCQ_bN_c4" },
            ]
        },
        {
            talk: "Software Craftsmanship for Coding Agents: Taming the Dragon",
            speaker: "Steven Diamante",
            links: [
                { label: "Claude commands & setup (GitHub)", url: "https://github.com/SDiamante13/dotfiles/tree/main/claude" },
                { label: "Book a discovery call with Steven", url: "https://calendly.com/diamantetechcoaching" },
                { label: "Beads Issue Tracker (GitHub)", url: "https://github.com/steveyegge/beads" },
                { label: "Vibe Coding Book (Amazon)", url: "https://www.amazon.com/dp/1966280025" },
                { label: "AI Hackerspace", url: "https://agentics.ruv.io/course/ai-hackerspace-live" },
                { label: "CodeRabbit", url: "https://www.coderabbit.ai" },
            ]
        },
        {
            talk: "Refactoring Legacy Code Safely with AI + TDD",
            speaker: "Michael R. Larson",
            links: [
                { label: "Yatzy Refactoring Kata (Emily Bache)", url: "https://github.com/emilybache/Yatzy-Refactoring-Kata" },
                { label: "Kata used during the event (main branch)", url: "https://github.com/mrlarson2007/Yatzy-Refactoring-Kata/commits/main/" },
                { label: "AI Solution branch", url: "https://github.com/mrlarson2007/Yatzy-Refactoring-Kata/commits/ai-solution/" },
            ]
        },
        {
            talk: "Zero Lines, Zero Bugs",
            speaker: "William Bernting",
            links: [
                { label: "Claude instructions (GitHub)", url: "https://github.com/wbern/claude-instructions" },
                { label: "Beads Issue Tracker (GitHub)", url: "https://github.com/steveyegge/beads" },
            ]
        },
        {
            talk: "How to Instrument, Govern, and Debug Agents Before They Go Rogue",
            speaker: "Carl Lapierre",
            links: [
                { label: "Agent Observability (GitHub)", url: "https://github.com/carllapierre/agent-observability" },
                { label: "Langfuse (GitHub)", url: "https://github.com/langfuse/langfuse" },
            ]
        },
        {
            talk: "Team Dynamics After AI",
            speaker: "Duncan Brown",
            links: [
                { label: "Talk transcript (Mechanical Survival)", url: "https://mechanicalsurvival.com/blog/team-dynamics-after-ai/" },
            ]
        },
        {
            talk: "Agents Across the SDLC: From Refinement to Retro",
            speaker: "Benedikt Stemmildt",
            links: []
        },
        {
            talk: "How AI Coding Agents Really Read Code (Inside the Runtime)",
            speaker: "Leandro Damasio",
            links: [
                { label: "LinkedIn (Leandro Damasio)", url: "https://www.linkedin.com/in/ldamasio/" },
                { label: "Robson Bot - open-source AI trading system", url: "https://github.com/ldamasio/robson" },
                { label: "Article: Inside the runtime of AI coding agents", url: "https://www.linkedin.com/posts/ldamasio_inside-the-runtime-of-ai-coding-agents-many-activity-7413719547066601473-IWWL" },
                { label: "Article: MCP is not for the LLM, it is for the runtime", url: "https://www.linkedin.com/posts/ldamasio_mcp-is-not-for-the-llm-it-is-for-the-runtime-activity-7427309238315790337-O9zf" },
                { label: "Article: Memory governance - Compacting our conversation", url: "https://www.linkedin.com/posts/ldamasio_memory-governance-what-compacting-our-conversation-activity-7424980083829940226-NLf_" },
                { label: "Article: Inspection commands as the foundation of agent reading", url: "https://www.linkedin.com/posts/ldamasio_inspection-commands-as-the-foundation-of-activity-7424074809820545025-KHlO" },
                { label: "GitHub Issue: Claude Code bypasses its own governance instructions", url: "https://github.com/anthropics/claude-code/issues/21696" },
                { label: "Claude Code", url: "https://github.com/anthropics/claude-code" },
                { label: "Cursor", url: "https://www.cursor.com" },
                { label: "Codex CLI (OpenAI)", url: "https://github.com/openai/codex" },
                { label: "Gemini CLI", url: "https://github.com/google-gemini/gemini-cli" },
                { label: "Aider", url: "https://aider.chat" },
                { label: "FastCode - token-efficient codebase framework", url: "https://github.com/HKUDS/FastCode" },
                { label: "Claude Code tool reference docs", url: "https://code.claude.com/docs/en/cli-reference" },
                { label: "Cursor codebase indexing docs", url: "https://docs.cursor.com/context/codebase-indexing" },
            ]
        },
        {
            talk: "Approximation Before Precision",
            speaker: "Alex Bunardzic",
            links: [
                { label: "GitHub repo", url: "https://github.com/alexbunardzic/approximation-before-precision" },
            ]
        },
        {
            talk: "New Organizational Models for the Age of AI Agents",
            speaker: "Matthias Patzak",
            links: []
        },
        {
            talk: "From Spaghetti to Ravioli: AI-Guided Refactoring with nWave",
            speaker: "Alessandro Di Gioia & Michele Brissoni",
            links: [
                { label: "nWave website", url: "https://nwave.ai" },
                { label: "nWave GitHub repo", url: "https://github.com/nWave-ai/nWave.git" },
                { label: "nWave Discord", url: "https://discord.gg/Cywj3uFdpd" },
                { label: "AI-readiness assessment", url: "https://ai-readiness.dev/" },
            ]
        },
        {
            talk: "Agentic AI Coding: Best Practice Patterns for Speed with Quality",
            speaker: "Adam Tornhill",
            links: [
                { label: "Slide deck (Google Drive)", url: "https://drive.google.com/file/d/1voLRlQS0UmR7MkY8IKCshynE5CZBi0On/view" },
                { label: "CodeScene MCP Server (early access)", url: "https://codescene.com/early-access-codescene-mcp-server" },
                { label: "Code Health docs", url: "https://codescene.io/docs/guides/technical/code-health.html" },
                { label: "Paper: AI-Ready Code & Code Health", url: "https://codescene.com/hubfs/whitepapers/AI-Ready-Code-How-Code-Health-Determines-AI-Performance.pdf" },
                { label: "PIT Mutation Testing (Java)", url: "https://pitest.org/" },
            ]
        },
        {
            talk: "XP Practices Are the Missing Piece for AI-Assisted Development",
            speaker: "Paul Hammond",
            links: [
                { label: "Claude Code framework / dotfiles (GitHub)", url: "https://github.com/citypaul/.dotfiles/" },
                { label: "PIT Mutation Testing (Java)", url: "https://pitest.org/" },
                { label: "Stryker Mutation Testing (TypeScript)", url: "https://stryker-mutator.io" },
                { label: "Feedback-Driven Development", url: "https://feedbackdriven.dev/" },
                { label: "Forgejo - self-hosted git forge", url: "https://forgejo.org" },
                { label: "Authentik - authentication tool", url: "https://goauthentik.io" },
            ]
        },
        {
            talk: "AC/DC — Agent-Centric Development Cycle",
            speaker: "Edgar Kussberg",
            links: [
                { label: "Sonar architecture", url: "https://www.sonarsource.com/solutions/architecture/" },
                { label: "Software Craftsmanship in the AI Era (Sandro Mancuso)", url: "https://www.codurance.com/publications/software-craftsmanship-in-the-ai-era" },
                { label: "Sonar Context Augmentation for Claude Code", url: "https://www.sonarsource.com/resources/library/sonar-context-augmentation-claude-code/" },
                { label: "Context Flywheel article", url: "https://jedi.be/blog/2026/context-flywheel/" },
                { label: "Anthropic courses", url: "https://anthropic.skilljar.com" },
                { label: "Linear AI", url: "https://linear.app/ai" },
            ]
        },
        {
            talk: "LLM-assisted Coding: A Systems Perspective",
            speaker: "Dragan Stepanović",
            links: [
                { label: "From Async Code Reviews to Co-Creation Patterns (InfoQ)", url: "https://www.infoq.com/articles/co-creation-patterns-software-development/" },
                { label: "Learning Hours — Samman Technical Coaching", url: "https://sammancoaching.org/learning_hours/" },
            ]
        },
    ];
