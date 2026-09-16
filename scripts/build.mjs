import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { pages } from '../src/pages.config.mjs';

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

for (let i = 0; i < pages.length; i++) {
  const page = pages[i];
  const content = readFileSync(path.join(srcDir, 'pages', page.source), 'utf8');
  const pager = renderPager(i);

  const html = layout
    .replaceAll('{{TITLE}}', escapeHtml(page.title))
    .replaceAll('{{DESCRIPTION}}', escapeHtml(page.description))
    .replaceAll('{{CANONICAL}}', page.canonical)
    .replaceAll('{{OG_TITLE}}', escapeHtml(page.ogTitle))
    .replaceAll('{{OG_DESCRIPTION}}', escapeHtml(page.ogDescription))
    .replaceAll('{{PAGE_ID}}', page.id)
    .replace('{{NAV}}', nav)
    .replace('{{CONTENT}}', content)
    .replace('{{PAGER}}', pager)
    .replace('{{FOOTER}}', footer);

  writeFileSync(path.join(root, page.file), html);
  console.log(`built ${page.file}`);
}
