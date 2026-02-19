// Project data — WHY/STRATEGY/ACTION/RESULT/BUSINESS INSIGHT framework
const projects = [
    // Project 0: B2B Data SaaS Client
    {
        title: "Value-Based Bidding & CRM Integration — B2B Data SaaS Client",
        industry: "B2B / Data SaaS",
        category: "performance",
        cardMetrics: "-25% CPA | +32% Qualified Conversions | +20% Budget Increase",
        why: "A B2B public records data provider serving the energy, mineral rights, and real estate sectors was operating on 2018-era infrastructure: 1,000+ broad-match keywords, unmonitored Auto-Apply settings, and no feedback loop between ad spend and sales pipeline quality.\n\nThe symptom: strong click volume, weak contract value. The cause: the algorithm was trained on form fills — not revenue. High-intent mineral deed and oil lease traffic was being competed for by agile rivals while the client optimized for metrics that didn't move the business.",
        strategy: "Re-engineered the account from a cost center to a profit engine by building the connective tissue between web signals and the bottom line.\n\nPhase 1 — Algorithmic Cleanup & Competitive Conquesting: Conducted a surgical keyword audit — stripped legacy bloat and neutralized Auto-Apply features inflating CPCs without purchase intent. Launched a PMax structure driven by Competitor Audience Signals, feeding top rival URLs into the algorithm to intercept high-value prospects at the exact moment they were evaluating alternatives.\n\nPhase 2 — From ROAS to POAS (Profit on Ad Spend): Revenue is a vanity metric; profit is the reality. Implemented Value-Based Bidding (VBB) to differentiate by product LTV. A corporate oil lease dataset carries 10x higher LTV than a residential lot search. Assigned weighted conversion values accordingly — training the algorithm to deprioritize cheap traffic and target high-margin corporate accounts.\n\nPhase 3 — OCT & CRM Bridge (HubSpot): Closed the data loop via Offline Conversion Tracking (OCT). Instead of optimizing for form fills (which included spam), fed \"Qualified Sales Opportunity\" signals from HubSpot back into Google Ads — shifting the algorithm's targeting from anyone with an email address to decision-makers with an active budget.",
        action: "Used the Paid Search Term Report as a market research tool: identified expensive \"how-to\" queries (e.g., \"How to verify Texas mineral deeds\") driving $15/click educational traffic. Redirected the SEO team to build authority content for those terms, reallocating ~$5K/month in savings toward high-intent, ready-to-buy search terms.\n\nOverhauled ad creative from generic \"Data for Sale\" copy to professional-grade value propositions — \"Immediate API Access\" and \"Verified Mineral Chain-of-Title\" — increasing CTR among industry professionals while naturally filtering out low-intent traffic.",
        result: {
            metrics: [
                { value: "-25%", label: "CPA Reduction ($12.51)", color: "green" },
                { value: "+32%", label: "High-Quality Conversions", color: "green" },
                { value: "+20%", label: "Executive Budget Increase", color: "blue" },
                { value: "↓", label: "Blended CAC via SEO/PPC Synergy", color: "green" }
            ],
            context: "Proved the unit economics of high-margin leads within 30 days — directly resulting in an executive decision to increase investment for new product launches."
        },
        insight: {
            opening: "The shift in this account wasn't about finding 'magic' keywords; it was about Signal Integrity.",
            body: "By feeding the CRM's 'Sales-Ready' data back into the Google algorithm, we stopped bidding on traffic and started bidding on revenue. We effectively transitioned the conversation from 'How many clicks?' to 'What is the pipeline value?'"
        }
    },
    // Project 1: Sporting Goods Retailer
    {
        title: "Scalable E-Commerce Growth & Inventory Alpha — Sporting Goods Retailer",
        industry: "eCommerce / Sporting Goods",
        category: "performance",
        cardMetrics: "+313% Conversion Value | 10.82 ROAS (+82%) | CPA $5.81",
        why: "Q4 is the highest-stakes auction window in eCommerce — demand spikes, but so do CPCs. For a sporting goods retailer with a major product launch timed to Black Friday, the challenge was scaling efficiently without letting automation work against itself.\n\nThe account had hit a common plateau: Smart Shopping and PMax setups were cannibalizing branded search and over-allocating budget to zombie products — low-velocity SKUs with zero conversions draining spend. Scaling in this state would have amplified inefficiency, not growth. A structural intervention was needed before the holiday window opened.",
        strategy: "Designed a Tri-Phase Velocity Model to shift from automated bidding to data-informed steering:\n\nPhase 1 — Top-of-Funnel Priming (Demand Gen): Waiting for intent is too late. Leveraged First-Party Data (CDP exports) to build high-affinity Seed Lists and deployed Demand Gen campaigns using short-form video assets weeks ahead of Black Friday. The goal: load the target audience into active consideration before the competitive auction peaked, reducing eventual CPCs at the intent stage.\n\nPhase 2 — Intent Capture & Brand Protection (Search + PMax): Moved to Value-Based Bidding (VBB) on new product launch keywords with high-intent modifiers. Implemented Final URL Expansion Exclusions in PMax — strictly funneling holiday traffic to high-converting landing pages and preventing the algorithm from wasting Black Friday budget on \"About Us\" or \"Shipping Policy\" pages.\n\nPhase 3 — Inventory Segmentation & Margin-First Shopping: The differentiator was Custom Label Architecture. Isolated zombie SKUs (zero conversions, last 30 days) into a low-priority catch-all campaign, freeing the main PMax budget to focus exclusively on high-velocity winners. Tagged products by profit margin rather than category — enabling aggressive ROAS targets on low-margin door-busters and lower ROAS targets on high-margin proprietary gear.",
        action: "Audited the full product catalog to identify zombie SKUs and high-margin heroes. Built Custom Label architecture in Google Merchant Center to bridge warehouse inventory data with ad account logic. Deployed Demand Gen campaigns with first-party seed lists ahead of the holiday window. Set URL expansion exclusions and monitored PMax asset group performance continuously. Adjusted margin-based ROAS targets dynamically as inventory velocity shifted through the campaign period.",
        result: {
            metrics: [
                { value: "10.82", label: "ROAS (+82.43% YoY)", color: "green" },
                { value: "+313%", label: "Conversion Value", color: "green" },
                { value: "+42%", label: "CTR (Demand Gen Effect)", color: "blue" },
                { value: "$5.81", label: "CPA (Stable vs. Holiday Inflation)", color: "blue" }
            ],
            context: "Scaled volume 3x while actually improving efficiency — proving that better data inputs lead to better AI outputs."
        },
        insight: {
            opening: "The success of this Q4 push wasn't found in the Google Ads algorithm itself, but in the inventory engineering behind it.",
            body: "By using Custom Labels to bridge the gap between the warehouse and the ad account, we transformed the 'Zombie' inventory into a controlled test group and allowed the 'Heroes' to scale without restriction."
        }
    },
    // Project 2: Home Services Client
    {
        title: "Strategic Pivot for High-Value Local Services — Home Services Client",
        industry: "Local Services / Home Services",
        category: "performance",
        cardMetrics: "+60% CVR | +64% Search CTR | -27% CPA ($58.26)",
        why: "A specialized wildlife exclusion company faced two compounding challenges typical of seasonal local services: broad \"pest control\" keywords were attracting low-value leads the service provider couldn't service, and Q1 seasonality created a predictable pipeline slump with limited direct search volume to capture.\n\nThe problem wasn't purely optimization — it required proactive demand generation to bridge the seasonal gap while repositioning the brand away from commodity pest control.",
        strategy: "Built an Awareness-to-Exclusion Pipeline to address both demand quality and demand creation simultaneously:\n\nPhase 1 — Market Education & Demand Gen (YouTube): Wildlife removal is reactive; exclusion (preventing re-entry) is proactive — and a significantly higher-ticket service. Launched localized YouTube Video Action campaigns targeting homeowners in high-wooded zip codes, focused on structural home damage caused by wildlife. The insight: used video to show the damage squirrels and raccoons cause — repositioning the brand from \"the guy who catches the raccoon\" to \"the expert who protects the home's equity.\"\n\nPhase 2 — Referral Network Automation (Outbound Engine): Rather than waiting for Q1 search volume to return, went to the sources of the leads. Developed a custom script to aggregate local business data based on rankings and reviews — real estate agents, property managers, and roofers. Built an automated outreach flow sending customized \"Partner Reports\" to these contacts, turning local contractors into a 24/7 referral network.\n\nPhase 3 — High-Intent Search & Page Feed Segregation: Moved away from a one-size-fits-all search campaign. Implemented Page Feeds to strictly map specific wildlife queries (e.g., \"bats in attic\") to long-form educational landing pages — handling service segregation at the URL level, preventing Google from conflating a $100 pest control job with a $2,500 exclusion project.",
        action: "Built and deployed YouTube localized targeting segmented by high-wooded zip codes. Developed a custom data aggregation script for referral partner identification based on local rankings and review signals. Implemented Page Feed architecture mapping query-level intent to specific service landing pages. Set up and monitored PMax with negative keyword theme restrictions throughout the campaign period.",
        result: {
            metrics: [
                { value: "+64%", label: "Search CTR", color: "green" },
                { value: "+45%", label: "Call Ads CTR", color: "green" },
                { value: "+60%", label: "Conversion Rate (CVR)", color: "green" },
                { value: "-27%", label: "CPA ($58.26)", color: "blue" }
            ],
            context: "Solved both traffic quality and seasonal pipeline gaps simultaneously — by engineering demand where none existed and tightening technical precision in capturing existing demand."
        },
        insight: {
            opening: "In niche local services, your biggest enemy is 'Broad Match' noise.",
            body: "By implementing Page Feeds, we forced Google to respect the nuance between a $100 bug spray job and a $2,500 wildlife exclusion project. We didn't just buy more leads; we bought the right leads by automating the outreach to high-authority referral partners and tightening the technical search parameters."
        }
    },
    // Project 3: VosynVerse AI — Investor GTM Strategy
    {
        title: "Event-Led Investor GTM Strategy — VosynVerse AI",
        industry: "Tech / AI",
        category: "gtm-strategy",
        cardMetrics: "44% Attendance Rate | 500+ Investors Reached | 4-Step Conversion Funnel",
        why: "VosynVerse AI was preparing for their inaugural grand reveal — a pivotal moment to convert their network of connections into a pipeline of engaged, qualified investors. The challenge: no structured outreach infrastructure, no event marketing playbook, and no system to measure investor intent after the event.\n\nThe ask wasn't just to 'run an event.' It was to build a repeatable GTM motion that could turn cold connections into warm investor relationships — on a startup budget.",
        strategy: "Designed a 4-Step Investor Conversion Funnel operating on an organic, low-cost, high-trust model:\n\nStep 1 — Prospecting (Pipeline Building): Curated a high-intent lead list of 500+ potential investors across North America, Asia, and the Middle East — segmented by profile: Venture Capitalists, Finance Professionals, and Global Network Connections. Quality over quantity: each contact was evaluated for strategic fit before entering the sequence.\n\nStep 2 — Nurturing (Multi-Touch Outreach): Engineered a sequenced outreach flow — personalized email outreach, automated reminder cadences, and an Eventbrite landing page designed for conversion. The goal was to move contacts from 'aware' to 'registered' with minimal friction.\n\nStep 3 — Conversion (Hybrid Event Execution): Delivered a hybrid grand reveal event — 60 attendees in-person, 160 joining virtually. Managed full project lifecycle using Jira, coordinating across UI/UX, Strategy, and Creative teams in Agile sprints to ensure seamless delivery.\n\nStep 4 — Retention (Post-Event Intent Capture): Deployed a structured post-event intent survey to capture follow-up signals — identifying warm leads for the BD team and creating a tiered follow-up priority list based on expressed interest level.",
        action: "Built the full investor contact database from scratch using LinkedIn and industry directories, manually qualifying each contact for strategic relevance. Set up automated email sequences and Eventbrite registration flow. Ran Agile sprint ceremonies (daily stand-ups, sprint reviews) using Jira to keep cross-functional teams aligned across a compressed timeline. Personally coordinated the hybrid event logistics — AV setup, virtual streaming, and live Q&A facilitation. Designed and distributed the post-event intent form and synthesized results into a BD handoff report.",
        result: {
            metrics: [
                { value: "500+", label: "Investors Reached (NA / Asia / ME)", color: "blue" },
                { value: "44%", label: "Attendance Rate (220/500)", color: "green" },
                { value: "220", label: "Engaged Prospects (60 live + 160 virtual)", color: "green" },
                { value: "+18%", label: "Team Workflow Efficiency via Agile", color: "blue" }
            ],
            context: "Converted a network of passive connections into an active investor pipeline — using a zero-paid-media, organic GTM strategy built entirely on funnel design and operational discipline."
        },
        insight: {
            opening: "An event is just a tactic. A funnel is a strategy.",
            body: "The 44% attendance rate wasn't accidental — it came from treating each outreach touchpoint as a conversion step, not just a notification. By engineering the sequence (cold outreach → reminder → landing page → live event → intent survey), we created momentum that carried contacts through the funnel rather than relying on a single email blast.\n\nThis project proved that Funnel Thinking is transferable: the same 'Awareness → Nurture → Convert → Retain' logic that drives paid media campaigns applies equally to event marketing, investor relations, and product launches."
        },
        funnelDiagram: true
    },
    // Project 4: McDonald's Global Flavor Launch
    {
        title: "Managing the 'Monster' Campaign: How I Unified 50+ Influencers for McDonald's Global Flavor Launch",
        industry: "CPG",
        category: "brand-campaign",
        cardMetrics: "790K+ Organic Discussions | 15K Follower Growth | 99% On-Time Delivery",
        why: "McDonald's wasn't launching a typical social campaign — they were building a direct revenue pipeline. The brief had three hard objectives: drive weekly hype for limited-time international menu items, increase membership lifecycle value, and convert social engagement into measurable app transactions via WeChat Mini-Program.\n\nThe gap was clear: most brand campaigns on Weibo stopped at awareness. McDonald's needed the full loop — from impression to app open to purchase.",
        strategy: "Role: Strategic hub connecting the Sales team's vision with Media and Dev execution.\n\nRather than a standard media buy, architected a Full-Stack Platform Approach with three integrated layers:\n\nLayer 1 — Impact: Top-View Splash Screens for immediate brand visibility at scale.\n\nLayer 2 — Conversion: Custom App Push Notifications built in direct collaboration with the Dev team — triggered 24 hours after a user engaged with the Global Flavor banner, delivering a member-exclusive discount reminder at peak purchase intent.\n\nLayer 3 — Amplification: Aggressive Influencer Seeding across 50+ creators, managed through a 28-day Live Matrix SOP with 72-hour pre-vetting and a Buffer & Backup system to eliminate brand safety risks.\n\nThe logic: awareness without conversion is wasted spend. Every layer was designed to move users one step closer to the Mini-Program checkout.",
        action: "Orchestration at scale: Built a 28-day Live Matrix covering 50+ influencers — pre-vetted content 72 hours in advance, with a Buffer & Backup system to handle missed windows and brand safety risks without campaign disruption.\n\nReal-time optimization: Using Brandwatch and internal social listening tools, tracked daily sentiment shifts and Word Clouds. When a German-themed menu item trended unexpectedly high, pivoted media spend mid-campaign to double down on that asset.\n\nCustom QA leadership: Personally led technical QA for the custom pop-up features, ensuring deep links to the McDonald's Mini-Program worked across all mobile OS versions before the campaign went live at full scale.",
        result: {
            metrics: [
                { value: "790K+", label: "Organic Discussions", color: "blue" },
                { value: "15K", label: "Follower Growth", color: "green" },
                { value: "99%", label: "On-Time Delivery (28 days)", color: "green" },
                { value: "50+", label: "Influencers Managed", color: "blue" },
                { value: "+18%", label: "Workflow Efficiency via SOP", color: "green" }
            ],
            context: "Successfully drove Direct-to-App sales growth, meeting the client's goal of building internal ecosystem value — not just social metrics."
        },
        insight: {
            opening: "Scale is easy to buy. Alignment is what actually delivers results.",
            body: "The real challenge wasn't media planning — it was ensuring 50+ influencers, three internal teams, and a Dev team were all building toward the same objective. Misalignment at any layer would have broken the conversion loop.\n\nMcDonald's brief said 'drive engagement' — but the real goal was growing their WeChat Mini-Program ecosystem. Getting that distinction right changed every downstream decision, from trigger logic to placement selection. Off-the-shelf solutions would have delivered reach. The customized integration delivered revenue."
        }
    }
];

