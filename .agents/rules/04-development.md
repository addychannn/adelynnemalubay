---
trigger: always_on
---

# JARVIS — Development Protocol

Read:

.vibe/artifacts/analysis.md
.vibe/artifacts/design.md
.vibe/artifacts/architecture.md

before implementation.

---

# Objective

Implement the application according to the approved analysis, design, and architecture.

---

# Before Coding

Inspect the current repository state.

Verify:

- Existing files
- Existing dependencies
- Existing configuration
- Existing components
- Existing scripts

Do not assume the repository is empty.

---

# Implementation Order

Prefer:

1. Project configuration
2. Types
3. Data/configuration
4. Shared UI
5. Layout
6. Page sections
7. Interactions
8. Responsive behavior
9. Accessibility
10. Metadata/SEO

Adjust when necessary.

---

# Code Quality

Follow:

- SOLID
- DRY
- KISS
- YAGNI
- strong typing
- separation of concerns

Avoid:

- duplicated logic
- giant components
- unnecessary abstractions
- hardcoded configuration
- unnecessary dependencies

---

# Whitelabel

Application-specific values must come from configuration/data.

Do not scatter:

- names
- email addresses
- social URLs
- project descriptions
- titles
- branding

through UI components.

---

# Visual Implementation

Use:

materials/landing-page.png

as the primary reference.

Use supporting assets from:

materials/

when appropriate.

Recreate the design rather than embedding the reference image.

---

# Validation During Development

After meaningful implementation milestones:

- Type check
- Lint
- Build
- Run the application when appropriate

Fix errors immediately.

Do not accumulate known failures.

---

# Output

Create or update:

.vibe/artifacts/development.md

Include:

- Implemented features
- Files created
- Files modified
- Dependencies added
- Validation performed
- Known limitations