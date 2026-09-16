import { readFileSync, existsSync } from 'node:fs';

const PAGES = ['index.html', 'packages.html', 'process.html', 'ai.html', 'faq.html'];

let failed = false;

function check(label, fn) {
  try {
    fn();
    console.log(`ok   ${label}`);
  } catch (err) {
    failed = true;
    console.error(`FAIL ${label}: ${err.message}`);
  }
}

check('manifest.json is valid JSON', () => {
  JSON.parse(readFileSync('manifest.json', 'utf8'));
});

for (const page of PAGES) {
  check(`${page} JSON-LD block is valid JSON`, () => {
    const html = readFileSync(page, 'utf8');
    const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (!match) throw new Error('no application/ld+json script block found');
    JSON.parse(match[1]);
  });

  check(`local assets referenced from ${page} exist on disk`, () => {
    const html = readFileSync(page, 'utf8');
    const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
      .map((m) => m[1])
      .filter((url) => !/^(https?:)?\/\//.test(url) && !url.startsWith('#') && !url.startsWith('mailto:') && !url.startsWith('data:'));
    const missing = refs.filter((ref) => !existsSync(ref));
    if (missing.length) throw new Error(`missing local asset(s): ${missing.join(', ')}`);
  });
}

if (failed) {
  process.exit(1);
}
