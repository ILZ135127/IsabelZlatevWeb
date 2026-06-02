# Isabel Zlatev — Portfolio

Static portfolio site (HTML, CSS, JS).

## Live site

- **Custom domain:** https://isabelzlatev.com (after GoDaddy DNS is configured)
- **GitHub Pages:** https://ilz135127.github.io/IsabelZlatevWeb/

### GoDaddy DNS for isabelzlatev.com

In GoDaddy → **DNS** → add these records:

| Type | Name | Value |
|------|------|--------|
| A | @ | `185.199.108.153` |
| A | @ | `185.199.109.153` |
| A | @ | `185.199.110.153` |
| A | @ | `185.199.111.153` |

Optional — also serve `www`:

| Type | Name | Value |
|------|------|--------|
| CNAME | www | `ilz135127.github.io` |

Then in GitHub: **Settings → Pages → Custom domain** → enter `isabelzlatev.com` → save → enable **Enforce HTTPS** when available.

## Deploy with GitHub Pages

1. Push this repo to `main` on GitHub.
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Set **Source** to **GitHub Actions** (not “Deploy from branch” unless you prefer that).
4. Push or merge the workflow in `.github/workflows/pages.yml`.
5. Open **Actions** and wait for “Deploy site to GitHub Pages” to finish (green check).
6. Visit the URL above. First deploy can take 1–2 minutes.

If you see “page can’t be reached,” Pages is usually not enabled yet or the workflow has not completed.
