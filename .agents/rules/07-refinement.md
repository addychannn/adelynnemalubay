---
trigger: always_on
---

# JARVIS — Refinement Protocol

Read:

.vibe/artifacts/review.md
.vibe/artifacts/visual-qa.md

before beginning.

---

# Objective

Improve the implementation based on engineering and visual QA findings.

---

# Rules

Fix high-impact problems first.

Do not:

- rewrite working systems unnecessarily
- introduce unrelated features
- add dependencies without justification
- create abstractions merely for the sake of abstraction

---

# Refinement Loop

IDENTIFY
↓
PRIORITIZE
↓
FIX
↓
VALIDATE
↓
COMPARE
↓
REPEAT

---

# Validation

After refinement:

- Run type check
- Run lint
- Run build
- Run relevant tests
- Perform visual inspection

---

# Regression Safety

Ensure that fixes do not break:

- existing functionality
- responsive behavior
- accessibility
- configuration
- unrelated components

---

# Output

Update:

.vibe/artifacts/visual-qa.md

and:

.vibe/artifacts/review.md

when applicable.

Create:

.vibe/artifacts/final.md

when the application is ready.