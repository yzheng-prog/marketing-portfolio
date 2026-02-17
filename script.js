// Enhanced Marketing Portfolio - Premium Interactions & Animations
// Optimized project data with anonymized client names and improved structure

const projects = [
    // Project 0: B2B Data SaaS Client (anonymized)
    {
        title: "Value-Based Bidding & CRM Integration — B2B Data SaaS Client",
        industry: "B2B / Data SaaS",
        category: "paid-media",
        cardMetrics: "-25% CPA | +32% Qualified Conversions | +20% Budget Increase",
        why: "A B2B public records data provider serving the energy, mineral rights, and real estate sectors was operating on 2018-era infrastructure: 1,000+ broad-match keywords, unmonitored Auto-Apply settings, and no feedback loop between ad spend and sales pipeline quality.\n\nThe symptom: strong click volume, weak contract value. The cause: the algorithm was trained on form fills—not revenue. High-intent mineral deed and oil lease traffic was being competed for by agile rivals while the client optimized for metrics that didn't move the business.",
        strategy: "Re-engineered the account from a cost center to a profit engine by building the connective tissue between web signals and the bottom line.\n\nPhase 1 — Algorithmic Cleanup & Competitive Conquesting: Conducted a surgical keyword audit—stripped legacy bloat and neutralized Auto-Apply features inflating CPCs without purchase intent. Launched a PMax structure driven by Competitor Audience Signals, feeding top rival URLs into the algorithm to intercept high-value prospects at the exact moment they were evaluating alternatives.\n\nPhase 2 — From ROAS to POAS (Profit on Ad Spend): In 2026, revenue is a vanity metric; profit is the reality. Implemented Value-Based Bidding (VBB) to differentiate by product LTV. A corporate oil lease dataset carries 10x higher LTV than a residential lot search. Assigned weighted conversion values accordingly—training the algorithm to deprioritize cheap traffic and target high-margin corporate accounts.\n\nPhase 3 — OCT & CRM Bridge (HubSpot): Closed the data loop via Offline Conversion Tracking (OCT). Instead of optimizing for form fills (which included spam), fed \"Qualified Sales Opportunity\" signals from HubSpot back into Google Ads—shifting the algorithm's targeting from anyone with an email address to decision-makers with an active budget.",
        action: "Used the Paid Search Term Report as a market research tool: identified expensive \"how-to\" queries (e.g., \"How to verify Texas mineral deeds\") driving $15/click educational traffic. Redirected the SEO team to build authority content for those terms, reallocating ~$5K/month in savings toward high-intent, ready-to-buy search terms.\n\nOverhauled ad creative from generic \"Data for Sale\" copy to professional-grade value propositions—\"Immediate API Access\" and \"Verified Mineral Chain-of-Title\"—increasing CTR among industry professionals while naturally filtering out low-intent traffic.",
        result: {
            metrics: [
                { value: "-25%", label: "CPA Reduction ($12.51)", color: "green" },
                { value: "+32%", label: "High-Quality Conversions", color: "green" },
                { value: "+20%", label: "Executive Budget Increase", color: "blue" },
                { value: "↑", label: "Blended CAC via SEO/PPC Synergy", color: "green" }
            ],
            context: "Proved the unit economics of high-margin leads within 30 days—directly resulting in an executive decision to increase investment for new product launches."
        },
        insight: {
            opening: "The shift in this account wasn't about finding 'magic' keywords; it was about Signal Integrity.",
            body: "By feeding the CRM's 'Sales-Ready' data back into the Google algorithm, we stopped bidding on traffic and started bidding on revenue. We effectively transitioned the conversation from 'How many clicks?' to 'What is the pipeline value?'"
        }
    },
    
    // Project 1: Sporting Goods Retailer (anonymized)
    {
        title: "Scalable E-Commerce Growth & Inventory Alpha — Sporting Goods Retailer",
        industry: "eCommerce / Sporting Goods",
        category: "paid-media",
        cardMetrics: "+313% Conversion Value | 10.82 ROAS (+82%) | CPA $5.81",
        why: "Q4 is the highest-stakes auction window in eCommerce—demand spikes, but so do CPCs. For a sporting goods retailer with a major product launch timed to Black Friday, the challenge was scaling efficiently without letting automation work against itself.\n\nThe account had hit a common plateau: Smart Shopping and PMax setups were cannibalizing branded search and over-allocating budget to zombie products—low-velocity SKUs with zero conversions draining spend. Scaling in this state would have amplified inefficiency, not growth. A structural intervention was needed before the holiday window opened.",
        strategy: "Designed a Tri-Phase Velocity Model to shift from automated bidding to data-informed steering:\n\nPhase 1 — Top-of-Funnel Priming (Demand Gen): In 2026, waiting for intent is too late. Leveraged First-Party Data (CDP exports) to build high-affinity Seed Lists and deployed Demand Gen campaigns using short-form video assets weeks ahead of Black Friday. The goal: load the target audience into active consideration before the competitive auction peaked, reducing eventual CPCs at the intent stage.\n\nPhase 2 — Intent Capture & Brand Protection (Search + PMax): Moved to Value-Based Bidding (VBB) on new product launch keywords with high-intent modifiers. Implemented Final URL Expansion Exclusions in PMax—strictly funneling holiday traffic to high-converting landing pages and preventing the algorithm from wasting Black Friday budget on \"About Us\" or \"Shipping Policy\" pages.\n\nPhase 3 — Inventory Segmentation & Margin-First Shopping: The differentiator was Custom Label Architecture. Isolated zombie SKUs (zero conversions, last 30 days) into a low-priority catch-all campaign, freeing the main PMax budget to focus exclusively on high-velocity winners. Tagged products by profit margin rather than category—enabling aggressive ROAS targets on low-margin door-busters and lower ROAS targets on high-margin proprietary gear. Optimized for bottom-line profit, not top-line revenue.",
        action: "Audited the full product catalog to identify zombie SKUs and high-margin heroes. Built Custom Label architecture in Google Merchant Center to bridge warehouse inventory data with ad account logic. Deployed Demand Gen campaigns with first-party seed lists ahead of the holiday window. Set URL expansion exclusions and monitored PMax asset group performance continuously. Adjusted margin-based ROAS targets dynamically as inventory velocity shifted through the campaign period.",
        result: {
            metrics: [
                { value: "10.82", label: "ROAS (+82.43% YoY)", color: "green" },
                { value: "+313%", label: "Conversion Value", color: "green" },
                { value: "+42%", label: "CTR (Demand Gen Effect)", color: "blue" },
                { value: "$5.81", label: "CPA (Stable vs. Holiday Inflation)", color: "blue" }
            ],
            context: "Scaled volume 3x while actually improving efficiency—proving that better data inputs lead to better AI outputs."
        },
        insight: {
            opening: "The success of this Q4 push wasn't found in the Google Ads algorithm itself, but in the inventory engineering behind it.",
            body: "By using Custom Labels to bridge the gap between the warehouse and the ad account, we transformed the 'Zombie' inventory into a controlled test group and allowed the 'Heroes' to scale without restriction."
        }
    },
    
    // Project 2: Home Services Provider (anonymized)
    {
        title: "Strategic Pivot for High-Value Local Services — Home Services Provider",
        industry: "Local Services / Home Services",
        category: "paid-media",
        cardMetrics: "+60% CVR | +64% Search CTR | -27% CPA ($58.26)",
        why: "A specialized wildlife exclusion company faced two compounding challenges typical of seasonal local services: broad \"pest control\" keywords were attracting low-value leads the service provider couldn't service, and Q1 seasonality created a predictable pipeline slump with limited direct search volume to capture.\n\nThe problem wasn't purely optimization—it required proactive demand generation to bridge the seasonal gap while repositioning the brand away from commodity pest control.",
        strategy: "Built an Awareness-to-Exclusion Pipeline to address both demand quality and demand creation simultaneously:\n\nPhase 1 — Market Education & Demand Gen (YouTube): Wildlife removal is reactive; exclusion (preventing re-entry) is proactive—and a significantly higher-ticket service. Launched localized YouTube Video Action campaigns targeting homeowners in high-wooded zip codes, focused on structural home damage caused by wildlife. The insight: we used video to show the damage squirrels and raccoons cause—repositioning the brand from \"the guy who catches the raccoon\" to \"the expert who protects the home's equity.\"\n\nPhase 2 — Referral Network Automation (Outbound Engine): Rather than waiting for Q1 search volume to return, we went to the sources of the leads. Developed a custom script to aggregate local business data based on rankings and reviews—real estate agents, property managers, and roofers. Built an automated outreach flow sending customized \"Partner Reports\" to these contacts, turning local contractors into a 24/7 referral network.\n\nPhase 3 — High-Intent Search & Page Feed Segregation: Moved away from a one-size-fits-all search campaign. Implemented Page Feeds to strictly map specific wildlife queries (e.g., \"bats in attic\") to long-form educational landing pages—handling service segregation at the URL level, preventing Google from conflating a $100 pest control job with a $2,500 exclusion project. Ran PMax restricted by Negative Keyword Themes to exclude DIY and generic pest control terms.",
        action: "Built and deployed YouTube localized targeting segmented by high-wooded zip codes. Developed a custom data aggregation script for referral partner identification based on local rankings and review signals. Implemented Page Feed architecture mapping query-level intent to specific service landing pages. Set up and monitored PMax with negative keyword theme restrictions throughout the campaign period.",
        result: {
            metrics: [
                { value: "+64%", label: "Search CTR", color: "green" },
                { value: "+45%", label: "Call Ads CTR", color: "green" },
                { value: "+60%", label: "Conversion Rate (CVR)", color: "green" },
                { value: "-27%", label: "CPA ($58.26)", color: "blue" }
            ],
            context: "Solved both traffic quality and seasonal pipeline gaps simultaneously—by engineering demand where none existed and tightening technical precision in capturing existing demand."
        },
        insight: {
            opening: "In niche local services, your biggest enemy is 'Broad Match' noise.",
            body: "By implementing Page Feeds, we forced Google to respect the nuance between a $100 bug spray job and a $2,500 wildlife exclusion project. We didn't just buy more leads; we bought the right leads by automating the outreach to high-authority referral partners and tightening the technical search parameters."
        }
    },
    
    // Project 3: VosynVerse AI Agile Transformation
    {
        title: "Agile Marketing Transformation",
        industry: "Tech/AI",
        category: "brand-social",
        cardMetrics: "20% productivity increase | 15% faster delivery | Process optimization",
        challenge: "VosynVerse AI needed to launch their inaugural grand reveal marketing campaign but lacked structured processes and cross-functional coordination between UI/UX, web dev, marketing strategy, and creative teams.",
        approach: "Led Agile transformation for the marketing team, introducing daily stand-ups, sprint planning, and retrospectives. Facilitated stakeholder engagement across all departments to align project goals with business objectives.",
        execution: [
            "Orchestrated Agile ceremonies and established best practices",
            "Managed entire event lifecycle using Jira, Adobe, Figma, and social media platforms",
            "Identified and mitigated risks proactively to ensure project stability",
            "Implemented continuous improvement initiatives based on sprint retrospectives",
            "Trained team members on Agile principles and Scrum framework"
        ],
        results: [
            "20% increase in team productivity through Agile adoption",
            "15% reduction in project delivery times across all marketing initiatives",
            "10% increase in engagement and community growth",
            "Successfully delivered grand reveal campaign on time and within budget",
            "Established scalable processes for future campaigns"
        ],
        insight: "Applied CPG campaign management discipline to tech startup environment—bringing enterprise-level process rigor while maintaining startup agility and speed.",
        takeaway: "Proved ability to drive organizational change and implement scalable processes that improve team performance, regardless of industry or company size."
    },
    
    // Project 4: McDonald's Global Flavor Launch
    {
        title: "Managing the \"Monster\" Campaign: How I Unified 50+ Influencers and Custom Tech for McDonald's Global Flavor Launch",
        industry: "CPG",
        category: "brand-social",
        cardMetrics: "9.9B Views | 790K+ Organic Discussions | 99% On-Time Delivery",
        why: "McDonald's wasn't launching a typical social campaign—they were building a direct revenue pipeline. The brief had three hard objectives: drive weekly hype for limited-time international menu items, increase membership lifecycle value, and convert social engagement into measurable app transactions via WeChat Mini-Program.\n\nThe gap was clear: most brand campaigns on Weibo stopped at awareness. McDonald's needed the full loop—from impression to app open to purchase.",
        strategy: "Role: Strategic hub connecting the Sales team's vision with Media and Dev execution.\n\nRather than a standard media buy, I architected a Full-Stack Platform Approach with three integrated layers:\n\nLayer 1 — Impact: Top-View Splash Screens for immediate brand visibility at scale.\n\nLayer 2 — Conversion: Custom App Push Notifications built in direct collaboration with the Dev team—triggered 24 hours after a user engaged with the Global Flavor banner, delivering a member-exclusive discount reminder at peak purchase intent.\n\nLayer 3 — Amplification: Aggressive Influencer Seeding across 50+ creators, managed through a 28-day Live Matrix SOP with 72-hour pre-vetting and a Buffer & Backup system to eliminate brand safety risks.\n\nThe logic: awareness without conversion is wasted spend. Every layer was designed to move users one step closer to the Mini-Program checkout.",
        action: "Orchestration at scale: Built a 28-day Live Matrix covering 50+ influencers—pre-vetted content 72 hours in advance, with a Buffer & Backup system to handle missed windows and brand safety risks without campaign disruption.\n\nReal-time optimization: Using Brandwatch and internal social listening tools, tracked daily sentiment shifts and Word Clouds. When a German-themed menu item trended unexpectedly high, pivoted media spend mid-campaign to double down on that asset.\n\nCustom QA leadership: Personally led technical QA for the custom pop-up features, ensuring deep links to the McDonald's Mini-Program worked across all mobile OS versions before the campaign went live at full scale.",
        result: {
            metrics: [
                { value: "9.9B", label: "Total Views", color: "blue" },
                { value: "790K+", label: "Organic Discussions", color: "blue" },
                { value: "99%", label: "On-Time Delivery (28 days)", color: "green" },
                { value: "+18%", label: "Workflow Efficiency via SOP", color: "green" }
            ],
            context: "Successfully drove Direct-to-App sales growth, meeting the client's goal of building internal ecosystem value—not just social metrics."
        },
        insight: {
            opening: "Scale is easy to buy. Alignment is what actually delivers results.",
            body: "The real challenge wasn't media planning—it was ensuring 50+ influencers, three internal teams, and a Dev team were all building toward the same objective. Misalignment at any layer would have broken the conversion loop.\n\nMcDonald's brief said \"drive engagement\"—but the real goal was growing their WeChat Mini-Program ecosystem. Getting that distinction right changed every downstream decision, from trigger logic to placement selection. Off-the-shelf solutions would have delivered reach. The customized integration delivered revenue."
        }
    }
];

