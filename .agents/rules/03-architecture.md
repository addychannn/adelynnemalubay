---
trigger: always_on
---

# JARVIS — Architecture Protocol

Read:

.vibe/artifacts/analysis.md
.vibe/artifacts/design.md

before beginning.

---

# Objective

Define the technical architecture before implementation.

---

# Architecture Requirements

Determine:

- Directory structure
- Component boundaries
- Configuration boundaries
- Data boundaries
- Utility boundaries
- Server/client boundaries
- Shared UI strategy
- Type strategy
- Asset strategy

---

# Recommended Structure

Use an architecture appropriate to the project.

For a typical Next.js application:

src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   └── sections/
├── config/
├── data/
├── lib/
├── types/
└── styles/

Do not blindly follow this structure if the project requires something different.

---

# Configuration

Application configuration should be centralized.

Examples:

src/config/app.ts
src/config/project.ts
src/config/contact.ts
src/config/social.ts
src/config/navigation.ts
src/config/seo.ts
src/config/theme.ts

---

# Data

Separate content from presentation.

Prefer:

src/data/

for collections such as:

- Projects
- Experience
- Skills
- Testimonials

---

# Client Boundaries

Use Client Components only when required for:

- State
- Event handlers
- Browser APIs
- Interactive behavior
- Client-only libraries

Prefer Server Components otherwise.

---

# Architecture Review

Before finalizing:

Check for:

- Circular dependencies
- God components
- Duplicate logic
- Configuration leakage
- Unnecessary abstractions
- Excessive client-side code
- Tight coupling

---

# Output

Create:

.vibe/artifacts/architecture.md

Include:

1. Directory structure
2. Component architecture
3. Configuration architecture
4. Data architecture
5. Server/client boundaries
6. Type strategy
7. Dependency strategy
8. Testing strategy
9. Architectural risks
10. Implementation order