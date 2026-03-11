# Portfolio Website Implementation Plan

This plan details the steps to build a modern, responsive, and tech-oriented portfolio website for Fathur Rizqi S Djafar.

## Objective
To develop a Full-Stack Web & Mobile Developer portfolio using Next.js (App Router), React, and Tailwind CSS. The design will feature a professional Dark Mode with Electric Blue (`#3b82f6`) as the primary color and Slate Gray accents.

## Proposed Changes

### 1. Project Initialization
- Scaffold a new Next.js project in `d:\portofolio` using `npx create-next-app`.
- Configure Tailwind CSS, TypeScript, ESLint, and Next.js App Router.
- Install dependencies: `lucide-react` (for icons) and `framer-motion` (for smooth scroll and micro-animations).

---

### 2. Global Styles & Theming
#### [MODIFY] `app/globals.css`
- Apply the dark mode color palette (background: very dark slate/black, surface: dark slate gray).
- Set default text colors and smooth scrolling (`scroll-behavior: smooth`).

#### [MODIFY] `tailwind.config.ts`
- Extend the color palette with `primary: '#3b82f6'` (Electric Blue) and custom `slate` shades.
- Configure custom animations if needed.

#### [MODIFY] `app/layout.tsx`
- Integrate `Inter` or `Montserrat` font using `next/font/google`.
- Set up the main HTML structure and global metadata.

---

### 3. Components Development
#### [NEW] `components/Navbar.tsx`
- Sticky top navigation with links to sections (Experience, Skills, Projects, Contact).
- Mobile-responsive hamburger menu.

#### [NEW] `components/Hero.tsx`
- Headline: "Crafting High-Performance Web & Mobile Solutions"
- Subtext: Software Engineer & Mobile Developer | Teknik Informatika at UIN Alauddin Makassar.
- CTA buttons to LinkedIn, GitHub, and "Contact Me".

#### [NEW] `components/Experience.tsx`
- Highlight roles: Co-Lead GDG on Campus UIN Alauddin Makassar, Study Club Inready Workgroup.

#### [NEW] `components/Skills.tsx`
- Grid/List of Core Skills categorized into Mobile, Web, and DevOps/Automation.

#### [NEW] `components/Projects.tsx`
- Project Gallery mapping:
  - Sistem Absensi Karyawan
  - Analisis Kinerja ZeroTier VPN
  - Dashboard Admin Specialist

#### [NEW] `components/Certifications.tsx`
- Grid/List for technical certifications and competition achievements.

#### [NEW] `components/Contact.tsx`
- Functional or UI-only contact form with social links.

#### [NEW] `components/Footer.tsx`
- Simple copyright and social links footer.

---

### 4. Page Assembly
#### [MODIFY] `app/page.tsx`
- Import and render all components sequentially to form the single-page portfolio layout.

## Verification Plan
### Automated Tests
- Run `npm run build` to ensure the Next.js application compiles successfully without type or lint errors.
- Run `npm run dev` and navigate to `http://localhost:3000` (using the agent's browser capability or verifying server startup) to ensure the development server runs.

### Manual Verification
- Review the generated UI components for adherence to the design specifications (Dark Mode, Electric Blue accent, responsiveness).
