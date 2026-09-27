# Moving the site to a custom domain

The site is at `https://kuriamyg.github.io/coderiserdigital`. Moving it to your own
domain (for example `moseskuria.dev` or `moseskuria.co.ke`) takes about 30 minutes of
your time plus DNS propagation (usually under an hour, up to 24 hours).

## 1. Buy the domain

- **.co.ke** — Kenyan and trusted locally. Buy from a KENIC-accredited registrar
  (for example Truehost, HostPinnacle or Safaricom's partners). Around KES 1,000–1,500
  a year; M-Pesa accepted.
- **.dev** — HTTPS-only by design, good for engineers. Buy from Cloudflare Registrar,
  Porkbun or Namecheap. Around USD 12–15 a year.

Turn on the registrar's two-factor sign-in and auto-renew the day you buy.

## 2. Point DNS at GitHub Pages

At your registrar's DNS settings, for the bare domain (`@`), add these four **A** records:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

and these four **AAAA** records (IPv6):

```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

For `www`, add a **CNAME** record pointing to `kuriamyg.github.io`.

## 3. Verify the domain with GitHub (prevents takeover)

GitHub → your profile **Settings → Pages → Add a domain**, enter the domain, and add
the TXT record GitHub shows you. Wait for "Verified".

## 4. Switch the site (one setting)

In `src/pages.config.mjs` set:

```js
export const site = {
  DOMAIN: 'moseskuria.dev', // your domain, no https://
  GOATCOUNTER: '...',
};
```

then `npm run build`. The build writes `CNAME` and updates every canonical URL,
the sitemap, robots.txt, the JSON-LD and the CV. Commit and open a PR (or ask
Claude to).

Also update the one hand-written address: `.well-known/security.txt` (`Canonical:`).

## 5. Turn on HTTPS

GitHub repo **Settings → Pages**: the custom domain shows "DNS check successful";
tick **Enforce HTTPS** once the certificate is issued (can take up to an hour).

## 6. Afterwards

- Visit the old `kuriamyg.github.io/coderiserdigital` address — GitHub redirects it.
- Update the link in your GitHub profile, LinkedIn and anywhere else it is listed.
- In GoatCounter, change the site's domain setting to the new one.
