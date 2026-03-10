

# Scroll-Driven Storytelling Portfolio — Implementation Plan

This is a fresh build from the blank starter. The site has 16 sections with cinematic styling, scroll-triggered Framer Motion animations, responsive layout, and interactive glitch effects.

## Architecture

```text
src/
├── pages/Index.tsx          — Main page, renders all sections in order
├── components/
│   ├── FilmGrainOverlay.tsx  — Fixed CSS noise overlay
│   ├── GlitchImage.tsx       — Reusable image with RGB-split hover effect
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── CleanScreen1.tsx   (Impact)
│   │   ├── AntagonistSection.tsx
│   │   ├── IdentitySection.tsx
│   │   ├── CleanScreen2.tsx   (Texture)
│   │   ├── LaboratorySection.tsx
│   │   ├── CleanScreen3.tsx   (Immersion)
│   │   ├── ManifestoSection.tsx
│   │   ├── CleanScreen4.tsx   (Silence)
│   │   ├── ServicesGrid.tsx
│   │   ├── MethodSection.tsx
│   │   ├── CleanScreen5.tsx   (Authority)
│   │   ├── QuestionsSection.tsx
│   │   ├── FinalFilter.tsx
│   │   ├── CleanScreen6.tsx
│   │   └── FinalManifesto.tsx
```

## Key Technical Decisions

1. **Framer Motion** — Install as dependency. Use `motion.div` with `whileInView`, `viewport={{ once: true, amount }}` for scroll triggers. Stagger via `transition.delay`.

2. **Film grain overlay** — Fixed-position SVG `<filter>` with `feTurbulence` + `feColorMatrix`, applied as a pseudo-element over the body. Pointer-events: none.

3. **Glitch effect** — On hover, duplicate the image with CSS `mix-blend-mode` and offset R/B channels using Framer Motion `animate`. Simple 3-layer approach with color filters.

4. **Responsive** — All sections use `min-h-[100dvh]`. Multi-column layouts use `flex-col md:flex-row` or `grid-cols-1 md:grid-cols-2`. Typography scales: e.g., `text-4xl md:text-7xl lg:text-9xl`.

5. **Overflow** — `overflow-x-hidden` on the root wrapper to prevent horizontal scroll from animations.

6. **Unsplash images** — Direct URLs like `https://images.unsplash.com/photo-{id}?w=1200&q=80` with cinematic selections (dark studios, backstage, architectural, immersive lighting).

7. **CSS variables** — Override the existing design system to a dark theme: near-black background, off-white foreground.

## Files to Create/Modify

- **package.json** — Add `framer-motion`
- **src/index.css** — Dark color scheme, film grain CSS, glitch keyframes
- **tailwind.config.ts** — Add custom animations if needed
- **src/pages/Index.tsx** — Import and render all 16 sections sequentially inside an `overflow-x-hidden` wrapper
- **src/components/FilmGrainOverlay.tsx** — SVG noise overlay component
- **src/components/GlitchImage.tsx** — Reusable glitch-on-hover image
- **16 section components** in `src/components/sections/`

Each section component is self-contained with its own copy, layout, and Framer Motion animations as specified in the brief.

