# UAT Solutions — Content Editing Guide

A quick-reference cheat sheet for updating the website yourself without needing a developer.

---

## The Golden Rule

After any change:
```bash
git add .
git commit -m "Brief description of what you changed"
git push
```
GitHub will automatically rebuild and redeploy the site in ~2 minutes.

---

## Adding a News Article (Easiest Task)

1. Create a new file in `src/content/news/` named with dashes (no spaces):
   ```
   src/content/news/your-article-title.md
   ```

2. Paste this template at the top and fill it in:
   ```markdown
   ---
   title: "Your Article Title"
   description: "1–2 sentence summary shown on cards and in Google."
   pubDate: 2025-06-01
   category: "Market Insights"
   image: "https://images.unsplash.com/photo-XXXX?w=1200&auto=format&fit=crop"
   imageAlt: "Describe the image for accessibility"
   featured: false
   ---

   Your article content starts here. Standard Markdown works:

   ## A Subheading

   Normal paragraph text. **Bold text.** *Italic text.*

   - Bullet point one
   - Bullet point two
   ```

3. **Category options:** `"Market Insights"` · `"Company News"` · `"Shipping Guide"`  
4. Set `featured: true` on one article to highlight it prominently on the homepage
5. The article URL will be `/news/your-article-title` (the filename, no `.md`)

**Free images:** Search [unsplash.com](https://unsplash.com), click a photo, click "Share" → copy the URL, add `?w=1200&auto=format&fit=crop` to the end.

---

## Common Content Edits — Exact File & Location

| What you want to change | File | Search for |
|---|---|---|
| **Phone number** | `src/components/Header.astro` + `src/components/Footer.astro` | `1-647-704-9045` |
| **Email address** | Same two files | `contact@uat-solutions.com` |
| **Hero headline** ("Move More.") | `src/pages/index.astro` | `Move More.` |
| **Hero subheadline** | `src/pages/index.astro` | `connects shippers and carriers` |
| **Services descriptions** | `src/pages/services.astro` | The text inside `<p>` tags |
| **Testimonial — Marcus T.** | `src/pages/index.astro` | `Marcus T.` |
| **Testimonial — Jennifer R.** | `src/pages/index.astro` | `Jennifer R.` |
| **"About" section copy** | `src/pages/index.astro` | `Since day one` |
| **Features list** (3 bullet points) | `src/pages/index.astro` | `Dedicated Account Management` |
| **Contact form destination** | `src/pages/contact.astro` | `formsubmit.co/contact@uat-solutions.com` |
| **Footer tagline** | `src/components/Footer.astro` | `Connecting shippers and carriers` |
| **Nav links** | `src/components/Header.astro` | `const navLinks = [` |
| **Ticker text** | `src/components/Header.astro` | `North America's Trusted` |

---

## Changing Colors

All brand colors live in one place: `src/styles/global.css` — the `@theme { }` block at the top.

```css
@theme {
  --color-dark:         #1a1b2e;  /* Navy — main background/header */
  --color-accent:       #c0192b;  /* Crimson red — buttons, badges, highlights */
  --color-accent-hover: #9e1422;  /* Darker red for hover states */
  --color-cream:        #f4efe8;  /* Warm off-white background */
  --color-mid:          #7a736d;  /* Body text gray */
}
```

Change the hex values and save — every element that uses that color updates automatically.

---

## Swapping the Logo

1. Place your new logo file in `public/` (e.g. `public/logo-icon.svg`)
2. Open `src/components/Header.astro` and find the `<svg>` block inside the logo `<a>` tag
3. Replace the `<svg>` block with an `<img>` tag:
   ```html
   <img src="/logo-icon.svg" alt="UAT Solutions" class="h-10 w-auto" />
   ```
4. Do the same in `src/components/Footer.astro`

---

## Adding / Removing Pages

Each file in `src/pages/` = one URL:

| File | URL |
|---|---|
| `src/pages/index.astro` | `/` |
| `src/pages/services.astro` | `/services` |
| `src/pages/contact.astro` | `/contact` |
| `src/pages/news/index.astro` | `/news` |

To add a new page (e.g. `/about`):
1. Create `src/pages/about.astro`
2. Copy the top section from any existing page and change the title
3. Add it to the nav in `src/components/Header.astro` → `const navLinks`

---

## Updating SEO / Page Titles

Each page's `<Layout>` tag at the top controls its title and meta description:

```astro
<Layout
  title="Your Page Title | UAT Solutions"
  description="What Google shows in search results."
>
```

Just edit the text between the quotes.

---

## Testing Locally Before Publishing

```bash
npm run dev       # Start local server at http://localhost:4321
# Make your changes, preview in browser
# When happy:
npm run build     # Double-check it builds without errors
```

---

## Publishing Your Changes

```bash
git add .
git commit -m "What did I change?"
git push
```

That's it. GitHub Actions handles the rest. Check the **Actions** tab on GitHub to watch it deploy.

---

## Getting Help

- **Site code questions** — open an issue on the GitHub repository
- **Freight inquiries** — [contact@uat-solutions.com](mailto:contact@uat-solutions.com) · 1-647-704-9045
