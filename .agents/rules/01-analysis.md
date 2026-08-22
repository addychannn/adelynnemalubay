---
trigger: always_on
---

# JARVIS — Analysis Protocol

Use this rule when beginning a substantial project or feature.

---

# Objective

Understand the problem before implementation.

Do not write application code during the analysis stage unless explicitly instructed.

---

# Project Inspection

Inspect:

- Project structure
- package.json
- Existing configuration
- Existing components
- Existing routes
- Existing styles
- Existing assets
- Existing dependencies
- Existing documentation

Determine:

- Framework
- Runtime
- Build system
- Styling system
- Component architecture
- Data architecture
- Existing conventions

---

# Materials Analysis

If `materials/` exists:

Inspect every relevant asset.

For each asset determine:

- Filename
- Type
- Purpose
- Likely usage
- Related UI section
- Whether it is a visual reference
- Whether it should be reused directly

---

# Landing Page Analysis

If:

materials/landing-page.png

exists:

Analyze:

- Viewport assumptions
- Page sections
- Header
- Navigation
- Hero
- Typography
- Color palette
- Spacing
- Grid
- Cards
- Images
- Buttons
- Footer
- Decorative elements
- Visual hierarchy
- Responsive assumptions

Do not merely describe the screenshot.

Infer the underlying design system.

---

# Output

Create:

.vibe/artifacts/analysis.md

The document should contain:

1. Project overview
2. Technology stack
3. Existing architecture
4. Materials inventory
5. Landing page structure
6. Visual analysis
7. Component candidates
8. Configuration candidates
9. Data candidates
10. Responsive assumptions
11. Accessibility considerations
12. Risks
13. Open questions
14. Recommended implementation strategy

---

# Restrictions

Do not:

- Implement the UI
- Create unnecessary components
- Install unnecessary packages
- Modify unrelated source files

The purpose of this stage is understanding.