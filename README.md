# Coderiser Digital

A modern web development studio portfolio and promotional website.

## About

Coderiser Digital is a web development studio dedicated to creating exceptional digital experiences. We specialize in building responsive, user-friendly websites and web applications that help businesses establish a strong online presence.

## 🎯 Our Services

- **Web Design** - Beautiful, responsive website designs tailored to your brand
- **Web Development** - Full-stack development using modern technologies and best practices
- **UI/UX Design** - User-centered design that enhances engagement and conversion
- **Front-End Development** - Interactive and dynamic user interfaces
- **Back-End Development** - Robust server-side solutions and databases
- **Website Optimization** - Performance enhancement and SEO optimization

## 🚀 What We Offer

At Coderiser Digital, we transform your ideas into reality through:

- **Custom Solutions** - Every project is unique and deserves a tailored approach
- **Modern Technologies** - We use cutting-edge tools and frameworks
- **Responsive Design** - All websites are mobile-first and work seamlessly across devices
- **Quality Assurance** - Thorough testing ensures reliability and performance
- **Client Support** - Ongoing maintenance and support after launch

## 💼 Portfolio Highlights

This website showcases our work, expertise, and commitment to excellence in web development. Explore our projects to see how we've helped clients achieve their digital goals.

## 🛠️ Technologies

This website is built with:
- **HTML5** - Semantic and accessible markup
- **CSS3** - Modern styling and responsive layouts
- **JavaScript** - Interactive features and enhanced user experience

## 📄 Site structure

The site is five static pages, each with its own URL and its own title/description/OG
tags for sharing: **Home** (`index.html`), **Packages** (`packages.html`), **Process**
(`process.html`), **AI Add-ons** (`ai.html`), and **FAQ** (`faq.html`). A persistent
nav bar links directly to any page, and Next/Back links at the bottom of each page
step through them in order.

The published `.html` files at the repo root are generated — never hand-edit them.
Edit the source instead:

```
src/layout.html          the shared <head> + page shell
src/partials/nav.html    nav bar + page links (identical on every page)
src/partials/footer.html footer (identical on every page)
src/pages/*.html         each page's own content
src/pages.config.mjs     per-page title/description/OG tags, and page order
styles.css               shared styles
script.js                shared behaviour (WhatsApp links, FAQ accordion, etc.)
```

After editing, regenerate the published pages:

```
npm run build
```

CI runs this same build and fails if the committed `.html` files don't match its
output — so `npm run build` (and committing what it produces) is required before
pushing a content change, not optional.

## 📞 Get in Touch

Interested in working with Coderiser Digital? We'd love to hear about your project!

- **Website**: [Visit our site](https://kuriamyg.github.io/coderiserdigital)
- **Email**: [kuriam177@gmail.com](mailto:kuriam177@gmail.com)

## 📋 Project Goals

- Deliver high-quality web solutions
- Create memorable user experiences
- Build long-term partnerships with clients
- Stay current with web development trends
- Provide exceptional customer service

## ✅ Development

```
npm install     # installs the build + lint tooling
npm run build   # regenerates the published pages from src/
npm run lint    # validates page markup, manifest.json and JSON-LD
```

CI runs `npm run verify-build` (rebuilds and fails if the committed pages don't match
the output) and `npm run lint` on every push and pull request.

## 🤝 Contributing

If you're interested in collaborating or have feedback about our work, please reach out to us directly.

## 📝 License

All content and code on this website is the intellectual property of Coderiser Digital.

---

**Coderiser Digital** - Transforming ideas into digital excellence. 🚀