// Enhanced Modal and Project Management System
class ProjectManager {
    constructor() {
        this.projects = projects;
        this.currentIndex = 0;
        this.modal = document.getElementById('projectModal');
        this.modalBody = this.modal?.querySelector('.modal-body');
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupProjectCards();
        this.setupFilters();
    }

    bindEvents() {
        if (!this.modal) return;

        // Close events
        const closeBtn = this.modal.querySelector('.modal-close');
        const prevBtn = this.modal.querySelector('.modal-prev');
        const nextBtn = this.modal.querySelector('.modal-next');

        closeBtn?.addEventListener('click', () => this.closeModal());
        prevBtn?.addEventListener('click', () => this.navigateProject(-1));
        nextBtn?.addEventListener('click', () => this.navigateProject(1));

        // Click outside to close
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.modal.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape': this.closeModal(); break;
                case 'ArrowLeft': this.navigateProject(-1); break;
                case 'ArrowRight': this.navigateProject(1); break;
            }
        });
    }

    setupProjectCards() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach((card, index) => {
            card.addEventListener('click', () => this.openModal(index));
        });
    }

    setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects with animation
                projectCards.forEach(card => {
                    const category = card.dataset.category;
                    const shouldShow = filter === 'all' || category === filter;
                    
                    if (shouldShow) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeInUp 0.6s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    openModal(index) {
        this.currentIndex = index;
        this.renderModal();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    navigateProject(direction) {
        this.currentIndex = (this.currentIndex + direction + this.projects.length) % this.projects.length;
        this.renderModal();
    }

    renderModal() {
        if (!this.modalBody) return;
        
        const project = this.projects[this.currentIndex];
        
        // Check if this is a new framework project
        if (project.why) {
            this.renderNewFramework(project);
        } else {
            this.renderLegacyFramework(project);
        }
    }

    renderNewFramework(project) {
        this.modalBody.innerHTML = `
            <div class="modal-header">
                <span class="modal-industry-tag">${project.industry}</span>
                <h2 class="modal-title">${project.title}</h2>
            </div>

            <div class="framework-section why-section">
                <span class="framework-label">WHY</span>
                <div class="framework-content">${this.formatContent(project.why)}</div>
            </div>

            <div class="framework-section strategy-section">
                <span class="framework-label">STRATEGY</span>
                <div class="framework-content">${this.formatContent(project.strategy)}</div>
            </div>

            <div class="framework-section action-section">
                <span class="framework-label">ACTION</span>
                <div class="framework-content">${this.formatContent(project.action)}</div>
            </div>

            <div class="framework-section result-section">
                <span class="framework-label">RESULT</span>
                <div class="metrics-showcase">
                    ${project.result.metrics.map(metric => `
                        <div class="metric-highlight ${metric.color}">
                            <div class="metric-value">${metric.value}</div>
                            <div class="metric-description">${metric.label}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="result-context">${this.formatContent(project.result.context)}</div>
            </div>

            <div class="framework-section insight-section">
                <span class="framework-label">BUSINESS INSIGHT</span>
                <div class="insight-highlight">
                    <div class="insight-opening">${this.formatContent(project.insight.opening)}</div>
                    <div class="insight-body">${this.formatContent(project.insight.body)}</div>
                </div>
            </div>
        `;

        this.animateModalSections();
    }

    renderLegacyFramework(project) {
        this.modalBody.innerHTML = `
            <div class="modal-header">
                <span class="modal-industry-tag">${project.industry}</span>
                <h2 class="modal-title">${project.title}</h2>
            </div>

            <div class="modal-section">
                <h3>Challenge</h3>
                <p>${project.challenge}</p>
            </div>

            <div class="modal-section">
                <h3>Strategic Approach</h3>
                <p>${project.approach}</p>
            </div>

            <div class="modal-section">
                <h3>Execution</h3>
                <ul>
                    ${project.execution.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3>Results</h3>
                <ul>
                    ${project.results.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>

            <div class="modal-section insight-section">
                <h3>Cross-Industry Insight Applied</h3>
                <p>${project.insight}</p>
            </div>

            <div class="modal-section takeaway-section">
                <h3>Key Takeaway</h3>
                <p>${project.takeaway}</p>
            </div>
        `;

        this.animateModalSections();
    }

    formatContent(content) {
        if (!content) return '';

        return content
            // Format phase/layer labels
            .replace(/Phase \d+ —([^:]+):/g, '<strong class="phase-label">Phase $1:</strong>')
            .replace(/Layer \d+ —([^:]+):/g, '<strong class="layer-label">Layer $1:</strong>')
            
            // Highlight key terms
            .replace(/\b(Value-Based Bidding|Offline Conversion Tracking|Custom Label Architecture|Demand Gen|First-Party Data|Performance Max|PMax)\b/g, '<span class="highlight-term">$1</span>')
            
            // Add paragraph breaks
            .replace(/\n\n/g, '</p><p>')
            .replace(/^/, '<p>')
            .replace(/$/, '</p>');
    }

    animateModalSections() {
        const sections = this.modalBody.querySelectorAll('.framework-section, .modal-section');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`;
        });
    }
}

// Enhanced Hero Animation System
class HeroAnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.animateTitle();
        this.animateDescription();
        this.animateContactActions();
        this.animateHeadshot();
    }

    animateTitle() {
        const titleWords = document.querySelectorAll('.title-word');
        titleWords.forEach((word, index) => {
            const delay = parseInt(word.dataset.delay) || index * 100;
            word.style.animationDelay = `${delay}ms`;
        });
    }

    animateDescription() {
        const descriptionLines = document.querySelectorAll('.description-line');
        descriptionLines.forEach((line, index) => {
            const delay = parseInt(line.dataset.delay) || (900 + index * 200);
            line.style.animationDelay = `${delay}ms`;
        });
    }

    animateContactActions() {
        const contactActions = document.querySelector('.contact-actions');
        if (contactActions) {
            const delay = parseInt(contactActions.dataset.delay) || 1300;
            contactActions.style.animationDelay = `${delay}ms`;
        }
    }

    animateHeadshot() {
        const headshot = document.querySelector('.headshot-container');
        if (headshot) {
            const delay = parseInt(headshot.dataset.delay) || 1500;
            headshot.style.animationDelay = `${delay}ms`;
        }
    }
}

