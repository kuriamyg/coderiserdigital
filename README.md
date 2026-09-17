# Moses Mwangi Kuria — Software Engineer

Personal portfolio site. Live at [kuriamyg.github.io/coderiserdigital](https://kuriamyg.github.io/coderiserdigital).

## About

Full-stack software engineer based in Nairobi, Kenya. I build systems where money, trust,
or risk are involved — a Kenya-first budgeting app that parses M-Pesa transactions, a
church finance system with database-enforced audit trails, and a security-hardening
framework I run at the start of every serious project.

See the [Projects page](https://kuriamyg.github.io/coderiserdigital/projects.html) for
what I've actually built, and [Skills](https://kuriamyg.github.io/coderiserdigital/skills.html)
for the stack behind it.

## 🛠️ Technologies

This site itself is built with:
- **HTML5** - Semantic and accessible markup
- **CSS3** - Modern styling and responsive layouts
- **JavaScript** - Interactive features (WhatsApp link wiring, scroll reveal)

## 📄 Site structure

Five static pages, each with its own URL and its own title/description/OG tags for
sharing: **Home** (`index.html`), **Projects** (`projects.html`), **About**
(`about.html`), **Skills** (`skills.html`), and **Contact** (`contact.html`). A
persistent nav bar links directly to any page, and Next/Back links at the bottom of
each page step through them in order.

The published `.html` files at the repo root are generated — never hand-edit them.
Edit the source instead:

```
src/layout.html          the shared <head> + page shell
src/partials/nav.html    nav bar + page links (identical on every page)
src/partials/footer.html footer (identical on every page)
src/pages/*.html         each page's own content
src/pages.config.mjs     per-page title/description/OG tags, and page order
styles.css               shared styles
script.js                shared behaviour (WhatsApp link wiring, scroll reveal)
```

After editing, regenerate the published pages:

```
npm run build
```

CI runs this same build and fails if the committed `.html` files don't match its
output — so `npm run build` (and committing what it produces) is required before
pushing a content change, not optional.

## ✅ Development

```
npm install     # installs the build + lint tooling
npm run build   # regenerates the published pages from src/
npm run lint    # validates page markup, manifest.json and JSON-LD
```

CI runs `npm run verify-build` (rebuilds and fails if the committed pages don't match
the output) and `npm run lint` on every push and pull request.

## 📞 Get in Touch

Open to freelance projects, collaboration, and interesting engineering problems.

- **Email**: [kuriam177@gmail.com](mailto:kuriam177@gmail.com)
- **GitHub**: [github.com/kuriamyg](https://github.com/kuriamyg)
- Or see the [Contact page](https://kuriamyg.github.io/coderiserdigital/contact.html) for WhatsApp.
