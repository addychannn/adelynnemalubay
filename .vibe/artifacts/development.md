# JARVIS — Development Log

## Implemented Features & Architecture
- **Framework & Runtime**: Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.
- **Whitelabel Separation**:
  - `src/config/app.ts`: Global branding, owner identity, imagery paths, bio text.
  - `src/config/navigation.ts`: Header and footer menu links.
  - `src/config/contact.ts`: Social links, direct email, location, availability list.
  - `src/data/profile.ts`: Timeline entries for Experience and Education.
  - `src/data/skills.ts`: Categorized tech stack definitions.
  - `src/data/projects.ts`: Project portfolio items (Musée d'Orsay, BallerTube, Component Library, etc.).
- **UI Components & Layout**:
  - `Header`: Sticky navbar with frog logo & mobile drawer menu toggle.
  - `HeroSection`: Display heading ("ADDY"), selection-framed subtitle ("Creative Designer"), action buttons, hero illustration & background grid effect.
  - `RoleMarquee`: Role banner strip divider.
  - `AboutSection`: Flower profile frame (`about me image.png`), bio text, key principles, "AFK" note, and action CTAs.
  - `ExperienceEducationSection`: 2-Column timeline layout + sleeping frog character illustration (`about me cat iamge.png`).
  - `TechStackSection`: Categorized tech stack list with custom star bullet icons.
  - `ProjectsSection`: 2x3 responsive project card grid with badges, descriptions, tech stack tags, and hover effects.
  - `ContactSection`: Dark forest olive green section with interactive form, direct contact links, and "OPEN FOR" availability list.
  - `Footer`: Dark footer with logo, tagline, social icons, navigation columns, and copyright.

## Verification Performed
- `npx tsc --noEmit`: 100% strict TypeScript type checking passed without errors.
- `npm run build`: Production compilation succeeded with static HTML route optimization.