// ─────────────────────────────────────────────
// Funnel Diagram Generator (VosynVerse project)
// ─────────────────────────────────────────────
function buildFunnelDiagram() {
    const steps = [
        {
            num: "01",
            icon: "🎯",
            label: "PROSPECTING",
            sub: "Pipeline Building",
            detail: "500+ investors curated across NA, Asia & Middle East",
            tags: ["VCs", "Finance Professionals", "Global Connections"],
            color: "#4285f4",
            metric: "500+ contacts"
        },
        {
            num: "02",
            icon: "📧",
            label: "NURTURING",
            sub: "Multi-Touch Outreach",
            detail: "Sequenced email outreach + Eventbrite landing page + automated reminders",
            tags: ["Cold Email", "Auto Reminders", "Landing Page"],
            color: "#9b59b6",
            metric: "4-step sequence"
        },
        {
            num: "03",
            icon: "🎤",
            label: "CONVERSION",
            sub: "Hybrid Event Day",
            detail: "60 in-person + 160 virtual attendees — Agile-coordinated across all teams",
            tags: ["Live Event", "Virtual Stream", "Agile Sprint"],
            color: "#34a853",
            metric: "220 attendees · 44%"
        },
        {
            num: "04",
            icon: "📊",
            label: "RETENTION",
            sub: "Post-Event Intent Capture",
            detail: "Intent surveys → lead scoring → BD team handoff report",
            tags: ["Intent Survey", "Lead Scoring", "BD Handoff"],
            color: "#fbbc04",
            metric: "Tiered pipeline"
        }
    ];

    const stepsHTML = steps.map((s, i) => `
        <div class="funnel-step" style="--step-color: ${s.color}; --step-delay: ${i * 0.12}s">
            <div class="funnel-step-inner">
                <div class="funnel-step-head">
                    <div class="funnel-num" style="color: ${s.color}">${s.num}</div>
                    <div class="funnel-icon">${s.icon}</div>
                    <div class="funnel-title-block">
                        <div class="funnel-label" style="color: ${s.color}">${s.label}</div>
                        <div class="funnel-sub">${s.sub}</div>
                    </div>
                    <div class="funnel-metric-badge" style="border-color: ${s.color}; color: ${s.color}">${s.metric}</div>
                </div>
                <div class="funnel-detail">${s.detail}</div>
                <div class="funnel-tags">
                    ${s.tags.map(t => `<span class="funnel-tag" style="border-color: ${s.color}33; color: ${s.color}">${t}</span>`).join('')}
                </div>
            </div>
            ${i < steps.length - 1 ? `<div class="funnel-connector"><div class="funnel-arrow-line"></div><div class="funnel-arrow-head" style="color: ${s.color}">↓</div></div>` : ''}
        </div>
    `).join('');

    return `
        <div class="funnel-diagram">
            <div class="funnel-diagram-header">
                <span class="funnel-diagram-title">Investor GTM Conversion Funnel</span>
                <span class="funnel-result-pill">✓ 44% Attendance Rate · Zero Paid Media</span>
            </div>
            <div class="funnel-steps">${stepsHTML}</div>
        </div>
    `;
}

