# Fix “can’t reach this page” on GitHub Pages

Your portfolio code is fine. The site breaks when a **custom domain** is set in GitHub but that domain has no DNS.

## Step 1 — Remove custom domain (required)

1. Open: https://github.com/ILZ135127/IsabelZlatevWeb/settings/pages
2. Find **Custom domain**
3. Click **Remove** (or clear the box and save) until the field is **empty**
4. Do **not** type a new domain here unless DNS is fully set up at GoDaddy

## Step 2 — Use this URL only

**https://ilz135127.github.io/IsabelZlatevWeb/**

Copy/paste the whole link. Do not use `ilzportfolio.com`, `isabelzlatev.com`, or other names unless DNS is configured.

## Step 3 — Wait 2–5 minutes

After removing the custom domain, wait a few minutes, then hard-refresh (Ctrl+Shift+R).

## What keeps breaking it

Each time you save a name under **Custom domain**, GitHub adds a `CNAME` file and redirects visitors to that domain. If the domain does not exist, the browser shows “can’t reach this page.”

The deploy workflow automatically deletes `CNAME` from the repo, but **you must still remove the custom domain in Settings (Step 1).**