// Enhanced Pixel AI Assistant
class PixelAIAssistant {
    constructor() {
        this.assistant = null;
        this.speechBubble = null;
        this.bubbleContent = null;
        this.currentX = 0;
        this.currentY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.isMoving = false;
        this.isVisible = false;
        this.lastAction = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.speed = 1.5;
        this.boundaryMargin = 150; // Keep assistant within content boundaries

        this.messages = [
            "Built with Claude Code + creative vision! 🤖",
            "100% self-created with AI assistance 💪",
            "Modern portfolio, AI-powered development ✨",
            "Claude Code + strategic thinking = this site 🚀",
            "No templates, just AI collaboration! 🎯",
            "Independent developer meets AI tools 💡",
            "This is what AI-assisted creation looks like! 🌟",
            "Catch me if you can! 😄"
        ];

        this.init();
    }

    init() {
        setTimeout(() => {
            this.createAssistant();
            this.show();
        }, 30000);
    }

    createAssistant() {
        this.assistant = document.getElementById('pixelAssistant');
        this.speechBubble = this.assistant?.querySelector('.speech-bubble');
        this.bubbleContent = this.assistant?.querySelector('.bubble-content');

        if (!this.assistant) return;

        this.setRandomPosition();
        this.assistant.addEventListener('click', (e) => this.handleClick(e));
        document.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        this.startBehaviorLoop();
    }

