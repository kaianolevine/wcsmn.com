# wcsmn.com

This repository contains the source for **wcsmn.com**, a static website built with **Eleventy (11ty)** and deployed via **Cloudflare Pages**.

The project is intentionally kept **simple, static-first, and low-maintenance**, while still leaving room to grow into forms, APIs, and richer interactivity when needed.

---

## 🌐 Live Site

The site is automatically deployed from the `main` branch and available at:

➡️ <a href="https://wcsmn-com.pages.dev/" target="_blank" rel="noopener noreferrer">https://wcsmn-com.pages.dev/</a>

This deployment is managed by **Cloudflare Pages** and updates on every successful build.

---


## 🚀 Tech Stack

- **Eleventy (11ty)** – static site generator
- **Eleventy Excellent** – starter base and conventions
- **Markdown-first content**
- **Cloudflare Pages** – hosting & deployment
- **GitHub Actions** – CI / build automation

> Deeper upstream starter details live in: `eleventy-excellent/README.md`

---

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

### Structure principles

- **Content lives in `src/`**
- **Build system is replaceable**
- **Upstream starter is preserved but isolated**
- **Minimal magic at the root**

---

## 🧭 Philosophy & Norms

### 1) Static first
If something can be:
- pre-rendered
- stored as JSON
- embedded at build time

…it should be.

### 2) Low managed overhead
- No always-on servers
- No databases unless unavoidable
- Prefer GitHub + Cloudflare primitives

### 3) Content > framework
- Markdown is the primary authoring format
- Layouts and styling support content, not the other way around

### 4) Escape hatches are allowed
When needed:
- Cloudflare Workers
- Third-party services (Brevo, Google Sheets, etc.)
- APIs added *alongside* static content

---

## 🛠 Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm start
```

### Production build

```bash
npm run build
```

---

## 🌍 Deployment

- Deploys automatically via **Cloudflare Pages**
- Builds are triggered from GitHub
- No manual deployment steps required

Cloudflare Pages handles:
- build output storage
- CDN distribution
- versioned deploys
- rollbacks

---

## 🎨 Styling & Layout

Styling is intentionally:
- centralized
- boring
- predictable

If you’re looking for **where to change the look**:
1. Start with global CSS in `src/assets/`
2. Then layouts in `src/layouts/`
3. Avoid page-specific tweaks unless you must

---

## 🧩 Forms, APIs, and Dynamic Features

This repo is prepared—but not committed—to:

- Contact forms (e.g. Brevo, Workers, third-party endpoints)
- JSON data rendering
- Client-side widgets
- Cloudflare Workers for light backend logic

The goal is **incremental enhancement**, not architectural lock-in.

---

## 📚 Additional Documentation

- Architecture & design decisions: `docs/ARCHITECTURE.md`
- When to add backend logic: `docs/WHEN_TO_ADD_BACKEND.md`

---

## 🧠 Guiding Question

Before adding anything new, ask:

> “Can this be static?”

If the answer is **yes** or **maybe**, start there.