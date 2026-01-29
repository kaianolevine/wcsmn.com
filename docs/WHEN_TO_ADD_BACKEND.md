# When to Add Backend Functionality

This document exists to prevent accidental overengineering and to keep wcsmn.com aligned with its **static-first philosophy**.

Use this as a practical guide when deciding *where* new logic should live.

---

## 🧠 Default Position

**Assume static until proven otherwise.**

If something *can* be done without a backend, it should be.

---

## ✅ Use Static Content When

Static content is the preferred solution.

Use it when:
- Content changes infrequently
- Data can be generated ahead of time
- Pages are informational or editorial
- Lists, schedules, bios, announcements, links

Typical implementation:
- Markdown pages
- Static JSON files
- Eleventy collections

---

## 🔁 Use GitHub Actions When

GitHub Actions are for **build-time or scheduled logic**.

Use them when:
- Generating JSON or data artifacts
- Pulling data from external APIs
- Running scheduled jobs
- Transforming or normalizing data

Examples:
- Precomputing collections
- Syncing playlists or external datasets
- Generating static feeds or manifests

Rules:
- Output must be static
- No request-time logic
- Fail fast and visibly

---

## 🌐 Use Cloudflare Workers When

Workers are for **lightweight request/response behavior**.

Use them when:
- Handling form submissions
- Validating input
- Proxying APIs
- Adding simple auth or rate limiting

Constraints:
- Stateless
- Fast execution
- No local persistence
- External storage only if unavoidable

Workers should be considered an *exception*, not a default.

---

## ☁️ Use External Services When

External services are appropriate when persistence or complex workflows are required.

Use them when:
- You need a database
- You need email delivery
- You need authentication
- You need dashboards or admin tooling

Examples:
- Brevo (email / forms)
- Google Sheets (lightweight data store)
- Supabase (auth + database)
- Airtable (admin-friendly data)

The site should integrate with these services — not reimplement them.

---

## 🚨 Anti-Patterns

Avoid:
- Using Workers as databases
- Long-running or stateful logic
- SPA-only rendering for content
- Rebuilding functionality that SaaS already provides

If a solution feels heavy, it probably is.

---

## 🧭 Guiding Question

Before adding backend logic, ask:

> “What is the *lightest* possible way to solve this?”

If the answer is **static**, start there.