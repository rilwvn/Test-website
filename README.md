# UAT Solutions — Website

The official website for **UAT Solutions Inc.**, built with [Astro 5](https://astro.build) and Tailwind CSS 4.

---

## Table of Contents

1. [Local Development](#local-development)
2. [Project Structure](#project-structure)
3. [Adding News Articles](#adding-news-articles)
4. [Deploying to GitHub Pages](#deploying-to-github-pages)
5. [Setting Up a Custom Domain](#setting-up-a-custom-domain)

---

## Local Development

**Prerequisites:** Node.js 18 or higher. Download it from [nodejs.org](https://nodejs.org) if you don't have it.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Then open your browser to **http://localhost:4321** — the site will hot-reload as you make changes.

To build the site for production:

```bash
npm run build       # Builds to ./dist/
npm run preview     # Preview the production build locally
```

---

## Project Structure

```
/
├── public/               Static files (favicon, CNAME for custom domain)
├── src/
│   ├── components/       Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── NewsCard.astro
│   ├── content/
│   │   ├── config.ts     Content collection schema
│   │   └── news/         News articles (Markdown files)
│   ├── layouts/
│   │   └── Layout.astro  Base HTML layout (wraps all pages)
│   ├── pages/            One file = one URL route
│   │   ├── index.astro          →  /
│   │   ├── services.astro       →  /services
│   │   ├── contact.astro        →  /contact
│   │   └── news/
│   │       ├── index.astro      →  /news
│   │       └── [...slug].astro  →  /news/article-slug
│   └── styles/
│       └── global.css    Global styles + Tailwind imports
├── astro.config.mjs      Astro configuration
└── package.json
```

---

## Adding News Articles

News articles are plain Markdown files in `src/content/news/`. To add a new one:

1. Create a file: `src/content/news/your-article-title.md`
2. Add the frontmatter (the data at the top between `---` lines):

```markdown
---
title: "Your Article Title"
description: "A short summary that appears in cards and meta tags (1-2 sentences)."
pubDate: 2025-04-01
category: "Market Insights"
image: "https://images.unsplash.com/photo-XXXX?w=1200&auto=format&fit=crop"
imageAlt: "Description of the image for accessibility"
featured: false
---

Your article content goes here. You can use **bold**, *italic*, headings, lists — standard Markdown.

## A Subheading

More content...
```

**Available `category` values:** `"Market Insights"`, `"Company News"`, `"Shipping Guide"` — or create your own.

Set `featured: true` on one article to make it appear prominently on the homepage.

The article URL will be `/news/your-article-title` (the filename without `.md`).

---

## Deploying to GitHub Pages

This is a step-by-step guide for someone new to GitHub and web deployment.

### Step 1 — Create a GitHub Account

If you don't have one, go to [github.com](https://github.com) and sign up. It's free.

### Step 2 — Create a New Repository on GitHub

1. Click the **+** icon in the top-right corner of GitHub
2. Select **New repository**
3. Name it (e.g., `uat-solutions-website`)
4. Set it to **Public** (required for free GitHub Pages)
5. Do **not** check "Initialize this repository" — leave it empty
6. Click **Create repository**

### Step 3 — Connect Your Local Code to GitHub

Open a terminal in this project folder and run:

```bash
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repo name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code to GitHub
git push -u origin main
```

If Git asks for a username and password, use your GitHub username and a **Personal Access Token** (not your password). To create one: GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic) — check `repo` scope.

### Step 4 — Enable GitHub Pages

1. On GitHub, go to your repository
2. Click **Settings** (top tab)
3. In the left sidebar, click **Pages**
4. Under "Source", select **GitHub Actions** from the dropdown
5. Click **Save**

### Step 5 — Trigger Your First Deployment

Push any change to the `main` branch to trigger the deployment:

```bash
git add .
git commit -m "Initial site deployment"
git push
```

Then go to your repository on GitHub → click the **Actions** tab → watch the "Deploy to GitHub Pages" workflow run. It usually takes 1-3 minutes.

When it finishes (green checkmark ✅), your site will be live at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

---

## Setting Up a Custom Domain

To use `uat-solutions.com` instead of the GitHub Pages URL:

### Step 1 — The CNAME File

The file `public/CNAME` already contains `uat-solutions.com`. This tells GitHub Pages to serve the site from your custom domain. **Don't delete it.**

### Step 2 — Update DNS at Your Domain Registrar

Log into wherever you bought `uat-solutions.com` (GoDaddy, Namecheap, Cloudflare, etc.) and add these DNS records:

**For the apex domain (`uat-solutions.com`):**

| Type | Host | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For `www` subdomain (optional but recommended):**

| Type | Host | Value |
|------|------|-------|
| CNAME | www | YOUR_USERNAME.github.io |

### Step 3 — Enable the Custom Domain in GitHub

1. Go to your repository → **Settings** → **Pages**
2. Under "Custom domain", type `uat-solutions.com`
3. Click **Save**
4. Check **Enforce HTTPS** (free SSL certificate — takes a few minutes to activate)

### Step 4 — Wait for DNS Propagation

DNS changes can take anywhere from a few minutes to 48 hours to propagate worldwide. You can check status at [whatsmydns.net](https://www.whatsmydns.net).

---

## Making Content Changes

| What you want to change | Where to edit |
|-------------------------|---------------|
| Site title, phone, email | `src/components/Header.astro` and `src/components/Footer.astro` |
| Homepage content | `src/pages/index.astro` |
| Services content | `src/pages/services.astro` |
| Contact form | `src/pages/contact.astro` |
| Add a news article | Create a new `.md` file in `src/content/news/` |
| Colors / fonts | `src/styles/global.css` — the `@theme { }` block at the top |
| Navigation links | `src/components/Header.astro` — the `navLinks` array |

After any change, commit and push to `main` — GitHub Actions will automatically rebuild and redeploy.

```bash
git add .
git commit -m "Describe what you changed"
git push
```

---

## Questions?

For questions about the website code, open an issue in the GitHub repository.
For freight inquiries, contact [contact@uat-solutions.com](mailto:contact@uat-solutions.com) or call **1-647-704-9045**.
