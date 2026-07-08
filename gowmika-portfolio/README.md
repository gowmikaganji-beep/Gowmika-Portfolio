# Gowmika Ganji — Portfolio

A cinematic, interactive personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Design system

- **Colors:** deep emerald (`#062A1E`, `#146B47`), charcoal black (`#0B0C0D`, `#191C1F`), warm white (`#F6F3EC`), gold accent (`#C6A15C`)
- **Type:** Space Grotesk (display / headings), Inter (body)
- **Layout:** asymmetrical 12-column grid, generous white space
- **Signature element:** the parallax hero portrait with a cursor-driven 3D tilt, ambient glow, and a floating "Build with me" cursor companion that appears over interactive elements

## Features

- Cinematic preloader + page-load text reveal (clip-path masks)
- Cursor-reactive 3D parallax hero image, no cropped face
- Animated availability badge
- Command palette — press `Cmd/Ctrl + K` to jump to any section
- Magnetic buttons on primary CTAs
- Scroll-progress animated vertical experience timeline
- Projects open into a full cinematic detail view (shared-layout transition) with problem statement, architecture, tech stack, optimizations, impact, and GitHub link
- Interactive skill capability clusters (Core, Frontend, Backend, AI & Analytics)
- "What I'm Learning Now" with live animated progress bars
- Achievement cards
- Subtle grain texture overlay across the whole page
- Handwritten-style signature draw-on animation in the footer
- Dark mode by default, fully responsive, respects `prefers-reduced-motion`, visible keyboard focus states

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Experience.jsx
    Projects.jsx
    Skills.jsx
    Learning.jsx
    Achievements.jsx
    Footer.jsx
    CommandPalette.jsx
    CursorCompanion.jsx
    MagneticButton.jsx
    TextReveal.jsx
  assets/
    profile.jpeg
  App.jsx
  main.jsx
  index.css
public/
  Gowmika_Ganji_Resume.pdf   # served by the "Download Resume" button
  favicon.svg
```

## Content sources

All copy is derived directly from Gowmika Ganji's resume (education, experience, projects,
skills, achievements). Update `src/components/*.jsx` directly to edit copy — content lives
inline in each component as plain arrays/objects, so there's no CMS or build step required
to make text edits.

## Deploying

This is a static Vite app. After `npm run build`, deploy the `dist/` folder to Vercel,
Netlify, GitHub Pages, or any static host.
