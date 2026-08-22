# JARVIS — Technical Architecture Specification

## 1. Directory Structure

```
src/
├── app/
│   ├── layout.tsx             # Root layout with font imports, metadata, and body styles
│   ├── page.tsx               # Main landing page assembling sections
│   ├── globals.css            # Global CSS, Tailwind directives, font definitions
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Header.tsx         # Navbar header with brand logo & navigation links
│   │   └── Footer.tsx         # Footer with contact summary, nav links & copyright
│   ├── sections/
│   │   ├── HeroSection.tsx    # Hero section with avatar graphic & CTAs
│   │   ├── RoleMarquee.tsx    # Role banner divider
│   │   ├── AboutSection.tsx   # About me section with flower photo frame
│   │   ├── ExperienceEducationSection.tsx # Combined experience & education layout
│   │   ├── TechStackSection.tsx # Tech stack category breakdown
│   │   ├── ProjectsSection.tsx # Projects section grid
│   │   └── ContactSection.tsx  # Interactive contact form & details
│   ├── ui/
│   │   ├── Button.tsx         # Reusable button component (solid, outline, lime, olive)
│   │   ├── Badge.tsx          # Pill tag badge component
│   │   ├── ProjectCard.tsx    # Individual project card component
│   │   └── StarIcon.tsx       # Custom star bullet SVG component
├── config/
│   ├── app.ts                 # App branding, owner, metadata settings
│   ├── navigation.ts          # Nav links configuration
│   └── contact.ts             # Contact details, socials, and availability settings
├── data/
│   ├── profile.ts             # Bio text, bullet points, experience & education items
│   ├── skills.ts              # Tech stack items categorized
│   └── projects.ts            # Project items list with metadata, tags & links
├── types/
│   ├── config.ts              # Type definitions for app config
│   └── portfolio.ts           # Type definitions for projects, experience, skills, profile
└── lib/
    └── utils.ts               # Classname merger utilities (clsx, tailwind-merge)
```

## 2. Whitelabel Data Models

### `types/portfolio.ts`
- `ExperienceItem`: `id`, `company`, `role`, `period`, `type`, `location?`
- `EducationItem`: `id`, `institution`, `degree`, `details?`
- `SkillCategory`: `category`, `skills`: `string[]`
- `ProjectItem`: `id`, `title`, `description`, `year`, `category`, `tags`: `string[]`, `image`: `string`, `link?`: `string`, `featured`: `boolean`

### `types/config.ts`
- `AppConfig`: `name`, `owner`, `title`, `description`, `location`, `avatar`, `heroImage`
- `ContactConfig`: `email`, `github`, `linkedin`, `location`, `openFor`: `string[]`
- `NavItem`: `label`, `href`

## 3. Rendering Strategy & Client/Server Boundaries
- **Root Layout & Page (`app/layout.tsx`, `app/page.tsx`)**: Server Components for optimal SEO, fast initial load, and static HTML rendering.
- **Header (`components/layout/Header.tsx`)**: Client Component to handle mobile drawer menu toggle state.
- **Contact Form (`components/sections/ContactSection.tsx`)**: Client Component for interactive form input states, submission validation, and status messages.
- **All Presentational Sections**: Pure functional components driven by static typed config/data.

## 4. Asset Strategy
Assets from `materials/` will be placed into `public/materials/` or `public/images/`:
- `public/materials/logo.png`
- `public/materials/hero section main image.png`
- `public/materials/about me image.png`
- `public/materials/about me cat iamge.png`
- `public/materials/gradient.png`
- Project images (`Museum Landing Page 1.png`, `Desktop (Landing Page) 1.png`, `image 2.png`, `UBVN.png`, `image 3.png`, `BANKO CENTRAL.png`).

## 5. Development Strategy & Implementation Steps
1. Initialize Next.js project with TypeScript & Tailwind CSS in the root directory.
2. Copy `materials/` to `public/materials/` for Next.js image loading.
3. Setup configuration files (`src/config/*`), data files (`src/data/*`), and TypeScript types (`src/types/*`).
4. Build core presentational UI components (`Button`, `Badge`, `StarIcon`, `ProjectCard`).
5. Build main layout & sections (`Header`, `HeroSection`, `RoleMarquee`, `AboutSection`, `ExperienceEducationSection`, `TechStackSection`, `ProjectsSection`, `ContactSection`, `Footer`).
6. Assemble into `app/page.tsx`.
7. Verify build, linting, type-checking, responsive design, and visual QA against `landing-page.png`.