    show() {
        if (!this.assistant) return;

        this.assistant.classList.remove('hidden');
        this.isVisible = true;

        this.jump();
        setTimeout(() => {
            this.showMessage("Hi! This portfolio was built with Claude Code! 🤖");
        }, 1000);
    }

    setRandomPosition() {
        // Keep assistant within content boundaries
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Calculate content area bounds
        const leftBound = Math.max(50, (viewportWidth - 1200) / 2);
        const rightBound = Math.min(viewportWidth - 100, leftBound + 1200 - 50);
        
        this.currentX = leftBound + Math.random() * (rightBound - leftBound);
        this.currentY = 100 + Math.random() * (viewportHeight - 200);
        this.targetX = this.currentX;
        this.targetY = this.currentY;

        this.updatePosition();
    }

    updatePosition() {
        if (!this.assistant) return;
        this.assistant.style.left = this.currentX + 'px';
        this.assistant.style.top = this.currentY + 'px';
    }

    moveTo(x, y) {
        // Constrain movement to content area
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const leftBound = Math.max(50, (viewportWidth - 1200) / 2);
        const rightBound = Math.min(viewportWidth - 100, leftBound + 1200 - 50);

        this.targetX = Math.max(leftBound, Math.min(rightBound, x));
        this.targetY = Math.max(50, Math.min(viewportHeight - 100, y));
        this.isMoving = true;
        this.assistant.classList.add('walking', 'moving');
    }