// ─────────────────────────────────────────────
// Content Formatter
// ─────────────────────────────────────────────
function formatProjectContent(content) {
    if (!content) return '';
    return content
        .replace(/Phase (\d+) — ([^:]+):/g, '<strong class="phase-label">Phase $1 — $2:</strong>')
        .replace(/Layer (\d+) — ([^:]+):/g, '<strong class="phase-label">Layer $1 — $2:</strong>')
        .replace(/Step (\d+) — ([^:]+):/g, '<strong class="phase-label">Step $1 — $2:</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\b(Value-Based Bidding|Offline Conversion Tracking|Custom Label Architecture|Demand Gen|First-Party Data|Funnel Thinking)\b/g,
            '<span class="highlight-term">$1</span>');
}

// ─────────────────────────────────────────────
// Modal
// ─────────────────────────────────────────────
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.modal-close');
const prevBtn = document.querySelector('.modal-prev');
const nextBtn = document.querySelector('.modal-next');

let currentProjectIndex = 0;

function populateModal(index) {
    const project = projects[index];
    currentProjectIndex = index;

    const modalBody = document.querySelector('.modal-body');

    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="modal-industry-tag">${project.industry}</span>
            <h2 class="modal-title">${project.title}</h2>
        </div>

        <div class="framework-section">
            <span class="framework-label">WHY</span>
            <p>${formatProjectContent(project.why)}</p>
        </div>

        <div class="framework-section">
            <span class="framework-label">STRATEGY</span>
            <p>${formatProjectContent(project.strategy)}</p>
        </div>

        ${project.funnelDiagram ? `
        <div class="framework-section funnel-section">
            <span class="framework-label">FUNNEL ARCHITECTURE</span>
            ${buildFunnelDiagram()}
        </div>` : ''}

        <div class="framework-section">
            <span class="framework-label">ACTION</span>
            <p>${formatProjectContent(project.action)}</p>
        </div>

        <div class="framework-section">
            <span class="framework-label">RESULT</span>
            <div class="metrics-grid">
                ${project.result.metrics.map(metric => `
                    <div class="metric-card ${metric.color}">
                        <div class="metric-number">${metric.value}</div>
                        <div class="metric-label">${metric.label}</div>
                    </div>
                `).join('')}
            </div>
            <p>${formatProjectContent(project.result.context)}</p>
        </div>

        <div class="framework-section">
            <span class="framework-label">BUSINESS INSIGHT</span>
            <div class="business-insight-block">
                <p>${formatProjectContent(project.insight.opening)}</p>
                <p>${formatProjectContent(project.insight.body)}</p>
            </div>
        </div>
    `;
}

function openModal(index) {
    populateModal(index);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        openModal(parseInt(this.getAttribute('data-project')));
    });
});

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

prevBtn.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    populateModal(currentProjectIndex);
});

nextBtn.addEventListener('click', () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    populateModal(currentProjectIndex);
});

// ─────────────────────────────────────────────
// Project Filter
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeIn 0.5s ease-in-out';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    const yearElement = document.getElementById('current-year');
    if (yearElement) yearElement.textContent = new Date().getFullYear();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ─────────────────────────────────────────────
// Professional Cursor
// ─────────────────────────────────────────────
class ProfessionalCursor {
    constructor() {
        this.cursor = null;
        this.follower = null;
        this.mouseX = 0; this.mouseY = 0;
        this.followerX = 0; this.followerY = 0;
        this.init();
    }
    init() {
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.innerHTML = '<div class="cursor-dot"></div>';
        this.follower = document.createElement('div');
        this.follower.className = 'cursor-follower';
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.follower);
        document.addEventListener('mousemove', e => { this.mouseX = e.clientX; this.mouseY = e.clientY; });
        document.addEventListener('mouseenter', () => { this.cursor.style.opacity = '1'; this.follower.style.opacity = '1'; });
        document.addEventListener('mouseleave', () => { this.cursor.style.opacity = '0'; this.follower.style.opacity = '0'; });
        document.querySelectorAll('a, button, .project-card, .timeline-node').forEach(el => {
            el.addEventListener('mouseenter', () => { this.cursor.classList.add('hover'); this.follower.classList.add('hover'); });
            el.addEventListener('mouseleave', () => { this.cursor.classList.remove('hover'); this.follower.classList.remove('hover'); });
        });
        this.animate();
    }
    animate() {
        this.cursor.style.transform = `translate(${this.mouseX}px, ${this.mouseY}px)`;
        this.followerX += (this.mouseX - this.followerX) * 0.1;
        this.followerY += (this.mouseY - this.followerY) * 0.1;
        this.follower.style.transform = `translate(${this.followerX}px, ${this.followerY}px)`;
        requestAnimationFrame(() => this.animate());
    }
}

// ─────────────────────────────────────────────
// Timeline Animation
// ─────────────────────────────────────────────
class CleanTimelineAnimation {
    constructor() {
        this.timelinePoints = document.querySelectorAll('.timeline-point');
        this.aboutElements = document.querySelectorAll('.about-intro, .about-card, .pillar');
        this.container = document.querySelector('.clean-timeline-container');
        this.init();
    }
    init() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.3, rootMargin: '0px 0px -10% 0px' });
        this.timelinePoints.forEach(p => observer.observe(p));

        const observer2 = new IntersectionObserver(entries => {
            entries.forEach((e, i) => {
                if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 200);
            });
        }, { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' });
        this.aboutElements.forEach(el => observer2.observe(el));

        if (this.container) {
            this.container.addEventListener('wheel', e => {
                const maxScroll = this.container.scrollWidth - this.container.clientWidth;
                if (maxScroll > 0 && this.container.scrollLeft > 0 && this.container.scrollLeft < maxScroll - 1) {
                    e.preventDefault();
                    this.container.scrollBy({ left: e.deltaY > 0 ? 100 : -100, behavior: 'smooth' });
                }
            });
        }
    }
}

// ─────────────────────────────────────────────
// Pixel AI Assistant
// ─────────────────────────────────────────────
class PixelAIAssistant {
    constructor() {
        this.assistant = null;
        this.speechBubble = null;
        this.bubbleContent = null;
        this.currentX = 0; this.currentY = 0;
        this.targetX = 0; this.targetY = 0;
        this.isMoving = false;
        this.isVisible = false;
        this.lastAction = 0;
        this.mouseX = 0; this.mouseY = 0;
        this.speed = 1;
        this.messages = [
            "Built independently with Claude Code! 🤖",
            "100% self-created with AI assistance 💪",
            "Modern portfolio, AI-powered development ✨",
            "Claude Code + creative vision = this site 🚀",
            "No templates, just AI collaboration! 🎯",
            "Independent developer meets AI tools 💡",
            "Catch me if you can! 😄",
            "This is what AI-assisted creation looks like! 🌟"
        ];
        this.init();
    }

    init() {
        setTimeout(() => { this.createAssistant(); this.show(); }, 30000);
    }

    createAssistant() {
        this.assistant = document.getElementById('pixelAssistant');
        if (!this.assistant) return;
        this.speechBubble = this.assistant.querySelector('.speech-bubble');
        this.bubbleContent = this.assistant.querySelector('.bubble-content');
        this.setRandomPosition();
        this.assistant.addEventListener('click', e => this.handleClick(e));
        document.addEventListener('mousemove', e => { this.mouseX = e.clientX; this.mouseY = e.clientY; });
        this.startBehaviorLoop();
    }

    show() {
        if (!this.assistant) return;
        this.assistant.classList.remove('hidden');
        this.isVisible = true;
        setTimeout(() => this.jump(), 100);
        setTimeout(() => this.showMessage("Hi! This site was built with Claude Code! 🤖"), 1200);
    }

    setRandomPosition() {
        const b = this.getContentBounds();
        this.currentX = Math.random() * (b.maxX - b.minX) + b.minX;
        this.currentY = Math.random() * (b.maxY - b.minY) + b.minY;
        this.targetX = this.currentX; this.targetY = this.currentY;
        this.updatePosition();
    }

    getContentBounds() {
        const vw = window.innerWidth;
        const sm = Math.max(20, (vw - Math.min(1200, vw)) / 2 + 20);
        return { minX: sm, maxX: vw - sm - 32, minY: 80, maxY: window.innerHeight - 100 };
    }

    updatePosition() {
        if (!this.assistant) return;
        this.assistant.style.left = this.currentX + 'px';
        this.assistant.style.top = this.currentY + 'px';
    }

    moveTo(x, y) {
        const b = this.getContentBounds();
        this.targetX = Math.max(b.minX, Math.min(b.maxX, x));
        this.targetY = Math.max(b.minY, Math.min(b.maxY, y));
        this.isMoving = true;
        this.assistant.classList.add('walking', 'moving');
    }

    update() {
        if (!this.isVisible || !this.assistant) return;
        if (this.isMoving) {
            const dx = this.targetX - this.currentX, dy = this.targetY - this.currentY;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d > 2) { this.currentX += dx / d * this.speed; this.currentY += dy / d * this.speed; this.updatePosition(); }
            else { this.isMoving = false; this.assistant.classList.remove('walking', 'moving'); }
        }
        const md = Math.sqrt(Math.pow(this.mouseX - this.currentX, 2) + Math.pow(this.mouseY - this.currentY, 2));
        if (md < 60 && !this.isMoving) this.runAway();
    }

    runAway() {
        const a = Math.atan2(this.currentY - this.mouseY, this.currentX - this.mouseX);
        this.speed = 2;
        this.moveTo(this.currentX + Math.cos(a) * 100, this.currentY + Math.sin(a) * 100);
        this.assistant.classList.add('shy');
        setTimeout(() => { this.assistant.classList.remove('shy'); this.speed = 1; }, 500);
    }

    startBehaviorLoop() {
        const loop = () => {
            if (!this.isVisible) { setTimeout(loop, 1000); return; }
            const now = Date.now();
            if (now - this.lastAction > 5000 && !this.isMoving) {
                const a = Math.random();
                if (a < 0.4) this.randomWalk();
                else if (a < 0.6) this.lookAround();
                else if (a < 0.8) this.jump();
                else this.showRandomMessage();
                this.lastAction = now;
            }
            this.update();
            setTimeout(loop, 50);
        };
        loop();
    }

    randomWalk() {
        const a = Math.random() * Math.PI * 2, d = 50 + Math.random() * 100;
        this.moveTo(this.currentX + Math.cos(a) * d, this.currentY + Math.sin(a) * d);
    }

    lookAround() {
        this.assistant.style.transform = 'scaleX(-1)';
        setTimeout(() => { this.assistant.style.transform = 'scaleX(1)'; }, 1000);
    }

    jump() {
        this.assistant.classList.add('jumping');
        setTimeout(() => this.assistant.classList.remove('jumping'), 800);
    }

    wave() {
        const body = this.assistant.querySelector('.pixel-body');
        body.style.animation = 'pixelWave 1s ease-in-out';
        setTimeout(() => { body.style.animation = ''; }, 1000);
    }

    handleClick(e) {
        e.stopPropagation();
        this.wave(); this.showRandomMessage(); this.jump();
        this.lastAction = Date.now();
    }

    showMessage(message) {
        if (!this.bubbleContent || !this.speechBubble) return;
        this.bubbleContent.textContent = message;
        this.speechBubble.style.cssText = 'left: -40px; right: auto; bottom: 38px; top: auto;';
        this.speechBubble.classList.remove('hidden');
        this.speechBubble.classList.add('show');
        requestAnimationFrame(() => {
            const r = this.speechBubble.getBoundingClientRect();
            if (r.right > window.innerWidth - 10) { this.speechBubble.style.left = 'auto'; this.speechBubble.style.right = '0'; }
            if (r.left < 10) { this.speechBubble.style.left = '0'; this.speechBubble.style.right = 'auto'; }
            if (r.top < 10) { this.speechBubble.style.bottom = 'auto'; this.speechBubble.style.top = '38px'; }
        });
        setTimeout(() => {
            this.speechBubble.classList.remove('show');
            setTimeout(() => this.speechBubble.classList.add('hidden'), 300);
        }, 3500);
    }

    showRandomMessage() {
        this.showMessage(this.messages[Math.floor(Math.random() * this.messages.length)]);
    }
}

// ─────────────────────────────────────────────
// Init
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    new ProfessionalCursor();
    new CleanTimelineAnimation();
    window.pixelAI = new PixelAIAssistant();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
});
