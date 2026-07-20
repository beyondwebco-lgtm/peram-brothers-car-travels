# Peram Brothers Car Travels - Developer Guide

## Project Overview
**Peram Brothers Car Travels** is a modern, responsive web application for a premier intercity cab rental and taxi service operating between major Andhra Pradesh and Telangana hubs (Vijayawada, Guntur, Hyderabad).

## Tech Stack
- **Framework**: Next.js 16.2.10 (App Router with Turbopack)
- **UI Library**: React 19.2.4 & TypeScript 5
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animations**: Framer Motion 12, GSAP 3, Lenis smooth scroll
- **Icons**: Lucide React

## Development & Build Commands
- `npm run dev`: Start local development server at `http://localhost:3000`
- `npm run build`: Build production application (compiles TypeScript & statically optimizes pages)
- `npm start`: Launch production server after build
- `npm run lint`: Run ESLint checks

## Directory Structure
```
peram-brothers-car-travels/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with Metadata & smooth scrolling wrapper
│   │   ├── page.tsx           # Main homepage component layout
│   │   ├── globals.css        # Tailwind v4 import & custom global CSS styles
│   │   └── sitemap.ts         # Dynamic sitemap generator
│   └── components/
│       ├── Navbar.tsx         # Fixed glassmorphism top navigation bar
│       ├── Hero.tsx           # Main banner with hero booking CTA
│       ├── Services.tsx       # Offered services (One-way, Outstation, Airport transfers)
│       ├── Fleet.tsx          # Vehicle catalog with specs, starting fares, and WhatsApp booking
│       ├── WhyChooseUs.tsx    # Key feature highlights and value props
│       ├── HowItWorks.tsx     # Step-by-step booking process visualizer
│       ├── Testimonials.tsx   # Customer reviews and social proof
│       ├── Contact.tsx        # Contact form, phone buttons, & location details
│       ├── Footer.tsx         # Quick links, copyright, & contact info
│       └── SmoothScroll.tsx   # Lenis smooth scrolling integration wrapper
├── public/                    # Vehicle images & asset files
├── package.json               # Dependencies & scripts
└── tsconfig.json              # TypeScript compiler configuration
```

## Key Guidelines & Conventions
- **WhatsApp Integration**: Phone number is `+91 70952 81999` (`917095281999`). All booking buttons redirect to WhatsApp with pre-filled message text.
- **Pricing & Vehicles**: Vehicle specs, capacity, climate details, and starting fares are maintained centrally in `src/components/Fleet.tsx`.
- **Styling**: Use Tailwind CSS v4 classes. Ensure responsive design across mobile (`sm`), tablet (`md`), and desktop (`lg`/`xl`).
