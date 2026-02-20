# CLAUDE.md — AI Collaboration Guide
## Marketing Portfolio: Ye Zheng

> **What this file is:** This is the architectural and strategic context document for this project. Any AI assistant (Claude Code, Claude.ai, or future tools) working on this codebase should read this file first. It ensures consistent decision-making across sessions, tools, and time.

---

## Project Identity

**Owner:** Ye Zheng — Digital Marketing Strategist
**Goal:** A recruiter-facing portfolio that communicates strategic marketing expertise and execution credibility within 60–90 seconds
**Audience:** HR managers, hiring directors, and marketing leads evaluating candidates for GTM, performance marketing, and project management roles
**Deployment:** GitHub Pages (static HTML — no build step, no backend)

---

## Core Positioning (Do Not Change Without Explicit Instruction)

The site positions Ye as:

> *"Strategic Marketer balancing Brand Equity with Performance ROI"*

Three core pillars that must be reflected in all content and structural decisions:
1. **Marketing Project Management** — stakeholder coordination, campaign orchestration, cross-functional execution
2. **Paid Ads Strategy** — Google Ads (Value-Based Bidding, Performance Max, Custom Label Architecture), ROAS optimization, CPA reduction
3. **Digital Marketing Execution** — cross-channel strategy, brand storytelling, data-driven iteration

**Do not** shift this positioning toward pure technical/engineering, pure design, or generic "digital marketing" without explicit instruction.

---

## Content Framework (Non-Negotiable Structure)

Every project case study must follow this exact sequence:

```
WHY       → The business problem or strategic gap
STRATEGY  → The approach and rationale
ACTION    → What was executed, how, and with what tools
RESULT    → Quantified outcomes (or qualitative if metrics unavailable)
INSIGHT   → Cross-industry or transferable learning
```

This structure was chosen because it mirrors how senior marketing leaders evaluate strategic capability. Deviation from this structure — even for brevity — weakens the portfolio's signal.

**Source of truth for project content:** The owner's resume and direct project notes. Do NOT invent metrics, infer responsibilities, or extrapolate results. If data is missing, summarize at a high level.

---

## Technical Architecture

### Stack
- **HTML5** — semantic structure, no frameworks
- **Vanilla JavaScript (ES6)** — zero dependencies by design
- **CSS3** — variable-driven design system (`:root` tokens)
- **GitHub Pages** — static deployment, no build pipeline

### File Responsibilities

| File | Purpose |
|---|---|
| `index.html` | Desktop entry point, full portfolio structure |
| `mobile.html` | Mobile-optimized experience (JS redirect from index) |
| `styles.css` | Complete CSS design system — all visual logic here |
| `script.js` | Project data object + modal rendering + core interactions |
| `easter-egg.js` | Pixel AI assistant — loads non-blocking, activates at 30s |
| `easter-egg.css` | Isolated styles for easter egg feature |

### Architectural Decisions (Rationale Locked In)

**No framework:** React/Vue would add bundle overhead and dependency risk. Vanilla JS gives direct DOM control and permanent maintainability.

**Content-as-code pattern:** All project data lives in a structured JS object in `script.js`. This is the single source of truth. Never hardcode case study content directly into HTML.

```javascript
// Project data structure — always maintain this shape
const projects = [
    {
        title: "",
        industry: "",
        category: "",      // "performance" | "brand" | "gtm"
        why: "",
        strategy: "",
        action: "",
        result: { metrics: [], context: "" },
        insight: { opening: "", body: "" }
    }
];
```

**CSS variable system:** All colors, spacing, and animation values are defined in `:root`. Never hardcode color hex values outside of this block.

```css
:root {
    --google-blue: #4285f4;
    --bg-primary: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
    --duration-base: 300ms;
    --ease-professional: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Modular JS via global namespace:** Easter egg and core functionality share state through `window.pixelAI` and `window.easterEggManager`. Never merge these modules — they must load and fail independently.

---

## Design System

**Aesthetic:** Professional dark theme. Google Material Design influence. Clean, minimal — not flashy.

**Primary color:** `#4285f4` (Google Blue)
**Background:** Dark gradient `#0f0f0f → #1a1a1a`
**Typography:** System UI stack — no web font dependencies
**Interaction:** Subtle hover reveals, scroll-triggered animations, no page reloads

**What to preserve:**
- White and blue accents only — no warm colors, no gradients beyond the established palette
- Smooth animation (cubic-bezier easing, not linear)
- Hover-revealed content (industry + key metric on project cards)
- Minimalist card design with image backgrounds

**What to avoid:**
- Colorful redesigns
- Adding new visual sections without content to fill them
- Any change that makes the page feel "designed by AI" (overuse of cards, shadows, gradients)

---

## Content Rules

1. **Use exact technical terminology** from marketing and advertising domains — do not simplify jargon for a general audience. The audience knows what ROAS, CPA, CVR, Value-Based Bidding, and Performance Max mean.

2. **Outcomes over tasks.** Every bullet point and paragraph should answer "what changed?" not "what was done."

3. **Confidentiality:** Client company names (except McDonald's) should not appear. Use industry descriptors: "B2B Data SaaS client," "eCommerce sporting goods brand," "Home Services regional operator."

4. **Metrics integrity:** Never round up or extrapolate metrics. If the source says "-25% CPA," write "-25% CPA." Do not interpret as "nearly 30%."

5. **Voice:** Professional, confident, direct. Not promotional. Not self-deprecating. Not buzzword-heavy.

---

## How to Work With This Project

### When adding a new project case study:
1. Add a new object to the `projects` array in `script.js`
2. Follow the exact data structure shape above
3. Add a corresponding background image (PNG, ~100-200KB)
4. Do NOT restructure the modal template — it renders from the data object

### When editing existing content:
1. Edit the data object in `script.js`, not the HTML
2. Verify the edit renders correctly in the modal view
3. Confirm mobile rendering is not broken

### When adjusting design:
1. Change CSS variables in `:root` first
2. Only add new CSS rules if variables cannot achieve the change
3. Test hover states and animations after any layout changes

### When uncertain:
Ask: *"Can a recruiter understand what Ye does, what she's good at, and how her projects create impact — within 60–90 seconds?"*
If no → simplify.
If yes → ship it.

---

## What NOT to Do

- Do not redesign the site without an explicit request
- Do not add features unrelated to portfolio function (no blogs, no dark mode toggle, no social feeds)
- Do not change the WHY/STRATEGY/ACTION/RESULT/INSIGHT framework
- Do not overwrite the owner's voice — refine and structure it
- Do not introduce npm, build tools, or any dependency that breaks static deployment
- Do not split content across multiple HTML pages without explicit instruction

---

## Development Workflow (How This Site Was Built)

This project uses a two-layer AI collaboration model:

**Strategic layer (Claude.ai):** Content strategy, case study framing, positioning decisions, UX logic, and cross-session reasoning were handled conversationally. The human sets direction; the AI pressure-tests it.

**Execution layer (Claude Code):** Implementation, debugging, and code iteration happen in the terminal. Claude Code reads this file to maintain architectural consistency across sessions.

The `CLAUDE.md` file is the handoff point between these two layers — it captures decisions made during strategic discussion so they don't need to be re-explained during technical execution.

---

## Project Status

**Current version:** v1.0 (February 2026) — complete and deployed
**Next planned additions:** Additional case studies as new projects are completed
**Structural stability:** High — do not refactor core architecture without a clear reason

---

*Maintained by: Ye Zheng*
*AI Collaboration: Claude (Anthropic) — claude.ai + Claude Code*
*Last updated: February 2026*
