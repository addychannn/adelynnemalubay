# JARVIS — Design Specification

## 1. Design System & Theme Tokens

### Color Palette (Tailwind Tokens)
- `bg-cream`: `#FAF9F5` (Main page background)
- `bg-card`: `#FFFFFF` (Card container background)
- `bg-dark`: `#1A2217` (Contact & Footer background)
- `accent-olive`: `#566542` (Primary dark green button & text accents)
- `accent-olive-hover`: `#445133`
- `accent-lime`: `#D2E874` (Primary light lime green action button)
- `accent-lime-hover`: `#C2DB62`
- `text-dark`: `#111827` (Primary body text)
- `text-muted`: `#6B7280` (Secondary muted body text)
- `border-light`: `#E5E7EB` (Subtle dividers & card borders)
- `badge-bg`: `#F3F4F6` (Tag pill background)

### Typography & Fonts
- **Display Headings**: `Syne` / `Plus Jakarta Sans` (Font weight 700 / 800)
- **Body & Subtitles**: `Inter` / `Plus Jakarta Sans` (Font weight 400 / 500 / 600)

### Spacing & Grid System
- Max container width: `max-w-7xl` (`1280px`) with `px-4 sm:px-6 lg:px-8`
- Section vertical spacing: `py-16 md:py-24`
- Grid layouts:
  - Hero: 2-column flex/grid (`lg:grid-cols-12`, 7 cols text, 5 cols image)
  - Experiences / Education: 2-column grid (`md:grid-cols-2`)
  - Projects: 3-column responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
  - Contact Section: 2-column split (`lg:grid-cols-12`, 7 cols form, 5 cols details)

## 2. Component Hierarchy

```
App Layout
└── Header (Navbar, Logo, Nav Links, Mobile Drawer)
└── Main
    ├── Hero Section (Greeting, Heavy Display Name, Subtitle Pill, CTAs, Hero Graphic)
    ├── RoleMarquee (Divider strip with role titles)
    ├── AboutSection (Flower photo frame, Bio text, Key principles, Action CTAs)
    ├── ExperienceEducationSection (2-column layout: Experience timeline & Education timeline + Character graphic)
    ├── TechStackSection (Categorized skills with star bullet icons)
    ├── ProjectsSection (Section header, 2x3 Project Cards Grid)
    │   └── ProjectCard (Thumbnail, Badges, Title, Description, Tags, View link)
    └── ContactSection (Dark green container, Interactive Contact Form, Details & Open For list)
└── Footer (Logo, Tagline, Social links, Nav menu, Capabilities list, Copyright)
```

## 3. Whitelabel Architecture Blueprint
- Presentation components import data and config exclusively from `src/config/*` and `src/data/*`.
- Presentational components take typed props or directly read centralized typed data modules.

## 4. Interactive & Dynamic Behavior
- Smooth scrolling for navigation anchor links (`#about`, `#projects`, `#contact`).
- Hover animations on project cards (subtle scale transform, shadow glow).
- Interactive form handling with state, validation, and success feedback toast/message.
- Responsive mobile menu drawer with smooth toggle animation.
