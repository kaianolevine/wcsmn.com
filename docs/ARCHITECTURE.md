# Architecture & Design Decisions

This document explains **why** wcsmn.com is structured the way it is and how architectural decisions should be made going forward.

---

## 🧱 Core Architecture

wcsmn.com is intentionally built as a **static-first system**.

At its core:

- **Eleventy (11ty)** generates all site content
- **GitHub Actions** build and validate the site
- **Cloudflare Pages** hosts and serves the output

There are:
- no long-running servers
- no databases by default
- no persistent backend state

This keeps the site fast, cheap, and easy to maintain.

---

## 🧠 Decision Tree

When adding new functionality, follow this order *strictly*:

### 1️⃣ Can this be static?

Examples:
- pages
- content
- lists
- schedules
- precomputed data

✅ Yes → Implement in Eleventy
❌ No → Continue

---

### 2️⃣ Can this run at build time?

Examples:
- fetching external data
- generating JSON
- transforming content
- scheduled data updates

✅ Yes → GitHub Actions
❌ No → Continue

---

### 3️⃣ Is this lightweight request/response logic?

Examples:
- contact forms
- validation
- API proxying
- simple auth checks

✅ Yes → Cloudflare Worker
❌ No → Continue

---

### 4️⃣ Does this require persistence or heavy logic?

Examples:
- databases
- user accounts
- admin dashboards
- complex workflows

✅ Yes → External service

---

## 🧰 Tooling Rationale

### Eleventy

- Minimal abstraction
- Markdown-first
- Easy to reason about
- Easy to replace if needed

Eleventy is treated as a **content compiler**, not an application framework.

---

### GitHub Actions

- Deterministic builds
- Scheduled automation
- Clear audit trail

Actions are preferred for anything that does not need to run at request time.

---

### Cloudflare Pages

- Zero infrastructure management
- Built-in CDN
- Atomic, versioned deploys

The site is always deployed as immutable static output.

---

### Cloudflare Workers

Workers are allowed, but intentionally constrained:

- Stateless
- Fast
- No local persistence
- Used only when static/build-time is insufficient

---

## 🚫 Explicit Non-Goals

This site is **not** intended to be:

- a SPA
- a backend service
- a CMS-driven platform
- a stateful application

Those concerns should live elsewhere and integrate via APIs if needed.

---

## 🧩 Escape Hatches (Intentional)

The architecture explicitly allows:

- Cloudflare Workers
- Third-party APIs
- External form providers (e.g. Brevo)
- Static JSON ingestion

These should **layer on top of** static content, not replace it.

---

## 🧠 Long-Term Strategy

- Static content remains the foundation
- Dynamic features are optional layers
- Infrastructure can evolve without rewriting content
- Vendor lock-in is actively avoided

---

## 🧭 Guiding Question

Before adding anything new, ask:

> “Can this be static?”

If the answer is **yes** or **maybe**, start there.