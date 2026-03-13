#!/usr/bin/env node
/**
 * fetch-contentful.js
 * Fetches published Insight Articles from Contentful and generates HTML files
 * into the /insights/ directory.
 *
 * Required env vars (set as GitHub Secrets):
 *   CONTENTFUL_SPACE_ID
 *   CONTENTFUL_ACCESS_TOKEN
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!SPACE_ID || !ACCESS_TOKEN) {
  console.error('Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN');
  process.exit(1);
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

function richTextToHtml(node) {
  if (!node) return '';
  if (node.nodeType === 'text') {
    let text = node.value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    if (node.marks) {
      node.marks.forEach(mark => {
        if (mark.type === 'bold') text = `<strong>${text}</strong>`;
        if (mark.type === 'italic') text = `<em>${text}</em>`;
        if (mark.type === 'code') text = `<code>${text}</code>`;
      });
    }
    return text;
  }
  const children = (node.content || []).map(richTextToHtml).join('');
  switch (node.nodeType) {
    case 'document': return children;
    case 'paragraph': return children.trim() ? `<p>${children}</p>\n` : '';
    case 'heading-1': return `<h2>${children}</h2>\n`;
    case 'heading-2': return `<h2>${children}</h2>\n`;
    case 'heading-3': return `<h3>${children}</h3>\n`;
    case 'heading-4': return `<h4>${children}</h4>\n`;
    case 'unordered-list': return `<ul>\n${children}</ul>\n`;
    case 'ordered-list': return `<ol>\n${children}</ol>\n`;
    case 'list-item': return `<li>${children}</li>\n`;
    case 'blockquote': return `<blockquote>${children}</blockquote>\n`;
    case 'hr': return `<hr>\n`;
    case 'hyperlink':
      const uri = node.data?.uri || '#';
      return `<a href="${uri}" target="_blank" rel="noopener">${children}</a>`;
    default: return children;
  }
}

function formatDateLong(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function formatDateShort(isoString) {
  if (!isoString) return '';
  const d = new Date(isoString);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

function slugToIssueNumber(slug) {
  const match = slug.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function issueLabel(issueNum, tags) {
  const first = (tags || [])[0] || '';
  const second = (tags || [])[1] || '';
  const parts = [`Issue ${String(issueNum).padStart(3, '0')}`];
  if (first) parts.push(first);
  if (second) parts.push(second);
  return parts.join(' · ');
}

// ─── HTML Article Template ───────────────────────────────────────────────────

function generateArticleHtml(article) {
  const { title, slug, publishDate, category, summary, body, metaDescription, tags } = article;
  const bodyHtml = richTextToHtml(body);
  const dateShort = formatDateShort(publishDate);
  const dateLong = formatDateLong(publishDate);
  const dateIso = publishDate ? publishDate.split('T')[0] : '';
  const issueNum = slugToIssueNumber(slug);
  const tagsArray = Array.isArray(tags) ? tags : [];
  const tagsString = tagsArray.join(' · ');
  const metaDesc = metaDescription || summary || '';
  const issueLabelStr = issueLabel(issueNum, tagsArray);

  // Prev/next nav — index link only (no prev/next since we don't know order at build time)
  const navHtml = `<a href="../insights/" class="nav-index">All Insights →</a>`;

  const frontmatter = `<!--FRONTMATTER
issue: "${issueNum}"
title: "${title.replace(/"/g, '\\"')}"
summary: "${(summary || '').replace(/"/g, '\\"')}"
date: "${dateShort}"
category: "${category || ''}"
tags: [${tagsArray.map(t => `"${t}"`).join(', ')}]
FRONTMATTER-->`;

  return `${frontmatter}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title} | Ye Zheng Marketing</title>
  <meta name="description" content="${metaDesc.replace(/"/g, '&quot;')}" />
  <link rel="canonical" href="https://yezhengmarketing.com/insights/${slug}.html" />
  <link rel="stylesheet" href="insights-styles.css" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${title.replace(/"/g, '\\"')}",
    "description": "${metaDesc.replace(/"/g, '\\"')}",
    "author": {
      "@type": "Person",
      "name": "Ye Zheng",
      "jobTitle": "Digital Marketing Strategist",
      "url": "https://yezhengmarketing.com"
    },
    "datePublished": "${dateIso}",
    "publisher": {
      "@type": "Person",
      "name": "Ye Zheng"
    },
    "keywords": [${tagsArray.map(t => `"${t}"`).join(', ')}],
    "articleSection": "Marketing Intelligence"
  }
  <\/script>
</head>

<body>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <a href="https://yezhengmarketing.com">Home</a>
    <span aria-hidden="true"> › </span>
    <a href="https://yezhengmarketing.com/insights/">Insights</a>
    <span aria-hidden="true"> › </span>
    <span>Issue ${String(issueNum).padStart(3, '0')}</span>
  </nav>

  <main>
    <article itemscope itemtype="https://schema.org/Article">

      <header class="article-header">
        <div class="issue-label">${issueLabelStr}</div>
        <h1 itemprop="headline">${title}</h1>

        <div class="direct-answer" role="note" aria-label="Summary">
          <p>${summary || ''}</p>
        </div>

        <div class="article-meta">
          <span itemprop="author" itemscope itemtype="https://schema.org/Person">
            By <span itemprop="name">Ye Zheng</span>
          </span>
          <time itemprop="datePublished" datetime="${dateIso}">${dateShort}</time>
          <span class="tags">${tagsString}</span>
        </div>
      </header>

      <section class="body-signal">
        ${bodyHtml}
      </section>

      <section class="author-bio">
        <h2>About the Author</h2>
        <p>
          <strong>Ye Zheng</strong> is a Digital Marketing Strategist at Teleperformance managing 120+ client accounts quarterly across B2B industrial, CPG/FMCG, eCommerce, and AI/SaaS sectors. She holds an MBA from Niagara University and an MS in Marketing Intelligence from Fordham University.
          <a href="https://www.linkedin.com/in/yezhengmarketing" rel="noopener noreferrer" target="_blank">Connect on LinkedIn →</a>
        </p>
      </section>

      <nav class="article-nav" aria-label="Article navigation">
        ${navHtml}
      </nav>

    </article>
  </main>

</body>
</html>`;
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/entries?content_type=insightArticle&order=-fields.publishDate&limit=100`;

  console.log('Fetching articles from Contentful...');
  const data = await fetchJSON(url);

  if (!data.items || data.items.length === 0) {
    console.log('No published articles found in Contentful.');
    return;
  }

  console.log(`Found ${data.items.length} article(s).`);

  const insightsDir = path.join(process.cwd(), 'insights');
  if (!fs.existsSync(insightsDir)) fs.mkdirSync(insightsDir, { recursive: true });

  for (const item of data.items) {
    const fields = item.fields;
    const slug = fields.slug;
    if (!slug) {
      console.warn(`Skipping article with no slug: ${fields.title}`);
      continue;
    }

    const html = generateArticleHtml(fields);
    const outputPath = path.join(insightsDir, `${slug}.html`);
    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`  ✓ Written: insights/${slug}.html`);
  }

  console.log('Done. GitHub Actions will now rebuild the index.');
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
