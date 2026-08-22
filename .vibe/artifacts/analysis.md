# JARVIS — Project Analysis

## 1. Project Overview
The objective of this project is to build a production-quality, whitelabel-ready personal portfolio website for **Addy**, a Creative UI/UX Designer, Front-End Developer, and 2D Artist based in Baguio City, Philippines. The implementation will recreate the design presented in `materials/landing-page.png` with visual precision, strong typing, clean architecture, and whitelabel configuration separation.

## 2. Technology Stack
- **Framework**: Next.js (App Router, Server Components by default)
- **Language**: TypeScript (Strict typing, clear interfaces for data and config)
- **Styling**: Tailwind CSS (Consistent color palette, custom utility tokens, responsive grid/flex systems)
- **Icons**: Lucide React / SVG inline icons matching design specifications
- **Fonts**: Inter / Plus Jakarta Sans / Syne via `next/font/google` for display and body typography
- **Optimization**: `next/image` for image optimization and responsive assets

## 3. Materials Inventory
- `materials/landing-page.png`: Primary visual reference (full page mockup).
- `materials/logo.png`: Brand logo icon (cute frog head illustration).
- `materials/hero section main image.png`: Main hero illustration (standing frog character with hood).
- `materials/about me image.png`: Profile photo of Addy within a flower outline/cutout.
- `materials/about me cat iamge.png`: Decorative character asset (sleeping frog/cat character).
- `materials/gradient.png`: Gradient accent asset for card styling.
- `materials/Museum Landing Page 1.png`: Project thumbnail for *Musée d'Orsay*.
- `materials/Desktop (Landing Page) 1.png`: Project thumbnail for *BallerTube*.
- `materials/image 2.png`: Project thumbnail for *Component Library*.
- `materials/UBVN.png`: Project thumbnail for *University Of Baguio: The Visual Novel*.
- `materials/image 3.png`: Project thumbnail for *RE:Bank*.
- `materials/BANKO CENTRAL.png`: Project thumbnail for *Baguio City: Barangay Accounting System*.

## 4. Visual Analysis & Design System Principles

### Color Palette
- **Primary Background**: Light Cream / Warm Gray (`#F7F7F2` or `#FAF9F5`)
- **Hero & Card Background**: Crisp White (`#FFFFFF`) with subtle border lines (`#E5E7EB` / `#E2E8F0`)
- **Dark Section Background (Contact/Footer)**: Deep Forest Olive (`#1D2418` / `#1B2217`)
- **Accent Primary Green**: Sage Green / Olive Accent (`#5C6B46` / `#4A5835`)
- **Accent Light Green**: Soft Mint / Lime Pill Accent (`#D8ED86` / `#C7E860` for CTA and pill tags)
- **Text Primary**: Charcoal Black (`#111827` / `#1A1D1A`)
- **Text Muted**: Warm Slate (`#6B7280` / `#586350`)
- **Selection / Focus Outlines**: Soft Cyan/Blue selection box (`#3B82F6`) around "Creative Designer" badge in hero.

### Typography
- **Display Headings**: Bold, heavy weight sans-serif display font (`Syne` or `Plus Jakarta Sans` ExtraBold 800) for "ADDY", "Hello!", "Projects", "Get In Touch".
- **Body & Subtitles**: Clean, high-legibility sans-serif (`Inter` or `Plus Jakarta Sans` Medium/Regular 400-600).

### Layout & Sections Architecture
1. **Header / Navbar**: Brand logo + navigation links (`Home`, `About`, `Projects`, `Get In Touch`).
2. **Hero Section**:
   - Left: Greeting ("I'm"), Display Name ("ADDY"), Subtitle pill tag ("Creative Designer" with subtle boundary frame), CTAs ("View My Works", "Get in Touch").
   - Right: Hero illustration (`hero section main image.png`) with background radial grid pattern & soft glow (`gradient.png`).
3. **Role Marquee / Banner**: Divider lines, showcasing roles: `UI/UX Designer` | `Creative Designer` | `Front-End Developer` | `2D Artist`.
4. **About Me Section**:
   - Left: Photo cut out in a stylized 4-petal flower frame (`about me image.png`).
   - Right: "Hello!" section, professional bio, key principles ("Design with Intent", "Build with Precision"), personal background ("When I'm AFK"), "Download CV" & "Get in Touch" buttons.
5. **Experiences & Education Section**:
   - 2-Column layout. Left column: Experiences with star bullet points & timeline details. Right column: Education timeline + sleeping frog character illustration (`about me cat iamge.png`).
6. **Tech Stack Section**:
   - Categorized skills: `Design`, `Framework & Libraries`, `Core Web`, `Styling`, `Tools & DevOps`.
7. **Projects Section ("SELECTED WORKS")**:
   - 6 Project cards in a 2x3 responsive grid.
   - Each card contains thumbnail, category badge, year badge, title, detailed description, technology stack pills, and an interactive "View Project →" link.
8. **Contact Section ("LET'S WORK TOGETHER")**:
   - Dark theme container. Left side: Form (Name, Email, Subject, Message, "Send Message" CTA). Right side: Direct contact details (Email, GitHub, LinkedIn, Location) + "OPEN FOR" opportunities list.
9. **Footer**:
   - Dark theme, logo, brief tagline, social media icon links, section navigation column, "What I Do" column, and copyright info.

## 5. Whitelabel Configuration Strategy
To ensure 100% separation of content and presentation:
- `src/config/app.ts`: App name, owner, default metadata, SEO settings.
- `src/config/navigation.ts`: Header and footer navigation link paths.
- `src/config/contact.ts`: Email, location, social media links, "Open For" list.
- `src/data/profile.ts`: Bio, tagline, experience entries, education entries, AFK hobbies.
- `src/data/skills.ts`: Tech stack categories and items.
- `src/data/projects.ts`: Project portfolio items (title, year, category, tags, description, image, link).

## 6. Accessibility & Responsive Requirements
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, proper heading cascade (`h1` -> `h2` -> `h3`).
- **Color Contrast**: Compliant text-to-background contrast across light and dark sections.
- **Keyboard Navigation**: Focus rings, skip links, interactive buttons, accessible form inputs.
- **Responsive Layout**: Mobile-first fluid grids, collapsible mobile menu for small screens, adaptable image containers.
