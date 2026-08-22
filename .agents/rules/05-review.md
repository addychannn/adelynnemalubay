---
trigger: always_on
---

# JARVIS — Engineering Review Protocol

Read:

.vibe/artifacts/architecture.md
.vibe/artifacts/development.md

and inspect the actual implementation.

---

# Objective

Perform a senior-level engineering review.

Do not assume the implementation is correct simply because it builds.

---

# Review

Check:

## Architecture

- Is the architecture coherent?
- Are responsibilities separated?
- Are components appropriately scoped?
- Is there unnecessary complexity?

## Code Quality

- DRY
- SOLID
- KISS
- YAGNI
- TypeScript quality
- Naming
- Maintainability

## Next.js

- Server/client boundaries
- Rendering strategy
- Metadata
- Image optimization
- Unnecessary client JavaScript

## Whitelabel

Check for hardcoded:

- branding
- owner information
- contact details
- social links
- project data
- SEO values

## Accessibility

Check:

- semantic HTML
- headings
- alt text
- keyboard interaction
- focus states
- contrast

## Performance

Look for:

- unnecessary dependencies
- excessive client JavaScript
- unnecessary re-renders
- oversized assets
- inefficient rendering

---

# Output

Create:

.vibe/artifacts/review.md

Include:

- Findings
- Severity
- Evidence
- Recommended fix
- Applied fixes
- Remaining issues

Fix issues that can safely be fixed immediately.