# Mohan Kumar B - AI Engineer Portfolio

A premium, modern, and interactive portfolio website designed for an AI Engineer, Machine Learning Engineer, and Data Scientist.

## Tech Stack
- **Framework:** React 19 (via Vite, structured for easy Next.js App Router migration)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion & GSAP
- **3D Graphics:** Three.js & React Three Fiber (@react-three/drei)
- **Icons:** Lucide React

## Design Highlights
- **Color Palette:**
  - Primary Background: Warm Beige (`#F8F5F0`)
  - Secondary/Cards: Soft White (`#FFFFFF`) / (`#FCFAF7`)
  - Accent: Deep Charcoal (`#1E1E1E`)
  - Highlights: Premium Gold/Beige (`#D9C8A9`)
- **Typography:** Space Grotesk (Headings) & Inter (Body)
- **Effects:** Soft glassmorphism, 3D animated neural network background, custom GSAP magnetic cursor, scroll-reveals.

## Deployment Instructions (Vercel / Next.js Migration)
The codebase currently uses Vite for instantaneous browser-based previews in Google AI Studio. 
To deploy this as a Next.js application:
1. Initialize a Next.js project: `npx create-next-app@latest portfolio`
2. Copy the `src/components` folder into your Next.js project.
3. Move `index.css` global styles and Tailwind theme variables to your `globals.css`.
4. Wrap the components inside your `app/page.tsx`.
5. Ensure `motion/react` and `gsap` components use the `"use client"` directive at the top of their files.
6. Copy the contents of `/public` (like `favicon.svg`, `robots.txt`, `sitemap.xml`) into the Next.js `public` directory.
7. Deploy seamlessly to Vercel via the Vercel CLI or GitHub integration.

## Performance & SEO
- Contains `robots.txt` and `sitemap.xml`.
- Optimized DOM structure with semantic HTML and ARIA labels.
- Uses `useFrame` and `requestAnimationFrame` efficiently for 60FPS animations.