    update() {
        if (!this.isVisible || !this.assistant) return;

        if (this.isMoving) {
            const dx = this.targetX - this.currentX;
            const dy = this.targetY - this.currentY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance > 2) {
                this.currentX += (dx / distance) * this.speed;
                this.currentY += (dy / distance) * this.speed;
                this.updatePosition();
            } else {
                this.isMoving = false;
                this.assistant.classList.remove('walking', 'moving');
            }
        }

        // Enhanced mouse proximity detection
        const mouseDistance = Math.sqrt(
            Math.pow(this.mouseX - this.currentX, 2) +
            Math.pow(this.mouseY - this.currentY, 2)
        );

        if (mouseDistance < 70 && !this.isMoving) {
            this.runAway();
        }
    }

    runAway() {
        const angle = Math.atan2(
            this.currentY - this.mouseY,
            this.currentX - this.mouseX
        );

        const runDistance = 120;
        const newX = this.currentX + Math.cos(angle) * runDistance;
        const newY = this.currentY + Math.sin(angle) * runDistance;

        this.speed = 2.5;
        this.moveTo(newX, newY);
        this.assistant.classList.add('shy');

        setTimeout(() => {
            this.assistant.classList.remove('shy');
            this.speed = 1.5;
        }, 600);
    }

    startBehaviorLoop() {
        const behaviorLoop = () => {
            if (!this.isVisible) {
                setTimeout(behaviorLoop, 1000);
                return;
            }

            const now = Date.now();
            const timeSinceLastAction = now - this.lastAction;

            if (timeSinceLastAction > 8000 && !this.isMoving) {
                const action = Math.random();

                if (action < 0.3) {
                    this.randomWalk();
                } else if (action < 0.5) {
                    this.lookAround();
                } else if (action < 0.7) {
                    this.jump();
                } else {
                    this.showRandomMessage();
                }

                this.lastAction = now;
            }

            this.update();
            setTimeout(behaviorLoop, 50);
        };

        behaviorLoop();
    }

    randomWalk() {
        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 120;

        const newX = this.currentX + Math.cos(angle) * distance;
        const newY = this.currentY + Math.sin(angle) * distance;

        this.moveTo(newX, newY);
    }

    lookAround() {
        this.assistant.style.transform = 'scaleX(-1)';
        setTimeout(() => {
            this.assistant.style.transform = 'scaleX(1)';
        }, 1200);
    }

    jump() {
        this.assistant.classList.add('jumping');
        setTimeout(() => {
            this.assistant.classList.remove('jumping');
        }, 800);
    }

    wave() {
        const body = this.assistant.querySelector('.pixel-body');
        if (body) {
            body.style.animation = 'pixelWave 1s ease-in-out';
            setTimeout(() => {
                body.style.animation = '';
            }, 1000);
        }
    }

    handleClick(e) {
        e.stopPropagation();
        this.wave();
        this.showRandomMessage();
        this.jump();
        this.lastAction = Date.now();
    }

    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    showMessage(message) {
        if (!this.bubbleContent || !this.speechBubble) return;

        this.bubbleContent.textContent = message;
        this.speechBubble.classList.remove('hidden');
        this.speechBubble.classList.add('show');

        // Ensure bubble stays within viewport
        const bubbleRect = this.speechBubble.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        
        if (bubbleRect.right > viewportWidth - 20) {
            this.speechBubble.style.left = -(bubbleRect.width - 60) + 'px';
        } else if (bubbleRect.left < 20) {
            this.speechBubble.style.left = '20px';
        }

        setTimeout(() => {
            this.speechBubble.classList.remove('show');
            setTimeout(() => {
                this.speechBubble.classList.add('hidden');
            }, 300);
        }, 3500);
    }

    showRandomMessage() {
        const message = this.messages[Math.floor(Math.random() * this.messages.length)];
        this.showMessage(message);
    }
}

