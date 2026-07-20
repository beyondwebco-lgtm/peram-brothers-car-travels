<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Instructions & Guidelines

## Core Principles
1. **Component Architecture**: Keep UI components modular, clean, and isolated in `src/components/`. Use Client Components (`"use client"`) only when interactive state or hooks (`useState`, `useEffect`, `framer-motion`) are required.
2. **Next.js 16 & React 19 Standards**: Ensure compatibility with React 19 and Next.js 16 App Router conventions.
3. **Styling & Design**: Use Tailwind CSS v4 utility classes. Maintain the dark navy (`#0A1128` / `text-dark`), primary blue (`text-primary` / `bg-primary`), and WhatsApp emerald color palette.
4. **Data Consistency**:
   - Fleet vehicles & starting prices are defined in `src/components/Fleet.tsx`.
   - Primary WhatsApp contact number: `+91 70952 81999` (`917095281999`).
   - Primary Phone number: `+91 70952 81999`.
5. **Code Quality**: Keep code clean, strongly typed with TypeScript, and maintain clean anchor link identifiers (`#fleet`, `#services`, `#why-choose-us`, `#contact`, etc.).
