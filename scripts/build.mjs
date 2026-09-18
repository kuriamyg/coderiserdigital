import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { pages } from '../src/pages.config.mjs';
import { socialLinks } from '../src/social-links.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'src');

const layout = readFileSync(path.join(srcDir, 'layout.html'), 'utf8');
const nav = readFileSync(path.join(srcDir, 'partials/nav.html'), 'utf8');
const footer = readFileSync(path.join(srcDir, 'partials/footer.html'), 'utf8');

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function socialLinkAttrs(s) {
  return s.external ? ' target="_blank" rel="noopener noreferrer"' : '';
}

function socialIconsHtml(indent) {
  return socialLinks
    .map((s) => `<a href="${s.href}" class="social-link social-${s.id}" aria-label="${s.ariaLabel}"${socialLinkAttrs(s)}><i class="ti ${s.icon}"></i></a>`)
    .join(`\n${indent}`);
}

// Full-bleed scrolling bar — used in the sticky nav header.
function renderSocialRowNav() {
  return `<div class="social-row">
  <div class="container">
    <div class="social-row-inner">
      ${socialIconsHtml('      ')}
    </div>
  </div>
</div>`;
}

// Centered, wraps on mobile — used inline within page content (e.g. Contact).
function renderSocialRowInline() {
  return `<div class="social-row-inline">
      ${socialIconsHtml('      ')}
    </div>`;
}

function renderSocialRowFooter() {
  const items = socialLinks
    .map((s) => `<a href="${s.href}" class="social-link social-link-labeled social-${s.id}" aria-label="${s.ariaLabel}"${socialLinkAttrs(s)}><i class="ti ${s.icon}"></i><span>${s.label}</span></a>`)
    .join('\n    ');
  return `<div class="social-row-footer">
    ${items}
  </div>`;
}

function renderPager(index) {
  const prev = pages[index - 1];
  const next = pages[index + 1];
  if (!prev && !next) return '';

  const prevHtml = prev
    ? `<a href="${prev.file}" class="pager-btn pager-prev">
        <i class="ti ti-arrow-left"></i>
        <span><small>Back</small>${prev.navLabel}</span>
      </a>`
    : '<div class="pager-empty"></div>';

  const nextHtml = next
    ? `<a href="${next.file}" class="pager-btn pager-next">
        <span><small>Next</small>${next.navLabel}</span>
        <i class="ti ti-arrow-right"></i>
      </a>`
    : '';

  const parts = [prevHtml, nextHtml].filter(Boolean).join('\n    ');
  return `<div class="pager">
  <div class="container pager-inner">
    ${parts}
  </div>
</div>`;
}

const socialRowNav = renderSocialRowNav();
const socialRowInline = renderSocialRowInline();
const socialRowFooter = renderSocialRowFooter();
const navWithSocial = nav.replaceAll('{{SOCIAL_ROW_NAV}}', socialRowNav);
const footerWithSocial = footer.replaceAll('{{SOCIAL_ROW_FOOTER}}', socialRowFooter);

for (let i = 0; i < pages.length; i++) {
  const page = pages[i];
  const content = readFileSync(path.join(srcDir, 'pages', page.source), 'utf8')
    .replaceAll('{{SOCIAL_ROW_INLINE}}', socialRowInline);
  const pager = renderPager(i);

  const html = layout
    .replaceAll('{{TITLE}}', escapeHtml(page.title))
    .replaceAll('{{DESCRIPTION}}', escapeHtml(page.description))
    .replaceAll('{{CANONICAL}}', page.canonical)
    .replaceAll('{{OG_TITLE}}', escapeHtml(page.ogTitle))
    .replaceAll('{{OG_DESCRIPTION}}', escapeHtml(page.ogDescription))
    .replaceAll('{{OG_IMAGE}}', page.ogImage)
    .replaceAll('{{PAGE_ID}}', page.id)
    .replace('{{NAV}}', navWithSocial)
    .replace('{{CONTENT}}', content)
    .replace('{{PAGER}}', pager)
    .replace('{{FOOTER}}', footerWithSocial);

  writeFileSync(path.join(root, page.file), html);
  console.log(`built ${page.file}`);
}
