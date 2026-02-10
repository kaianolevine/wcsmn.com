# wcsmn.com

This repository contains the source for **wcsmn.com**, a static-first
website built with:

-   Eleventy (11ty)
-   Eleventy Excellent starter
-   Cloudflare Pages

The design philosophy emphasizes:

-   Simplicity
-   Static-first architecture
-   Minimal maintenance overhead
-   Future scalability without premature complexity

------------------------------------------------------------------------

# 🌐 Live Site

Primary domain:

https://www.wcsmn.com

Cloudflare Pages deployment:

https://wcsmn-com.pages.dev/ (redirects to above)

Deployments occur automatically from the `main` branch.

Preview Deployments:

Cloudflare Pages automatically creates preview deployments for non-main branches. Any branch pushed to the repository will generate a preview site available at:

https://<branch_name>.wcsmn-com.pages.dev

This allows testing changes in isolation before merging into `main`.

------------------------------------------------------------------------

# 🧭 Architecture Overview

High-level flow:

Content (Markdown)\
→ Eleventy build process\
→ Static HTML/CSS/JS output\
→ Cloudflare Pages deployment\
→ CDN distribution

Core principle:

> Prefer build-time generation over runtime logic.

------------------------------------------------------------------------

# 🚀 Tech Stack

Core:

-   Eleventy (11ty)
-   Eleventy Excellent
-   Markdown-first content
-   Cloudflare Pages
-   GitHub (source control + CI)

Future-ready (not currently implemented):

-   Cloudflare Workers
-   Static JSON pipelines
-   Forms integrations (Brevo, APIs)
-   Client-side widgets

------------------------------------------------------------------------

## 📁 Project Structure

```text
wcsmn.com/
├── src/                    # Site source (pages, layouts, content)
│   ├── pages/              # Page-level content (mostly Markdown)
│   ├── layouts/            # Layout templates
│   ├── assets/             # CSS, JS, images
│   └── _data/              # Global data files (navigation, config)
│
├── docs/                   # Project decision docs (what goes where)
├── eleventy-excellent/     # Upstream starter (kept for reference)
├── .github/                # GitHub Actions & repo automation
├── package.json            # Build scripts & dependencies
└── README.md
```
------------------------------------------------------------------------

# 🧠 Design Philosophy

## Static First

If something can be:

-   pre-rendered
-   generated during build
-   stored as static JSON

...it should remain static.

Benefits:

-   performance
-   reliability
-   minimal infrastructure
-   reduced operational overhead

## Content \> Framework

-   Markdown drives content.
-   Layouts support structure.
-   Styling remains centralized and minimal.

## Progressive Enhancement

Add dynamic features only when justified.

Expansion path:

1.  Static JSON generation
2.  Client-side rendering
3.  Cloudflare Workers
4.  External backend services

------------------------------------------------------------------------

# 🛠 Local Development

Install dependencies:

```text
npm install
```

Run development server:

```text
npm start
```

Local preview:

http://localhost:8080

Production build:

```text
npm run build
```

------------------------------------------------------------------------

# 🌍 Deployment

Deployment is fully automated via Cloudflare Pages.

Workflow:

1.  Push to main
2.  Cloudflare triggers build
3.  Site deploys automatically

Cloudflare provides:

-   CDN distribution
-   preview builds
-   versioned deploys
-   rollback support

------------------------------------------------------------------------

# 🔁 Domain & Redirect Strategy

Canonical domain:

https://www.wcsmn.com

Supported domains (all redirect to canonical):

- mnwcs.com → https://www.wcsmn.com
- www.mnwcs.com → https://www.wcsmn.com
- wcsmn.com → https://www.wcsmn.com

Additional enforced redirects:

- HTTP → HTTPS

Redirect logic handled via Cloudflare rules to ensure a single canonical URL for SEO, caching consistency, and predictable routing.

------------------------------------------------------------------------

# 🎨 Styling Strategy

Goals:

-   predictable
-   centralized
-   maintainable

Primary locations:

1.  src/assets/ --- global styles
2.  src/layouts/ --- structure

Avoid page-specific styling unless required.

------------------------------------------------------------------------

# 🧩 Dynamic Features Status

Current state:

-   No custom widgets
-   No API calls
-   No runtime backend logic

All content is static.

------------------------------------------------------------------------

# 🔮 Future Expansion Guidelines

When adding features:

1.  Ask: "Can this be static?"
2.  Prefer build-time generation.
3.  Add Workers only when necessary.
4.  Avoid introducing databases prematurely.

------------------------------------------------------------------------

# 📚 Documentation

Additional documentation lives in:

docs/ARCHITECTURE.md docs/WHEN_TO_ADD_BACKEND.md

------------------------------------------------------------------------

# 🧱 Adding New Pages

Typical workflow:

1.  Create Markdown file in:

src/pages/

2.  Add frontmatter.
3.  Assign layout.
4.  Run local dev server to preview.

------------------------------------------------------------------------