// Smooth Navigation System
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const navHeight = 80;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupActiveNavigation() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.toggle('active', 
                            link.getAttribute('href') === `#${id}`);
                    });
                }
            });
        }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

        sections.forEach(section => observer.observe(section));
    }
}

// Scroll-triggered Animations
class ScrollAnimationManager {
    constructor() {
        this.observer = null;
        this.init();
    }

    init() {
        this.setupScrollObserver();
        this.setupTimelineAnimation();
    }

    setupScrollObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

        // Observe elements for animation
        const animatedElements = document.querySelectorAll(
            '.metric-card, .skill-item, .timeline-point, .project-card, .about-intro'
        );
        
        animatedElements.forEach(el => this.observer.observe(el));
    }

    setupTimelineAnimation() {
        const timelinePoints = document.querySelectorAll('.timeline-point');
        timelinePoints.forEach((point, index) => {
            setTimeout(() => {
                point.classList.add('visible');
            }, index * 200);
        });
    }
}

// Enhanced Performance Manager
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.optimizeImages();
        this.setupPrefetching();
        this.monitorPerformance();
    }

    optimizeImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }

    setupPrefetching() {
        // Prefetch important resources
        const criticalResources = [
            'headshot.jpg'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = resource;
            document.head.appendChild(link);
        });
    }

    monitorPerformance() {
        // Log performance metrics for optimization
        window.addEventListener('load', () => {
            if (performance.getEntriesByType) {
                const navigation = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', navigation?.loadEventEnd - navigation?.loadEventStart, 'ms');
            }
        });
    }
}

// Initialize all systems when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Core systems
    new ProjectManager();
    new HeroAnimationManager();
    new NavigationManager();
    new ScrollAnimationManager();
    new PerformanceManager();
    
    // Delayed systems
    setTimeout(() => {
        window.pixelAI = new PixelAIAssistant();
    }, 1000);

    // Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// Export for potential external use
window.ProjectManager = ProjectManager;
window.PixelAIAssistant = PixelAIAssistant;