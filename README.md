# Ye Zheng — Marketing Portfolio Website

**Live Site:** [yezheng.github.io/portfolio](https://github.com/echozhengmba) · **Role:** Digital Marketing Strategist · **Stack:** Vanilla JS · CSS · HTML5 · GitHub Pages

---

## What This Is

A performance-driven personal portfolio built to do one thing well: help recruiters and hiring managers understand what I do, how I think, and what results I drive — within 60–90 seconds of landing on the page.

This isn't just a static resume. It's a **working demonstration of AI-augmented product development** — from strategy to code to deployment — built entirely through structured collaboration between human marketing judgment and Claude AI.

---

## How It Was Built

This project was developed through a two-layer AI collaboration workflow:

**Layer 1 — Strategic Thinking (Claude.ai web interface)**
Marketing strategy, case study framing, content hierarchy, and UX logic were developed conversationally. I used Claude as a thought partner to pressure-test positioning decisions, refine the WHY/STRATEGY/ACTION/RESULT/INSIGHT framework, and ensure every section answered the question recruiters actually care about: *"So what?"*

**Layer 2 — Technical Execution (Claude Code in terminal)**
Once strategy was locked, I switched to Claude Code to implement changes directly. The `CLAUDE.md` file served as the shared context layer — ensuring that regardless of which session or tool I was in, the AI maintained architectural consistency, respected established design decisions, and never drifted from the project's core logic.

> **This dual-loop workflow cut estimated development time by ~60%** while maintaining clean, framework-free code with zero technical debt.

---

## File Structure

```
/
├── index.html              # Main portfolio (desktop)
├── mobile.html             # Mobile-optimized experience
├── styles.css              # CSS design system (variable-driven)
├── script.js               # Core JS — project data, modal logic, interactions
├── easter-egg.js           # Pixel AI assistant (appears at 30s)
├── easter-egg.css          # Easter egg styles
├── CLAUDE.md               # AI collaboration guide (architecture decisions)
├── README.md               # This file
│
├── mcdonaldsbg.png         # McDonald's case study background
├── vosynbg.png             # VosynVerse AI case study background
├── texasrecordsbg.png      # B2B SaaS case study background
├── ledgestonebg.png        # eCommerce case study background
└── raccoonbg.png           # Home Services case study background
```

---

## Project Case Studies

Each case study follows a consistent **WHY → STRATEGY → ACTION → RESULT → INSIGHT** structure — designed to mirror how senior marketers and hiring managers evaluate strategic thinking.

| Project | Industry | Key Result |
|---|---|---|
| McDonald's Social Campaign | CPG / QSR | 790K+ social discussions, 50+ influencers managed |
| VosynVerse AI Investor Event | AI / Tech | 44% attendance conversion rate |
| Value-Based Bidding & CRM Integration | B2B SaaS | -25% CPA, +32% conversions |
| eCommerce Performance Max | Sporting Goods | +82% ROAS improvement |
| Home Services Lead Gen | Local Services | +60% CVR, -27% CPA |

---

## Technical Decisions

**No frameworks.** Zero React, Vue, or Angular. Vanilla JavaScript was a deliberate choice — faster load, no dependency rot, direct DOM control, and a lower barrier to long-term maintenance.

**Content-as-code.** All project data lives in a single structured JavaScript object (`script.js`). Updating a case study means editing a data object, not hunting through HTML. The structure is CMS-ready and TypeScript-convertible.

**CSS variable-driven design system.** One source of truth for colors, spacing, and animation curves. Theming changes propagate globally from `:root`.

**Modular JS.** `script.js`, `easter-egg.js` operate independently via a shared global namespace (`window.pixelAI`). Easter egg features load after critical content, never blocking render.

---

## What This Demonstrates (Beyond Marketing)

- **AI fluency:** Structured, productive human-AI collaboration at both strategic and technical layers
- **Systems thinking:** Architecture decisions made with long-term maintainability in mind
- **Product ownership:** Full lifecycle from content strategy → UX logic → code → deployment
- **Attention to UX:** Interactive easter egg, scroll animations, hover reveals — thoughtful without being gratuitous

---

## Deployment

Hosted via **GitHub Pages** — no build step, no CI/CD overhead. Upload files, enable Pages in repo settings, done.

For local preview: open `index.html` directly in any browser.

---

## Contact

**Ye Zheng**
Digital Marketing Strategist | MBA (Niagara) · MS Marketing Intelligence (Fordham)

- LinkedIn: [linkedin.com/in/echozhengmba](https://linkedin.com/in/echozhengmba)
- Email: zhengye07@outlook.com
- Phone: 647-640-5350
