---
trigger: always_on
---

# JARVIS — Design Protocol

Read:

.vibe/artifacts/analysis.md

before beginning.

---

# Objective

Convert analysis into an implementation-ready design specification.

Do not implement the application yet.

---

# Design System

Define or infer:

- Colors
- Typography
- Font sizes
- Font weights
- Spacing
- Border radius
- Shadows
- Container widths
- Breakpoints
- Component states

Prefer reusable tokens.

---

# Page Structure

Define:

- Sections
- Components
- Layout relationships
- Content hierarchy
- Responsive behavior

Example:

Page
├── Header
├── Hero
├── About
├── Skills
├── Projects
├── Contact
└── Footer

---

# Component Strategy

For each component determine:

- Responsibility
- Props
- Data source
- Configuration source
- Reusability
- Client/server requirements

Avoid giant components.

Avoid unnecessary fragmentation.

---

# Whitelabel Design

Identify information that belongs in:

src/config/

and content that belongs in:

src/data/

UI components must remain reusable.

---

# Output

Create:

.vibe/artifacts/design.md

Include:

1. Design system
2. Page structure
3. Component hierarchy
4. Data architecture
5. Configuration architecture
6. Responsive behavior
7. Accessibility strategy
8. Interaction behavior
9. Animation guidance
10. Implementation notes